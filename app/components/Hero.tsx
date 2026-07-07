"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const NAV_ITEMS = ["INIÍCIO", "SOBRE", "PROJETOS", "SERVIÇOS", "CONTATOS"];

const TRAITS = ["Residências Exclusivas", "Alto Padrão", "Design Atemporal"];

export default function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);

  // Scroll progress across the whole (tall) hero section.
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Each layer moves at its own rate -> classic multi-plane parallax.
  const skyY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const hillsY = useTransform(scrollYProgress, [0, 1], [0, 30]);
  const houseY = useTransform(scrollYProgress, [0, 1], [0, -70]);
  const houseScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);

  const terraY = useTransform(scrollYProgress, [0, 1], [0, -220]);
  const terraOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const cottaY = useTransform(scrollYProgress, [0, 1], [0, -140]);
  const cottaOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const cardY = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const cardOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const traitsY = useTransform(scrollYProgress, [0, 1], [0, -60]);

  const footerY = useTransform(scrollYProgress, [0, 1], [40, -20]);
  const footerOpacity = useTransform(scrollYProgress, [0.15, 0.5], [0, 1]);

  return (
    <section ref={sectionRef} className="relative h-[220vh] bg-ink">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* ---------- Background planes (parallax) ---------- */}
        <motion.div
          style={{ y: skyY }}
          className="absolute inset-0"
        >
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 120% 60% at 50% -10%, #3a3f42 0%, #202325 45%, #101210 100%)",
            }}
          />
          {/* cloud smudges */}
          <div
            className="absolute inset-0 opacity-60 mix-blend-screen"
            style={{
              background:
                "radial-gradient(ellipse 40% 20% at 20% 15%, rgba(255,255,255,0.08), transparent 60%), radial-gradient(ellipse 30% 15% at 70% 8%, rgba(255,255,255,0.06), transparent 60%)",
            }}
          />
        </motion.div>

        <motion.div style={{ y: hillsY }} className="absolute inset-x-0 bottom-0 h-[55%]">
          {/* rolling hill silhouettes */}
          <svg
            viewBox="0 0 1440 500"
            preserveAspectRatio="none"
            className="absolute inset-0 h-full w-full"
          >
            <path
              d="M0,260 C 220,180 380,320 620,260 C 860,200 1040,300 1440,220 L1440,500 L0,500 Z"
              fill="#1b1a17"
            />
            <path
              d="M0,340 C 260,300 460,400 760,340 C 1040,290 1220,380 1440,330 L1440,500 L0,500 Z"
              fill="#141311"
            />
          </svg>
        </motion.div>

        {/* ---------- House illustration ---------- */}
        <motion.div
          style={{ y: houseY, scale: houseScale }}
          className="absolute inset-x-0 bottom-[0%] z-20 flex justify-center w-full h-full"
        >
          <Image
            src="/home.png"
            alt="House"
            fill
            className="pointer-events-none select-none object-cover"
          />
        </motion.div>
        <motion.div
          style={{ y: houseY, scale: houseScale }}
          className="absolute inset-x-0 bottom-[0%] z-18 flex justify-center w-full h-full"
        >
          <Image
            src="/home1.jpg"
            alt="House"
            fill
            className="pointer-events-none select-none object-cover"
          />
        </motion.div>

        {/* foreground grass */}
        <div className="absolute inset-x-0 bottom-0 h-[18%] z-20">
          <svg viewBox="0 0 1440 200" preserveAspectRatio="none" className="h-full w-full">
            <path
              d="M0,60 C 200,20 300,90 500,50 C 750,0 950,80 1200,40 C 1320,20 1400,50 1440,40 L1440,200 L0,200 Z"
              fill="#0c0d0b"
            />
          </svg>
        </div>

        {/* ---------- Nav ---------- */}
        <nav className="absolute inset-x-0 top-0 z-30 flex items-center justify-between px-6 py-6 sm:px-10">
          <div className="hidden items-center gap-2 md:flex">
            {NAV_ITEMS.map((item, i) => (
              <button
                key={item}
                className={`rounded-full border px-4 py-2 text-[11px] font-medium tracking-wide transition-colors ${i === 0
                  ? "border-cream bg-cream text-ink"
                  : "border-white/25 text-cream/80 hover:border-white/60"
                  }`}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="hidden items-center gap-6 text-[11px] font-medium tracking-wide text-cream md:flex">
            <span className="flex items-center gap-2">
              SOLICITAR PROJETO
              <span aria-hidden>→</span>
            </span>
          </div>
        </nav>

        {/* ---------- Studio label + year ---------- */}
        <div className="absolute inset-x-0 top-24 z-20 flex justify-between px-6 text-[11px] uppercase tracking-wide text-cream/70 sm:px-10">
          <span>ZROBIM architects</span>
          <span className="text-right">
            DESDE 2026
            <br />
            <span className="text-cream/50">ARQUITETURA CONTEMPORÂNEA</span>
          </span>
        </div>

        {/* ---------- Right-side trait list ---------- */}
        <motion.ul
          style={{ y: traitsY }}
          className="absolute right-6 top-40 z-20 hidden space-y-1 text-right text-[11px] uppercase tracking-wide text-cream/80 sm:right-10 md:block"
        >
          {TRAITS.map((t) => (
            <li key={t}>— {t}</li>
          ))}
        </motion.ul>

        {/* ---------- Giant parallax title ---------- */}
        <motion.h1
          style={{ y: terraY, opacity: terraOpacity }}
          className="pointer-events-none absolute inset-x-0 top-[14%] -left-[1350px] z-19 select-none text-center font-display leading-none text-cream"
        >
          <span className="block text-[22vw] tracking-tight sm:text-[10vw]">
            TERRA
          </span>
        </motion.h1>

        <motion.span
          style={{ y: cottaY, opacity: cottaOpacity }}
          className="pointer-events-none absolute right-[8%] top-[46%] z-30 select-none font-script text-[9vw] italic text-cream sm:text-[6vw]"
        >
          cotta
        </motion.span>

        {/* ---------- Floating project info card ---------- */}
        <motion.div
          style={{ y: cardY, opacity: cardOpacity }}
          className="absolute left-[8%] top-[58%] z-20 hidden max-w-xs rounded-2xl border border-white/15 bg-black/40 p-5 text-[12px] leading-relaxed text-cream/90 backdrop-blur-md sm:block"
        >
          {/* <span className="absolute -left-6 top-6 h-2 w-2 rounded-full bg-cream" /> */}
          {/* <span className="absolute -left-6 top-7 h-10 w-px bg-white/40" /> */}
          <p>
            <strong>Escritório:</strong> ZROBIM architects
          </p>
          <p>
            <strong>Arquitetos:</strong> Mariana Ribeiro • Lucas Martins
          </p>
          <p>
            <strong>Localização:</strong> Alphaville • São Paulo
          </p>
          <p>
            <strong>Área:</strong> 680 m²
          </p>
          <p>
            <strong>Ano:</strong> 2022
          </p>
          <p>
            <strong>Categoria:</strong> Residência Unifamiliar
          </p>
        </motion.div>

        {/* ---------- Bottom description + socials ---------- */}
        <motion.div
          style={{ y: footerY, opacity: footerOpacity }}
          className="absolute inset-x-0 bottom-8 z-20 hidden justify-end gap-16 px-10 text-[12px] leading-relaxed text-cream/70 md:flex"
        >
          <p className="max-w-xs">
            Desenvolvemos projetos exclusivos que unem arquitetura contemporânea,
            materiais nobres e soluções inteligentes para criar espaços únicos e
            atemporais.
          </p>

          <p className="max-w-xs">
            Cada detalhe é pensado para refletir o estilo de vida de quem irá
            habitar o espaço, equilibrando conforto, funcionalidade e sofisticação.
          </p>
        </motion.div>

        <div className="absolute bottom-8 left-6 z-20 flex gap-3 sm:left-10">
          {["behance", "telegram", "instagram"].map((name) => (
            <span
              key={name}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/25 text-cream/80"
            >
              <SocialIcon name={name} />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function SocialIcon({ name }: { name: string }) {
  const common = "h-4 w-4";
  if (name === "behance") {
    return (
      <svg viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="1.5">
        <text x="2" y="17" fontSize="12" fill="currentColor" stroke="none">Be</text>
      </svg>
    );
  }
  if (name === "telegram") {
    return (
      <svg viewBox="0 0 24 24" className={common} fill="currentColor">
        <path d="M21.5 4.5 2.7 11.9c-1 .4-1 1.7.1 2l4.7 1.5 1.8 5.6c.3.9 1.4 1.1 2 .4l2.6-2.8 4.8 3.5c.8.6 2 .2 2.2-.8l3-15.4c.2-1-.8-1.8-1.4-1.4Z" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}
