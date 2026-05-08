# Flora

The social app + website where runners share and review their **shoes, outfits, race-day gear, and fueling setups**.

> Inspired by the cleanliness of Runna, the social energy of Strava, the discovery feel of Pinterest, and the premium product cards of Nike. Flora is its own thing — not a clone of any of them.

---

## Tech stack

- **Next.js 16** (App Router) + TypeScript
- **Tailwind CSS v4**
- **shadcn/ui** (added incrementally)
- **Framer Motion** for motion
- **Supabase** for auth + database
- Deployed on **Vercel**

---

## Getting started

```bash
npm install
cp .env.example .env.local   # fill in Supabase keys when ready
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Folder structure

```
app/                  # Next.js App Router routes
components/
  ui/                 # primitive UI (shadcn/ui)
  layout/             # navbar, footer, shells
  cards/              # shoe cards, outfit cards, etc.
  feed/               # feed-related components
  profile/            # profile page sections
  forms/              # add-review, add-outfit, waitlist
lib/                  # helpers (cn, supabase clients)
data/                 # placeholder/seed data
types/                # shared TypeScript types
supabase/             # SQL schema + migrations
public/               # static assets
```

---

## Environment variables

Copy `.env.example` → `.env.local` and fill in:

```
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
```

Never commit real keys. The waitlist form falls back to a no-op when these
vars are missing, so the landing page still works in dev without Supabase.

---

## Supabase setup

1. Create a new project at [supabase.com](https://supabase.com).
2. Open **SQL Editor** → paste the contents of [`supabase/schema.sql`](supabase/schema.sql) → Run.
   This creates `profiles`, `shoe_reviews`, `outfit_posts`, `comments`, `likes`,
   `saved_posts`, `waitlist`, plus RLS policies and a signup trigger that auto-creates
   a profile row.
3. **Project Settings → API** → copy the `URL` and `anon` `public` key into `.env.local`.
4. Restart `npm run dev`. The landing waitlist form now writes real rows.

The `service_role` key is **never** referenced from client code. Use it only in
secure server contexts (admin tools, scheduled jobs).

---

## Build phases

This app is built in strict phases:

- **Phase 0** – Project setup _(current)_
- **Phase 1** – Landing website
- **Phase 2** – Explore feed
- **Phase 3** – Shoe review system
- **Phase 4** – Runner profiles
- **Phase 5** – Outfit discovery
- **Phase 6** – Supabase schema
- **Phase 7** – Auth + user actions
- **Phase 8** – Vercel deployment

---

## Deployment (Vercel)

### 1. Push to GitHub

```bash
gh repo create flora --public --source=. --remote=origin --push
# or, manually:
# git remote add origin git@github.com:<you>/flora.git
# git push -u origin main
```

### 2. Import on Vercel

1. Open [vercel.com/new](https://vercel.com/new) and pick the `flora` repo.
2. **Framework preset** is auto-detected as **Next.js** — leave defaults.
3. Build command: `next build` · Output: `.next` · Install: `npm install` (all auto).

### 3. Add environment variables

In **Project Settings → Environment Variables**, add for **Production** _and_ **Preview**:

| Name                            | Value                          |
| ------------------------------- | ------------------------------ |
| `NEXT_PUBLIC_SUPABASE_URL`      | Supabase project URL           |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase `anon` `public` key   |

> The `service_role` key must **never** be added here. It belongs only in
> server-side admin tooling.

### 4. Deploy

Hit **Deploy**. Vercel builds, runs `next build`, prerenders the static pages
(`/`, `/explore`, `/shoes`, `/outfits`, all 8 shoe detail pages, all 9 outfit
detail pages, all 3 profile pages, `/login`, `/signup`), and ships the
middleware as an Edge Function. The auth/session cookie flow works out of the
box with the SSR client.

### Sanity check

Locally: `npm run lint && npm run build && npm start` — confirm a clean prod
build before pushing.
