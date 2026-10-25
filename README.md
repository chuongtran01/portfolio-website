# Chuong Tran – Portfolio

Personal portfolio built with Next.js (App Router), Tailwind CSS v4, and shadcn/ui.

## Getting started

Requires Node 22 or newer (see `.nvmrc`).

```bash
npm install
cp .env.example .env   # then fill in the values below
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment variables

See `.env.example`.

| Variable | Purpose |
| --- | --- |
| `GITHUB_TOKEN` | GitHub personal access token, used to read pinned repositories |
| `GITHUB_LOGIN` | GitHub username whose pinned repositories appear under Projects |
| `NEXT_PUBLIC_RESUME_URL` | Public URL of the resume PDF. Leave empty to use `/ChuongTran_Resume.pdf` from `public/` |

## Editing content

Experience, education, skills, and contact details live in `src/lib/data/index.ts`.

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the dev server |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |
