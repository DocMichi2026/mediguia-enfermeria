function asegurarArray(valor) {
  if (Array.isArray(valor)) return valor;
  if (valor == null) return [];
  return [valor];
}

function normalizarDiagnosticos(lista) {
  return asegurarArray(lista).map((dx) => {
    if (typeof dx === "string") return dx;
    if (!dx || typeof dx !== "object") return "Diagnóstico NANDA";

    const relacionado = dx.relacionado_con
      ? ` relacionado con ${dx.relacionado_con}`
      : "";

    const evidenciado = Array.isArray(dx.evidenciado_por) && dx.evidenciado_por.length
      ? ` evidenciado por ${dx.evidenciado_por.join(", ")}`
      : "";

    return `${dx.nombre || "Diagnóstico NANDA"}${relacionado}${evidenciado}`;
  });
}

function normalizarPatologia(item) {
  if (typeof item === "string") {
    return {
      id: "",
      nombre: item,
      descripcion: "Patología cargada desde la base.",
      categoria: "General",
      sinonimos: [],
      signos_sintomas: [],
      factores_riesgo: [],
      complicaciones: [],
      valoracion: [],
      nanda: [],
      noc: [],
      nic: [],
      cuidados: [],
      observaciones: "",
      original: item,
    };
  }

  return {
    id: item.id || "",
    nombre: item.nombre || item.patologia || item.titulo || "Patología sin nombre",
    descripcion:
      item.descripcion_breve ||
      item.descripcion ||
      item.definicion ||
      item.resumen ||
      "Patología cargada desde la base.",
    categoria: item.categoria || "General",
    sinonimos: asegurarArray(item.sinonimos),
    signos_sintomas: asegurarArray(item.signos_sintomas || item.signos || item.sintomas),
    factores_riesgo: asegurarArray(item.factores_riesgo),
    complicaciones: asegurarArray(item.complicaciones),
    valoracion: asegurarArray(item.valoracion_enfermeria || item.valoracion),
    nanda: normalizarDiagnosticos(item.diagnosticos_nanda_sugeridos || item.nanda || item.diagnosticos),
    noc: asegurarArray(item.noc_sugeridos || item.noc),
    nic: asegurarArray(item.nic_sugeridos || item.nic),
    cuidados: asegurarArray(item.cuidados_generales || item.cuidados),
    observaciones: item.observaciones || "",
    original: item,
  };
}

async function cargarPatologiasDesdeJSON(ruta = "data/patologias.json") {
  const response = await fetch(`${ruta}?t=${Date.now()}`);

  if (!response.ok) {
    throw new Error("No se pudo leer el archivo JSON");
  }

  const data = await response.json();
  const lista = Array.isArray(data) ? data : data.patologias || data.items || [];

  return lista.map(normalizarPatologia);
}
