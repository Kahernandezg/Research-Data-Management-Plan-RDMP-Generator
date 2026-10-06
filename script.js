/* ---------------------------- DATA MODEL ---------------------------- */
const SECTIONS = [
  {
    num: "1",
    short: "Generalidades",
    title: "Generalidades de la investigación",
    fields: [
      {
        key: "nombre",
        label: "1.1 Nombre de la investigación",
        type: "text",
        placeholder: "Título de la investigación"
      },
      {
        key: "fuente",
        label: "1.2 Fuente de financiamiento",
        type: "text",
        placeholder: "Ej. Fondo de investigación UCA"
      },
      {
        key: "lineas",
        label: "1.3 Línea(s) de investigación / Agenda de proyección social",
        type: "lineas-agenda"
      },
      {
        key: "codigo",
        label: "1.4 Código de la investigación",
        type: "text",
        placeholder: "Ej. FUCA-2023-01"
      },
      { key: "equipo", label: "1.5 Equipo de investigación", type: "team" },
      {
        key: "contacto",
        label: "1.6 Datos de contacto principal",
        type: "text",
        placeholder: "correo@uca.edu.sv · Tel. institucional"
      },
      {
        key: "fechas",
        label: "1.7 Fecha de inicio y fin de la investigación",
        type: "daterange"
      },
      {
        key: "versiones",
        label: "1.8 Control de revisión del PGD",
        type: "versions"
      },
      {
        key: "responsable",
        label: "1.9 Responsable de la gestión de los datos",
        type: "text",
        placeholder: "Nombre y rol"
      }
    ]
  },
  {
    num: "2",
    short: "Descripción de los datos",
    title: "Descripción de los datos",
    fields: [
      {
        key: "d21",
        label:
          "2.1 Breve descripción de los tipos de datos por generar o recopilar",
        type: "textarea",
        placeholder:
          "Tipos de datos, técnicas de recolección, cantidad estimada de instrumentos..."
      },
      {
        key: "d22",
        label: "2.2 Descripción del diseño del estudio y métodos",
        type: "textarea",
        placeholder:
          "Diseño metodológico, etapas del trabajo y procedimientos aplicados..."
      },
      {
        key: "d23",
        label: "2.3 Reutilización de datos existentes (UCA u otras fuentes)",
        type: "textarea",
        placeholder:
          "¿Se usarán datos existentes? ¿Qué uso se les dará? ¿Bajo qué licencia están?",
        hint: "Proporcione las citas o DOIs de los datasets de acceso abierto."
      },
      {
        key: "formatos",
        label: "2.4 Formatos de los datos de la investigación",
        type: "tags"
      },
      {
        key: "volumen",
        label: "2.5 Volumen o tamaño estimado de los datos",
        type: "tags-single"
      }
    ]
  },
  {
    num: "3",
    short: "Calidad y documentación",
    title: "Calidad de los datos y la documentación",
    fields: [
      {
        key: "c31",
        label: "3.1 Medidas de control de calidad de los datos",
        type: "textarea",
        placeholder:
          "Calibración de equipos, captura estandarizada, validación de entrada, vocabularios controlados..."
      },
      {
        key: "c32",
        label: "3.2 Documentación que acompañará a los datos",
        type: "textarea",
        placeholder:
          "Metadatos, carátulas, identificadores únicos, información contextual..."
      }
    ]
  },
  {
    num: "4",
    short: "Accesibilidad y reutilización",
    title: "Accesibilidad y reutilización de los datos",
    fields: [
      {
        key: "a41",
        label: "4.1 Datos seleccionados para depositar en Micelio",
        type: "textarea",
        placeholder: "¿Cuáles datos se depositarán y cuándo se harán visibles?"
      },
      {
        key: "a42",
        label:
          "4.2 Herramientas informáticas, software y/o hardware necesarios",
        type: "textarea",
        placeholder: "Software para crear y visualizar los datos"
      },
      {
        key: "a43",
        label:
          "4.3 Grupos, organismos o líneas de investigación a quienes podrán ser útiles",
        type: "textarea",
        placeholder: "Ej. Línea de investigación de la UCA: Migraciones"
      }
    ]
  },
  {
    num: "5",
    short: "Requerimientos éticos y legales",
    title: "Requerimientos éticos y legales",
    fields: [
      {
        key: "e51",
        label:
          "5.1 Problemas éticos/legales, uso de datos personales y consentimiento informado",
        type: "textarea",
        placeholder:
          "Anonimización, excepciones con consentimiento, tratamiento de datos confidenciales..."
      },
      {
        key: "e52",
        label: "5.2 Evaluación del Comité de Ética de la Investigación",
        type: "textarea",
        placeholder:
          "Aspectos del dictamen que afectan el uso y publicación de los datos"
      },
      {
        key: "e53",
        label: "5.3 Restricciones de acceso a los datos",
        type: "textarea",
        placeholder: "¿Existen restricciones? ¿Por qué?"
      },
      {
        key: "e54",
        label: "5.4 Cuestiones jurídicas: propiedad intelectual y titularidad",
        type: "textarea",
        placeholder:
          "Control de acceso, restricciones y titularidad de los datos"
      },
      {
        key: "e55",
        label: "5.5 Licenciamiento de los datos",
        type: "textarea",
        placeholder: "Ej. Creative Commons Attribution 4.0 (CC BY 4.0)"
      }
    ]
  }
];

function emptyMember() {
  return {
    nombre: "",
    rol: "",
    departamento: "",
    institucion: "",
    orcid: "",
    pais: ""
  };
}
function emptyVersion() {
  return { version: "", fecha: "", cambios: "" };
}

const LINEAS_INVESTIGACION = [
  "Violencia y seguridad",
  "Sostenibilidad ambiental",
  "Sistemas de servicios básicos sostenibles",
  "Alternativas de desarrollo económico y social",
  "Pobreza y exclusión social",
  "Migraciones",
  "Niñez y juventud",
  "Institucionalidad, democracia y participación ciudadana",
  "Género",
  "Desarrollo e innovación tecnológica",
  "Desarrollo productivo y empresarial",
  "Integración centroamericana",
  "Identidad e historia"
];
const AGENDA_PROYECCION_SOCIAL = [
  "Promoción de una vida digna para todas las personas",
  "Trabajar por una sociedad equitativa, participativa e incluyente",
  "Colaborar en la construcción de una cultura de paz",
  "Trabajar por la sustentabilidad ambiental y adaptación al cambio climático",
  "Fortalecimiento institucional del sistema político"
];
const FORMATOS_DATOS = [
  "Bases de datos (XML, CSV, JSON)",
  "Imágenes (TIFF, JPEG o JPG, PDF, PNG, GIF, BMP, SVG)",
  "Datos tabulares (CSV, TXT)",
  "Texto (XML, PDF/A, ASCII, UTF-8)",
  "Archivo web (HTML, WARC)",
  "Datos Geoespaciales (SHP, DBF, GeoTIFF, netCDF, GeoJSON, Rinex)",
  "CAD (DXF, SAT, LGS, STP)",
  "Nube de Puntos / PointCloud (LAS, LAZ, XYZ, PTX)",
  "Vídeos (MPEG, AVI, MXF, MKV, Mp4)",
  "Audio (WAVE, AIFF, MP3, MXF)",
  "Estadísticas (ASCII, DTA, POR, SAS, SAV, R)",
  "Sismología (SEED)",
  "Código (archivos tcl, archivos py, Jupyter Notebook)",
  "Contenedores (TAR, GZIP, ZIP)",
  "Otros"
];
const VOLUMEN_RANGOS = ["Menos de 1 GB", "1-10 GB", "10-100 GB", "1-5 TB"];

let state = {
  nombre: "",
  fuente: "",
  codigo: "",
  lineas: [],
  agenda: [],
  equipo: [emptyMember()],
  contacto: "",
  fechaInicio: "",
  fechaFin: "",
  versiones: [emptyVersion()],
  responsable: "",
  d21: "",
  d22: "",
  d23: "",
  formatos: [],
  volumen: [],
  c31: "",
  c32: "",
  a41: "",
  a42: "",
  a43: "",
  e51: "",
  e52: "",
  e53: "",
  e54: "",
  e55: ""
};

let currentStep = 0; // 0-4 sections, 5 = preview/download

/* ---------------------------- RENDER ---------------------------- */
function renderStepper() {
  const totalSteps = SECTIONS.length + 1;
  let html = "";
  SECTIONS.forEach((s, i) => {
    const cls = i === currentStep ? "active" : i < currentStep ? "done" : "";
    html += `<div class="step-item ${cls}" onclick="goStep(${i})">
      <div><div class="step-node">${s.num}</div><div class="step-line"></div></div>
      <div class="step-label">${s.short}</div>
    </div>`;
  });
  const finalCls =
    currentStep === SECTIONS.length
      ? "active"
      : currentStep > SECTIONS.length
        ? "done"
        : "";
  html += `<div class="step-item ${finalCls}" onclick="goStep(${SECTIONS.length})">
      <div><div class="step-node">✓</div></div>
      <div class="step-label">Vista previa y descarga</div>
    </div>`;
  document.getElementById("stepperList").innerHTML = html;
}

function renderTagPicker(key, options, opts) {
  opts = opts || {};
  const single = !!opts.single;
  const selected = state[key];
  const selectedHtml = selected
    .map(
      (val, i) =>
        `<span class="tag-pill">${escapeHtml(val)}<span class="tag-x" onclick="removeTag('${key}',${i})">×</span></span>`
    )
    .join("");
  const inputHtml = `<input type="text" class="tag-input-inline" placeholder="${selected.length ? "Otro..." : "Escribe y presiona Enter..."}" onkeydown="handleTagInputKey(event,'${key}',${single})">`;
  const availableOptions = options.filter((o) => !selected.includes(o));
  const availableHtml = availableOptions.length
    ? `<div class="tag-available">
      <span class="tag-available-label">Sugerencias:</span>
      ${availableOptions.map((o) => `<span class="tag-chip-outline" onclick="addTag('${key}','${escapeAttr(o)}',${single})">${escapeHtml(o)}</span>`).join("")}
    </div>`
    : "";
  return `<div class="tag-picker">
      <div class="tag-selected">${selectedHtml}${inputHtml}</div>
      ${availableHtml}
    </div>`;
}

function fieldBlock(f) {
  const val = state[f.key] || "";
  if (f.type === "text") {
    return `<div class="field"><label>${f.label}</label>
      <input type="text" value="${escapeAttr(val)}" placeholder="${escapeAttr(f.placeholder || "")}" oninput="updateField('${f.key}', this.value)"></div>`;
  }
  if (f.type === "textarea") {
    return `<div class="field"><label>${f.label}${f.hint ? ` <span class="hint">— ${escapeHtml(f.hint)}</span>` : ""}</label>
      <textarea placeholder="${escapeAttr(f.placeholder || "")}" oninput="updateField('${f.key}', this.value)">${escapeHtml(val)}</textarea></div>`;
  }
  if (f.type === "tags") {
    return `<div class="field"><label>${f.label}</label>${renderTagPicker(f.key, FORMATOS_DATOS)}</div>`;
  }
  if (f.type === "tags-single") {
    return `<div class="field"><label>${f.label}</label>${renderTagPicker(f.key, VOLUMEN_RANGOS, { single: true })}</div>`;
  }
  if (f.type === "lineas-agenda") {
    return `<div class="field"><label>${f.label}</label>
      <p class="tag-group-label">Líneas de investigación</p>
      ${renderTagPicker("lineas", LINEAS_INVESTIGACION)}
      <p class="tag-group-label">Agenda de proyección social</p>
      ${renderTagPicker("agenda", AGENDA_PROYECCION_SOCIAL)}
    </div>`;
  }
  if (f.type === "daterange") {
    return `<div class="field"><label>${f.label}</label>
      <div class="row2">
        <input type="date" value="${state.fechaInicio}" onchange="updateField('fechaInicio', this.value)">
        <input type="date" value="${state.fechaFin}" onchange="updateField('fechaFin', this.value)">
      </div></div>`;
  }
  if (f.type === "team") {
    let cards = state.equipo
      .map(
        (m, i) => `
      <div class="dyn-card">
        <span class="dyn-index">${i + 1}</span>
        ${state.equipo.length > 1 ? `<button class="dyn-remove" onclick="removeMember(${i})">Eliminar</button>` : ""}
        <div class="dyn-grid">
          <input type="text" placeholder="Nombre completo" value="${escapeAttr(m.nombre)}" oninput="updateMember(${i},'nombre',this.value)">
          <input type="text" placeholder="Rol (Coordinador/a, Investigador/a...)" value="${escapeAttr(m.rol)}" oninput="updateMember(${i},'rol',this.value)">
          <input type="text" placeholder="Departamento" value="${escapeAttr(m.departamento)}" oninput="updateMember(${i},'departamento',this.value)">
          <input type="text" placeholder="Institución" value="${escapeAttr(m.institucion)}" oninput="updateMember(${i},'institucion',this.value)">
          <input type="text" placeholder="ORCID (0000-0000-0000-0000)" value="${escapeAttr(m.orcid)}" oninput="updateMember(${i},'orcid',this.value)">
          <input type="text" placeholder="País" value="${escapeAttr(m.pais)}" oninput="updateMember(${i},'pais',this.value)">
        </div>
      </div>`
      )
      .join("");
    return `<div class="field"><label>${f.label}</label>${cards}
      <button class="dyn-add" onclick="addMember()">+ Agregar integrante</button></div>`;
  }
  if (f.type === "versions") {
    let rows = state.versiones
      .map(
        (v, i) => `
      <div class="dyn-card">
        <span class="dyn-index">v${i + 1}</span>
        ${state.versiones.length > 1 ? `<button class="dyn-remove" onclick="removeVersion(${i})">Eliminar</button>` : ""}
        <div class="dyn-grid">
          <input type="text" placeholder="Versión (ej. 1.0)" value="${escapeAttr(v.version)}" oninput="updateVersion(${i},'version',this.value)">
          <input type="date" value="${v.fecha}" onchange="updateVersion(${i},'fecha',this.value)">
        </div>
        <div style="margin-top:8px;">
          <textarea placeholder="Cambios realizados en esta versión" style="min-height:56px" oninput="updateVersion(${i},'cambios',this.value)">${escapeHtml(v.cambios)}</textarea>
        </div>
      </div>`
      )
      .join("");
    return `<div class="field"><label>${f.label}</label>${rows}
      <button class="dyn-add" onclick="addVersion()">+ Agregar versión</button></div>`;
  }
  return "";
}

function renderPanel() {
  const panel = document.getElementById("panel");
  if (currentStep < SECTIONS.length) {
    const s = SECTIONS[currentStep];
    let html = `<p class="panel-eyebrow">Sección ${s.num} de ${SECTIONS.length}</p>
      <h2>${s.title}</h2>`;
    s.fields.forEach((f) => (html += fieldBlock(f)));
    html += `<div class="panel-nav">
        <button class="btn btn-ghost" ${currentStep === 0 ? "disabled" : ""} onclick="goStep(${currentStep - 1})">← Anterior</button>
        <button class="btn btn-primary" onclick="goStep(${currentStep + 1})">${currentStep === SECTIONS.length - 1 ? "Ir a vista previa →" : "Siguiente →"}</button>
      </div>`;
    panel.innerHTML = html;
  } else {
    // Preview
    let html = `<p class="panel-eyebrow">Paso final</p>
      <h2>Vista previa y descarga</h2>
      <p style="color:var(--text-muted);font-size:13.5px;margin-top:-14px;margin-bottom:20px;">
        Revisa cada sección antes de generar el documento. Puedes hacer clic en cualquier tarjeta para editarla.  Una vez generado el documento en formato PDF, por favor compártelo al correo de kahernandezg@uca.edu.sv y vicerrectoria.investigacioninnovacion@uca.edu.sv para su posterior depósito dentro del Repositorio Institucional. 
      </p>`;
    SECTIONS.forEach((s, i) => {
      const filled = s.fields.filter((f) => {
        if (f.type === "team") return state.equipo.some((m) => m.nombre);
        if (f.type === "versions")
          return state.versiones.some((v) => v.version || v.cambios);
        if (f.type === "daterange") return state.fechaInicio || state.fechaFin;
        if (f.type === "tags" || f.type === "tags-single")
          return state[f.key].length > 0;
        if (f.type === "lineas-agenda")
          return state.lineas.length > 0 || state.agenda.length > 0;
        return (state[f.key] || "").trim().length > 0;
      }).length;
      html += `<div class="summary-card" onclick="goStep(${i})">
        <h3>${s.num}. ${s.title}</h3>
        <p>${filled} de ${s.fields.length} campos completados — clic para editar</p>
      </div>`;
    });
    html += `<div class="download-box">
      <div><h3>Documento listo para generar</h3>
      <p>Se creará un PDF con el formato del Plan de Gestión de Datos de Investigación (PGDI) de la UCA / Micelio, con la información capturada.</p></div>
      <button class="btn btn-accent" onclick="generatePDF()">⬇ Descargar PDF</button>
    </div>`;
    panel.innerHTML = html;
  }
}

function render() {
  renderStepper();
  renderPanel();
}
function goStep(i) {
  currentStep = Math.max(0, Math.min(SECTIONS.length, i));
  render();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function updateField(key, value) {
  state[key] = value;
}
function updateMember(i, field, value) {
  state.equipo[i][field] = value;
}
function addMember() {
  state.equipo.push(emptyMember());
  renderPanel();
}
function removeMember(i) {
  state.equipo.splice(i, 1);
  renderPanel();
}
function updateVersion(i, field, value) {
  state.versiones[i][field] = value;
}
function addVersion() {
  state.versiones.push(emptyVersion());
  renderPanel();
}
function removeVersion(i) {
  state.versiones.splice(i, 1);
  renderPanel();
}

function addTag(key, value, single) {
  if (!value) return;
  if (single) {
    state[key] = [value];
  } else if (!state[key].includes(value)) {
    state[key].push(value);
  }
  renderPanel();
}
function removeTag(key, idx) {
  state[key].splice(idx, 1);
  renderPanel();
}
function handleTagInputKey(e, key, single) {
  if (e.key === "Enter" && e.target.value.trim()) {
    e.preventDefault();
    addTag(key, e.target.value.trim(), single);
  }
}

function escapeHtml(str) {
  return (str || "").replace(
    /[&<>]/g,
    (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;" })[c]
  );
}
function escapeAttr(str) {
  return (str || "").replace(/"/g, "&quot;");
}

/* ---------------------------- PDF GENERATION ---------------------------- */
function fmtDate(d) {
  if (!d) return "—";
  const parts = d.split("-");
  if (parts.length !== 3) return d;
  return `${parts[2]}/${parts[1]}/${parts[0]}`;
}

/* ---------------------------- LOGOS (para PDF, versión blanca sobre fondo oscuro) ---------------------------- */
const MICELIO_LOGO_WHITE_B64 =
  "data:image/png;base64,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tS09bz1gTHMDN7AeuPN1N0JERERERJppW3re9rHgKIZLHF/mv0+8/eFuQqtQioiIiIhIwTYEbyPg0wH5D7Beu+xnnT62Z9wOcGNAfZexuXnzgDJERERERKRjuh689YAZ/sMl78X2gps75htiQyB9g7j7gV3PvCIiIiIi0kFdD97OA/d45LuE9djNAuvfXbbBJ3h8dYT6RURERESkI7ocvPXw63WLverjAL/tCbT6pIiIiIiI/L4urza5SzMCpik2jPLAMd9t2Dw6ERERERGRTgdvO47pL3rkKWuKXwC3E7shIiIiIiLSTl0N3ka4Ld1/sMyT0hT3fdx2ordCRERERERaqavB29Ax/S7VLM2/h/XwlXUdNmdORERERES2XFeDt5FD2svYJt5VOe+YfpigDSIiIiIi0jJdDN56uA2Z3EvTjLUm2FYEZQ3TNENERERERNqki8HbwDH9foI2xKxzkKgNIiIiIiLSIl0M3oYOaS9RzVy3oolDWpdeRBERERER6aguBm8uJjXVO3VMP0jQBhERERERaZEuBm99h7TzRG0ow2XVyV6qRoiIiIiISDtse/A2TdQGERERERGRqLoYvLmY190AERERERGRMroYvM0c0g4TtUFERERERCSqbQ/e6nRj3Q0QEREREZH26GLw5mJYU719x/STBG0QEREREZEW6WLwNnFIeyP1rOQ4dEh7kKoRIiIiIiLSHl0M3maO6UcJ2rDJjkPaaaI2iIiIiIhIi3Q1eLvskH4nTTPW6uM2322SphkiIiIiItImXQzewH3o5DBNM1bac0w/SdAGERERERFpma4Gb2PH9PtUM/dtCNzikP4ABW8iIiIiIkK3gzeXhT6uw71HzFUP96DSNb2IiIiIiHRUV4M3cA98biPd/Lce1oN2xjHfXuyGiIiIiIhIO12zWCzqbkMqfeAZj3zvwIZRxtLDArcbHPNdpL596EREREREpGG63PM2Ax72yPcQ8ebADbCl/l0DN4DzEeoXEREREZGO6HLwBhYA+WxyfRsWdO141ttb1v0UNp/O1QW0UImIiIiIiOR0edhkZhf4SED+y1ggNgbmG9IOsIBvB/f5bZmDZTkzz/wiIiIiItJB2xC8gfViuWyMvc4lrEduVvj/IRZw+QZsebHn3ImIiIiISAdsS/DWwwKuGMFVSg+TbsVLERERERFpsa7PecvMsd4xn/lvVbmEDfEUERERERE5ZluCN7Dhjrs1t2GdS1hwOa+3GSIiIiIi0lTbFLyBzSV7B83qgVPgJiIiIiIiG23LnLeiAbaISd1z4C5gc9zm9TZDRERERESabtt63jJToA9crLEN9wIjFLiJiIiIiEgJ2xq8weEiJu+l2mGUl4DXY3vHiYiIiIiIlLLNwVtmD+uFezhxPZex+XYDrOdPRERERESktG2d87ZOH5uDtgNcF6nMi9hCKfuRyhMRERERkS2k4G29ETascgjc4Jj3IjBe/syitUhERERERLaWgrdyethwx/7yZ5UJNo9umrw1IiIiIiKydRS8iYiIiIiItIAWLBEREREREWkBBW8iIiIiIiItoOBNRERERESkBRS8iYiIiIiItICCNxERERERkRZQ8CYiIiIiItICCt5ERERERERaQMGbiIiIiIhICyh4ExERERERaYH/H3+O5hlZRT2vAAAAAElFTkSuQmCC";
const MICELIO_LOGO_WHITE_RATIO = 879 / 291;
const VRII_LOGO_WHITE_B64 =
  "data:image/png;base64,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MzMzMzMbUQ4IzczMzMzMRpQDQjMzMzMzsxHlgNDMzMzMzGxEOSA0MzMzMzMbUQ4IzczMzMzMRpQDQjMzMzMzsxHlgNDMzMzMzGxEOSA0MzMzMzMbUQ4IzczMzMzMRpQDQjMzMzMzsxHlgNDMzMzMzGxEOSA0MzMzMzMbUQ4IzczMzMzMRpQDQjMzMzMzsxHlgNDMzMzMzGxEOSA0MzMzMzMbUQ4IzczMzMzMRpQDQjMzMzMzsxHlgNDMzMzMzGxEOSA0MzMzMzMbUQ4IzczMzMzMRpQDQjMzMzMzsxHlgNDMzMzMzGxEOSA0MzMzMzMbUQ4IzczMzMzMRpQDQjMzMzMzsxHlgNDMzMzMzGxEOSA0MzMzMzMbUQ4IzczMzMzMRpQDQjMzMzMzsxHlgNDMzMzMzGxEOSA0MzMzMzMbUQ4IzczMzMzMRpQDQjMzMzMzsxHlgNDMzMzMzGxEOSA0MzMzMzMbUQ4IzczMzMzMRpQDQjMzMzMzsxHlgNDMzMzMzGxEOSA0MzMzMzMbUQ4IzczMzMzMRpQDQjMzMzMzsxHlgNDMzMzMzGxEOSA0MzMzMzMbUf8PTox7KTKpv7UAAAAASUVORK5CYII=";
const VRII_LOGO_WHITE_RATIO = 900 / 442;

function generatePDF() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF({ unit: "mm", format: "a4" });
  const pageW = 210,
    pageH = 297,
    margin = 18,
    contentW = pageW - margin * 2;
  const primary = [20, 49, 92],
    primaryLight = [44, 94, 168],
    accent = [232, 169, 61],
    text = [28, 36, 48],
    muted = [91, 107, 130],
    lightBg = [234, 241, 251];
  let y = 0;

  // ---------- COVER ----------
  doc.setFillColor(...primary);
  doc.rect(0, 0, pageW, 58, "F");
  // simple network logo
  doc.setFillColor(...accent);
  doc.circle(28, 20, 2.6, "F");
  doc.setFillColor(255, 255, 255);
  doc.circle(20, 32, 2.6, "F");
  doc.circle(36, 32, 2.6, "F");
  doc.setDrawColor(255, 255, 255);
  doc.setLineWidth(0.4);
  doc.line(28, 22, 20, 29);
  doc.line(28, 22, 36, 29);
  doc.line(20, 32, 36, 32);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10);
  doc.setTextColor(255, 255, 255);
  doc.text("MICELIO · PLATAFORMA PARA LA INVESTIGACIÓN UCA", 48, 22);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  doc.text("Universidad Centroamericana José Simeón Cañas", 48, 29);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(18);
  doc.text("Plan de Gestión de Datos", 48, 42);
  doc.text("de Investigación (PGDI)", 48, 50);

  // Logos institucionales (Micelio y VRII) en la esquina superior derecha
  const micH1 = 9,
    micW1 = micH1 * MICELIO_LOGO_WHITE_RATIO;
  const vriiH1 = 15,
    vriiW1 = vriiH1 * VRII_LOGO_WHITE_RATIO;
  doc.addImage(
    VRII_LOGO_WHITE_B64,
    "PNG",
    pageW - margin - vriiW1,
    8,
    vriiW1,
    vriiH1
  );
  doc.addImage(
    MICELIO_LOGO_WHITE_B64,
    "PNG",
    pageW - margin - micW1,
    8 + vriiH1 + 3,
    micW1,
    micH1
  );

  y = 78;
  doc.setTextColor(...primary);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(20);
  const titleLines = doc.splitTextToSize(
    state.nombre || "Título de la investigación sin definir",
    contentW
  );
  doc.text(titleLines, margin, y);
  y += titleLines.length * 8 + 6;

  doc.setDrawColor(...lightBg);
  doc.setLineWidth(0.6);
  doc.line(margin, y, pageW - margin, y);
  y += 12;

  const coverRows = [
    ["Código de la investigación", state.codigo || "—"],
    ["Fuente de financiamiento", state.fuente || "—"],
    [
      "Línea de investigación / Agenda",
      [...state.lineas, ...state.agenda].join(", ") || "—"
    ],
    ["Fecha de inicio", fmtDate(state.fechaInicio)],
    ["Fecha de fin", fmtDate(state.fechaFin)],
    ["Responsable de la gestión de datos", state.responsable || "—"]
  ];
  doc.setFontSize(10.5);
  coverRows.forEach((row) => {
    doc.setFont("helvetica", "bold");
    doc.setTextColor(...text);
    doc.text(row[0] + ":", margin, y);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(...muted);
    const lines = doc.splitTextToSize(row[1], contentW - 70);
    doc.text(lines, margin + 70, y);
    y += Math.max(lines.length * 5.2, 7);
  });

  y += 10;
  doc.setFillColor(...lightBg);
  doc.roundedRect(margin, y, contentW, 30, 2, 2, "F");
  doc.setFont("helvetica", "italic");
  doc.setFontSize(9);
  doc.setTextColor(...muted);
  doc.text(
    doc.splitTextToSize(
      'Documento generado con la Herramienta de captura de metadatos PGD, inspirada en la "Guía para elaborar Plan de Gestión de Datos de Investigación" de la Vicerrectoría de Investigación e Innovación — UCA / Micelio.',
      contentW - 10
    ),
    margin + 5,
    y + 7
  );
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8.5);
  doc.text(
    "Generado el " +
      new Date().toLocaleDateString("es-SV", {
        year: "numeric",
        month: "long",
        day: "numeric"
      }),
    margin + 5,
    y + 18
  );
  drawCCIcon(doc, margin + 8, y + 25, 2.4, muted);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8);
  doc.text(
    "Licencia Creative Commons Atribución 4.0 (CC BY 4.0)   ·   Powered by: Claude · Vicerrectoría de Investigación e Innovación UCA",
    margin + 15,
    y + 26
  );

  // ---------- CONTENT PAGES ----------
  doc.addPage();
  y = 24;
  drawHeader(doc, pageW, margin, primary, muted);

  function ensureSpace(h) {
    if (y + h > pageH - 26) {
      doc.addPage();
      y = 24;
      drawHeader(doc, pageW, margin, primary, muted);
    }
  }

  function sectionTitle(num, title) {
    ensureSpace(14);
    doc.setFillColor(...primary);
    doc.rect(margin, y, contentW, 9, "F");
    doc.setFont("helvetica", "bold");
    doc.setFontSize(11);
    doc.setTextColor(255, 255, 255);
    doc.text(`${num}. ${title.toUpperCase()}`, margin + 4, y + 6.2);
    y += 15;
  }

  function fieldRow(label, value) {
    const val = value && value.trim() ? value : "—";
    doc.setFont("helvetica", "bold");
    doc.setFontSize(9.5);
    const labelLines = doc.splitTextToSize(label, contentW);
    ensureSpace(labelLines.length * 4.6 + 4);
    doc.setFillColor(...lightBg);
    doc.rect(margin, y - 4, contentW, labelLines.length * 4.6 + 3, "F");
    doc.setTextColor(...primary);
    doc.text(labelLines, margin + 3, y);
    y += labelLines.length * 4.6 + 3;

    doc.setFont("helvetica", "normal");
    doc.setFontSize(9.5);
    doc.setTextColor(...text);
    const valueLines = doc.splitTextToSize(val, contentW - 6);
    ensureSpace(valueLines.length * 4.6 + 8);
    doc.text(valueLines, margin + 3, y);
    y += valueLines.length * 4.6 + 9;
  }

  function subCard(lines) {
    const wrapped = [];
    lines.forEach((l) => {
      const w = doc.splitTextToSize(l, contentW - 10);
      wrapped.push(...w);
    });
    const h = wrapped.length * 4.4 + 8;
    ensureSpace(h + 4);
    doc.setDrawColor(...primaryLight);
    doc.setLineWidth(0.3);
    doc.roundedRect(margin, y - 4, contentW, h, 1.5, 1.5, "S");
    doc.setFontSize(9);
    doc.setTextColor(...text);
    let ly = y + 1;
    wrapped.forEach((l, i) => {
      doc.setFont("helvetica", i === 0 ? "bold" : "normal");
      if (i === 0) doc.setTextColor(...primary);
      else doc.setTextColor(...text);
      doc.text(l, margin + 4, ly);
      ly += 4.4;
    });
    y += h + 5;
  }

  // Section 1
  sectionTitle("1", "Generalidades de la investigación");
  fieldRow("1.1 Nombre de la investigación", state.nombre);
  fieldRow("1.2 Fuente de financiamiento", state.fuente);
  fieldRow("1.3 Línea(s) de investigación", state.lineas.join("; "));
  fieldRow("1.3 Agenda de proyección social", state.agenda.join("; "));
  fieldRow("1.4 Código de la investigación", state.codigo);

  doc.setFont("helvetica", "bold");
  doc.setFontSize(9.5);
  ensureSpace(8);
  doc.setFillColor(...lightBg);
  doc.rect(margin, y - 4, contentW, 7, "F");
  doc.setTextColor(...primary);
  doc.text("1.5 Equipo de investigación", margin + 3, y);
  y += 9;
  const validMembers = state.equipo.filter((m) => m.nombre.trim());
  if (validMembers.length === 0) {
    subCard(["Sin integrantes registrados"]);
  }
  validMembers.forEach((m, i) => {
    subCard(
      [
        `${i + 1}. ${m.nombre}${m.rol ? " — " + m.rol : ""}`,
        m.departamento || "",
        m.institucion || "",
        m.orcid ? "ORCID: " + m.orcid : "",
        m.pais || ""
      ].filter(Boolean)
    );
  });
  y += 2;

  fieldRow("1.6 Datos de contacto principal", state.contacto);
  fieldRow(
    "1.7 Fecha de inicio y fin de la investigación",
    `${fmtDate(state.fechaInicio)} a ${fmtDate(state.fechaFin)}`
  );

  doc.setFont("helvetica", "bold");
  doc.setFontSize(9.5);
  ensureSpace(8);
  doc.setFillColor(...lightBg);
  doc.rect(margin, y - 4, contentW, 7, "F");
  doc.setTextColor(...primary);
  doc.text("1.8 Control de revisión del PGD", margin + 3, y);
  y += 9;
  const validVersions = state.versiones.filter(
    (v) => v.version.trim() || v.cambios.trim()
  );
  if (validVersions.length === 0) {
    subCard(["Sin historial de versiones registrado"]);
  }
  validVersions.forEach((v) => {
    subCard([
      `Versión ${v.version || "—"}   ·   ${fmtDate(v.fecha)}`,
      v.cambios || "Sin descripción de cambios"
    ]);
  });
  y += 2;

  fieldRow("1.9 Responsable de la gestión de los datos", state.responsable);

  // Section 2
  sectionTitle("2", "Descripción de los datos");
  fieldRow(
    "2.1 Breve descripción de los tipos de datos por generar o recopilar",
    state.d21
  );
  fieldRow("2.2 Descripción del diseño del estudio y métodos", state.d22);
  fieldRow(
    "2.3 Reutilización de datos existentes (UCA u otras fuentes)",
    state.d23
  );
  fieldRow(
    "2.4 Formatos de los datos de la investigación",
    state.formatos.join(", ")
  );
  fieldRow(
    "2.5 Volumen o tamaño estimado de los datos",
    state.volumen.join("")
  );

  // Section 3
  sectionTitle("3", "Calidad de los datos y la documentación");
  fieldRow("3.1 Medidas de control de calidad de los datos", state.c31);
  fieldRow("3.2 Documentación que acompañará a los datos", state.c32);

  // Section 4
  sectionTitle("4", "Accesibilidad y reutilización de los datos");
  fieldRow("4.1 Datos seleccionados para depositar en Micelio", state.a41);
  fieldRow(
    "4.2 Herramientas informáticas, software y/o hardware necesarios",
    state.a42
  );
  fieldRow(
    "4.3 Grupos, organismos o líneas de investigación a quienes podrán ser útiles",
    state.a43
  );

  // Section 5
  sectionTitle("5", "Requerimientos éticos y legales");
  fieldRow(
    "5.1 Problemas éticos/legales, uso de datos personales y consentimiento informado",
    state.e51
  );
  fieldRow("5.2 Evaluación del Comité de Ética", state.e52);
  fieldRow("5.3 Restricciones de acceso a los datos", state.e53);
  fieldRow(
    "5.4 Cuestiones jurídicas: propiedad intelectual y titularidad",
    state.e54
  );
  fieldRow("5.5 Licenciamiento de los datos", state.e55);

  // Footer on all pages
  const totalPages = doc.internal.getNumberOfPages();
  for (let p = 2; p <= totalPages; p++) {
    doc.setPage(p);
    doc.setDrawColor(...lightBg);
    doc.setLineWidth(0.3);
    doc.line(margin, pageH - 19, pageW - margin, pageH - 19);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(8);
    doc.setTextColor(...muted);
    doc.text(
      "Plan de Gestión de Datos de Investigación (PGDI) · UCA / Micelio",
      margin,
      pageH - 15
    );
    doc.text(
      `Página ${p - 1} de ${totalPages - 1}`,
      pageW - margin - 25,
      pageH - 15
    );

    drawCCIcon(doc, margin + 2.2, pageH - 8, 1.9, muted);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(7);
    doc.text(
      "CC BY 4.0 · Powered by: Claude · Vicerrectoría de Investigación e Innovación UCA",
      margin + 7.5,
      pageH - 7.2
    );
  }

  const fileName = state.nombre
    ? state.nombre
        .replace(/[^\w\s-]/g, "")
        .trim()
        .replace(/\s+/g, "_")
        .slice(0, 60)
    : "plan_gestion_datos";
  doc.save(`PGDI_${fileName || "sin_titulo"}.pdf`);
}

function drawHeader(doc, pageW, margin, primary, muted) {
  doc.setFillColor(...primary);
  doc.rect(0, 0, pageW, 13, "F");
  doc.setFont("helvetica", "bold");
  doc.setFontSize(8.5);
  doc.setTextColor(255, 255, 255);
  doc.text(
    "PGDI · UNIVERSIDAD CENTROAMERICANA JOSÉ SIMEÓN CAÑAS · MICELIO",
    margin,
    8.3
  );
  const micH = 6,
    micW = micH * MICELIO_LOGO_WHITE_RATIO;
  const vriiH = 7.5,
    vriiW = vriiH * VRII_LOGO_WHITE_RATIO;
  doc.addImage(
    VRII_LOGO_WHITE_B64,
    "PNG",
    pageW - margin - vriiW - micW - 4,
    2.8,
    vriiW,
    vriiH
  );
  doc.addImage(
    MICELIO_LOGO_WHITE_B64,
    "PNG",
    pageW - margin - micW,
    3.5,
    micW,
    micH
  );
}

function drawCCIcon(doc, x, y, r, muted) {
  doc.setDrawColor(...muted);
  doc.setLineWidth(0.25);
  doc.circle(x, y, r, "S");
  doc.setFont("helvetica", "bold");
  doc.setFontSize(r * 3.1);
  doc.setTextColor(...muted);
  doc.text("cc", x, y + r * 0.35, { align: "center" });
  const x2 = x + r * 2.3;
  doc.circle(x2, y, r, "S");
  doc.setFillColor(...muted);
  doc.circle(x2, y - r * 0.32, r * 0.26, "F");
  doc.ellipse(x2, y + r * 0.42, r * 0.5, r * 0.32, "F");
}

/* ---------------------------- INIT ---------------------------- */
render();
