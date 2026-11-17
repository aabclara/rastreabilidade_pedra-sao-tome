import Link from "next/link";
import {
  ArrowLeft, ArrowRight, CircleCheck, MapPin, CalendarDays, Pickaxe, FileCheck, ClipboardCheck,
  Layers, Ruler, Sprout, Box, Tag, ShieldCheck, SearchX,
} from "lucide-react";
import { getLote } from "../../../lib/lotes";
import CopyLinkButton from "../../../components/CopyLinkButton";

function Label({ children }) {
  return <p className="mb-3 text-[11px] font-semibold uppercase tracking-label text-sage">{children}</p>;
}

function Step({ n, icon: Icon, rotulo, titulo, detalhe, ativo, href }) {
  const body = (
    <div className={`h-full rounded-3xl border p-6 transition ${ativo ? "border-black/10 bg-[#E9EDE3]" : "border-black/5 bg-white hover:border-black/20"}`}>
      <div className="mb-8 flex items-start justify-between">
        <span className={`flex h-10 w-10 items-center justify-center rounded-xl ${ativo ? "bg-leaf text-leafink" : "bg-mist"}`}><Icon className="h-4 w-4" /></span>
        <span className="text-xs text-sage">0{n}</span>
      </div>
      <p className="mb-1 text-[10px] font-semibold uppercase tracking-label text-sage">{rotulo}</p>
      <p className="mb-1 text-lg font-semibold">{titulo}</p>
      <p className="text-xs text-sage">{detalhe}</p>
    </div>
  );
  return href ? <Link href={href} className="block">{body}</Link> : body;
}

function Spec({ icon: Icon, label, valor, detalhe }) {
  return (
    <div className="rounded-2xl border border-black/5 bg-white p-5">
      <div className="mb-6 flex items-center justify-between text-xs text-sage">
        <span>{label}</span><Icon className="h-4 w-4" />
      </div>
      <p className="mb-1 text-lg font-semibold">{valor}</p>
      <p className="text-xs text-sage">{detalhe}</p>
    </div>
  );
}

export default async function LotePage({ params }) {
  const { codigo } = await params;
  const lote = getLote(decodeURIComponent(codigo));

  if (!lote) {
    return (
      <main className="mx-auto max-w-xl px-5 py-20 text-center sm:px-8">
        <span className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-mist"><SearchX className="h-6 w-6" /></span>
        <h1 className="mb-3 text-3xl font-semibold tracking-tight">Lote não encontrado</h1>
        <p className="mb-8 text-sm text-sage">
          Não localizamos o código <strong className="text-ink">{decodeURIComponent(codigo)}</strong>. Confira a etiqueta e tente novamente.
        </p>
        <Link href="/" className="inline-flex items-center gap-2 rounded-xl bg-ink px-6 py-3 text-sm font-semibold text-white">
          <ArrowLeft className="h-4 w-4" /> Voltar para consulta
        </Link>
      </main>
    );
  }

  const fracionado = lote.tipo === "Fracionado";
  const s = lote.specs;

  return (
    <main className="mx-auto max-w-6xl px-5 pb-16 sm:px-8">
      <Link href="/" className="mb-5 inline-flex items-center gap-2 text-xs text-sage hover:text-ink">
        <ArrowLeft className="h-3.5 w-3.5" /> Voltar para consulta
      </Link>

      {/* Cabeçalho */}
      <section className="grid gap-4 lg:grid-cols-[1.7fr_1fr]">
        <div className="rounded-[2rem] border border-black/5 bg-white p-6 sm:p-10">
          <div className="mb-8 flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-leaf px-3 py-1.5 text-xs font-semibold text-leafink">
              <CircleCheck className="h-3.5 w-3.5" /> Origem verificada
            </span>
            <span className="rounded-full border border-black/10 px-3 py-1.5 text-xs text-sage">Demonstração</span>
          </div>
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-label text-sage">Consulta de procedência</p>
          <h1 className="mb-5 break-words text-4xl font-semibold tracking-tight sm:text-5xl">Lote: {lote.codigo}</h1>
          <p className="mb-8 max-w-xl text-base text-sage">
            Este registro demonstra o vínculo do material com a {lote.origem}.
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-black/5 pt-5 text-xs text-sage">
            <span className="flex items-center gap-2"><MapPin className="h-4 w-4" /> {lote.local}</span>
            <span className="flex items-center gap-2"><CalendarDays className="h-4 w-4" /> Atualizado em {lote.atualizado}</span>
          </div>
        </div>

        <div className="flex flex-col justify-between rounded-[2rem] bg-ink p-6 text-white sm:p-8">
          <div className="flex items-center justify-between">
            <p className="text-[11px] font-semibold uppercase tracking-label text-white/60">Vínculo do lote</p>
            <CopyLinkButton />
          </div>
          <div className="my-12">
            <p className="mb-2 text-2xl font-semibold">Lote {lote.tipo.toLowerCase()}</p>
            <p className="text-sm text-white/60">{lote.resumo}</p>
          </div>
          <div className="flex items-center justify-between border-t border-white/10 pt-4 text-xs">
            <span className="text-white/60">Lote de origem</span>
            <Link href={`/lote/${lote.original.codigo}`} className="font-mono font-semibold hover:underline">{lote.original.codigo}</Link>
          </div>
        </div>
      </section>

      {/* Caminho */}
      <section className="pt-16">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <Label>Origem e fracionamento</Label>
            <h2 className="text-3xl font-semibold tracking-tight">O caminho deste material</h2>
          </div>
          <p className="hidden text-xs text-sage sm:block">Vínculo demonstrativo entre registros</p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          <Step n={1} icon={Pickaxe} rotulo="Extração" titulo={lote.pedreira.nome} detalhe={lote.pedreira.detalhe} />
          <Step n={2} icon={FileCheck} rotulo="Lote original" titulo={lote.original.codigo} detalhe={lote.original.detalhe}
            ativo={!fracionado} href={fracionado ? `/lote/${lote.original.codigo}` : undefined} />
          {lote.fracionamento ? (
            <Step n={3} icon={ClipboardCheck} rotulo="Fracionamento" titulo={lote.fracionamento.codigo} detalhe={lote.fracionamento.detalhe} ativo />
          ) : (
            <Step n={3} icon={ClipboardCheck} rotulo="Fracionamento" titulo="Sem fracionamento" detalhe="Consulte o lote fracionado de demonstração"
              href="/lote/LOTE-2026-X" />
          )}
        </div>
      </section>

      {/* Ficha */}
      <section className="pt-16">
        <div className="mb-6 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
          <div>
            <Label>Ficha do material</Label>
            <h2 className="text-3xl font-semibold tracking-tight">Especificações do lote</h2>
          </div>
          <span className="inline-flex w-fit items-center gap-2 rounded-full bg-leaf px-3 py-1.5 text-xs font-medium text-leafink">
            <ShieldCheck className="h-3.5 w-3.5" /> Indicação Geográfica · Região Pedra São Thomé
          </span>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Spec icon={Layers} label="Tipo de material" {...s.material} />
          <Spec icon={Ruler} label="Cor e espessura" {...s.cor} />
          <Spec icon={CircleCheck} label="Classificação" {...s.classificacao} />
          <Spec icon={Sprout} label="Licença ambiental" {...s.licenca} />
          <Spec icon={Box} label="Disponibilidade" {...s.disponibilidade} />
          <Spec icon={Tag} label="Informação comercial" {...s.comercial} />
        </div>
      </section>

      <p className="mt-8 rounded-xl border border-black/5 bg-white/70 px-4 py-3 text-xs text-sage">
        Os dados desta tela são fictícios e servem apenas para demonstração da experiência. Confirme as informações diretamente com o fornecedor e com os órgãos responsáveis.
      </p>

      <section className="mt-8 flex flex-col items-start justify-between gap-4 rounded-3xl bg-mist p-6 sm:flex-row sm:items-center sm:px-8">
        <div>
          <p className="font-semibold">Consulte outro lote</p>
          <p className="text-xs text-sage">Tenha o código impresso na etiqueta em mãos.</p>
        </div>
        <Link href="/" className="inline-flex items-center gap-2 rounded-xl bg-ink px-6 py-3 text-sm font-semibold text-white hover:bg-black">
          Nova consulta <ArrowRight className="h-4 w-4" />
        </Link>
      </section>
    </main>
  );
}
