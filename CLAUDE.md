# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React-based single-page application (SPA) for a business/marketing website called "Bottom Line App". The application showcases services, team members, portfolio items, testimonials, and contact information.

## Development Commands

```bash
# Start development server (Vite with HMR)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run ESLint
npm run lint
```

## Tech Stack

- **Framework**: React 19.1.0 with Vite 6.3.5
- **Routing**: React Router DOM 7.6.1
- **Styling**: Tailwind CSS 4.1.7 (configured via Vite plugin)
- **Animations**:
  - Framer Motion 12.14.0 (for React components)
  - GSAP 3.13.0 (for complex animations)
  - Lottie React 2.4.1 (for Lottie animations)
- **Smooth Scrolling**: Lenis (@studio-freight/lenis)
- **UI Components**: Swiper 11.2.8 (carousels), Lucide React (icons)

## Architecture

### Application Structure

```
src/
├── AllRouters/          # Route configuration
├── Pages/               # Page-level components (currently: Home.jsx)
├── Components/          # Reusable UI components
├── Images/              # Static image assets
├── Brand/               # Client/brand logos
├── Anime/               # Lottie animation JSON files
└── assets/              # Other static assets
```

### Key Architectural Patterns

1. **Lazy Loading**: The router (`Allrouters`) is lazy-loaded in `App.jsx` with a loading spinner fallback

2. **Smooth Scrolling Setup**: Lenis is initialized globally in `App.jsx` using `requestAnimationFrame` for smooth scrolling throughout the app

3. **Layout Structure**: The `Allrouters` component wraps all pages with a persistent `Nav` (navbar) and `Footer`

4. **Page Composition**: The `Home` page is composed of multiple section components stacked vertically:
   - Header (hero section)
   - ServicesGrid
   - Aboutus
   - Brand (client logos)
   - StatsSection
   - TeamCarousel
   - ServiceGrid (note: different from ServicesGrid)
   - YearsOfOrganization
   - PortfolioSection
   - Testimonial
   - ContactFAQ

5. **Path Aliasing**: Vite is configured with `@` alias pointing to `src/` directory for cleaner imports

### Component Organization

- **Nav.jsx**: Sticky navigation with Framer Motion animations, dropdown menus for Services and About sections. Uses mobile-responsive design with hamburger menu.
- All page sections are separate components in `src/Components/`
- Components use a mix of Tailwind CSS for styling and animation libraries for interactivity

### Styling Approach

- Tailwind CSS 4.1.7 is imported directly in `index.css` using `@import "tailwindcss"`
- Tailwind is configured as a Vite plugin (no separate tailwind.config file)
- Custom fonts are defined in `App.css` using `@font-face`:
  - `poppins`: NataSans-VariableFont_wght.ttf
  - `hdng`: Brigends Expanded.otf
  - `second`: Casanova Scotia.otf
  - `roselin`: Rosaline.otf
- Swiper CSS is imported in `App.css`
- Custom scrollbar hiding utility class: `.scrollbar-hide`

### ESLint Configuration

Uses flat config format (eslint.config.js) with:
- React Hooks plugin for hook rules
- React Refresh plugin for HMR compliance
- Custom rule: `no-unused-vars` ignores uppercase/constant variables

## Common Development Patterns

### Adding a New Page

1. Create page component in `src/Pages/`
2. Add route in `src/AllRouters/Allrouters.jsx`
3. Import and add to the `<Routes>` section

### Adding a New Section Component

1. Create component in `src/Components/`
2. Import and add to the appropriate page (likely `Home.jsx`)
3. Section components are typically self-contained with their own styling and animations

### Working with Animations

- Use Framer Motion for React component animations (see `Nav.jsx` for examples)
- GSAP is available for more complex timeline-based animations
- Lottie files should be placed in `src/Anime/` and imported via `lottie-react`

### Asset Management

- Images go in `src/Images/`
- Brand/client logos go in `src/Brand/`
- Fonts are stored in `public/Fonts/` (referenced via `/Fonts/` in CSS)
- Use the `@` alias to import from src (e.g., `import logo from "@/Images/logo.png"`)

## Important Notes

- The app uses React 19 which may have different behaviors than React 18
- Lenis smooth scroll is initialized on app mount and runs continuously via RAF
- The navigation uses `window.innerWidth` to detect mobile vs desktop (consider using proper responsive hooks if refactoring)
- There's a typo in Home.jsx: `ServiceGridfrom` should likely be `ServiceGrid` (imports correctly but variable name is wrong)
