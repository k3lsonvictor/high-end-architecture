import Hero from "./components/Hero";

export default function Home() {
  return (
    <main>
      <Hero />

      {/* Placeholder next section so scrolling past the hero feels natural */}
      <section className="flex min-h-screen items-center justify-center bg-cream px-10 text-ink">
        <div className="max-w-xl text-center">
          <p className="mb-3 text-[11px] uppercase tracking-widest text-ink/50">
            PORTFÓLIO
          </p>
          <h2 className="font-display text-4xl leading-tight sm:text-5xl">
            Projetos que refletem identidade e excelência.
          </h2>
          <p className="mt-4 text-sm text-ink/70">
            Conheça uma seleção de projetos desenvolvidos para transformar ideias
            em espaços sofisticados, funcionais e atemporais.
          </p>
        </div>
      </section>
    </main>
  );
}
