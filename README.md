# PORTFOLIO66 — Prinson Nazareth Creative Portfolio

A sleek, modern portfolio website for **Prinson Nazareth (PRN-6 / Portfolio66)**, designed with **zero infinite vertical scroll** — each section is a self-contained, screen-fitting view accessible directly from the navigation bar, slide controls, or keyboard arrows.

---

## 🌟 Architecture & Pages

No endless scrolling: clicking any link in the navigation bar smoothly swaps to that dedicated view:

| Page Tab | Component | Description |
|---|---|---|
| **01 HOME** | `HeroSection.tsx` | Bold Anton headline `PRINSON NAZARETH`, `FULL-STACK DEVELOPER · 2026`, sleek stretched cat mascot illustration, and tagline. |
| **02 ABOUT** | `StudioOverviewSection.tsx` | Warm cream background (`#F8F6EF`), `THE CREATOR`, `CLEAN CODE, NO STRESS.`, sitting cats ink illustration, role, tech stack, and GitHub profile. |
| **03 IDENTITY** | `LogoSystemSection.tsx` | Night background (`#151515`), `PHILOSOPHY`, `TWO CATS, ONE STUDIO.`, rounded squircle badge, and 3 colorway cards (`Cream`, `Violet`, `Dark`). |
| **04 SYSTEM** | `ColorTypeSystemSection.tsx` | Color swatches (`Night #151515`, `Cream #F8F6EF`, `Moon Violet #7B5CFF`) with 1-click HEX copy + typography specimen (`Anton`, `Roboto Condensed`, `Baloo 2`) with live typing tester. |
| **05 PROJECTS** | `ProjectsPage.tsx` | Featured full-stack engineering works: **NexaFlow Cloud** (real-time telemetry dashboard) and **Aura Design Tokens** (accessible component library). |
| **06 ARTICLES** | `ArticlesPage.tsx` | Technical engineering logs and essays with real-time category filter pills (`DEVLOG`, `UI/UX`, `ESSAYS`, `TUTORIALS`). |
| **07 FAQ** | `FaqPage.tsx` | Interactive accordions answering common questions on tech stack, roles, timezones, and code quality. |
| **08 CONTACT** | `ContactPage.tsx` | Dedicated `SAY HELLO` view with interactive form (celebratory confetti on send), direct email `prinsonnazareth2@gmail.com`, and GitHub links. |

---

## 🎮 Navigation Controls

- **Top Navbar**: Jump directly to any of the 8 pages in one click.
- **Bottom Slide Controls**: Flip between pages using `← PREV` / `NEXT →` or click any pagination indicator dot.
- **Keyboard Navigation**: Press **Left Arrow (`←`)** and **Right Arrow (`→`)** to flip pages like an interactive slide deck.
- **URL Hash Synchronization**: Direct linking to any page via hash (e.g. `/#projects`, `/#contact`, `/#about`).

---

## 🛠️ Tech Stack

- **Framework**: React 19 + TypeScript
- **Bundler**: Vite
- **Styling**: Tailwind CSS v3
- **Icons**: Lucide React
- **Typography**: Anton (Headlines), Roboto Condensed (Body & Text), Baloo 2 (Wordmark)
- **Effects**: Canvas Confetti for form submissions
- **Vector Artwork**: 100% scalable custom SVG components for crisp display on 4K, Retina, and mobile screens

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+ or later)
- npm

### Installation & Development
```bash
# Navigate to project directory
cd protfolio66

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:5173` in your browser.

### Building for Production
```bash
# Typecheck and build optimized production bundle
npm run build

# Preview production build locally
npm run preview
```

---

## 📄 License
MIT — Free to use, adapt, and deploy.
