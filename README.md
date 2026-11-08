# PORTFOLIO66 - Universal Creative Portfolio Template

A sleek, modern portfolio website template designed with **zero infinite vertical scroll** — each section is a self-contained, screen-fitting view accessible directly from the top navigation bar or keyboard arrows.

Built with **React 19**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, and **[@leozodiac/swarm66](https://www.npmjs.com/package/@leozodiac/swarm66)**:
- **Autonomous AI Swarm Construction**: Powered by `@leozodiac/swarm66`, the website starts blank while autonomous Figma-style AI cursors construct the page live before your eyes, then swirl and converge into your mouse cursor to vanish into thin air. Includes a **"REPLAY SWARM"** button in the navbar to re-trigger the animation anytime.
- **Night (`#151515`)**: Deep, restful dark background.
- **Cream (`#F8F6EF`)**: Soft warm tint for comfortable reading.
- **Moon Violet (`#7B5CFF`)**: Bold energetic accent for headlines, primary buttons, and focus points.
- **Distinctive Typography**: **Anton** for headlines, **Roboto Condensed** for clean body text, and **Baloo 2** for organic wordmarks.
- **Studio Ethos Illustration**: Two cats (one curious in violet outline, one calm in solid black under a sparkle star).

---

## ⚡ Visual Studio CMS (For Non-Coders & Easy Editing)

You don't need to touch or understand code to customize this portfolio. The project includes a dedicated **Local CMS Studio** with a visual form editor and drag-and-drop photo uploader.

### How to Use the Visual Editor in 2 Steps:

1. **Terminal 1** — Start the live website:
   ```bash
   npm run dev
   ```
   *(Opens the portfolio at `http://localhost:5173`)*

2. **Terminal 2** — Start the Visual CMS Studio:
   ```bash
   npm run cms
   ```
   *(Opens the CMS editor at `http://localhost:3333`)*

### What You Can Do in the Visual CMS:
- 👤 **Identity & Hero**: Change `YOUR NAME`, brand handle, subtitle, hero tagline, contact email, and GitHub profile.
- 📖 **About & Bio**: Customize your bio paragraphs, role title, skills & tools stack, deliverables, and GitHub display tag.
- 🚀 **Projects & Photo Upload**:
  - Add, edit, or delete projects.
  - **Upload project pictures and screenshots**: Drag and drop your project photos directly into the editor — they are automatically saved to `public/uploads/` and rendered on your site!
  - Add GitHub repository URLs and live deployment links.
- ✍️ **Articles & Devlog**: Add, edit, or delete blog articles with categories (`DEVLOG`, `UI/UX`, `ESSAYS`, `TUTORIALS`), read times, and summaries.
- ❓ **FAQ**: Add or edit custom questions and answers for hiring managers and founders.
- 🌐 **Social Links**: Update your GitHub, LinkedIn, Twitter/X, and Email addresses.

> [!TIP]
> When you click **"💾 Save Changes"** in the CMS, it immediately updates `src/portfolioData.ts` and creates an automatic timestamped backup in `.backups/`. Vite automatically hot-reloads the website in real-time!

---

## 🧭 Pages & Single-Screen Architecture

| Page ID | Component | Description |
| :--- | :--- | :--- |
| **01 HOME** | `HeroSection.tsx` | Bold Anton headline `YOUR NAME`, `FULL-STACK DEVELOPER · 2026`, sleek stretched cat mascot with idle float animation, and tagline. |
| **02 ABOUT** | `StudioOverviewSection.tsx` | Two-column layout: studio ethos copy & deliverables grid alongside the sitting cats illustration. |
| **03 IDENTITY** | `LogoSystemSection.tsx` | Star & cat logo philosophy showcase + 3 colorway cards (`Cream`, `Violet`, `Dark`). |
| **04 SYSTEM** | `ColorTypeSystemSection.tsx` | Color token swatch cards with click-to-copy HEX codes and live editable typographic specimen tester. |
| **05 PROJECTS** | `ProjectsPage.tsx` | Dynamic engineering portfolio displaying your projects, live links, and uploaded project screenshots. |
| **06 ARTICLES** | `ArticlesPage.tsx` | Technical articles and essays with interactive category filter pills (`DEVLOG`, `UI/UX`, `ESSAYS`, `TUTORIALS`). |
| **07 FAQ** | `FaqPage.tsx` | Interactive smooth accordion FAQ addressing common inquiries from founders and hiring teams. |
| **08 CONTACT** | `ContactPage.tsx` | Dedicated `SAY HELLO` view with interactive form (celebratory confetti on send), direct email, and social links. |

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or pnpm

### Installation
```bash
git clone https://github.com/PRN-6/portfolio66.git
cd portfolio66
npm install
```

### Development
```bash
# Terminal 1: Run Portfolio Site
npm run dev

# Terminal 2: Run Visual CMS Editor
npm run cms
```

### Production Build
```bash
npm run build
```

---

## ☁️ Deploy to Vercel

This repository is pre-configured with [`vercel.json`](vercel.json) for 1-click deployment on Vercel:

### Option A: From Vercel Dashboard (Recommended)
1. Go to [vercel.com](https://vercel.com) and log in.
2. Click **"Add New Project"** → **"Import Git Repository"**.
3. Select `portfolio66`.
4. Vercel automatically detects **Vite** framework settings:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Click **"Deploy"**. Your site will be live on a global CDN in under 30 seconds!

### Option B: Deploy via Vercel CLI
```bash
npx vercel
```

---

## 🎨 Manual Customization (Alternative to CMS)

If you prefer editing code directly instead of using the Visual CMS, all content and branding is located in:
[`src/portfolioData.ts`](src/portfolioData.ts):
- Update `studioName`: Change `'YOUR NAME'` to your actual name.
- Update `contactEmail`: Change `'yourname@example.com'` to your personal email.
- Update `githubUrl`: Change `'https://github.com/yourusername'` to your GitHub profile.
- Update projects, articles, FAQs, and socials in `portfolio66Data`.
