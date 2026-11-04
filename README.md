# PORTFOLIO66 — Creative Studio & Digital Portfolio

An exact 1:1 recreation of the portfolio reference design, built as a modern, high-performance, and cohesive **Portfolio66 website**.

---

## 🌟 Key Sections & Features

Every section from the reference folder has been recreated with pixel precision:

| Section | Reference File | Component | Description |
|---|---|---|---|
| **01 Hero Banner** | `image.png` | `HeroSection.tsx` | Bold Anton headline `PORTFOLIO66`, `BRAND IDENTITY · WEBSITE DESIGN · 2026`, sleek stretched cat mascot illustration, and `Small games for quiet moments.` tagline. |
| **02 The Studio** | `image copy.png` | `StudioOverviewSection.tsx` | Cream background (`#F8F6EF`), `THE STUDIO`, `CALM PUZZLES, NO STRESS.`, sitting cats ink illustration, and metadata grid (`ROLE`, `TOOLS`, `DELIVERABLES`, `LIVE`). |
| **03 Logo System** | `image copy 2.png` | `LogoSystemSection.tsx` | Night background (`#151515`), `LOGO`, `TWO CATS, ONE STUDIO.`, rounded squircle badge, and 3 colorway cards (`Cream`, `Violet`, `Dark`). |
| **04 Color & Type** | `image copy 3.png` | `ColorTypeSystemSection.tsx` | Color swatches (`Night #151515`, `Cream #F8F6EF`, `Moon Violet #7B5CFF`) with 1-click HEX copy + typography specimen (`Anton`, `Roboto Condensed`, `Baloo 2`) with live typing playground. |
| **05 Full Website Mockup** | `image copy 4.png` | `FullStudioWebsiteMockup.tsx` | Violet container (`ONE SCROLL, THE WHOLE STUDIO.`) with realistic macOS browser window, running marquee, **interactive playable 8x8 Blockmoon puzzle game**, Moon Arrows showcase, Who We Are, Blog, Google Play banner, and footer watermark. |
| **06 Inner Pages** | `image copy 5.png` | `InnerPagesSection.tsx` | 2x2 grid of inner page mockups: `GAMES`, `BLOG` (with interactive filter pills), `FAQ` (with smooth animated accordions), and `SAY HELLO` (with working contact form and validation). |
| **07 Mobile Showcase** | `image copy 6.png` | `MobileShowcaseSection.tsx` | `MADE FOR ONE HAND.` with 5 realistic iPhone frames (Mobile Home, Fullscreen Navigation Menu, Mobile Games, Mobile Blog, and Mobile FAQ). |
| **08 Social & Sharing** | `image copy 7.png` | `SocialSection.tsx` | `EVERY LINK LOOKS LIKE US.` with 4 Open Graph cards (Home, Games, Blog) and adaptive 512px app icon badge. |
| **09 Direct Contact** | Custom | `App.tsx` | Dedicated `SAY HELLO` contact section with interactive form, direct email link, and social channels. |

---

## 🛠️ Tech Stack

- **Framework**: React 19 + TypeScript
- **Bundler**: Vite
- **Styling**: Tailwind CSS v3
- **Icons**: Lucide React
- **Typography**: Anton (Headlines), Roboto Condensed (Body & Text), Baloo 2 (Wordmark)
- **Effects**: Canvas Confetti for puzzle clears and contact submissions
- **Vector Artwork**: Custom scalable SVG components for pixel-perfect resolution on 4K, Retina, and mobile screens

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+ or later)
- npm

### Installation
```bash
# Navigate to the workspace
cd protfolio66

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:5173` (or the port Vite provides) in your browser.

### Building for Production
```bash
# Typecheck and build optimized bundle
npm run build

# Preview production build locally
npm run preview
```

---

## 🎨 Design System

- **Night**: `#151515` (Deep, restful dark background)
- **Cream**: `#F8F6EF` (Soft warm paper-like tint that eliminates eye strain)
- **Moon Violet**: `#7B5CFF` (Playful vibrant violet used selectively for titles, CTAs and mascot highlights)
- **Headline Font**: `Anton`
- **Body Font**: `Roboto Condensed`
- **Wordmark Font**: `Baloo 2`

---

## 📄 License
MIT — Free to use, adapt, and deploy.
