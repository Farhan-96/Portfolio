<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/3cd3479f-1c62-48c2-827c-c23e8d3c19cf

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Deploy (GitHub Pages)

This repo is set up to deploy automatically to GitHub Pages on every push to `main`.

1. In GitHub, open **Settings → Pages**
2. Set **Source** to **GitHub Actions**
3. Push to `main` (or run the workflow manually from the **Actions** tab)

Your site will be available at `https://<username>.github.io/<repo>/`.
