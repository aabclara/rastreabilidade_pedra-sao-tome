"use client";

import { useState } from "react";
import { ScanLine, Check } from "lucide-react";

// Copia o link da consulta (o mesmo que o QR Code do lote abriria).
export default function CopyLinkButton() {
  const [ok, setOk] = useState(false);

  async function copiar() {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setOk(true);
      setTimeout(() => setOk(false), 2000);
    } catch {
      window.prompt("Copie o link desta consulta:", window.location.href);
    }
  }

  return (
    <button
      type="button"
      onClick={copiar}
      title="Copiar link desta consulta"
      aria-label="Copiar link desta consulta"
      className="flex h-10 items-center gap-2 rounded-xl bg-white/10 px-3 text-xs text-white transition hover:bg-white/20"
    >
      {ok ? <><Check className="h-4 w-4" /> Link copiado</> : <ScanLine className="h-5 w-5" />}
    </button>
  );
}

