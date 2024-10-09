document.getElementById('downloadBtn').addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, { action: 'getImages' }, (response) => {
        if (response && response.images) {
          response.images.forEach((imageUrl, index) => {
            const imageName = `image_${index}.jpg`;
            
            // Send each image URL to the background script for downloading
            chrome.runtime.sendMessage({
              action: 'download',
              url: imageUrl,
              filename: imageName
            });
          });
        }
      });
    });
  });
  