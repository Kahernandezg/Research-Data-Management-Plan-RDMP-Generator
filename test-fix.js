import { jsPDF } from "jspdf";

const doc = new jsPDF({ unit: "mm", format: "a4" });
const pageW = 210, pageH = 297, margin = 18, contentW = pageW - margin * 2;
const primary = [20, 49, 92], text = [28, 36, 48], lightBg = [234, 241, 251], muted = [91, 107, 130];
let y = 24;

let pageCount = 1;
function drawHeader(doc, pageW, margin, primary, muted) {
  // Mock header
  doc.setFont("helvetica", "bold");
  doc.setFontSize(8.5);
  doc.setTextColor(255, 255, 255);
}

function addNewContentPage() {
  doc.addPage();
  pageCount++;
  y = 24;
  drawHeader(doc, pageW, margin, primary, muted);
}

function ensureSpace(h) {
  if (y + h > pageH - 26) {
    addNewContentPage();
  }
}

// Track rendered lines for audit
const renderedAudit = [];

function fieldRowFixed(label, value) {
  const val = value && value.trim() ? value.trim() : "—";
  doc.setFont("helvetica", "bold");
  doc.setFontSize(9.5);
  const labelLines = doc.splitTextToSize(label, contentW - 6);
  const labelBoxHeight = labelLines.length * 4.6 + 3;

  ensureSpace(labelBoxHeight + 12);
  y += labelBoxHeight;

  doc.setFont("helvetica", "normal");
  doc.setFontSize(9.5);
  doc.setTextColor(...text);
  const valueLines = doc.splitTextToSize(val, contentW - 6);
  const lineH = 4.6;

  for (let i = 0; i < valueLines.length; i++) {
    if (y + lineH > pageH - 26) {
      addNewContentPage();
      doc.setFont("helvetica", "normal");
      doc.setFontSize(9.5);
      doc.setTextColor(...text);
    }
    renderedAudit.push({ page: doc.internal.getNumberOfPages(), y: y, text: valueLines[i] });
    y += lineH;
  }
  y += 5;
}

// Create a very long text: 120 paragraphs (around 3 to 4 pages of text)
const paragraphs = Array.from({ length: 120 }, (_, i) => 
  `Línea ${i + 1}: Este es un párrafo de prueba detallado sobre la metodología de gestión de datos de investigación (PGDI).`
);
const veryLongText = paragraphs.join("\n");

console.log("--- PRUEBA DEL PARCHE PROPUESTO ---");
const expectedLines = doc.splitTextToSize(veryLongText, contentW - 6).length;
console.log(`Total de líneas envueltas esperadas: ${expectedLines}`);

fieldRowFixed("2.1 Breve descripción de los tipos de datos por generar o recopilar", veryLongText);

console.log(`Páginas totales generadas: ${doc.internal.getNumberOfPages()}`);
console.log(`Líneas efectivamente renderizadas: ${renderedAudit.length}`);

// Verify that all lines have valid y coordinates between 24 and 271
const outOfBounds = renderedAudit.filter(l => l.y < 24 || l.y > (pageH - 26));
console.log(`Líneas fuera del área visible (y > 271mm o y < 24mm): ${outOfBounds.length}`);

// Distribution per page:
const pageDist = {};
renderedAudit.forEach(l => {
  pageDist[l.page] = (pageDist[l.page] || 0) + 1;
});
console.log("Distribución de líneas por página:", pageDist);

const success = renderedAudit.length === expectedLines && outOfBounds.length === 0 && doc.internal.getNumberOfPages() > 2;
console.log(`Resultado de la prueba: ${success ? "EXITOSA (100% de líneas preservadas sin desbordamiento)" : "FALLIDA"}`);
