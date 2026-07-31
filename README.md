<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.
https://ai.studio/apps/f55e819a-3e5e-49df-b17f-2a3107b00ce7

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Deploy with Docker

This app is a static Vite/React build served by nginx — no backend or runtime secrets required.

```bash
docker compose up -d --build
```

That builds the multi-stage `Dockerfile` (Node build → nginx serve) and starts a container listening on port 80 with Traefik labels already set for `fundipro.benardkimani.co.ke`. To point it at a different host, edit the `Host()` rule and `server_name` in `nginx.conf` to match, and make sure the `proxy_network` Docker network exists on the target server (Traefik must already be running there).

Currently deployed at **https://fundipro.benardkimani.co.ke**. See the server-wide `/root/README.md` on the deploy host for the full onboarding/ops guide covering all projects on that box.