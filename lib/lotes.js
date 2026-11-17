// Dados fictícios (demonstração). Códigos aceitos: LOTE-2026-X (fracionado) e ORIG-SMT-2026-041 (original).
const base = {
  origem: "Indicação Geográfica Região Pedra São Thomé",
  local: "São Thomé das Letras · MG",
  atualizado: "22 abr 2026",
  pedreira: { nome: "Pedreira Serra Branca", detalhe: "São Thomé das Letras · MG · 04 abr 2026" },
  original: { codigo: "ORIG-SMT-2026-041", detalhe: "Beneficiadora Pedra Clara · registro de origem" },
  specs: {
    material: { valor: "Quartzito natural", detalhe: "Quartzito natural da região" },
    cor: { valor: "Branca e bege", detalhe: "2 a 3 cm" },
    classificacao: { valor: "Seleção comercial", detalhe: "Seleção informada para o lote" },
    licenca: { valor: "Licença ativa", detalhe: "Status demonstrativo · LO 000/2026" },
    disponibilidade: { valor: "1.250 m² disponíveis", detalhe: "Consulte o fornecedor para confirmar" },
    comercial: { valor: "Preço sob consulta", detalhe: "Valores sujeitos à confirmação" },
  },
};

const LOTES = {
  "LOTE-2026-X": {
    ...base,
    codigo: "LOTE-2026-X",
    tipo: "Fracionado",
    resumo: "Revenda vinculada ao lote original de extração.",
    fracionamento: { codigo: "LOTE-2026-X", detalhe: "Lote comercial · 18 abr 2026" },
  },
  "ORIG-SMT-2026-041": {
    ...base,
    codigo: "ORIG-SMT-2026-041",
    tipo: "Original",
    resumo: "Lote original de extração, sem fracionamento de revenda.",
    fracionamento: null,
    specs: { ...base.specs, disponibilidade: { valor: "4.800 m² disponíveis", detalhe: "Consulte o fornecedor para confirmar" } },
  },
};

export const DEMO_CODE = "LOTE-2026-X";

export function getLote(codigo) {
  return LOTES[String(codigo || "").trim().toUpperCase()] || null;
}

export const loteHref = (codigo) => `/lote?codigo=${encodeURIComponent(codigo)}`;
