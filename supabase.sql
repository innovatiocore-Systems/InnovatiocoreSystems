create table if not exists public.submissions (
  id           uuid primary key default gen_random_uuid(),
  full_name    text not null,
  company      text not null,
  email        text not null,
  phone        text,
  product      text not null,
  message      text not null,
  status       text not null default 'new' check (status in ('new', 'contacted', 'archived')),
  submitted_at timestamptz not null default now()
);

create table if not exists public.blog_posts (
  id         uuid primary key default gen_random_uuid(),
  slug       text not null unique,
  title      text not null,
  excerpt    text not null,
  category   text not null,
  date       date not null default current_date,
  read_time  text not null,
  image      text,
  status     text not null default 'draft' check (status in ('draft', 'published')),
  content    text[] not null default '{}',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists submissions_submitted_at_idx on public.submissions (submitted_at desc);
create index if not exists blog_posts_status_idx on public.blog_posts (status);
create index if not exists blog_posts_created_at_idx on public.blog_posts (created_at desc);

-- Row Level Security on with no policies: the public publishable key can't
-- read or write anything. The website talks to these tables only from the
-- server, using the secret key, which bypasses RLS.
alter table public.submissions enable row level security;
alter table public.blog_posts enable row level security;

-- Public bucket for blog cover images (uploaded via /api/admin/upload).
insert into storage.buckets (id, name, public)
values ('blog-images', 'blog-images', true)
on conflict (id) do nothing;
