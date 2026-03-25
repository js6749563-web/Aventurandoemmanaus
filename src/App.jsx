import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function SmartVideo({ src, className = "" }) {
  return (
    <video
      src={src}
      muted
      loop
      playsInline
      autoPlay
      preload="metadata"
      className={className}
    />
  );
}

export default function SiteInfluencerManaus() {
  const [menuOpen, setMenuOpen] = useState(false);

  // CLOUDINARY
  const VIDEO_PASSEIO =
    "https://res.cloudinary.com/dvyqn6i09/video/upload/f_auto,q_auto/video-passeio_egzmvm.mp4";

  const VIDEO_DESTAQUE =
    "https://res.cloudinary.com/dvyqn6i09/video/upload/f_auto,q_auto/video-destaque_a1rkzo.mp4";

  // NO MOMENTO, só existem esses dois
  const VIDEO_FUNDO = VIDEO_DESTAQUE;
  const VIDEO_COMIDA = VIDEO_DESTAQUE;

  const tourStops = [
    {
      eyebrow: "Parceria 01",
      title: "Passeios e descobertas",
      text: "Lugares, experiências e espaços especiais mostrados com leveza, beleza e sensação de presença.",
      video: VIDEO_PASSEIO,
      points: ["Experiência visual", "Atmosfera marcante", "Valor para o local"],
      accent: "Perfeito para lugares que querem ser lembrados",
    },
    {
      eyebrow: "Parceria 02",
      title: "Vivências e presença",
      text: "Conteúdos que mostram atmosfera, detalhes e estilo de forma natural, aproximando o público da experiência real.",
      video: VIDEO_DESTAQUE,
      points: ["Conteúdo autêntico", "Estética forte", "Conexão real"],
      accent: "Ideal para marcas e lugares que querem ser percebidos",
    },
  ];

  const gallery = [VIDEO_DESTAQUE, VIDEO_PASSEIO];

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 },
  };

  const navLinks = [
    ["Início", "#inicio"],
    ["Parcerias", "#parcerias"],
    ["Contato", "#contato"],
  ];

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#06100a] text-white selection:bg-emerald-300 selection:text-black">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[rgba(5,10,7,0.78)] backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-5 md:px-8 lg:px-14">
          <div className="flex min-w-0 items-center gap-3 sm:gap-4">
            <button
              onClick={() => setMenuOpen(true)}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-base text-white transition hover:bg-white/10 sm:h-11 sm:w-11 sm:text-lg"
              aria-label="Abrir menu"
            >
              ☰
            </button>

            <a
              href="#inicio"
              className="truncate text-[0.95rem] font-semibold tracking-[0.18em] text-white sm:text-lg md:text-2xl md:tracking-[0.22em]"
            >
              ESTHEREILISH
            </a>
          </div>

          <nav className="hidden items-center gap-2 text-sm text-zinc-300 lg:flex">
            {navLinks.map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="rounded-full px-4 py-2 transition hover:bg-white/10 hover:text-white"
              >
                {label}
              </a>
            ))}
          </nav>

          <a
            href="#contato"
            className="hidden rounded-full bg-emerald-500 px-5 py-3 text-sm font-semibold text-black transition hover:scale-[1.02] hover:bg-emerald-400 md:inline-flex"
          >
            Falar com ela
          </a>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.button
              type="button"
              aria-label="Fechar menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 z-[70] bg-black/60 backdrop-blur-sm"
            />

            <motion.aside
              initial={{ x: -380, opacity: 0.8 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -380, opacity: 0.8 }}
              transition={{ type: "spring", stiffness: 260, damping: 28 }}
              className="fixed left-0 top-0 z-[80] flex h-screen w-[88%] max-w-[380px] flex-col border-r border-white/10 bg-[linear-gradient(180deg,rgba(8,16,11,0.98),rgba(5,11,8,0.98))] p-5 shadow-[0_30px_90px_rgba(0,0,0,0.5)] sm:p-6"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.32em] text-emerald-300">
                    Menu
                  </p>
                  <h2 className="mt-2 text-xl font-semibold text-white sm:text-2xl">
                    ESTHEREILISH
                  </h2>
                </div>

                <button
                  onClick={() => setMenuOpen(false)}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-lg text-white transition hover:bg-white/10 sm:h-11 sm:w-11 sm:text-xl"
                  aria-label="Fechar menu"
                >
                  ✕
                </button>
              </div>

              <div className="mt-6 h-px bg-gradient-to-r from-transparent via-emerald-300/40 to-transparent sm:mt-8" />

              <nav className="mt-6 flex flex-col gap-3 sm:mt-8">
                {navLinks.map(([label, href]) => (
                  <a
                    key={label}
                    href={href}
                    onClick={() => setMenuOpen(false)}
                    className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4 text-base text-zinc-200 transition hover:border-emerald-300/20 hover:bg-white/[0.06] hover:text-white"
                  >
                    <span>{label}</span>
                    <span className="text-emerald-300 transition group-hover:translate-x-1">
                      →
                    </span>
                  </a>
                ))}
              </nav>

              <div className="mt-auto rounded-[1.6rem] border border-white/10 bg-white/[0.04] p-5 shadow-[0_20px_60px_rgba(0,0,0,0.28)] sm:rounded-[1.8rem]">
                <p className="text-xs uppercase tracking-[0.3em] text-emerald-300">
                  Contato rápido
                </p>
                <p className="mt-3 text-sm leading-7 text-zinc-300">
                  Gostou do estilo da Esther e quer divulgar sua marca com mais
                  presença e estética?
                </p>
                <a
                  href="#contato"
                  onClick={() => setMenuOpen(false)}
                  className="mt-5 inline-flex rounded-full bg-emerald-500 px-5 py-3 text-sm font-semibold text-black transition hover:scale-[1.02] hover:bg-emerald-400"
                >
                  Falar com ela
                </a>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      <section id="inicio" className="relative overflow-hidden border-b border-white/10">
        <video
          muted
          loop
          playsInline
          autoPlay
          preload="metadata"
          className="absolute inset-0 h-full w-full object-cover opacity-35"
        >
          <source src={VIDEO_FUNDO} type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,8,6,0.84)_0%,rgba(4,8,6,0.74)_35%,rgba(4,8,6,0.58)_60%,rgba(4,8,6,0.72)_100%)] lg:bg-[linear-gradient(90deg,rgba(4,8,6,0.82)_0%,rgba(4,8,6,0.62)_35%,rgba(4,8,6,0.42)_60%,rgba(4,8,6,0.60)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(40,109,67,0.22),transparent_35%)]" />

        <div className="relative mx-auto grid min-h-[auto] max-w-7xl gap-8 px-4 pb-12 pt-10 sm:px-5 sm:pb-14 sm:pt-12 md:px-8 lg:min-h-[78vh] lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-10 lg:px-14 lg:pt-16">
          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <span className="inline-flex rounded-full border border-emerald-200/20 bg-emerald-400/15 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.22em] text-emerald-100 backdrop-blur sm:px-4 sm:text-xs sm:tracking-[0.28em]">
              Conteúdo, presença e parcerias
            </span>

            <h1 className="mt-5 max-w-4xl text-[2.15rem] font-semibold leading-[1.02] sm:mt-6 sm:text-5xl sm:leading-[1.02] lg:text-[4.5rem]">
              Marcas, lugares e experiências mostrados com estética, verdade e
              conexão.
            </h1>

            <p className="mt-5 max-w-2xl text-[0.98rem] leading-7 text-zinc-200 sm:mt-6 sm:text-lg sm:leading-8 md:text-xl">
              Esther cria conteúdos que aproximam pessoas de negócios,
              experiências e marcas de forma natural. Cada vídeo valoriza o que
              existe de especial e transforma presença em desejo.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:gap-4">
              <a
                href="#parcerias"
                className="inline-flex w-full items-center justify-center rounded-full bg-white px-6 py-3.5 text-base font-semibold text-black transition hover:scale-[1.02] sm:w-auto sm:px-7"
              >
                Ver parcerias
              </a>
              <a
                href="#contato"
                className="inline-flex w-full items-center justify-center rounded-full border border-white/15 bg-black/20 px-6 py-3.5 text-base font-medium text-white backdrop-blur transition hover:bg-white/10 sm:w-auto sm:px-7"
              >
                Falar com ela
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mx-auto w-full max-w-[340px] justify-self-center lg:mx-0 lg:max-w-none lg:justify-self-end"
          >
            <div className="overflow-hidden rounded-[1.6rem] border border-white/10 bg-[rgba(9,16,12,0.75)] p-2 shadow-[0_30px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl sm:rounded-[2rem]">
              <div className="overflow-hidden rounded-[1.25rem] sm:rounded-[1.6rem]">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  className="aspect-[4/5] w-full object-cover"
                >
                  <source src={VIDEO_DESTAQUE} type="video/mp4" />
                </video>
              </div>

              <div className="px-2 pb-1 pt-4 sm:pt-5">
                <p className="text-[10px] uppercase tracking-[0.28em] text-emerald-200/80 sm:text-xs sm:tracking-[0.35em]">
                  Conteúdo em destaque
                </p>
                <p className="mt-3 text-sm leading-7 text-zinc-200">
                  Um recorte do estilo visual e da forma como a Esther apresenta
                  marcas, lugares e experiências.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[#08120c]">
        <div className="mx-auto max-w-7xl px-4 py-5 sm:px-5 md:px-8 lg:px-14">
          <div className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-1 sm:mx-0 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 lg:grid-cols-2">
            {gallery.map((src, index) => (
              <div
                key={`${src}-${index}`}
                className="group min-w-[82%] snap-center overflow-hidden rounded-[1.25rem] border border-white/10 bg-black/20 shadow-[0_20px_50px_rgba(0,0,0,0.25)] sm:min-w-0 sm:rounded-[1.4rem]"
              >
                <SmartVideo
                  src={src}
                  className="aspect-[16/10] w-full object-cover opacity-90 transition duration-500 group-hover:scale-[1.03] sm:aspect-[16/9]"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="parcerias" className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-5 sm:py-16 md:px-8 lg:px-14">
          <div className="mb-8 flex flex-col gap-4 sm:mb-10 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-xs uppercase tracking-[0.26em] text-emerald-300 sm:text-sm sm:tracking-[0.3em]">
                Parcerias
              </p>
              <h2 className="mt-4 text-[2rem] font-semibold leading-tight sm:text-4xl md:text-5xl">
                Cada conteúdo aproxima o público da marca de forma leve,
                estética e memorável.
              </h2>
            </div>
            <p className="max-w-xl text-[0.98rem] leading-7 text-zinc-300 sm:text-base sm:leading-8">
              Mais do que mostrar lugares, o objetivo é valorizar experiências,
              produtos e negócios com um conteúdo que combina presença,
              atmosfera e identidade.
            </p>
          </div>

          <div className="grid gap-6 sm:gap-8">
            {tourStops.map((item, index) => {
              const isReversed = index % 2 !== 0;

              return (
                <motion.article
                  key={item.title}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={fadeUp}
                  transition={{ duration: 0.5, delay: index * 0.06 }}
                  className="overflow-hidden rounded-[1.6rem] border border-white/10 bg-[linear-gradient(180deg,rgba(16,27,20,0.96),rgba(7,16,10,1))] shadow-[0_30px_80px_rgba(0,0,0,0.34)] sm:rounded-[2.2rem] lg:grid lg:grid-cols-[1.02fr_0.98fr]"
                >
                  <div
                    className={`order-2 flex h-full flex-col justify-between p-5 sm:p-6 lg:p-12 ${
                      isReversed ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.28em] text-emerald-300 sm:text-xs sm:tracking-[0.35em]">
                        {item.eyebrow}
                      </p>

                      <h3 className="mt-4 text-[2rem] font-semibold leading-tight sm:text-4xl md:text-5xl">
                        {item.title}
                      </h3>

                      <p className="mt-4 max-w-xl text-[0.98rem] leading-7 text-zinc-300 sm:mt-5 sm:text-lg sm:leading-8">
                        {item.text}
                      </p>

                      <div className="mt-6 flex flex-wrap gap-2.5 sm:mt-8 sm:gap-3">
                        {item.points.map((point) => (
                          <span
                            key={point}
                            className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-xs text-zinc-200 sm:px-4 sm:text-sm"
                          >
                            {point}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-6 rounded-[1.25rem] border border-white/10 bg-black/20 p-4 sm:mt-8 sm:rounded-[1.5rem] sm:p-5">
                      <p className="text-[10px] uppercase tracking-[0.24em] text-emerald-300 sm:text-xs sm:tracking-[0.28em]">
                        Destaque
                      </p>
                      <p className="mt-3 text-sm leading-7 text-zinc-200 sm:text-base">
                        {item.accent}
                      </p>
                    </div>
                  </div>

                  <div
                    className={`order-1 overflow-hidden ${
                      isReversed ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    <video
                      key={item.video}
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="auto"
                      className="aspect-[9/12] w-full object-cover sm:aspect-[16/10] lg:h-full lg:min-h-[460px] lg:aspect-auto"
                    >
                      <source src={item.video} type="video/mp4" />
                    </video>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="contato" className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-5 sm:py-16 md:px-8 lg:px-14">
          <div className="grid gap-5 sm:gap-7 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-[1.6rem] border border-white/10 bg-[linear-gradient(180deg,rgba(17,27,20,0.9),rgba(9,17,11,1))] p-5 shadow-[0_20px_60px_rgba(0,0,0,0.30)] sm:rounded-[2rem] sm:p-8">
              <p className="text-xs uppercase tracking-[0.22em] text-emerald-300 sm:text-sm sm:tracking-[0.25em]">
                Contato rápido
              </p>
              <h3 className="mt-4 text-[1.75rem] font-semibold leading-tight text-white sm:text-[1.8rem]">
                Quer divulgar sua marca com a Esther?
              </h3>
              <p className="mt-4 text-[0.98rem] leading-7 text-zinc-300 sm:mt-5 sm:leading-8">
                Se você tem um restaurante, negócio, espaço, evento ou marca e
                quer apresentar isso de forma natural, estética e profissional,
                o caminho mais simples é falar direto com ela.
              </p>

              <div className="mt-6 space-y-4 text-[0.98rem] text-zinc-300 sm:mt-7 sm:text-[1rem]">
                <p>
                  <span className="font-medium text-white">Email:</span>{" "}
                  contato@esthereilish.com
                </p>
                <p>
                  <span className="font-medium text-white">Instagram:</span>{" "}
                  @esthereilish
                </p>
                <p>
                  <span className="font-medium text-white">Atendimento:</span>{" "}
                  Parcerias, divulgação, presença em locais e campanhas visuais
                </p>
              </div>
            </div>

            <div className="rounded-[1.6rem] border border-white/10 bg-[linear-gradient(180deg,rgba(12,21,15,0.95),rgba(8,17,11,1))] p-5 shadow-[0_30px_80px_rgba(0,0,0,0.34)] sm:rounded-[2rem] sm:p-8">
              <p className="text-xs uppercase tracking-[0.26em] text-emerald-300 sm:text-sm sm:tracking-[0.3em]">
                Fale com ela
              </p>
              <h2 className="mt-4 text-[2rem] font-semibold leading-tight sm:text-4xl md:text-5xl">
                Gostou do que viu? Fale com a Esther e leve sua marca para esse
                espaço.
              </h2>
              <p className="mt-4 max-w-2xl text-[0.98rem] leading-7 text-zinc-300 sm:mt-5 sm:text-lg sm:leading-8">
                Uma conversa direta, simples e sem burocracia para quem quer
                construir uma boa parceria.
              </p>

              <div className="mt-8 grid gap-4 sm:mt-10 md:grid-cols-2 md:gap-5">
                <a
                  href="https://wa.me/5592999999999?text=Oi%2C%20vi%20o%20site%20e%20quero%20falar%20sobre%20uma%20parceria."
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between rounded-[1.3rem] border border-emerald-300/20 bg-emerald-500 px-5 py-4 text-black shadow-[0_20px_40px_rgba(16,185,129,0.18)] transition hover:scale-[1.02] hover:bg-emerald-400 sm:rounded-[1.6rem] sm:px-6 sm:py-5"
                >
                  <div>
                    <p className="text-xs font-medium uppercase tracking-[0.18em] text-black/70 sm:text-sm">
                      WhatsApp
                    </p>
                    <p className="mt-2 text-lg font-semibold sm:text-xl">
                      Falar agora
                    </p>
                  </div>
                  <span className="text-2xl transition group-hover:translate-x-1">
                    →
                  </span>
                </a>

                <a
                  href="https://instagram.com/esthereilish"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between rounded-[1.3rem] border border-white/10 bg-white/[0.04] px-5 py-4 text-white transition hover:scale-[1.02] hover:bg-white/[0.07] sm:rounded-[1.6rem] sm:px-6 sm:py-5"
                >
                  <div>
                    <p className="text-xs font-medium uppercase tracking-[0.18em] text-zinc-400 sm:text-sm">
                      Instagram
                    </p>
                    <p className="mt-2 text-lg font-semibold sm:text-xl">
                      Ver perfil
                    </p>
                  </div>
                  <span className="text-2xl text-emerald-300 transition group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <a
        href="https://wa.me/5592999999999?text=Oi%2C%20vi%20o%20site%20e%20quero%20falar%20sobre%20uma%20parceria."
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-4 right-4 z-50 inline-flex items-center justify-center rounded-full bg-emerald-500 px-4 py-3 text-sm font-semibold text-black shadow-[0_20px_40px_rgba(16,185,129,0.25)] transition hover:scale-[1.03] hover:bg-emerald-400 sm:bottom-5 sm:right-5 sm:px-5"
      >
        Falar com ela
      </a>
    </main>
  );
}