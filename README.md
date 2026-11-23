# C334 Lesson 11 — JS-SEZ Website

## Deployment
Static one-page JS-SEZ site with an n8n-powered, SMF Playbook-grounded advisor.

- Live site: `https://ryanleehx.github.io/c334-25052448-jssez/`
- Repository: `https://github.com/RyanLeeHx/c334-25052448-jssez`
- Workflow: `JS-SEZ WebChatBot(25052448)`

## Configuration completed
1. Import `JS-SEZ_WebChatBot_IMPORT_TEMPLATE.json` into n8n as a NEW workflow (do not overwrite Lesson 10). Select valid model, embeddings and Qdrant credentials; check `smf_playbook` contains your ingested PDF data. Test Senai–Skudai response first.
2. Open the Chat Trigger and verify `Make Chat Publicly Available` and `Embedded Chat`, then save and publish. Copy the actual **Production** `/chat` URL.
3. `chat.js` contains the published production webhook URL.
4. Create a public GitHub repository named `c334-YourRPID-jssez`; upload `index.html`, `styles.css`, `chat.js`, `README.md` and `.github/copilot-instructions.md` to `main`.
5. GitHub Pages deploys from `main` and `/ (root)`.
6. Test chat live, inspect n8n Executions. In Chat Trigger, change Allowed Origins from `*` to `https://YOURUSERNAME.github.io` (without repository path), then republish. CORS is not authentication or a full abuse-prevention control.
7. The completed worksheet records the live URL, test results, improvement and GitHub activity.

**Security note**: The n8n Chat Trigger Allowed Origins should be restricted to `https://ryanleehx.github.io`. CORS is not authentication or a complete abuse-prevention control. No credentials are stored in this repository.
