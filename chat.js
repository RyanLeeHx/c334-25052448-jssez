import { createChat } from 'https://cdn.jsdelivr.net/npm/@n8n/chat@1.46.5/dist/chat.bundle.es.js';
// Production endpoint for the published Lesson 11 workflow copy.
const webhookUrl = 'https://agenticflows.tokencraze.org/webhook/e700faf4-09ab-496e-a54f-dff2702b8ef0/chat';
if (webhookUrl.startsWith('https://') && webhookUrl.endsWith('/chat')) {
  createChat({ webhookUrl, mode: 'window', showWelcomeScreen: false, loadPreviousSession: false,
    initialMessages: ['Hello! I am the JS-SEZ advisor.', 'Ask a JS-SEZ question and request a Playbook page citation.'],
    i18n: { en: { title: 'JS-SEZ advisor', subtitle: 'Playbook-based guidance', footer: '', getStarted: 'Start a conversation', inputPlaceholder: 'Ask about the JS-SEZ…', closeButtonTooltip: 'Close chat' } } });
} else {
  const advisory = document.querySelector('#advisor');
  const p = document.createElement('p');p.className='chat-error';p.textContent='Chat is not connected yet. Add your published n8n production chat URL in chat.js to enable the bottom-right chat button.';
  advisory.appendChild(p);
}
