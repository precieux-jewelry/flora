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

Never commit real keys.

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

1. Push this repo to GitHub.
2. Import the repo on [vercel.com/new](https://vercel.com/new).
3. Framework preset: **Next.js** (auto-detected).
4. Add environment variables in **Project Settings → Environment Variables**:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
5. Deploy. Vercel will run `next build` automatically.

For local production check: `npm run build && npm start`.
