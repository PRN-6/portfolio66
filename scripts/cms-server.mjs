#!/usr/bin/env node
import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');
const DATA_FILE = path.join(ROOT_DIR, 'src', 'portfolioData.ts');
const UPLOADS_DIR = path.join(ROOT_DIR, 'public', 'uploads');
const BACKUPS_DIR = path.join(ROOT_DIR, '.backups');

const PORT = process.env.PORT || 3333;

// Ensure upload and backup directories exist
if (!fs.existsSync(UPLOADS_DIR)) {
  fs.mkdirSync(UPLOADS_DIR, { recursive: true });
}
if (!fs.existsSync(BACKUPS_DIR)) {
  fs.mkdirSync(BACKUPS_DIR, { recursive: true });
}

function readPortfolioData() {
  if (!fs.existsSync(DATA_FILE)) {
    throw new Error(`Data file not found at ${DATA_FILE}`);
  }
  const content = fs.readFileSync(DATA_FILE, 'utf-8');
  const match = content.match(/export const portfolio66Data:\s*PortfolioConfig\s*=\s*(\{[\s\S]*?\n\};)/);
  if (!match) {
    throw new Error('Could not parse portfolio66Data from src/portfolioData.ts');
  }
  const code = match[1].replace(/;\s*$/, '');
  return new Function('return ' + code)();
}

function generateTypeScriptFile(data) {
  return `export interface PortfolioProject {
  id: string;
  title: string;
  tagline: string;
  category: string;
  status: string;
  badge: string;
  description: string;
  features: string[];
  themeColor: string;
  bgType: 'violet' | 'cream' | 'night';
  githubUrl?: string;
  liveUrl?: string;
  metrics?: string;
  imageUrl?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: 'DEVLOG' | 'UI/UX' | 'TUTORIALS' | 'ESSAYS';
  date: string;
  readTime: string;
  colorScheme: 'violet' | 'night';
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface PortfolioConfig {
  meta: {
    studioName: string;
    brandHandle: string;
    projectTitle: string;
    discipline: string;
    year: string;
    tagline: string;
    subTagline: string;
    liveUrl: string;
    contactEmail: string;
    githubUrl: string;
  };
  overview: {
    tag: string;
    headline: string;
    paragraph1: string;
    paragraph2: string;
    role: string;
    tools: string;
    deliverables: string;
    liveDisplay: string;
  };
  branding: {
    tag: string;
    headline: string;
    description: string;
    badgeName: string;
  };
  designSystem: {
    colors: {
      night: { name: string; hex: string; desc: string };
      cream: { name: string; hex: string; desc: string };
      accent: { name: string; hex: string; desc: string };
      rationale: string;
    };
    typography: {
      headline: { font: string; role: string; desc: string };
      text: { font: string; role: string; desc: string };
      wordmark: { font: string; role: string; desc: string };
    };
  };
  projects: PortfolioProject[];
  blogPosts: BlogPost[];
  faq: FAQItem[];
  socials: {
    platform: string;
    url: string;
  }[];
}

export const portfolio66Data: PortfolioConfig = ${JSON.stringify(data, null, 2)};

export const defaultPortfolioData = portfolio66Data;
`;
}

function savePortfolioData(data) {
  // Backup before writing
  if (fs.existsSync(DATA_FILE)) {
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const backupPath = path.join(BACKUPS_DIR, `portfolioData_${timestamp}.ts`);
    fs.copyFileSync(DATA_FILE, backupPath);
  }

  const tsContent = generateTypeScriptFile(data);
  fs.writeFileSync(DATA_FILE, tsContent, 'utf-8');
}

// Request dispatcher
const server = http.createServer((req, res) => {
  // CORS Headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  const parsedUrl = new URL(req.url, `http://${req.headers.host}`);
  const pathname = parsedUrl.pathname;

  // API: Get current portfolio data
  if (req.method === 'GET' && pathname === '/api/data') {
    try {
      const data = readPortfolioData();
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ success: true, data }));
    } catch (err) {
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ success: false, error: err.message }));
    }
    return;
  }

  // API: Save portfolio data
  if (req.method === 'POST' && pathname === '/api/save') {
    let body = '';
    req.on('data', chunk => { body += chunk; });
    req.on('end', () => {
      try {
        const payload = JSON.parse(body);
        if (!payload || !payload.meta || !payload.overview) {
          throw new Error('Invalid portfolio payload structure');
        }
        savePortfolioData(payload);
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
          success: true,
          message: 'Portfolio data saved to src/portfolioData.ts. Vite has reloaded your live site!'
        }));
      } catch (err) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: false, error: err.message }));
      }
    });
    return;
  }

  // API: Upload image (base64 JSON)
  if (req.method === 'POST' && pathname === '/api/upload') {
    let body = '';
    req.on('data', chunk => { body += chunk; });
    req.on('end', () => {
      try {
        const { filename, dataUrl } = JSON.parse(body);
        if (!dataUrl || !filename) {
          throw new Error('Missing file data or filename');
        }
        const matches = dataUrl.match(/^data:([A-Za-z-+/]+);base64,(.+)$/);
        if (!matches || matches.length !== 3) {
          throw new Error('Invalid base64 data URL format');
        }

        const ext = path.extname(filename).toLowerCase() || '.png';
        const safeBase = path.basename(filename, ext).replace(/[^a-zA-Z0-9_-]/g, '').slice(0, 30) || 'upload';
        const finalName = `${safeBase}_${Date.now()}${ext}`;
        const filePath = path.join(UPLOADS_DIR, finalName);

        const buffer = Buffer.from(matches[2], 'base64');
        fs.writeFileSync(filePath, buffer);

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
          success: true,
          url: `/uploads/${finalName}`,
          filename: finalName
        }));
      } catch (err) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: false, error: err.message }));
      }
    });
    return;
  }

  // HTML Web App (GUI)
  if (req.method === 'GET' && (pathname === '/' || pathname === '/index.html')) {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(getHtmlInterface());
    return;
  }

  res.writeHead(404, { 'Content-Type': 'text/plain' });
  res.end('Not Found');
});

function getHtmlInterface() {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>PORTFOLIO66 Studio CMS — Localhost Visual Editor</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Anton&family=Roboto+Condensed:wght@400;500;600;700&family=JetBrains+Mono:wght@400;600&display=swap" rel="stylesheet">
  <style>
    :root {
      --bg: #111111;
      --card-bg: #181818;
      --card-border: #282828;
      --text: #F8F6EF;
      --text-muted: #888888;
      --accent: #7B5CFF;
      --accent-hover: #6846ed;
      --accent-glow: rgba(123, 92, 255, 0.25);
      --success: #10B981;
      --danger: #EF4444;
    }
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      background: var(--bg);
      color: var(--text);
      font-family: 'Roboto Condensed', -apple-system, BlinkMacSystemFont, sans-serif;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }
    /* Top Bar */
    header {
      background: #141414;
      border-bottom: 1px solid var(--card-border);
      position: sticky;
      top: 0;
      z-index: 100;
      padding: 12px 24px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 16px;
    }
    .brand-title {
      display: flex;
      align-items: center;
      gap: 12px;
    }
    .logo-badge {
      width: 36px;
      height: 36px;
      background: white;
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    h1 {
      font-family: 'Anton', sans-serif;
      font-size: 22px;
      letter-spacing: 1px;
      color: white;
      text-transform: uppercase;
    }
    .badge {
      background: rgba(123, 92, 255, 0.2);
      border: 1px solid rgba(123, 92, 255, 0.4);
      color: var(--accent);
      padding: 3px 8px;
      border-radius: 999px;
      font-size: 10px;
      font-weight: 700;
      letter-spacing: 1px;
      text-transform: uppercase;
    }
    .header-actions {
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .btn {
      font-family: 'Anton', sans-serif;
      letter-spacing: 1px;
      text-transform: uppercase;
      font-size: 13px;
      padding: 9px 18px;
      border-radius: 999px;
      border: none;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      gap: 6px;
      transition: all 0.2s;
      text-decoration: none;
    }
    .btn-primary {
      background: var(--accent);
      color: white;
      box-shadow: 0 4px 14px var(--accent-glow);
    }
    .btn-primary:hover {
      background: var(--accent-hover);
      transform: translateY(-1px);
    }
    .btn-secondary {
      background: rgba(255, 255, 255, 0.08);
      color: white;
      border: 1px solid rgba(255, 255, 255, 0.15);
    }
    .btn-secondary:hover {
      background: rgba(255, 255, 255, 0.15);
    }
    .btn-danger {
      background: rgba(239, 68, 68, 0.15);
      color: var(--danger);
      border: 1px solid rgba(239, 68, 68, 0.3);
      padding: 6px 12px;
      font-size: 11px;
    }
    .btn-danger:hover {
      background: var(--danger);
      color: white;
    }
    /* Layout */
    .container {
      max-width: 1100px;
      width: 100%;
      margin: 0 auto;
      padding: 24px;
      flex: 1;
    }
    /* Tabs */
    .tabs {
      display: flex;
      gap: 6px;
      border-bottom: 1px solid var(--card-border);
      padding-bottom: 12px;
      margin-bottom: 24px;
      overflow-x: auto;
    }
    .tab-btn {
      background: transparent;
      border: 1px solid transparent;
      color: var(--text-muted);
      padding: 8px 16px;
      border-radius: 999px;
      font-family: 'Anton', sans-serif;
      letter-spacing: 1px;
      font-size: 14px;
      text-transform: uppercase;
      cursor: pointer;
      transition: all 0.2s;
      white-space: nowrap;
    }
    .tab-btn:hover {
      color: white;
      background: rgba(255, 255, 255, 0.05);
    }
    .tab-btn.active {
      background: var(--accent);
      color: white;
      box-shadow: 0 2px 8px var(--accent-glow);
    }
    /* Form Sections */
    .tab-pane {
      display: none;
    }
    .tab-pane.active {
      display: block;
      animation: fadeIn 0.2s ease-in;
    }
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(4px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .card {
      background: var(--card-bg);
      border: 1px solid var(--card-border);
      border-radius: 16px;
      padding: 20px;
      margin-bottom: 20px;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
    }
    .card-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 16px;
      padding-bottom: 12px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    }
    .card-title {
      font-family: 'Anton', sans-serif;
      font-size: 18px;
      letter-spacing: 0.5px;
      color: white;
      text-transform: uppercase;
    }
    .grid-2 {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 16px;
    }
    .grid-3 {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 16px;
    }
    @media (max-width: 768px) {
      .grid-2, .grid-3 { grid-template-columns: 1fr; }
    }
    .form-group {
      margin-bottom: 16px;
    }
    label {
      display: block;
      font-size: 12px;
      font-weight: 700;
      letter-spacing: 1px;
      text-transform: uppercase;
      color: var(--text-muted);
      margin-bottom: 6px;
    }
    input[type="text"], input[type="email"], textarea, select {
      width: 100%;
      background: #111111;
      border: 1px solid #333333;
      border-radius: 10px;
      padding: 10px 14px;
      color: white;
      font-family: inherit;
      font-size: 14px;
      outline: none;
      transition: border-color 0.2s;
    }
    input[type="text"]:focus, input[type="email"]:focus, textarea:focus, select:focus {
      border-color: var(--accent);
      box-shadow: 0 0 0 2px var(--accent-glow);
    }
    textarea {
      resize: vertical;
      min-height: 80px;
    }
    /* Image Upload Box */
    .upload-box {
      border: 2px dashed rgba(255, 255, 255, 0.15);
      border-radius: 12px;
      padding: 16px;
      text-align: center;
      background: #131313;
      cursor: pointer;
      transition: all 0.2s;
      position: relative;
    }
    .upload-box:hover {
      border-color: var(--accent);
      background: rgba(123, 92, 255, 0.05);
    }
    .image-preview {
      width: 100%;
      max-height: 180px;
      object-fit: cover;
      border-radius: 8px;
      margin-top: 8px;
    }
    /* Toast Notification */
    #toast {
      position: fixed;
      bottom: 24px;
      right: 24px;
      background: #1E1E1E;
      border: 1px solid var(--accent);
      color: white;
      padding: 14px 22px;
      border-radius: 999px;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.8);
      font-weight: 600;
      font-size: 14px;
      display: none;
      align-items: center;
      gap: 10px;
      z-index: 1000;
    }
    #toast.show {
      display: flex;
      animation: popUp 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }
    @keyframes popUp {
      from { transform: translateY(20px); opacity: 0; }
      to { transform: translateY(0); opacity: 1; }
    }
  </style>
</head>
<body>
  <header>
    <div class="brand-title">
      <div class="logo-badge">
        <svg viewBox="0 0 120 100" width="24" height="24" fill="none">
          <path d="M25 65 C25 45 42 35 48 48 C52 38 68 40 70 65 Z" fill="#7B5CFF"/>
          <circle cx="38" cy="52" r="3.5" fill="#151515"/>
          <circle cx="58" cy="52" r="3.5" fill="#ffffff"/>
        </svg>
      </div>
      <div>
        <h1>Portfolio66 CMS Studio</h1>
      </div>
      <span class="badge">Local Dev Editor</span>
    </div>

    <div class="header-actions">
      <a href="http://localhost:5173" target="_blank" class="btn btn-secondary" title="View live changes on Vite dev server">
        🔗 View Live Site
      </a>
      <button onclick="saveAllData()" class="btn btn-primary" id="saveBtn">
        💾 Save Changes
      </button>
    </div>
  </header>

  <div class="container">
    <div class="tabs">
      <button class="tab-btn active" onclick="switchTab('tab-meta')">👤 Identity & Meta</button>
      <button class="tab-btn" onclick="switchTab('tab-about')">📖 About & Ethos</button>
      <button class="tab-btn" onclick="switchTab('tab-projects')">🚀 Projects & Photos</button>
      <button class="tab-btn" onclick="switchTab('tab-articles')">✍️ Articles</button>
      <button class="tab-btn" onclick="switchTab('tab-faq')">❓ FAQ</button>
      <button class="tab-btn" onclick="switchTab('tab-socials')">🌐 Social Links</button>
    </div>

    <!-- TAB 1: Identity & Meta -->
    <div id="tab-meta" class="tab-pane active">
      <div class="card">
        <div class="card-header">
          <span class="card-title">Identity & Hero Header</span>
        </div>
        <div class="grid-2">
          <div class="form-group">
            <label>Your Name (Large Headline)</label>
            <input type="text" id="meta-studioName" placeholder="e.g. YOUR NAME or Jane Doe">
          </div>
          <div class="form-group">
            <label>Brand Handle</label>
            <input type="text" id="meta-brandHandle" placeholder="e.g. PORTFOLIO66">
          </div>
        </div>
        <div class="grid-2">
          <div class="form-group">
            <label>Discipline / Role Subtitle</label>
            <input type="text" id="meta-discipline" placeholder="e.g. FULL-STACK DEVELOPER · 2026">
          </div>
          <div class="form-group">
            <label>Year</label>
            <input type="text" id="meta-year" placeholder="2026">
          </div>
        </div>
        <div class="form-group">
          <label>Hero Headline Tagline</label>
          <input type="text" id="meta-tagline" placeholder="Crafting clean code, calm software...">
        </div>
        <div class="form-group">
          <label>Hero Sub-Tagline Description</label>
          <textarea id="meta-subTagline" placeholder="Modern full-stack web applications..."></textarea>
        </div>
        <div class="grid-2">
          <div class="form-group">
            <label>Contact Email</label>
            <input type="email" id="meta-contactEmail" placeholder="yourname@example.com">
          </div>
          <div class="form-group">
            <label>GitHub Profile URL</label>
            <input type="text" id="meta-githubUrl" placeholder="https://github.com/yourusername">
          </div>
        </div>
      </div>
    </div>

    <!-- TAB 2: About & Ethos -->
    <div id="tab-about" class="tab-pane">
      <div class="card">
        <div class="card-header">
          <span class="card-title">About Section Copy</span>
        </div>
        <div class="grid-2">
          <div class="form-group">
            <label>Tag Badge (Violet)</label>
            <input type="text" id="overview-tag" placeholder="THE CREATOR">
          </div>
          <div class="form-group">
            <label>Main Headline</label>
            <input type="text" id="overview-headline" placeholder="CLEAN CODE, NO STRESS.">
          </div>
        </div>
        <div class="form-group">
          <label>Bio Paragraph 1</label>
          <textarea id="overview-paragraph1" rows="3"></textarea>
        </div>
        <div class="form-group">
          <label>Bio Paragraph 2 (Philosophy / Ethos)</label>
          <textarea id="overview-paragraph2" rows="3"></textarea>
        </div>
        <div class="grid-2">
          <div class="form-group">
            <label>Role</label>
            <input type="text" id="overview-role" placeholder="Full-Stack Developer, UI/UX Architect">
          </div>
          <div class="form-group">
            <label>Tools & Stack</label>
            <input type="text" id="overview-tools" placeholder="React 19, TypeScript, Tailwind...">
          </div>
        </div>
        <div class="grid-2">
          <div class="form-group">
            <label>Deliverables</label>
            <input type="text" id="overview-deliverables" placeholder="Web Applications, REST APIs...">
          </div>
          <div class="form-group">
            <label>Live GitHub Handle Display</label>
            <input type="text" id="overview-liveDisplay" placeholder="github.com/yourusername">
          </div>
        </div>
      </div>
    </div>

    <!-- TAB 3: Projects & Photo Upload -->
    <div id="tab-projects" class="tab-pane">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
        <span style="font-family: 'Anton', sans-serif; font-size: 20px; text-transform: uppercase;">Projects Portfolio</span>
        <button class="btn btn-primary" onclick="addNewProject()">➕ Add New Project</button>
      </div>
      <div id="projects-container"></div>
    </div>

    <!-- TAB 4: Articles -->
    <div id="tab-articles" class="tab-pane">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
        <span style="font-family: 'Anton', sans-serif; font-size: 20px; text-transform: uppercase;">Devlog & Articles</span>
        <button class="btn btn-primary" onclick="addNewArticle()">➕ Add Article</button>
      </div>
      <div id="articles-container"></div>
    </div>

    <!-- TAB 5: FAQ -->
    <div id="tab-faq" class="tab-pane">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
        <span style="font-family: 'Anton', sans-serif; font-size: 20px; text-transform: uppercase;">Frequently Asked Questions</span>
        <button class="btn btn-primary" onclick="addNewFaq()">➕ Add FAQ Item</button>
      </div>
      <div id="faq-container"></div>
    </div>

    <!-- TAB 6: Social Links -->
    <div id="tab-socials" class="tab-pane">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
        <span style="font-family: 'Anton', sans-serif; font-size: 20px; text-transform: uppercase;">Social Networks & Channels</span>
        <button class="btn btn-primary" onclick="addNewSocial()">➕ Add Social Link</button>
      </div>
      <div id="socials-container"></div>
    </div>
  </div>

  <div id="toast">
    <span>✅</span>
    <span id="toast-msg">Saved successfully!</span>
  </div>

  <script>
    let portfolioData = null;

    async function loadData() {
      try {
        const res = await fetch('/api/data');
        const json = await res.json();
        if (json.success) {
          portfolioData = json.data;
          renderAll();
        } else {
          showToast('Failed to load data: ' + json.error, true);
        }
      } catch (err) {
        showToast('Error connecting to CMS server', true);
      }
    }

    function renderAll() {
      if (!portfolioData) return;

      // Meta
      document.getElementById('meta-studioName').value = portfolioData.meta.studioName || '';
      document.getElementById('meta-brandHandle').value = portfolioData.meta.brandHandle || '';
      document.getElementById('meta-discipline').value = portfolioData.meta.discipline || '';
      document.getElementById('meta-year').value = portfolioData.meta.year || '2026';
      document.getElementById('meta-tagline').value = portfolioData.meta.tagline || '';
      document.getElementById('meta-subTagline').value = portfolioData.meta.subTagline || '';
      document.getElementById('meta-contactEmail').value = portfolioData.meta.contactEmail || '';
      document.getElementById('meta-githubUrl').value = portfolioData.meta.githubUrl || '';

      // About
      document.getElementById('overview-tag').value = portfolioData.overview.tag || '';
      document.getElementById('overview-headline').value = portfolioData.overview.headline || '';
      document.getElementById('overview-paragraph1').value = portfolioData.overview.paragraph1 || '';
      document.getElementById('overview-paragraph2').value = portfolioData.overview.paragraph2 || '';
      document.getElementById('overview-role').value = portfolioData.overview.role || '';
      document.getElementById('overview-tools').value = portfolioData.overview.tools || '';
      document.getElementById('overview-deliverables').value = portfolioData.overview.deliverables || '';
      document.getElementById('overview-liveDisplay').value = portfolioData.overview.liveDisplay || '';

      // Projects
      renderProjects();
      renderArticles();
      renderFaqs();
      renderSocials();
    }

    function renderProjects() {
      const container = document.getElementById('projects-container');
      container.innerHTML = '';

      portfolioData.projects.forEach((proj, idx) => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = \`
          <div class="card-header">
            <span class="card-title">Project #\${idx + 1}: \${proj.title || 'Untitled'}</span>
            <button class="btn btn-danger" onclick="deleteProject(\${idx})">🗑️ Delete</button>
          </div>
          <div class="grid-2">
            <div class="form-group">
              <label>Project Title</label>
              <input type="text" value="\${escapeHtml(proj.title || '')}" oninput="portfolioData.projects[\${idx}].title = this.value">
            </div>
            <div class="form-group">
              <label>Category / Domain</label>
              <input type="text" value="\${escapeHtml(proj.category || '')}" oninput="portfolioData.projects[\${idx}].category = this.value">
            </div>
          </div>
          <div class="form-group">
            <label>Short Description</label>
            <textarea rows="2" oninput="portfolioData.projects[\${idx}].description = this.value">\${escapeHtml(proj.description || '')}</textarea>
          </div>
          <div class="grid-3">
            <div class="form-group">
              <label>Metrics (e.g. 50K+ ops or 40+ tokens)</label>
              <input type="text" value="\${escapeHtml(proj.metrics || '')}" oninput="portfolioData.projects[\${idx}].metrics = this.value">
            </div>
            <div class="form-group">
              <label>Status</label>
              <input type="text" value="\${escapeHtml(proj.status || 'Active')}" oninput="portfolioData.projects[\${idx}].status = this.value">
            </div>
            <div class="form-group">
              <label>Card Colorway</label>
              <select onchange="portfolioData.projects[\${idx}].bgType = this.value">
                <option value="night" \${proj.bgType === 'night' ? 'selected' : ''}>Dark Night (#151515)</option>
                <option value="cream" \${proj.bgType === 'cream' ? 'selected' : ''}>Warm Cream (#F8F6EF)</option>
                <option value="violet" \${proj.bgType === 'violet' ? 'selected' : ''}>Moon Violet (#7B5CFF)</option>
              </select>
            </div>
          </div>
          <div class="grid-2">
            <div class="form-group">
              <label>GitHub Repository URL</label>
              <input type="text" value="\${escapeHtml(proj.githubUrl || '')}" oninput="portfolioData.projects[\${idx}].githubUrl = this.value">
            </div>
            <div class="form-group">
              <label>Live Demo URL (Optional)</label>
              <input type="text" value="\${escapeHtml(proj.liveUrl || '')}" oninput="portfolioData.projects[\${idx}].liveUrl = this.value">
            </div>
          </div>

          <!-- Project Photo Upload -->
          <div class="form-group">
            <label>Project Photo / Screenshot</label>
            <div class="upload-box" onclick="document.getElementById('file-upload-\${idx}').click()">
              <input type="file" id="file-upload-\${idx}" accept="image/*" style="display:none;" onchange="handleImageUpload(\${idx}, this.files[0])">
              <span style="font-size: 13px; color: var(--accent); font-weight: 700;">📁 Click to Upload / Change Image</span>
              <p style="font-size: 11px; color: var(--text-muted); margin-top: 4px;">Supports PNG, JPG, WebP, SVG</p>
              \${proj.imageUrl ? \`
                <div style="margin-top: 10px; position: relative;">
                  <img src="\${proj.imageUrl}" class="image-preview" alt="Preview">
                  <button type="button" class="btn btn-danger" style="margin-top: 8px;" onclick="event.stopPropagation(); removeProjectImage(\${idx})">Remove Image</button>
                </div>
              \` : '<p style="font-size: 11px; color: #666; margin-top: 6px;">(No photo uploaded yet — currently using vector graphic mockup)</p>'}
            </div>
          </div>
        \`;
        container.appendChild(card);
      });
    }

    function renderArticles() {
      const container = document.getElementById('articles-container');
      container.innerHTML = '';

      portfolioData.blogPosts.forEach((post, idx) => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = \`
          <div class="card-header">
            <span class="card-title">Article #\${idx + 1}</span>
            <button class="btn btn-danger" onclick="deleteArticle(\${idx})">🗑️ Delete</button>
          </div>
          <div class="grid-2">
            <div class="form-group">
              <label>Title</label>
              <input type="text" value="\${escapeHtml(post.title || '')}" oninput="portfolioData.blogPosts[\${idx}].title = this.value">
            </div>
            <div class="form-group">
              <label>Category</label>
              <select onchange="portfolioData.blogPosts[\${idx}].category = this.value">
                <option value="DEVLOG" \${post.category === 'DEVLOG' ? 'selected' : ''}>DEVLOG</option>
                <option value="UI/UX" \${post.category === 'UI/UX' ? 'selected' : ''}>UI/UX</option>
                <option value="ESSAYS" \${post.category === 'ESSAYS' ? 'selected' : ''}>ESSAYS</option>
                <option value="TUTORIALS" \${post.category === 'TUTORIALS' ? 'selected' : ''}>TUTORIALS</option>
              </select>
            </div>
          </div>
          <div class="grid-2">
            <div class="form-group">
              <label>Publish Date</label>
              <input type="text" value="\${escapeHtml(post.date || '')}" oninput="portfolioData.blogPosts[\${idx}].date = this.value">
            </div>
            <div class="form-group">
              <label>Read Time</label>
              <input type="text" value="\${escapeHtml(post.readTime || '')}" oninput="portfolioData.blogPosts[\${idx}].readTime = this.value">
            </div>
          </div>
          <div class="form-group">
            <label>Excerpt / Summary</label>
            <textarea rows="2" oninput="portfolioData.blogPosts[\${idx}].excerpt = this.value">\${escapeHtml(post.excerpt || '')}</textarea>
          </div>
        \`;
        container.appendChild(card);
      });
    }

    function renderFaqs() {
      const container = document.getElementById('faq-container');
      container.innerHTML = '';

      portfolioData.faq.forEach((f, idx) => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = \`
          <div class="card-header">
            <span class="card-title">Question #\${idx + 1}</span>
            <button class="btn btn-danger" onclick="deleteFaq(\${idx})">🗑️ Delete</button>
          </div>
          <div class="form-group">
            <label>Question</label>
            <input type="text" value="\${escapeHtml(f.question || '')}" oninput="portfolioData.faq[\${idx}].question = this.value">
          </div>
          <div class="form-group">
            <label>Answer</label>
            <textarea rows="3" oninput="portfolioData.faq[\${idx}].answer = this.value">\${escapeHtml(f.answer || '')}</textarea>
          </div>
        \`;
        container.appendChild(card);
      });
    }

    function renderSocials() {
      const container = document.getElementById('socials-container');
      container.innerHTML = '';

      portfolioData.socials.forEach((s, idx) => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = \`
          <div class="card-header">
            <span class="card-title">Channel #\${idx + 1}</span>
            <button class="btn btn-danger" onclick="deleteSocial(\${idx})">🗑️ Delete</button>
          </div>
          <div class="grid-2">
            <div class="form-group">
              <label>Platform Name</label>
              <input type="text" value="\${escapeHtml(s.platform || '')}" oninput="portfolioData.socials[\${idx}].platform = this.value">
            </div>
            <div class="form-group">
              <label>Link / URL</label>
              <input type="text" value="\${escapeHtml(s.url || '')}" oninput="portfolioData.socials[\${idx}].url = this.value">
            </div>
          </div>
        \`;
        container.appendChild(card);
      });
    }

    // Mutators
    function addNewProject() {
      portfolioData.projects.push({
        id: 'project-' + Date.now(),
        title: 'NEW PROJECT',
        tagline: 'Modern project description.',
        category: 'WEB APPLICATION',
        status: 'ACTIVE',
        badge: 'PROJECT · 2026',
        description: 'Describe what you built, technologies used, and real-world impact.',
        features: ['Key Feature 1', 'Key Feature 2'],
        themeColor: '#7B5CFF',
        bgType: 'night',
        githubUrl: portfolioData.meta.githubUrl,
        liveUrl: '',
        metrics: '100% Responsive',
        imageUrl: '',
      });
      renderProjects();
    }

    function deleteProject(index) {
      if (confirm('Delete this project?')) {
        portfolioData.projects.splice(index, 1);
        renderProjects();
      }
    }

    function addNewArticle() {
      portfolioData.blogPosts.push({
        id: 'article-' + Date.now(),
        title: 'NEW ARTICLE TITLE',
        excerpt: 'Short summary of key takeaways and topics discussed.',
        category: 'DEVLOG',
        date: 'Today',
        readTime: '4 min read',
        colorScheme: 'violet',
      });
      renderArticles();
    }

    function deleteArticle(index) {
      if (confirm('Delete this article?')) {
        portfolioData.blogPosts.splice(index, 1);
        renderArticles();
      }
    }

    function addNewFaq() {
      portfolioData.faq.push({
        id: 'faq-' + Date.now(),
        question: 'NEW QUESTION HERE',
        answer: 'Provide a clear, direct, transparent answer.',
      });
      renderFaqs();
    }

    function deleteFaq(index) {
      if (confirm('Delete this FAQ item?')) {
        portfolioData.faq.splice(index, 1);
        renderFaqs();
      }
    }

    function addNewSocial() {
      portfolioData.socials.push({
        platform: 'Platform Name',
        url: 'https://',
      });
      renderSocials();
    }

    function deleteSocial(index) {
      if (confirm('Delete this social channel?')) {
        portfolioData.socials.splice(index, 1);
        renderSocials();
      }
    }

    // Image Upload handler
    function handleImageUpload(projectIndex, file) {
      if (!file) return;

      const reader = new FileReader();
      reader.onload = async (e) => {
        const dataUrl = e.target.result;
        try {
          showToast('Uploading image...');
          const res = await fetch('/api/upload', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ filename: file.name, dataUrl }),
          });
          const json = await res.json();
          if (json.success) {
            portfolioData.projects[projectIndex].imageUrl = json.url;
            renderProjects();
            showToast('✅ Image uploaded successfully! Click Save to apply.');
          } else {
            showToast('Upload error: ' + json.error, true);
          }
        } catch (err) {
          showToast('Failed to upload image', true);
        }
      };
      reader.readAsDataURL(file);
    }

    function removeProjectImage(projectIndex) {
      portfolioData.projects[projectIndex].imageUrl = '';
      renderProjects();
    }

    // Save
    async function saveAllData() {
      // Collect meta values
      portfolioData.meta.studioName = document.getElementById('meta-studioName').value;
      portfolioData.meta.brandHandle = document.getElementById('meta-brandHandle').value;
      portfolioData.meta.discipline = document.getElementById('meta-discipline').value;
      portfolioData.meta.year = document.getElementById('meta-year').value;
      portfolioData.meta.tagline = document.getElementById('meta-tagline').value;
      portfolioData.meta.subTagline = document.getElementById('meta-subTagline').value;
      portfolioData.meta.contactEmail = document.getElementById('meta-contactEmail').value;
      portfolioData.meta.githubUrl = document.getElementById('meta-githubUrl').value;
      portfolioData.meta.projectTitle = portfolioData.meta.studioName + ' | Portfolio66 — Full-Stack Developer & UI/UX Designer';

      // Collect about values
      portfolioData.overview.tag = document.getElementById('overview-tag').value;
      portfolioData.overview.headline = document.getElementById('overview-headline').value;
      portfolioData.overview.paragraph1 = document.getElementById('overview-paragraph1').value;
      portfolioData.overview.paragraph2 = document.getElementById('overview-paragraph2').value;
      portfolioData.overview.role = document.getElementById('overview-role').value;
      portfolioData.overview.tools = document.getElementById('overview-tools').value;
      portfolioData.overview.deliverables = document.getElementById('overview-deliverables').value;
      portfolioData.overview.liveDisplay = document.getElementById('overview-liveDisplay').value;

      portfolioData.branding.badgeName = portfolioData.meta.studioName;

      const saveBtn = document.getElementById('saveBtn');
      saveBtn.innerText = '⏳ Saving...';
      saveBtn.disabled = true;

      try {
        const res = await fetch('/api/save', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(portfolioData),
        });
        const json = await res.json();
        if (json.success) {
          showToast('✅ Saved! Vite hot-reloaded your website.');
        } else {
          showToast('Save failed: ' + json.error, true);
        }
      } catch (err) {
        showToast('Error saving data to code', true);
      } finally {
        saveBtn.innerText = '💾 Save Changes';
        saveBtn.disabled = false;
      }
    }

    function switchTab(tabId) {
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.tab-pane').forEach(p => p.classList.remove('active'));

      event.target.classList.add('active');
      document.getElementById(tabId).classList.add('active');
    }

    function escapeHtml(str) {
      if (!str) return '';
      return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
    }

    function showToast(msg, isError = false) {
      const toast = document.getElementById('toast');
      const toastMsg = document.getElementById('toast-msg');
      toastMsg.innerText = msg;
      toast.style.borderColor = isError ? 'var(--danger)' : 'var(--accent)';
      toast.classList.add('show');
      setTimeout(() => {
        toast.classList.remove('show');
      }, 3500);
    }

    // Initialize
    loadData();
  </script>
</body>
</html>`;
}

server.listen(PORT, () => {
  console.log(`\n======================================================`);
  console.log(`🚀 PORTFOLIO66 CMS STUDIO RUNNING AT:`);
  console.log(`👉 http://localhost:${PORT}`);
  console.log(`------------------------------------------------------`);
  console.log(`• Open http://localhost:${PORT} in your browser to customize your portfolio.`);
  console.log(`• Edits update src/portfolioData.ts and public/uploads.`);
  console.log(`• Press Ctrl+C to stop.`);
  console.log(`======================================================\n`);
});
