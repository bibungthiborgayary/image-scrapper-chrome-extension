// content.js

// Listen for messages from the popup.js
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === 'getImages') {
      // Collect all image URLs on the page
      const images = Array.from(document.querySelectorAll('img')).map(img => img.src);
      // Send the image URLs back to popup.js
      sendResponse({ images });
    }
  });
  