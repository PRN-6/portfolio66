# PORTFOLIO66 - Universal Creative Portfolio Template

A sleek, modern portfolio website template designed with **zero infinite vertical scroll** — each section is a self-contained, screen-fitting view accessible directly from the top navigation bar or keyboard arrows.

Built with **React 19**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**, matching the visual design language from the reference:
- **Night (`#151515`)**: Deep, restful dark background.
- **Cream (`#F8F6EF`)**: Soft warm tint for comfortable reading.
- **Moon Violet (`#7B5CFF`)**: Bold energetic accent for headlines, primary buttons, and focus points.
- **Distinctive Typography**: **Anton** for headlines, **Roboto Condensed** for clean body text, and **Baloo 2** for organic wordmarks.
- **Studio Ethos Illustration**: Two cats (one curious in violet outline, one calm in solid black under a sparkle star).

---

## 🧭 Pages & Single-Screen Architecture

| Page ID | Component | Description |
| :--- | :--- | :--- |
| **01 HOME** | `HeroSection.tsx` | Bold Anton headline `YOUR NAME`, `FULL-STACK DEVELOPER · 2026`, sleek stretched cat mascot with idle float animation, and tagline. |
| **02 ABOUT** | `StudioOverviewSection.tsx` | Two-column layout: studio ethos copy & deliverables grid alongside the sitting cats illustration. |
| **03 IDENTITY** | `LogoSystemSection.tsx` | Star & cat logo philosophy showcase + 3 colorway cards (`Cream`, `Violet`, `Dark`). |
| **04 SYSTEM** | `ColorTypeSystemSection.tsx` | Color token swatch cards with click-to-copy HEX codes and live editable typographic specimen tester. |
| **05 PROJECTS** | `ProjectsPage.tsx` | Cloud engineering & design systems showcase featuring interactive NexaFlow and Aura UI component mockups. |
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
npm run dev
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

## 🎨 Customizing for Yourself

All content and branding can be edited in a single file:
[`src/portfolioData.ts`](src/portfolioData.ts):
- Update `studioName`: Change `'YOUR NAME'` to your actual name.
- Update `contactEmail`: Change `'yourname@example.com'` to your personal email.
- Update `githubUrl`: Change `'https://github.com/yourusername'` to your GitHub profile.
- Update projects and articles in `portfolio66Data`.
