# pdf-page-counter
Offline web app to count pages in PDF files using PDF.js
# PDF Page Counter (Offline Web App)

A fully offline web app that lets you drag and drop multiple PDF files and instantly counts their pages using PDF.js — all without uploading anything or requiring internet access.

## 🚀 Features

- ✅ Fully offline — no internet or server required
- 📂 Drag and drop or select multiple PDF files
- 📄 Displays file name and page count per PDF
- ➕ Shows total number of pages across all files
- ⚡ Fast, memory-efficient (processes one file at a time)
- 🧠 Built with vanilla JavaScript and [PDF.js](https://mozilla.github.io/pdf.js/)

## 🖥 How to Use

1. **Download this repository** or clone it:
   ```bash
   git clone https://github.com/YOUR_USERNAME/pdf-page-counter.git
   ```
2. **Download PDF.js files**:
   - Go to the [PDF.js Releases Page](https://github.com/mozilla/pdf.js/releases)
   - Download a version like `pdfjs-3.11.174-dist.zip`
   - Extract these two files from the `build/` folder:
     - `pdf.js`
     - `pdf.worker.js`
   - Place them in the `pdfjs/` folder of this project.

3. **Open `index.html` in your browser** (double-click it).

   ✅ No need to run a server. It works as a static HTML file.

## 📁 Folder Structure

```
pdf-page-counter/
├── index.html          # Main HTML file
├── style.css           # Stylesheet
├── app.js              # JavaScript logic
├── pdfjs/              # PDF.js library (locally stored)
│   ├── pdf.js
│   └── pdf.worker.js
└── README.md           # This file
```

## 🔐 License

MIT License — free to use, modify, and distribute.

## 🤖 AI Assistance

Parts of this project were generated with help from [ChatGPT](https://openai.com/chatgpt) by OpenAI.

---

> Built for simplicity, privacy, and speed. Perfect for quick offline PDF analysis.
