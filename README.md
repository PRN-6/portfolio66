# Gika Games — Brand Identity & Universal Studio Portfolio

An exact 1:1 recreation of the **Gika Games Brand Identity & Website** case study portfolio, built as a modern, high-performance, and **universal portfolio website** that anyone can customize for their own design studio, indie game, or SaaS product.

---

## 🌟 Key Features

### 1. Exact 1:1 Reference Reproduction
Every section from the reference slides in `/reference/` has been recreated with pixel precision:

| Slide Reference | Reference File | Section in App | Description |
|---|---|---|---|
| **Slide 1** | `image.png` | `HeroSection.tsx` | Bold Anton headlines, `BRAND IDENTITY · WEBSITE DESIGN · 2026`, sleek stretched cat illustration, and `Small games for quiet moments.` tagline. |
| **Slide 2** | `image copy.png` | `StudioOverviewSection.tsx` | Cream background (`#F8F6EF`), `THE STUDIO`, `CALM PUZZLES, NO STRESS.`, sitting cats ink illustration, and metadata grid (`ROLE`, `TOOLS`, `DELIVERABLES`, `LIVE`). |
| **Slide 3** | `image copy 2.png` | `LogoSystemSection.tsx` | Night background (`#151515`), `LOGO`, `TWO CATS, ONE STUDIO.`, rounded squircle badge, and 3 colorway variant cards (`Cream`, `Violet`, `Dark`). |
| **Slide 4** | `image copy 3.png` | `ColorTypeSystemSection.tsx` | Color swatches (`Night #151515`, `Cream #F8F6EF`, `Moon Violet #7B5CFF`) with 1-click HEX copy + typography specimen (`Anton`, `Roboto Condensed`, `Baloo 2`) with live typing playground. |
| **Slide 5** | `image copy 4.png` | `FullStudioWebsiteMockup.tsx` | Violet container (`ONE SCROLL, THE WHOLE STUDIO.`) with realistic macOS browser window, running marquee, **interactive playable 8x8 Blockmoon puzzle game**, Moon Arrows showcase, Who We Are, Blog, Google Play banner, and footer watermark. |
| **Slide 6** | `image copy 5.png` | `InnerPagesSection.tsx` | 2x2 grid of inner page mockups: `GAMES`, `BLOG` (with interactive filter pills), `FAQ` (with smooth animated accordions), and `SAY HELLO` (with working contact form and validation). |
| **Slide 7** | `image copy 6.png` | `MobileShowcaseSection.tsx` | `MADE FOR ONE HAND.` with 5 realistic iPhone frames (Mobile Home, Fullscreen Navigation Menu, Mobile Games, Mobile Blog, and Mobile FAQ). |
| **Slide 8** | `image copy 7.png` | `SocialSection.tsx` & `SocialShareKit.tsx` | `EVERY LINK LOOKS LIKE US.` with 4 Open Graph cards (Home, Games, Blog) and adaptive 512px app icon badge. |

---

### 2. Universal Portfolio Engine ("So that anyone can use this")
- **Live Customizer Drawer (`UniversalPortfolioEditor.tsx`)**:
  - Click **"UNIVERSAL EDITOR"** in the top navigation or floating action button.
  - **Presets**: Switch between **Gika Games** (Original), **Lumina UI Studio** (Product Design/SaaS), and **PixelCraft Collective** (Retro Indie Arcade).
  - **Color Engine**: Pick from curated palette accents (Moon Violet, Cyber Cyan, Sunset Tangerine, Emerald Mint, Rose Berry, Electric Indigo) or input any custom hex code — changes update across the entire site in real-time.
  - **Live Content Editing**: Edit studio names, titles, categories, roles, deliverables, emails, and links.
  - **Export / Import JSON**: Download your configuration as `portfolio-config.json` or copy the raw JSON configuration to your clipboard.
- **Config-Driven Architecture (`src/portfolioData.ts`)**:
  - All content, copy, metadata, game showcases, blog articles, and FAQ items are cleanly organized in a single typed configuration file.

---

### 3. Dual View Experience
- **Case Study Mode**: The Behance/presentation slide showcase with rich interactivity, swatch copying, typography test bench, and mobile carousels.
- **Live Site Mode**: Standalone mode simulating the live `gikagame.com` website with complete navigation, playable Blockmoon mini-game, interactive blog filtering, and launch notifications.
- **Original Slide Inspector**: Side-by-side modal allowing users to inspect the 8 original reference slides directly inside the app.

---

## 🛠️ Tech Stack

- **Framework**: React 19 + TypeScript
- **Bundler**: Vite
- **Styling**: Tailwind CSS v3 with CSS variable design tokens
- **Icons**: Lucide React
- **Typography**: Anton (Headlines), Roboto Condensed (Body & Text), Baloo 2 (Wordmark)
- **Effects**: Canvas Confetti for celebratory puzzle clears and form completions
- **Vector Artwork**: Custom scalable SVG components for pixel-perfect resolution on 4K, Retina, and mobile screens

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+ or later)
- npm or pnpm or yarn

### Installation
```bash
# Clone or navigate to the directory
cd protfolio66

# Install dependencies
npm install

# Start the local development server
npm run dev
```

Visit `http://localhost:5173` in your browser.

### Building for Production
```bash
# Typecheck and build optimized bundle
npm run build

# Preview production build locally
npm run preview
```

---

## 📁 Project Structure

```
protfolio66/
├── reference/                     # Original 8 reference slides
├── public/
│   └── reference/                 # Public reference images for in-app comparison
├── src/
│   ├── components/
│   │   ├── illustrations/
│   │   │   ├── CatLogoBadge.tsx             # Two cats logo & star badge
│   │   │   ├── StretchedCatIllustration.tsx # Sleek hero stretched cat
│   │   │   ├── SittingCatsIllustration.tsx  # Duo ink drawing cats
│   │   │   ├── BlockmoonPhoneMockup.tsx     # Playable 8x8 block puzzle phone
│   │   │   ├── MoonArrowsPhoneMockup.tsx    # Labyrinth arrow puzzle phone
│   │   │   ├── GooglePlayBadge.tsx          # Official Google Play button
│   │   │   └── SocialShareKit.tsx           # 4 branded Open Graph share cards
│   │   ├── HeroSection.tsx                  # Slide 1: Hero & title banner
│   │   ├── StudioOverviewSection.tsx        # Slide 2: The Studio & metadata
│   │   ├── LogoSystemSection.tsx            # Slide 3: Logo & colorways
│   │   ├── ColorTypeSystemSection.tsx       # Slide 4: Color swatches & typography
│   │   ├── FullStudioWebsiteMockup.tsx      # Slide 5: One scroll browser mockup
│   │   ├── InnerPagesSection.tsx            # Slide 6: Games, Blog, FAQ, Contact
│   │   ├── MobileShowcaseSection.tsx        # Slide 7: 5 mobile phone frames
│   │   ├── SocialSection.tsx                # Slide 8: Social & Sharing
│   │   ├── TopNavbar.tsx                    # View switcher & actions
│   │   ├── PageModal.tsx                    # Full inner page modal views
│   │   ├── LiveSiteStandaloneView.tsx       # Standalone live website mode
│   │   ├── ReferenceCompareModal.tsx        # Original slide comparison inspector
│   │   └── UniversalPortfolioEditor.tsx     # Live customizer & JSON export
│   ├── portfolioData.ts                     # Configuration data & presets
│   ├── App.tsx                              # Root application controller
│   ├── index.css                            # Tailwind base styles & variables
│   └── main.tsx                             # Application entry point
├── tailwind.config.js
├── tsconfig.json
├── package.json
└── README.md
```

---

## 🎨 Design System

- **Night**: `#151515` (Deep, restful dark background for night-time play)
- **Cream**: `#F8F6EF` (Soft warm paper-like tint that eliminates eye strain)
- **Moon Violet**: `#7B5CFF` (Playful vibrant violet used selectively for titles, CTAs and mascot highlights)
- **Headline Font**: `Anton`
- **Body Font**: `Roboto Condensed`
- **Wordmark Font**: `Baloo 2`

---

## 📄 License
MIT — Free to use, adapt, and deploy for personal and commercial portfolios.
