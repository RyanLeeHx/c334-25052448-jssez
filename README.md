# C334 Lesson 11 — JS-SEZ Website

## What is supplied
Static one-page JS-SEZ site, Copilot instructions and an n8n importable workflow template. Content checked against the supplied SMF Playbook.

## Required account actions
1. Import `JS-SEZ_WebChatBot_IMPORT_TEMPLATE.json` into n8n as a NEW workflow (do not overwrite Lesson 10). Select valid model, embeddings and Qdrant credentials; check `smf_playbook` contains your ingested PDF data. Test Senai–Skudai response first.
2. Open the Chat Trigger and verify `Make Chat Publicly Available` and `Embedded Chat`, then save and publish. Copy the actual **Production** `/chat` URL.
3. Replace `PASTE_YOUR_PRODUCTION_N8N_CHAT_URL_HERE` in `chat.js` with that actual URL.
4. Create a public GitHub repository named `c334-YourRPID-jssez`; upload `index.html`, `styles.css`, `chat.js`, `README.md` and `.github/copilot-instructions.md` to `main`.
5. In Settings → Pages: Deploy from branch → main → / (root). Wait for Pages deployment and visit the published website.
6. Test chat live, inspect n8n Executions. In Chat Trigger, change Allowed Origins from `*` to `https://YOURUSERNAME.github.io` (without repository path), then republish. CORS is not authentication or a full abuse-prevention control.
7. Complete the worksheet fields that require the live URL, test results, Copilot plan review and GitHub activity.

**Important**: A static site can be previewed locally with `python -m http.server 8000` and then `http://localhost:8000`. The chat is intentionally disabled until a real production URL is configured. Avoid publishing live access tokens or private credentials.
