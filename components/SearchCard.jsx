"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Search, ArrowRight, CircleCheck } from "lucide-react";
import { DEMO_CODE, loteHref } from "../lib/lotes";

export default function SearchCard() {
  const [codigo, setCodigo] = useState("");
  const [erro, setErro] = useState("");
  const router = useRouter();

  function consultar(valor) {
    const c = valor.trim();
    if (!c) return setErro("Informe o código impresso no lote.");
    if (!/^[A-Za-z0-9][A-Za-z0-9-]{2,39}$/.test(c))
      return setErro("Use apenas letras, números e hífens (ex: LOTE-2026-X).");
    setErro("");
    router.push(loteHref(c.toUpperCase()));
  }

  return (
    <div>
      <form
        onSubmit={(e) => { e.preventDefault(); consultar(codigo); }}
        className="rounded-2xl bg-white p-3 shadow-[0_10px_40px_-12px_rgba(0,0,0,0.15)]"
      >
        <label htmlFor="codigo" className="block px-2 pb-2 pt-1 text-[10px] font-semibold uppercase tracking-label text-sage">
          Código do lote
        </label>
        <div className="flex flex-col gap-2 sm:flex-row">
          <div className="relative flex-1">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-sage" />
            <input
              id="codigo"
              value={codigo}
              onChange={(e) => { setCodigo(e.target.value); if (erro) setErro(""); }}
              placeholder="Ex.: LOTE-2026-X"
              autoComplete="off"
              aria-invalid={!!erro}
              className="h-12 w-full rounded-xl border border-black/10 bg-canvas pl-11 pr-4 text-sm outline-none placeholder:text-sage/70 focus:border-ink"
            />
          </div>
          <button
            type="submit"
            className="flex h-12 items-center justify-center gap-2 rounded-xl bg-ink px-6 text-sm font-semibold text-white transition hover:bg-black"
          >
            Consultar lote <ArrowRight className="h-4 w-4" />
          </button>
        </div>
        {erro && <p role="alert" className="px-2 pt-3 text-sm text-red-700">{erro}</p>}
      </form>

      <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 px-1 text-xs text-sage">
        <span className="flex items-center gap-1.5"><CircleCheck className="h-3.5 w-3.5" /> Consulta simples e gratuita</span>
        <button
          type="button"
          onClick={() => { setCodigo(DEMO_CODE); consultar(DEMO_CODE); }}
          className="flex items-center gap-1 border-b border-ink/40 font-medium text-ink"
        >
          Testar com um lote de demonstração <ArrowRight className="h-3 w-3" />
        </button>
      </div>
    </div>
  );
}


