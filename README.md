# FMNXT UI

**FMNXT** is a professional learning platform for **facility management (FM)** and **corporate real estate (CRE)**. This repository is the **public web client**: course discovery, home experience, cart, learner dashboard, library, and authentication screens — built with **React**, **TypeScript**, **Vite**, **Ant Design**, and **Tailwind CSS**.

**Suggested GitHub name:** `fmnxt-ui` (fits alongside a future API or services repo, e.g. `fmnxt-api`).

## Scripts

```bash
npm install
npm run dev      # local dev server
npm run build    # production build → dist/
npm run preview  # preview production build
```

## GitHub

Create an empty repository named **`fmnxt-ui`**, then:

```bash
git remote add origin https://github.com/YOUR_USERNAME/fmnxt-ui.git
git branch -M main
git push -u origin main
```

## Deploy (client preview)

Use **Vercel**, **Netlify**, or **Cloudflare Pages**: build `npm run build`, output directory `dist`.
