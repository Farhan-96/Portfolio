# Farhan Fareed — Portfolio

Next.js portfolio site showcasing React Native and web development experience.

## Run locally

**Prerequisites:** Node.js 20+

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the dev server:

   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000)

## Build

```bash
npm run build
```

Static export output is written to the `out/` directory.

## Deploy (GitHub Pages)

The site deploys automatically on push to `main` via GitHub Actions.

1. In GitHub, open **Settings → Pages**
2. Set **Source** to **GitHub Actions**
3. Push to `main` (or run the workflow manually)

Your site will be available at `https://farhan-96.github.io/Portfolio/`.

For local development, run without `GITHUB_PAGES` so assets load from `/`.
