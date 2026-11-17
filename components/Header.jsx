import Link from "next/link";
import { Mountain, ArrowUpRight } from "lucide-react";
import { DEMO_CODE, loteHref } from "../lib/lotes";

export default function Header() {
  return (
    <header className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5 sm:px-8">
      <Link href="/" className="flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-ink text-white">
          <Mountain className="h-5 w-5" />
        </span>
        <span className="leading-tight">
          <span className="block text-sm font-bold uppercase tracking-wide">Pedra São Thomé</span>
          <span className="block text-[10px] uppercase tracking-label text-sage">Origem rastreável</span>
        </span>
      </Link>
      <nav className="hidden items-center gap-8 text-sm text-sage md:flex">
        <Link href="/#como-funciona" className="hover:text-ink">Como funciona</Link>
        <Link href="/#sobre" className="hover:text-ink">Sobre a indicação</Link>
      </nav>
      <Link
        href={loteHref(DEMO_CODE)}
        className="flex items-center gap-2 rounded-xl border border-black/10 bg-white px-4 py-2.5 text-sm font-semibold shadow-sm transition hover:bg-mist"
      >
        <span className="hidden sm:inline">Ver demonstração</span>
        <span className="sm:hidden">Demo</span>
        <ArrowUpRight className="h-4 w-4" />
      </Link>
    </header>
  );
}

