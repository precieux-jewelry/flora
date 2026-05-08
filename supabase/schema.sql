-- Flora — database schema
-- Run this in the Supabase SQL editor (or via supabase db push) to bootstrap a fresh project.

------------------------------------------------------------
-- Extensions
------------------------------------------------------------
create extension if not exists "pgcrypto";
create extension if not exists "uuid-ossp";

------------------------------------------------------------
-- Profiles (1:1 with auth.users)
------------------------------------------------------------
create table if not exists public.profiles (
    id uuid primary key references auth.users (id) on delete cascade,
    username text unique not null,
    name text not null,
    bio text,
    avatar_url text,
    location text,
    level text check (level in ('beginner', 'intermediate', 'advanced', 'elite')),
    favorite_distance text,
    weekly_mileage int default 0,
    total_miles int default 0,
    races_completed int default 0,
    favorite_shoe text,
    created_at timestamptz default now(),
    updated_at timestamptz default now()
);

create index if not exists profiles_username_idx on public.profiles (username);

------------------------------------------------------------
-- Shoe reviews
------------------------------------------------------------
create table if not exists public.shoe_reviews (
    id uuid primary key default gen_random_uuid(),
    user_id uuid not null references public.profiles (id) on delete cascade,
    shoe_name text not null,
    brand text not null,
    image_url text,
    distance_used int default 0,
    comfort numeric(2,1) check (comfort between 0 and 5),
    speed numeric(2,1) check (speed between 0 and 5),
    durability numeric(2,1) check (durability between 0 and 5),
    stability numeric(2,1) check (stability between 0 and 5),
    race_day_score numeric(2,1) check (race_day_score between 0 and 5),
    review text not null,
    would_buy_again boolean default true,
    created_at timestamptz default now()
);

create index if not exists shoe_reviews_user_idx on public.shoe_reviews (user_id);
create index if not exists shoe_reviews_brand_idx on public.shoe_reviews (brand);

------------------------------------------------------------
-- Outfit posts
------------------------------------------------------------
create table if not exists public.outfit_posts (
    id uuid primary key default gen_random_uuid(),
    user_id uuid not null references public.profiles (id) on delete cascade,
    photo_url text not null,
    caption text,
    shoes text,
    shorts text,
    top text,
    jacket text,
    socks text,
    accessories text,
    fuel text,
    weather text,
    run_type text check (run_type in (
        'marathon','race-day','long-run','beginner','womens','mens','trail','recovery'
    )),
    created_at timestamptz default now()
);

create index if not exists outfit_posts_user_idx on public.outfit_posts (user_id);
create index if not exists outfit_posts_run_type_idx on public.outfit_posts (run_type);

------------------------------------------------------------
-- Polymorphic post target
-- Used by likes, saved_posts, and comments to point at either a shoe review or an outfit post.
------------------------------------------------------------
do $$ begin
    create type public.post_kind as enum ('shoe_review', 'outfit_post');
exception
    when duplicate_object then null;
end $$;

------------------------------------------------------------
-- Comments
------------------------------------------------------------
create table if not exists public.comments (
    id uuid primary key default gen_random_uuid(),
    user_id uuid not null references public.profiles (id) on delete cascade,
    post_kind public.post_kind not null,
    post_id uuid not null,
    body text not null check (char_length(body) between 1 and 2000),
    created_at timestamptz default now()
);

create index if not exists comments_post_idx on public.comments (post_kind, post_id);

------------------------------------------------------------
-- Likes
------------------------------------------------------------
create table if not exists public.likes (
    user_id uuid not null references public.profiles (id) on delete cascade,
    post_kind public.post_kind not null,
    post_id uuid not null,
    created_at timestamptz default now(),
    primary key (user_id, post_kind, post_id)
);

create index if not exists likes_post_idx on public.likes (post_kind, post_id);

------------------------------------------------------------
-- Saved posts
------------------------------------------------------------
create table if not exists public.saved_posts (
    user_id uuid not null references public.profiles (id) on delete cascade,
    post_kind public.post_kind not null,
    post_id uuid not null,
    created_at timestamptz default now(),
    primary key (user_id, post_kind, post_id)
);

create index if not exists saved_posts_user_idx on public.saved_posts (user_id);

------------------------------------------------------------
-- Waitlist (open submission, dedup by email)
------------------------------------------------------------
create table if not exists public.waitlist (
    id uuid primary key default gen_random_uuid(),
    email text unique not null,
    source text default 'landing',
    created_at timestamptz default now()
);

------------------------------------------------------------
-- Row Level Security
------------------------------------------------------------
alter table public.profiles      enable row level security;
alter table public.shoe_reviews  enable row level security;
alter table public.outfit_posts  enable row level security;
alter table public.comments      enable row level security;
alter table public.likes         enable row level security;
alter table public.saved_posts   enable row level security;
alter table public.waitlist      enable row level security;

-- Profiles: anyone can read, only the owner can mutate.
drop policy if exists "profiles read" on public.profiles;
create policy "profiles read" on public.profiles for select using (true);

drop policy if exists "profiles insert self" on public.profiles;
create policy "profiles insert self" on public.profiles for insert with check (auth.uid() = id);

drop policy if exists "profiles update self" on public.profiles;
create policy "profiles update self" on public.profiles for update using (auth.uid() = id);

-- Shoe reviews: public read, owner write.
drop policy if exists "reviews read" on public.shoe_reviews;
create policy "reviews read" on public.shoe_reviews for select using (true);

drop policy if exists "reviews insert self" on public.shoe_reviews;
create policy "reviews insert self" on public.shoe_reviews for insert with check (auth.uid() = user_id);

drop policy if exists "reviews update self" on public.shoe_reviews;
create policy "reviews update self" on public.shoe_reviews for update using (auth.uid() = user_id);

drop policy if exists "reviews delete self" on public.shoe_reviews;
create policy "reviews delete self" on public.shoe_reviews for delete using (auth.uid() = user_id);

-- Outfit posts: public read, owner write.
drop policy if exists "outfits read" on public.outfit_posts;
create policy "outfits read" on public.outfit_posts for select using (true);

drop policy if exists "outfits insert self" on public.outfit_posts;
create policy "outfits insert self" on public.outfit_posts for insert with check (auth.uid() = user_id);

drop policy if exists "outfits update self" on public.outfit_posts;
create policy "outfits update self" on public.outfit_posts for update using (auth.uid() = user_id);

drop policy if exists "outfits delete self" on public.outfit_posts;
create policy "outfits delete self" on public.outfit_posts for delete using (auth.uid() = user_id);

-- Comments: public read, owner write.
drop policy if exists "comments read" on public.comments;
create policy "comments read" on public.comments for select using (true);

drop policy if exists "comments insert self" on public.comments;
create policy "comments insert self" on public.comments for insert with check (auth.uid() = user_id);

drop policy if exists "comments delete self" on public.comments;
create policy "comments delete self" on public.comments for delete using (auth.uid() = user_id);

-- Likes: public read of counts, owner toggle.
drop policy if exists "likes read" on public.likes;
create policy "likes read" on public.likes for select using (true);

drop policy if exists "likes insert self" on public.likes;
create policy "likes insert self" on public.likes for insert with check (auth.uid() = user_id);

drop policy if exists "likes delete self" on public.likes;
create policy "likes delete self" on public.likes for delete using (auth.uid() = user_id);

-- Saved posts: only the owner can read or write.
drop policy if exists "saved read self" on public.saved_posts;
create policy "saved read self" on public.saved_posts for select using (auth.uid() = user_id);

drop policy if exists "saved insert self" on public.saved_posts;
create policy "saved insert self" on public.saved_posts for insert with check (auth.uid() = user_id);

drop policy if exists "saved delete self" on public.saved_posts;
create policy "saved delete self" on public.saved_posts for delete using (auth.uid() = user_id);

-- Waitlist: anonymous insert allowed; reads should go through service role.
drop policy if exists "waitlist insert anon" on public.waitlist;
create policy "waitlist insert anon" on public.waitlist for insert with check (true);

------------------------------------------------------------
-- Auto-create a profile row on signup
------------------------------------------------------------
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
    insert into public.profiles (id, username, name)
    values (
        new.id,
        coalesce(new.raw_user_meta_data ->> 'username', split_part(new.email, '@', 1)),
        coalesce(new.raw_user_meta_data ->> 'name', split_part(new.email, '@', 1))
    )
    on conflict (id) do nothing;
    return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
    after insert on auth.users
    for each row execute function public.handle_new_user();
