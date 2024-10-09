# Image Downloader Chrome Extension

A simple Chrome extension that allows users to download all images from the current webpage with a single click. This extension is designed to enhance productivity by making it easier to gather images from various sites.

## Features

- Downloads all images displayed on the current webpage.
- Easy-to-use interface with a single button click.
- Automatically names downloaded images in a sequential manner.

## Installation

To install the Image Downloader Chrome Extension, follow these steps:

1. **Download or Clone the Repository**
   - You can download the ZIP file of the repository or clone it using Git:
     ```bash
     git clone https://github.com/yourusername/image-downloader-extension.git
     ```

2. **Open Chrome and Navigate to Extensions**
   - Open Google Chrome and go to `chrome://extensions/`.

3. **Enable Developer Mode**
   - In the top right corner, toggle the **Developer mode** switch to the ON position.

4. **Load the Unpacked Extension**
   - Click on the **Load unpacked** button.
   - Select the folder where you saved the extension files (the folder containing `manifest.json`).

5. **Extension is Installed**
   - You should see the Image Downloader extension icon in your Chrome toolbar.

## Usage

1. **Navigate to a Website**
   - Open any website that contains images.

2. **Click the Extension Icon**
   - Click on the Image Downloader icon in the Chrome toolbar to open the popup interface.

3. **Download Images**
   - Click the **Download** button in the popup.
   - The extension will gather all images from the current webpage and start downloading them automatically.

## Code Overview

The extension consists of the following files:

- **`manifest.json`**: The metadata file that defines the extension's permissions, actions, and scripts.
- **`popup.html`**: The HTML structure for the extension's popup interface.
- **`popup.js`**: The script that handles user interactions and communicates with content scripts.
- **`background.js`**: The background script that manages the downloading process.
- **`content.js`**: The content script that interacts with the webpage to collect image URLs.

## Contribution

Contributions are welcome! If you'd like to improve this extension, feel free to fork the repository and submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Acknowledgments

- [Chrome Extensions Documentation](https://developer.chrome.com/docs/extensions/mv3/)
- [MDN Web Docs](https://developer.mozilla.org/)

