import { jsPDF } from "jspdf";

const doc = new jsPDF({ unit: "mm", format: "a4" });
const pageW = 210, pageH = 297, margin = 18, contentW = pageW - margin * 2;
const primary = [20, 49, 92], primaryLight = [44, 94, 168], text = [28, 36, 48], muted = [91, 107, 130];
let y = 200; // Start near the bottom of a page to test page-break behavior

function drawHeader(doc, pageW, margin, primary, muted) {
  doc.setFont("helvetica", "bold");
  doc.setFontSize(8.5);
  doc.setTextColor(255, 255, 255);
}

function addNewContentPage() {
  doc.addPage();
  y = 24;
  drawHeader(doc, pageW, margin, primary, muted);
}

function ensureSpace(h) {
  if (y + h > pageH - 26) {
    addNewContentPage();
  }
}

const subCardAudit = [];

function subCardFixed(lines) {
  const wrapped = [];
  lines.forEach((l, idx) => {
    const isFirst = (idx === 0);
    const split = doc.splitTextToSize(l, contentW - 10);
    split.forEach((sw) => {
      wrapped.push({ text: sw, isHeader: isFirst });
    });
  });

  if (wrapped.length === 0) return;

  const lineH = 4.4;
  const paddingY = 3.5;
  const totalH = wrapped.length * lineH + (paddingY * 2);

  // If the entire card fits on the current page:
  if (y + totalH + 4 <= pageH - 26) {
    doc.setDrawColor(...primaryLight);
    doc.setLineWidth(0.3);
    doc.roundedRect(margin, y - 2, contentW, totalH, 1.5, 1.5, "S");
    let ly = y + paddingY;
    wrapped.forEach((item) => {
      doc.setFont("helvetica", item.isHeader ? "bold" : "normal");
      doc.setFontSize(9);
      doc.setTextColor(...(item.isHeader ? primary : text));
      doc.text(item.text, margin + 4, ly);
      subCardAudit.push({ page: doc.internal.getNumberOfPages(), y: ly, text: item.text });
      ly += lineH;
    });
    y += totalH + 5;
    return;
  }

  // If it does not fit on current page, but CAN fit on a fresh new page:
  if (totalH + 4 <= (pageH - 26 - 24)) {
    addNewContentPage();
    doc.setDrawColor(...primaryLight);
    doc.setLineWidth(0.3);
    doc.roundedRect(margin, y - 2, contentW, totalH, 1.5, 1.5, "S");
    let ly = y + paddingY;
    wrapped.forEach((item) => {
      doc.setFont("helvetica", item.isHeader ? "bold" : "normal");
      doc.setFontSize(9);
      doc.setTextColor(...(item.isHeader ? primary : text));
      doc.text(item.text, margin + 4, ly);
      subCardAudit.push({ page: doc.internal.getNumberOfPages(), y: ly, text: item.text });
      ly += lineH;
    });
    y += totalH + 5;
    return;
  }

  // If the card is EVEN BIGGER than an entire page: paginate across pages in slices
  let lineIdx = 0;
  while (lineIdx < wrapped.length) {
    // Check available space on current page
    let availableH = (pageH - 26) - y;
    // If less than 3 lines fit, move to new page first
    if (availableH < (lineH * 3 + paddingY * 2)) {
      addNewContentPage();
      availableH = (pageH - 26) - y;
    }

    const maxLinesThisPage = Math.max(1, Math.floor((availableH - paddingY * 2) / lineH));
    const linesToTake = Math.min(maxLinesThisPage, wrapped.length - lineIdx);
    const sliceH = linesToTake * lineH + (paddingY * 2);

    doc.setDrawColor(...primaryLight);
    doc.setLineWidth(0.3);
    doc.roundedRect(margin, y - 2, contentW, sliceH, 1.5, 1.5, "S");

    let ly = y + paddingY;
    for (let i = 0; i < linesToTake; i++) {
      const item = wrapped[lineIdx + i];
      doc.setFont("helvetica", item.isHeader ? "bold" : "normal");
      doc.setFontSize(9);
      doc.setTextColor(...(item.isHeader ? primary : text));
      doc.text(item.text, margin + 4, ly);
      subCardAudit.push({ page: doc.internal.getNumberOfPages(), y: ly, text: item.text });
      ly += lineH;
    }

    lineIdx += linesToTake;
    y += sliceH + 5;
  }
}

// Test with a card containing a 100-line changelog
const longChangelog = Array.from({ length: 80 }, (_, i) => `Cambio ${i + 1}: Actualización metodológica detallada para el PGDI.`);
subCardFixed([
  "Versión 2.0 · 06/10/2026",
  ...longChangelog
]);

console.log("--- PRUEBA DE SUBCARD PAGINADO ---");
console.log(`Líneas totales renderizadas en subCard: ${subCardAudit.length}`);
const outOfBounds = subCardAudit.filter(l => l.y < 24 || l.y > (pageH - 26));
console.log(`Líneas fuera de límites: ${outOfBounds.length}`);
console.log(`Páginas totales generadas: ${doc.internal.getNumberOfPages()}`);
