# Maryam Shehu — UI/UX Designer Portfolio

Clean Next.js portfolio prepared for GitHub and Vercel.

## Run locally

```bash
npm install
npm run dev
```

Open the local URL shown in the terminal.

## Validate a production build

```bash
npm run build
```

## Deploy with Vercel

1. Create a GitHub repository and upload this folder's contents.
2. In Vercel, choose **Add New → Project**.
3. Import the GitHub repository.
4. Leave the detected framework as **Next.js** and click **Deploy**.

No environment variables or databases are required.

## Main files

- `app/page.tsx` — portfolio content and project-screen markup
- `app/globals.css` — full visual design and responsive styling
- `app/layout.tsx` — metadata and document layout

The `.openai`, Cloudflare Worker, Sites runtime, Vinext, Wrangler and custom Vite files are intentionally excluded from this version.
