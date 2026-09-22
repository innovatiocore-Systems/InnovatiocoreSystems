# Project Structure Guide

This document outlines the complete structure of the InnovatiocoreSystems project, explaining where frontend, backend, components, and utilities are located.

---

## 📁 High-Level Architecture

```
InnovatiocoreSystems/
├── src/
│   ├── app/                    # Next.js App Router (Frontend Pages + Backend APIs)
│   ├── components/             # Reusable React Components
│   ├── lib/                    # Backend Utilities & Helpers
│   ├── hooks/                  # Custom React Hooks
│   ├── data/                   # Static Data Files
│   └── assets/                 # Static Assets
├── public/                     # Static Public Files
└── data/                       # External Data Storage
```

---

## 🎨 Frontend Pages (`src/app/`)

These are **public-facing pages** served to users:

```
src/app/
├── page.tsx                    # Homepage (/)
├── about/page.tsx              # About Page (/about)
├── blog/
│   ├── page.tsx                # Blog Listing (/blog)
│   └── [slug]/page.tsx         # Individual Blog Post (/blog/[slug])
├── contact/page.tsx            # Contact Page (/contact)
├── faq/page.tsx                # FAQ Page (/faq)
├── products/page.tsx           # Products Page (/products)
├── services/page.tsx           # Services Page (/services)
├── why-us/page.tsx             # Why Us Page (/why-us)
├── layout.tsx                  # Root Layout (wraps all pages)
└── _not-found/page.tsx         # 404 Not Found Page
```

### What They Use:
- Components from `src/components/` (About, Hero, Products, etc.)
- Data from `src/lib/` for posts, submissions
- Hooks from `src/hooks/` for animations

---

## 🔐 Admin Panel (`src/app/admin/`)

These are **protected admin pages** accessible only after login:

```
src/app/admin/
├── login/page.tsx              # Admin Login Page (/admin/login)
└── (panel)/                    # Route Group - All protected pages
    ├── page.tsx                # Admin Dashboard (/admin)
    ├── posts/
    │   ├── page.tsx            # Posts List (/admin/posts)
    │   ├── new/page.tsx        # Create New Post (/admin/posts/new)
    │   └── [id]/
    │       └── edit/page.tsx    # Edit Post (/admin/posts/[id]/edit)
    └── submissions/page.tsx     # Form Submissions (/admin/submissions)
```

### What They Use:
- **AdminShell** component: Layout wrapper for admin pages
- **AdminLogin** component: Login form
- **PostForm** component: Create/Edit posts
- **PostsTable** component: Display posts list
- **SubmissionsTable** component: Display submissions
- Backend API routes for CRUD operations

---

## 🔧 Backend API Routes (`src/app/api/`)

These are **server-side endpoints** (REST API):

```
src/app/api/admin/
├── login/route.ts              # POST /api/admin/login
│                               # → Authenticates user, returns JWT token
│
├── logout/route.ts             # POST /api/admin/logout
│                               # → Clears session
│
├── posts/
│   ├── route.ts                # GET /api/admin/posts (list all)
│   │                           # POST /api/admin/posts (create new)
│   └── [id]/route.ts           # GET /api/admin/posts/[id] (fetch one)
│                               # PUT /api/admin/posts/[id] (update)
│                               # DELETE /api/admin/posts/[id] (delete)
│
├── submissions/
│   ├── route.ts                # GET /api/admin/submissions (list all)
│   └── [id]/route.ts           # GET /api/admin/submissions/[id]
│                               # DELETE /api/admin/submissions/[id]
│
└── upload/route.ts             # POST /api/admin/upload
                                # → Handles file uploads
```

### Authentication:
All `/api/admin/*` endpoints require a valid JWT token (set in cookies after login)

---

## 🎯 Components

### Regular Components (`src/components/`)

These are **reusable UI components** used across public pages:

| Component | Purpose | Used On |
|-----------|---------|---------|
| `About.tsx` | About section | /about |
| `BlogArticle.tsx` | Individual blog post display | /blog/[slug] |
| `BlogListing.tsx` | Blog posts grid | /blog |
| `CtaBanner.tsx` | Call-to-action banner | Various pages |
| `DemoForm.tsx` | Demo request form | /contact |
| `Faq.tsx` | FAQ accordion | /faq |
| `Footer.tsx` | Site footer | All pages (layout) |
| `Hero.tsx` | Hero section | Homepage |
| `Navbar.tsx` | Navigation header | All pages (layout) |
| `PlatformStrip.tsx` | Product platform showcase | /products |
| `Products.tsx` | Products display | /products |
| `Services.tsx` | Services grid | /services |
| `SiteChrome.tsx` | Main site wrapper | Homepage |
| `WhyUs.tsx` | Why Us section | /why-us |

### Admin Components (`src/components/admin/`)

These are **admin-specific UI components** for the dashboard:

| Component | Purpose |
|-----------|---------|
| `AdminLogin.tsx` | Login form UI |
| `AdminShell.tsx` | Admin layout wrapper |
| `DeletePostButton.tsx` | Delete confirmation button |
| `LogoutConfirmation.tsx` | Logout modal |
| `PostForm.tsx` | Create/edit post form |
| `PostsTable.tsx` | Posts list table |
| `SubmissionsTable.tsx` | Submissions table |

---

## 🔌 Utilities & Helpers

### Backend Logic (`src/lib/`)

These are **server-side utility functions**:

| File | Purpose |
|------|---------|
| `jwt.ts` | JWT token generation & verification |
| `posts.ts` | Post CRUD operations (database queries) |
| `submissions.ts` | Submission CRUD operations |
| `supabase.ts` | Supabase database client setup |
| `requireAdmin.ts` | Middleware to check admin auth |

### React Hooks (`src/hooks/`)

Custom hooks for frontend components:

| Hook | Purpose |
|------|---------|
| `useFadeIn.ts` | Fade-in animation hook |
| `useTypewriter.ts` | Typewriter text effect |

### Data (`src/data/`)

Static data files (if any)

### Assets (`src/assets/`)

Static images and resources:
- `products/` - Product logos/images

---

## 🌐 Data Storage

### External Data (`/data/`)

Database files or JSON data stored outside `/src`:
- Supabase tables for posts, submissions, admin users

### Configuration

- `public/` - Served static files (favicon, robots.txt, etc.)
- `package.json` - Dependencies (Next.js, Supabase, etc.)
- `tsconfig.json` - TypeScript configuration
- `.env.local` - Environment variables (API keys, DB URLs)

---

## 🚀 Request Flow Examples

### Example 1: User Visits Homepage
```
1. Browser requests: GET /
2. Next.js calls: src/app/page.tsx
3. Page uses components: Hero, Services, Products, CtaBanner, Footer
4. Components fetch data from: src/lib/posts.ts, src/lib/submissions.ts
5. Response: Rendered HTML + CSS
```

### Example 2: Admin Creates a Blog Post
```
1. Admin navigates to: /admin/posts/new
2. Page loads: src/app/admin/(panel)/posts/new/page.tsx
3. Shows: PostForm component
4. On submit → calls: POST /api/admin/posts
5. API calls: src/lib/posts.ts → saves to Supabase
6. Returns: Success/error response
7. Admin redirected to: /admin/posts
```

### Example 3: User Submits Contact Form
```
1. User fills: DemoForm on /contact
2. Form submits to: POST /api/admin/submissions
3. API saves: To Supabase submissions table
4. Returns: Confirmation message
5. Admin views: /admin/submissions
```

---

## 🔐 Authentication Flow

```
Login Process:
1. User visits: /admin/login
2. Shows: AdminLogin component
3. User submits credentials → POST /api/admin/login
4. API validates & returns JWT token
5. Token stored in cookies
6. User can now access: /admin/posts, /admin/submissions, etc.

Protected Routes:
- Middleware checks JWT token on each admin request
- If invalid/missing → redirect to /admin/login
```

---

## Summary Table

| Location | Type | Purpose |
|----------|------|---------|
| `src/app/*.tsx` | Pages | Public website pages |
| `src/app/admin/**/*.tsx` | Pages | Protected admin pages |
| `src/app/api/admin/**/*.ts` | API Routes | Backend endpoints |
| `src/components/*.tsx` | Components | Public UI components |
| `src/components/admin/*.tsx` | Components | Admin UI components |
| `src/lib/*.ts` | Utilities | Server-side logic (DB, auth, etc.) |
| `src/hooks/*.ts` | Hooks | Client-side utilities (animations, etc.) |
| `src/assets/` | Assets | Images, logos |

---

## Quick Navigation

- 🏠 **Public Pages**: `src/app/`
- 🔐 **Admin Pages**: `src/app/admin/`
- 🔌 **API Endpoints**: `src/app/api/admin/`
- 🎨 **UI Components**: `src/components/`
- 🛠️ **Backend Logic**: `src/lib/`
- ⚡ **Client Utilities**: `src/hooks/`
