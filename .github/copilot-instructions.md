# Copilot instructions: JS-SEZ website

## Goal
One-page static website to introduce the Johor–Singapore Special Economic Zone to Singapore manufacturers; bottom-right AI advisor.

## Content
- Use ONLY facts from the supplied SMF JS-SEZ Playbook. Never invent rates, dates, names or statistics.
- Sections: hero, nine zones, SETUP framework, incentives and tax watch-outs, passes for staff, Ask the advisor, footer.
- Footer: "C334 class exercise. Not affiliated with SMF, Enterprise Singapore or MIDA."
- Use plain English, UK spelling, short sentences and Playbook page references.

## Chat widget
- Load `@n8n/chat@1.46.5` from jsDelivr: style.css and chat.bundle.es.js.
- Call `createChat` with `mode: 'window'`; floating bottom-right button.
- Set `webhookUrl` to `https://agenticflows.tokencraze.org/webhook/e700faf4-09ab-496e-a54f-dff2702b8ef0/chat`.
- Title "JS-SEZ advisor"; two short initial messages; `loadPreviousSession: false`.

## Technical rules
- Plain HTML, CSS and JS (`index.html`, `styles.css`, `chat.js`); no framework, npm or build step.
- Mobile layout fits 360px without horizontal scrolling; clear keyboard focus and accessible contrast.
- Publish using GitHub Pages main branch, root folder.

## Done when
- Once webhook is set and n8n is published, chat opens and returns a Playbook-cited answer.
- All website claims are grounded in the Playbook.
- Show a clear setup warning rather than a fake working chatbot if no URL is configured.
