# Illiaz Constructions

A promotional showcase website for a masonry and construction company (Iliaz Constructions), built as a React single-page application.

## Tech Stack

- **Framework:** React 19 with functional components and hooks
- **Build Tool:** Vite 7
- **Styling:** Plain CSS with CSS variables
- **Icons:** lucide-react
- **Package Manager:** npm

## Project Structure

```
src/
  components/   # UI sections: Navbar, Hero, About, Services, Portfolio, Cta, Footer
  assets/       # SVG assets
  App.jsx       # Root component
  main.jsx      # Entry point
  index.css     # Global styles
  App.css       # App-level styles
public/
  images/       # Project showcase photos
```

## Development

The app runs on port 5000 via the "Start application" workflow (`npm run dev`).

Vite is configured with:
- `host: '0.0.0.0'` — binds to all interfaces for Replit preview
- `allowedHosts: true` — allows the Replit proxy host
- `port: 5000`
- `base: '/'` — root path (overrides the original GitHub Pages base)

## Deployment

Configured as a **static** deployment:
- Build command: `npm run build`
- Public directory: `dist`
