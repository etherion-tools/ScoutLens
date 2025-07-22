// src/content.ts

const STYLE_ELEMENT_ID = 'my-extension-custom-background-style';

function applyCustomBackgroundColor(color: string): void {
  let styleElement = document.getElementById(STYLE_ELEMENT_ID) as HTMLStyleElement | null;
  if (!styleElement) {
    styleElement = document.createElement('style');
    styleElement.id = STYLE_ELEMENT_ID;
    document.head.appendChild(styleElement);
  }
  // Target the body and also the main MUI content wrapper if present
  // This tries to ensure the visible background changes on sites like scoutgame.xyz
  styleElement.textContent = `
    body, 
    body > div.MuiBox-root[class*="css-"] /* Attempt to target a common MUI root div directly under body */,
    .MuiBox-root[class*="css-uzlnbw"] /* More specific to the observed class, but might be less stable if class name changes */
    {
      background-color: ${color} !important;
    }
  `;
  console.log(`Custom background color ${color} applied by extension.`);
}

// Listen for messages from the popup
chrome.runtime.onMessage.addListener((request, _sender, sendResponse) => {
  if (request.action === "applyCustomBackground" && typeof request.color === 'string') {
    applyCustomBackgroundColor(request.color);
    sendResponse({ success: true });
  } else {
    sendResponse({ success: false, message: "Unknown action or missing color" });
  }
  return true; // Important for asynchronous sendResponse
});

console.log('Content script loaded for custom backgrounds (v2 - targeting MUI wrappers).');