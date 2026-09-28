# InnovatioCore Systems — company website

Company site for InnovatioCore Systems (software company, Kathmandu, Nepal).
Repo: https://github.com/innovatiocore-Systems/InnovatiocoreSystems (branch `main`).

## Stack
- **Next.js 15 (App Router) + React 19 + TypeScript** — not Vite (older notes may say Vite; that is outdated)
- Styling: **CSS Modules** per component (`Component.module.css`) + global `src/index.css` / `src/App.css`. No UI library, no Tailwind — keep it that way.
- Font: Plus Jakarta Sans. Brand colours live as CSS variables in `src/index.css` `:root`
  (Blue #1246F0 → Cyan #06C3F0, Navy #0D1B3E, White #FAFBFF).
- Data: **Supabase** (`supabase.sql`), accessed only server-side with the secret key (`src/lib/supabase.ts`). RLS on, no policies.
- Admin panel at `/admin` (JWT cookie auth, `src/lib/jwt.ts`, `src/lib/requireAdmin.ts`) for blog posts and contact/demo submissions.

## Commands
```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # must pass before pushing
```

## Environment
Copy `.env.example` → `.env.local` and fill in real values (ADMIN_USERNAME, ADMIN_PASSWORD,
ADMIN_JWT_SECRET, SUPABASE_URL, SUPABASE_SECRET_KEY). `.env*` is git-ignored — secrets never go in the repo.

## Layout
- `src/app/*` — routes: `/`, `/about`, `/products`, `/services`, `/why-us`, `/faq`, `/blog`, `/contact`, `/admin`, `/api/admin/*`
- `src/components/*` — sections (Navbar, Hero, PlatformStrip, Products, Services, WhyUs, Faq, DemoForm, CtaBanner, Footer, Blog*)
- `src/assets/products/*` — product logos

## Products (keep these lists in sync)
Pathology Management System (Diagn.OS), Workova ERP (flagship), Event Management System (InnoEvent),
Co-Working Space System (CoreSpace), and **InnoPM** (being added — see `docs/innopm-website-brief.md`).

Product names appear in several places that must stay consistent:
`Products.tsx` (cards), `DemoForm.tsx` (dropdown — must equal card `title`, because
"Request a Demo" links to `/contact?product=<title>`), `Footer.tsx`, `PlatformStrip.tsx`,
`useTypewriter.ts`, plus summary sentences in `layout.tsx` metadata and `BlogListing.tsx`.

## Conventions
- Match existing component patterns and comment style; one `.module.css` per component.
- Only claim product features that exist (see the brief docs for each product).
- Check pages at phone width as well as desktop.
