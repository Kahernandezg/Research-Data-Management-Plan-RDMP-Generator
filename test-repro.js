import { jsPDF } from "jspdf";

const doc = new jsPDF({ unit: "mm", format: "a4" });
const pageW = 210, pageH = 297, margin = 18, contentW = pageW - margin * 2;
let y = 24;

function drawHeader(doc, pageW, margin, primary, muted) {
  // Mock drawHeader
}

function ensureSpace(h) {
  if (y + h > pageH - 26) {
    doc.addPage();
    y = 24;
  }
}

// ORIGINAL fieldRow implementation
function fieldRowOriginal(label, value) {
  const val = value && value.trim() ? value : "—";
  doc.setFont("helvetica", "bold");
  doc.setFontSize(9.5);
  const labelLines = doc.splitTextToSize(label, contentW);
  ensureSpace(labelLines.length * 4.6 + 4);
  y += labelLines.length * 4.6 + 3;

  doc.setFont("helvetica", "normal");
  doc.setFontSize(9.5);
  const valueLines = doc.splitTextToSize(val, contentW - 6);
  ensureSpace(valueLines.length * 4.6 + 8);
  console.log(`[ORIGINAL] Starting y: ${y.toFixed(1)}, total lines: ${valueLines.length}`);
  // In original: doc.text(valueLines, margin + 3, y);
  // Let's compute line coordinates:
  let offPageCount = 0;
  valueLines.forEach((line, idx) => {
    const lineY = y + (idx * 4.6);
    if (lineY > pageH - 26) {
      offPageCount++;
    }
  });
  console.log(`[ORIGINAL] Lines overflowing beyond printable area (y > ${pageH - 26}mm): ${offPageCount} out of ${valueLines.length}`);
  y += valueLines.length * 4.6 + 9;
}

// Create a paragraph of 200 words
const longText = Array.from({ length: 40 }, (_, i) => 
  `Párrafo ${i + 1}: En este estudio sobre gestión de datos de investigación en la Universidad Centroamericana José Simeón Cañas se recopilan instrumentos cualitativos y cuantitativos detallados.`
).join("\n");

console.log("--- REPRODUCCIÓN DEL DIAGNÓSTICO ---");
fieldRowOriginal("2.1 Breve descripción de los tipos de datos por generar o recopilar", longText);
console.log(`Páginas creadas: ${doc.internal.getNumberOfPages()}`);
