# Mind Map App

A beautiful, fully client-side mind mapping app — brainstorm ideas on an infinite
canvas with draggable, color-coded nodes connected by smooth SVG curves.

## What It Does

A single-page interactive mind map editor (`app/page.tsx`):

- Start from a **"Main Idea"** root node; add child and sibling nodes to grow the map.
- **Inline editing** — click any node to rename it.
- **Auto-layout** — branches are automatically arranged and re-spaced as the map
  grows (dynamic positioning based on measured node widths).
- **Zoom & pan** — infinite-canvas feel: mouse-wheel zoom (Cmd/Ctrl + scroll),
  drag-to-pan, toolbar zoom buttons.
- **Keyboard shortcuts** — `Tab` add child, `S` add sibling, `Delete` remove node,
  `L` center on main idea, `Esc` cancel editing.
- **Undo / redo** history for all edits.
- **JSON export / import** — download the map as JSON, re-import it later via
  file upload or paste.
- Color-coded nodes per tree level, gradient connection curves, dotted-grid
  background.

No login, no backend, no database — everything happens in the browser.

## Features

- Infinite canvas with zoom (0.3x–3x) and drag panning
- Child / sibling node creation, node deletion
- Inline text editing with auto-resize aware layout
- Undo / redo history stack
- Export mind map to JSON / import from JSON (paste or file)
- Level-based gradient color coding for nodes
- Smooth animated SVG bezier connections
- On-screen shortcut cheat sheet
- Dark/light theme support via `next-themes`

## Tech Stack

| Layer      | Technology                                |
| ---------- | ----------------------------------------- |
| Framework  | Next.js 15 (App Router)                   |
| UI         | React 19, TypeScript, Tailwind CSS 3      |
| Components | shadcn/ui (Button), Radix UI primitives   |
| Icons      | Lucide React                              |
| Graphics   | Inline SVG (connection curves)            |
| Fonts      | Geist Sans / Geist Mono                   |
| Analytics  | Vercel Analytics (optional)               |
| Originally | Generated with v0.app, customized afterwards|

## Quick Start

```bash
npm install
npm run dev
```

Open http://localhost:3000 in your browser.

Build a static export for hosting anywhere:

```bash
npm run build   # outputs to ./out (output: 'export')
```

## Project Structure

```
app/
  page.tsx            # Entire mind map editor (nodes, layout, history, import/export)
  layout.tsx          # Root layout + theme provider
  globals.css
components/
  ui/button.tsx       # shadcn/ui button
  theme-provider.tsx
lib/
  utils.ts            # cn() class merge helper
public/               # Placeholder static assets
```

## Environment Variables

None required. The app runs entirely client-side; maps are exported/imported as
JSON files by the user.

## Deployment Notes

- Static export is enabled (`output: 'export'` in `next.config.mjs`) so the app
  can be hosted on GitHub Pages or any static host.
- For GitHub Pages project-site hosting the config sets
  `basePath: '/mind-map-app-ladestack'`. If you deploy to a custom domain or
  Vercel instead, **remove the `basePath` line** from `next.config.mjs`.
- Live demo: https://girishlade111.github.io/mind-map-app-ladestack/
- Originally auto-deployed on Vercel from v0.app.

---

Built by Girish Lade — https://ladestack.in
