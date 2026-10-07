import { jsPDF } from "jspdf";

const doc = new jsPDF({ unit: "mm", format: "a4" });
doc.setFont("helvetica", "normal");
doc.setFontSize(10);

const testStrings = [
  "Español: á é í ó ú Á É Í Ó Ú ñ Ñ ¿ ¡",
  "Puntuación: — (em dash), – (en dash), “ ” (comillas tipográficas), ‘ ’ (comillas simples)",
  "Viñetas y símbolos: • (bullet), … (ellipsis), · (intermedio), ©, ®",
  "Texto: Investigación UCA — Plan de Gestión de Datos de Investigación (PGDI)"
];

testStrings.forEach((str, i) => {
  try {
    const wrapped = doc.splitTextToSize(str, 170);
    doc.text(wrapped, 20, 20 + i * 15);
    console.log(`[OK] String ${i + 1}: length ${wrapped.length}, line: "${wrapped[0]}"`);
  } catch (err) {
    console.error(`[ERROR] String ${i + 1}:`, err.message);
  }
});

const pdfArray = doc.output("arraybuffer");
console.log(`PDF generado con éxito: ${pdfArray.byteLength} bytes`);
