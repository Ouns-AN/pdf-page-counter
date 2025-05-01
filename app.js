// Load PDF.js from local folder
pdfjsLib.GlobalWorkerOptions.workerSrc = 'pdfjs/pdf.worker.js';

const dropZone = document.getElementById('drop-zone');
const fileInput = document.getElementById('file-input');
const selectFilesButton = document.getElementById('select-files');
const fileList = document.getElementById('file-list');
const totalPagesCell = document.getElementById('total-pages');

let totalPageCount = 0;

// Drag-and-drop handlers
['dragenter', 'dragover'].forEach(event => {
  dropZone.addEventListener(event, e => {
    e.preventDefault();
    dropZone.classList.add('hover');
  });
});

['dragleave', 'drop'].forEach(event => {
  dropZone.addEventListener(event, e => {
    e.preventDefault();
    dropZone.classList.remove('hover');
  });
});

dropZone.addEventListener('drop', e => {
  const files = Array.from(e.dataTransfer.files);
  handleFiles(files);
});

selectFilesButton.addEventListener('click', () => {
  fileInput.click();
});

fileInput.addEventListener('change', () => {
  const files = Array.from(fileInput.files);
  handleFiles(files);
});

function handleFiles(files) {
  const pdfFiles = files.filter(file => file.type === 'application/pdf');

  if (pdfFiles.length === 0) {
    alert("No valid PDF files found.");
    return;
  }

  // Reset table and count
  fileList.innerHTML = '';
  totalPageCount = 0;
  totalPagesCell.textContent = '0';

  // Process files one at a time
  processNextFile(pdfFiles, 0);
}

function processNextFile(files, index) {
  if (index >= files.length) return;

  const file = files[index];

  const reader = new FileReader();
  reader.onload = async function () {
    const typedarray = new Uint8Array(reader.result);

    try {
      const pdf = await pdfjsLib.getDocument({ data: typedarray }).promise;
      const pageCount = pdf.numPages;
      totalPageCount += pageCount;

      // Update table
      const row = document.createElement('tr');
      row.innerHTML = `<td>${file.name}</td><td>${pageCount}</td>`;
      fileList.appendChild(row);
      totalPagesCell.textContent = totalPageCount;

      // Continue with next file
      processNextFile(files, index + 1);
    } catch (error) {
      console.error('Error reading PDF:', file.name, error);
      const row = document.createElement('tr');
      row.innerHTML = `<td>${file.name}</td><td style="color: red;">Error</td>`;
      fileList.appendChild(row);
      processNextFile(files, index + 1);
    }
  };
  reader.readAsArrayBuffer(file);
}
