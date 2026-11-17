import { CircleCheck, ArrowDown, Mountain, Fingerprint, ShieldCheck, ScanLine } from "lucide-react";
import SearchCard from "../components/SearchCard";

const faixa = [
  { icon: Mountain, titulo: "Origem identificada", texto: "Vínculo com a Região Pedra São Thomé." },
  { icon: Fingerprint, titulo: "Rastreio do fracionamento", texto: "Consulte o vínculo com o lote de origem." },
  { icon: ShieldCheck, titulo: "Informação transparente", texto: "Características e dados reunidos por lote." },
];

const passos = [
  { icon: ScanLine, titulo: "Leia ou digite", texto: "Use a câmera do celular para abrir o QR Code ou informe o código impresso no lote." },
  { icon: Fingerprint, titulo: "Confira a origem", texto: "Veja a pedreira de origem e o vínculo entre o lote original e seus fracionamentos." },
  { icon: ShieldCheck, titulo: "Decida com confiança", texto: "Consulte características do material, informações ambientais e disponibilidade." },
];

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-16 pt-6 sm:px-8 lg:grid-cols-2 lg:pt-10">
        <div>
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-1.5 text-[10px] font-semibold uppercase tracking-label text-sage">
            <CircleCheck className="h-3.5 w-3.5" /> Indicação Geográfica · Região Pedra São Thomé
          </span>
          <h1 className="mb-6 text-5xl font-semibold leading-[1.02] tracking-tighter sm:text-6xl lg:text-7xl">
            A origem da sua pedra, <em className="font-serif font-normal text-sage">à vista.</em>
          </h1>
          <p className="mb-8 max-w-md text-base leading-relaxed text-sage">
            Verifique a procedência da Pedra São Thomé e conheça o caminho do material, da pedreira até o seu projeto.
          </p>
          <SearchCard />
          <a href="#como-funciona" className="mt-10 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-label text-sage hover:text-ink">
            Entenda como funciona <ArrowDown className="h-3.5 w-3.5" />
          </a>
        </div>

        {/* Imagem: coloque public/hero.jpg para substituir o degradê */}
        <div className="relative">
          <div
            className="relative flex aspect-[4/3] flex-col justify-between overflow-hidden rounded-[2rem] p-6 text-white sm:p-8 lg:aspect-[5/4]"
            style={{
              backgroundImage:
                "linear-gradient(to top, rgba(20,22,18,.75), rgba(20,22,18,.05) 55%), url('/hero.jpg'), linear-gradient(135deg,#9aa38b,#6b7260 60%,#4a4f42)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <span className="w-fit rounded-full bg-white px-3 py-1.5 text-xs font-medium text-ink">
              <span className="mr-2 inline-block h-2 w-2 rounded-full bg-sage" />
              Origem em São Thomé das Letras, MG
            </span>
            <div>
              <p className="mb-2 text-[10px] font-semibold uppercase tracking-label text-white/80">Rastreabilidade em cada etapa</p>
              <p className="max-w-[16rem] text-3xl font-semibold leading-tight tracking-tight">Uma pedra. Uma origem. Uma história.</p>
            </div>
          </div>
          <div className="mt-4 flex items-center gap-3 rounded-2xl bg-white p-4 shadow-xl sm:absolute sm:-bottom-6 sm:right-[-0.5rem] sm:mt-0 sm:w-64">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-mist"><ShieldCheck className="h-5 w-5" /></span>
            <span className="text-sm leading-tight">
              <strong className="block">Procedência documentada</strong>
              <span className="text-xs text-sage">Dados do lote em um só lugar</span>
            </span>
          </div>
        </div>
      </section>

      {/* Faixa */}
      <section className="border-y border-black/5 bg-white/60">
        <div className="mx-auto grid max-w-6xl gap-6 px-5 py-6 sm:px-8 md:grid-cols-3 md:divide-x md:divide-black/10">
          {faixa.map(({ icon: Icon, titulo, texto }) => (
            <div key={titulo} className="flex items-center gap-3 md:px-6 md:first:pl-0">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-mist"><Icon className="h-4 w-4" /></span>
              <span className="text-sm leading-tight">
                <strong className="block">{titulo}</strong>
                <span className="text-xs text-sage">{texto}</span>
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Como funciona */}
      <section id="como-funciona" className="mx-auto max-w-6xl scroll-mt-6 px-5 py-20 sm:px-8">
        <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-label text-sage">Do código à confiança</p>
            <h2 className="text-4xl font-semibold tracking-tight">Rastrear é simples.</h2>
          </div>
          <p className="max-w-xs text-sm text-sage">Acesse as informações essenciais para conhecer a origem e as características do lote.</p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {passos.map(({ icon: Icon, titulo, texto }, i) => (
            <div key={titulo} className="rounded-3xl border border-black/5 bg-white p-6">
              <div className="mb-10 flex items-start justify-between">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-mist"><Icon className="h-5 w-5" /></span>
                <span className="text-xs text-sage">0{i + 1}</span>
              </div>
              <h3 className="mb-2 text-lg font-semibold">{titulo}</h3>
              <p className="text-sm leading-relaxed text-sage">{texto}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Sobre */}
      <section id="sobre" className="mx-auto max-w-6xl scroll-mt-6 px-5 pb-12 sm:px-8">
        <div className="rounded-3xl bg-mist p-8">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-label text-sage">Sobre a indicação</p>
          <p className="max-w-2xl text-sm leading-relaxed text-sage">
            A Indicação Geográfica Região Pedra São Thomé identifica o quartzito extraído e beneficiado em São Thomé das Letras (MG) e região,
            reconhecendo a origem e a qualidade do material.
          </p>
        </div>
        <p className="mt-8 text-xs text-sage">Protótipo demonstrativo: os dados exibidos são fictícios e não substituem uma certificação ou consulta oficial.</p>
      </section>
    </main>
  );
}
