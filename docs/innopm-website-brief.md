# InnoPM — website brief

Everything needed to add **InnoPM** to the InnovatioCore Systems website as a fifth
product. Written from the InnoPM source (`E:\InnoPM` on the build PC), so the
claims below match what the product actually does.

The logo is already in the repo: `src/assets/products/innopm-logo.png` (256×256,
navy rounded square, "iPM" mark with rising arrow, "innoPM" wordmark).

---

## 1. What InnoPM is (plain-language summary)

InnoPM is a focused project & issue tracker for small software teams. It runs as a
Windows desktop app on each office PC, connected to one central server on the
office network. Teams get projects, issues, a Kanban board, screenshots, comments
and a full activity history — and deliberately nothing beyond that.

Positioning line: **"Projects, issues and progress — nothing you don't need."**

Brand name spelling: **InnoPM** in running text; the logo wordmark reads "innoPM".

## 2. Facts you can safely claim

**Core features**
- Projects with short keys (e.g. `MOB`) that prefix issue IDs — `MOB-42`
- Issues with status, priority, assignee and due date
- Drag-and-drop Kanban board
- Screenshots & file attachments — paste a screenshot straight onto an issue with Ctrl+V
- Comments and a complete activity timeline on every issue
- Dashboard with project progress and open-issue breakdowns
- Command palette (Ctrl+K) and keyboard shortcuts for everything
- Light and dark themes

**Team & access**
- Workspace roles: Super Admin, Admin, Member, Viewer
- Per-project roles: Lead, Contributor, Viewer
- Secure sign-in (password + token-based API auth)

**Deployment / architecture**
- Runs on your own office network (on-premise / LAN) — your data never leaves the building
- One server PC hosts the API and a PostgreSQL database; every other PC runs the desktop client
- Client PCs hold no database and no credentials — only the server's address
- Server runs as a Windows service: starts at boot, restarts itself on failure
- **InnoPM Server Control** app: start/stop services and see end-to-end health at a glance
- Scripted backup & restore (database + attachments together), with scheduled backups
- Optional HTTPS

**Tech stack (for a "built with" line, if wanted)**
.NET 10 · WPF desktop client · ASP.NET Core API · PostgreSQL

**Deliberately NOT included** (good for a "focused by design" message; do not claim these):
time tracking, billing, chat, automation, Gantt charts, advanced reporting.
No cloud/SaaS version and no mobile/web app exist — don't claim them.

## 3. Ready-to-paste product card copy

- **Title:** InnoPM — Project & Issue Tracker
- **Badges:** `Productivity` (brand) · `Project Management` (violet)
- **Logo alt:** `InnoPM — Project & Issue Tracker`
- **Description:**
  A fast, focused project and issue tracker for software teams. Plan work on a
  Kanban board, attach screenshots, discuss in comments and follow every change —
  hosted on your own office network, so your data stays with you.
- **Key features (6):**
  1. Projects, issues & drag-and-drop Kanban board
  2. Screenshot paste & file attachments on every issue
  3. Comments with a full activity timeline
  4. Workspace & per-project roles for your team
  5. Self-hosted on your office network — your data stays in-house
  6. Server control panel with health checks & scheduled backups

Short version (for footer / strip / typewriter): **InnoPM**, tagline
**"Project Management"**; typewriter phrase **"Project Management Tools"**.

## 4. Exact places to update in this repo

| File | Change |
|---|---|
| `src/components/Products.tsx` | `import innopmLogo from '../assets/products/innopm-logo.png'` and add a product object (`id: 'innopm'`) using the copy in §3, `logo: innopmLogo` |
| `src/components/DemoForm.tsx` | add `'InnoPM'` to the `products` array (before `'Multiple Products'`) — the card's "Request a Demo" link passes `?product=<title>`, so the option text must equal the card `title` exactly (or change the card title to match) |
| `src/components/Footer.tsx` | add the product to `productLinks` |
| `src/components/PlatformStrip.tsx` | add a `<Link>` with `<img src={innopmLogo.src} alt="InnoPM" />` (before the "& More" item) |
| `src/hooks/useTypewriter.ts` | optionally add `'Project Management Tools'` to `PHRASES` |
| `src/components/Products.tsx` section subtitle, `src/app/layout.tsx` meta description, `src/components/BlogListing.tsx` intro | "healthcare, recruitment, events and shared workspaces" → add "project management" / "software teams" |

Notes:
- The products grid alternates `fade-in-delay-1/2` by index; a fifth card leaves
  the last row with one card — check the layout on desktop and decide whether
  that's fine or the grid needs a tweak in `Products.module.css`.
- The logo is a dark square icon, while Diagn.OS / Workova are wide logos. Check it
  sits well in `.logo` in `Products.module.css` and in the platform strip; constrain
  its height if needed.
- Badge colours available: `brand`, `teal`, `orange`, `violet` (Products.module.css).

## 5. Optional extras

- **Blog post** (via `/admin` → Posts): "Introducing InnoPM: issue tracking that stays
  on your network" — why focused scope, Kanban + screenshots, on-premise data.
- **FAQ** (`src/components/Faq.tsx`): "Where is InnoPM's data stored?" → On a
  server PC in your own office; client PCs hold no data or credentials.
- Screenshots of the real app would strengthen the card — take them on the build PC
  and add to `src/assets/products/`.
