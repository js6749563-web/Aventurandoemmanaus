import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function SmartVideo({ src, className = "", poster = "" }) {
  return (
    <video
      muted
      defaultMuted
      loop
      playsInline
      autoPlay
      preload="auto"
      poster={poster}
      className={className}
      style={{ backgroundColor: "#000" }}
      onLoadedMetadata={(e) => {
        e.currentTarget.play().catch(() => {});
      }}
      onCanPlay={(e) => {
        e.currentTarget.play().catch(() => {});
      }}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}

export default function SiteInfluencerManaus() {
  const [menuOpen, setMenuOpen] = useState(false);

  const VIDEO_DESTAQUE =
    "https://res.cloudinary.com/doidnldal/video/upload/f_mp4,q_auto:good,vc_h264/v1774534158/esse_aqqqq_dxvus5.mp4";

  const POSTER_DESTAQUE =
    "https://res.cloudinary.com/doidnldal/video/upload/so_0,f_jpg,q_auto/v1774534158/esse_aqqqq_dxvus5.jpg";

  const VIDEO_PASSEIO =
    "https://res.cloudinary.com/dvyqn6i09/video/upload/f_mp4,q_auto:good,vc_h264/video-passeio_egzmvm.mp4";

  const POSTER_PASSEIO =
    "https://res.cloudinary.com/dvyqn6i09/video/upload/so_0,f_jpg,q_auto/video-passeio_egzmvm.jpg";

  const VIDEO_FUNDO = VIDEO_DESTAQUE;
  const POSTER_FUNDO = POSTER_DESTAQUE;

  const highlights = [
    {
      eyebrow: "Destaque principal",
      title: "Conteúdo que abre apetite e chama atenção",
      text: "Vídeo principal com foco em comida, atmosfera e experiência visual para valorizar marcas, restaurantes e momentos de forma mais desejável.",
      video: VIDEO_DESTAQUE,
      poster: POSTER_DESTAQUE,
      featured: true,
    },
    {
      eyebrow: "Destaque extra",
      title: "Vivência, presença e descoberta",
      text: "Um segundo recorte para mostrar experiências, lugares e a forma como a Esther transforma presença em interesse real.",
      video: VIDEO_PASSEIO,
      poster: POSTER_PASSEIO,
      featured: false,
    },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0 },
  };

  const navLinks = [
    ["Início", "#inicio"],
    ["Destaques", "#destaques"],
    ["Contato", "#contato"],
  ];

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#041009] text-white selection:bg-emerald-300 selection:text-black">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[rgba(4,10,7,0.78)] backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-[1400px] items-center justify-between px-4 py-3 sm:px-6 xl:px-10">
          <div className="flex min-w-0 items-center gap-3">
            <button
              onClick={() => setMenuOpen(true)}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-base text-white transition hover:bg-white/10 lg:hidden"
              aria-label="Abrir menu"
            >
              ☰
            </button>

            <a
              href="#inicio"
              className="truncate text-sm font-semibold tracking-[0.22em] text-white sm:text-base"
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
            className="hidden rounded-full bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-black transition hover:scale-[1.02] hover:bg-emerald-400 md:inline-flex"
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
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 z-[70] bg-black/60 backdrop-blur-sm lg:hidden"
            />

            <motion.aside
              initial={{ x: -320, opacity: 0.8 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -320, opacity: 0.8 }}
              transition={{ type: "spring", stiffness: 260, damping: 28 }}
              className="fixed left-0 top-0 z-[80] flex h-screen w-[86%] max-w-[340px] flex-col border-r border-white/10 bg-[linear-gradient(180deg,rgba(8,16,11,0.98),rgba(5,11,8,0.98))] p-5 shadow-[0_30px_90px_rgba(0,0,0,0.5)] lg:hidden"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-emerald-300">
                    Menu
                  </p>
                  <h2 className="mt-2 text-xl font-semibold text-white">
                    ESTHEREILISH
                  </h2>
                </div>

                <button
                  onClick={() => setMenuOpen(false)}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-lg text-white transition hover:bg-white/10"
                  aria-label="Fechar menu"
                >
                  ✕
                </button>
              </div>

              <div className="mt-6 h-px bg-gradient-to-r from-transparent via-emerald-300/40 to-transparent" />

              <nav className="mt-6 flex flex-col gap-3">
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

              <div className="mt-auto rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5 shadow-[0_20px_60px_rgba(0,0,0,0.28)]">
                <p className="text-xs uppercase tracking-[0.28em] text-emerald-300">
                  Contato rápido
                </p>
                <p className="mt-3 text-sm leading-7 text-zinc-300">
                  Gostou do estilo da Esther e quer divulgar sua marca de forma
                  natural e bonita?
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
        <SmartVideo
          src={VIDEO_FUNDO}
          poster={POSTER_FUNDO}
          className="absolute inset-0 h-full w-full object-cover opacity-25"
        />

        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,8,6,0.90)_0%,rgba(4,8,6,0.78)_32%,rgba(4,8,6,0.74)_66%,rgba(4,8,6,0.92)_100%)] xl:bg-[linear-gradient(90deg,rgba(4,8,6,0.94)_0%,rgba(4,8,6,0.86)_24%,rgba(4,8,6,0.58)_58%,rgba(4,8,6,0.72)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(40,109,67,0.16),transparent_35%)]" />

        <div className="relative mx-auto w-full max-w-[1400px] px-4 pb-14 pt-10 sm:px-6 sm:pb-16 sm:pt-14 xl:px-10">
          <div className="mx-auto grid max-w-[1180px] items-center gap-8 xl:grid-cols-[1.1fr_0.9fr] xl:gap-10">
            <motion.div
              initial="hidden"
              animate="show"
              variants={fadeUp}
              transition={{ duration: 0.55 }}
              className="mx-auto w-full max-w-[760px] xl:mx-0 xl:max-w-[650px]"
            >
              <span className="inline-flex rounded-full border border-emerald-200/20 bg-emerald-400/15 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.22em] text-emerald-100 backdrop-blur sm:px-4 sm:text-xs sm:tracking-[0.28em]">
                Conteúdo, imagem e presença
              </span>

              <h1 className="mt-5 text-[2.25rem] font-semibold leading-[1.02] sm:text-[3.2rem] lg:text-[3.9rem] xl:text-[4.5rem]">
                Descubra sabores, lugares e experiências com uma presença que chama atenção de verdade.
              </h1>

              <p className="mt-5 max-w-[620px] text-[1rem] leading-7 text-zinc-200 sm:text-lg sm:leading-8">
                Esther cria conteúdos visuais que valorizam marcas, ambientes e
                experiências de forma natural, elegante e memorável.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href="#contato"
                  className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3.5 text-base font-semibold text-black transition hover:scale-[1.02]"
                >
                  Falar com ela
                </a>
                <a
                  href="#destaques"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 bg-black/20 px-6 py-3.5 text-base font-medium text-white backdrop-blur transition hover:bg-white/10"
                >
                  Ver destaques
                </a>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {[
                  ["Imagem forte", "Estética limpa, moderna e marcante."],
                  ["Mais desejo", "Vídeos que valorizam o ambiente e a experiência."],
                  ["Contato simples", "Quem gostar do trabalho chama direto."],
                ].map(([title, text]) => (
                  <div
                    key={title}
                    className="rounded-[1.2rem] border border-white/10 bg-white/[0.04] p-4 backdrop-blur"
                  >
                    <p className="text-sm font-semibold text-white">{title}</p>
                    <p className="mt-2 text-sm leading-6 text-zinc-300">{text}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.08 }}
              className="mx-auto w-full max-w-[360px] sm:max-w-[420px] xl:mx-0 xl:max-w-[420px]"
            >
              <div className="overflow-hidden rounded-[1.8rem] border border-white/10 bg-[rgba(9,16,12,0.72)] p-2 shadow-[0_30px_80px_rgba(0,0,0,0.48)] backdrop-blur-xl">
                <div className="overflow-hidden rounded-[1.3rem]">
                  <SmartVideo
                    src={VIDEO_DESTAQUE}
                    poster={POSTER_DESTAQUE}
                    className="aspect-[4/5] w-full object-cover"
                  />
                </div>

                <div className="px-3 pb-2 pt-4">
                  <p className="text-[10px] uppercase tracking-[0.28em] text-emerald-200/80 sm:text-xs sm:tracking-[0.35em]">
                    Conteúdo em destaque
                  </p>
                  <p className="mt-3 text-sm leading-7 text-zinc-200">
                    Vídeo principal para mostrar o estilo visual, a atmosfera e a
                    forma como a Esther valoriza experiências e marcas.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section
        id="destaques"
        className="border-b border-white/10 bg-[linear-gradient(180deg,#06120b_0%,#041009_100%)]"
      >
        <div className="mx-auto w-full max-w-[1400px] px-4 py-14 sm:px-6 xl:px-10">
          <div className="mx-auto max-w-[1180px]">
            <div className="mb-8 grid gap-4 xl:grid-cols-[0.95fr_1.05fr] xl:items-end">
              <div className="max-w-[620px]">
                <p className="text-xs uppercase tracking-[0.26em] text-emerald-300 sm:text-sm sm:tracking-[0.3em]">
                  Destaques
                </p>
                <h2 className="mt-4 text-[2rem] font-semibold leading-tight sm:text-4xl">
                  Conteúdo visual que aproxima, valoriza e marca presença.
                </h2>
              </div>
              <p className="max-w-[620px] text-[0.98rem] leading-7 text-zinc-300 sm:text-base sm:leading-8 xl:justify-self-end">
                Conteúdos que valorizam experiências e despertam desejo.
              </p>
            </div>

            <div className="grid gap-5 lg:grid-cols-2">
              {highlights.map((item, index) => (
                <motion.article
                  key={item.title}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={fadeUp}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  className="overflow-hidden rounded-[1.6rem] border border-white/10 bg-[linear-gradient(180deg,rgba(14,24,18,0.95),rgba(6,14,9,1))] shadow-[0_30px_80px_rgba(0,0,0,0.28)]"
                >
                  <div className="p-3 sm:p-4">
                    <div className="overflow-hidden rounded-[1.2rem] border border-white/10 bg-black/20">
                      <SmartVideo
                        src={item.video}
                        poster={item.poster}
                        className={`w-full object-cover ${
                          item.featured
                            ? "aspect-[16/10] lg:aspect-[16/9]"
                            : "aspect-[16/10] lg:aspect-[16/9]"
                        }`}
                      />
                    </div>
                  </div>

                  <div className="px-5 pb-5 pt-1 sm:px-6 sm:pb-6">
                    <p className="text-[10px] uppercase tracking-[0.28em] text-emerald-300 sm:text-xs sm:tracking-[0.35em]">
                      {item.eyebrow}
                    </p>

                    <h3 className="mt-4 text-[1.55rem] font-semibold leading-tight text-white sm:text-3xl">
                      {item.title}
                    </h3>

                    <p className="mt-4 text-[0.98rem] leading-7 text-zinc-300 sm:text-base sm:leading-8">
                      {item.text}
                    </p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contato" className="bg-white/[0.03]">
        <div className="mx-auto w-full max-w-[1400px] px-4 py-14 sm:px-6 xl:px-10">
          <div className="mx-auto grid max-w-[1180px] gap-5 lg:grid-cols-2">
            <div className="rounded-[1.6rem] border border-white/10 bg-[linear-gradient(180deg,rgba(17,27,20,0.9),rgba(9,17,11,1))] p-5 shadow-[0_20px_60px_rgba(0,0,0,0.30)] sm:p-8">
              <p className="text-xs uppercase tracking-[0.22em] text-emerald-300 sm:text-sm sm:tracking-[0.25em]">
                Contato rápido
              </p>
              <h3 className="mt-4 text-[1.75rem] font-semibold leading-tight text-white sm:text-[1.95rem]">
                Quer divulgar sua marca com a Esther?
              </h3>
              <p className="mt-4 text-[0.98rem] leading-7 text-zinc-300 sm:mt-5 sm:leading-8">
                Se você tem um restaurante, negócio, espaço, evento ou marca e
                quer apresentar isso de forma natural, estética e profissional,
                o caminho mais simples é falar direto com ela.
              </p>

              <div className="mt-6 space-y-4 text-[0.98rem] text-zinc-300 sm:mt-7">
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
                  Divulgação, presença em locais, campanhas visuais e conteúdos
                  de experiência.
                </p>
              </div>
            </div>

            <div className="rounded-[1.6rem] border border-white/10 bg-[linear-gradient(180deg,rgba(12,21,15,0.95),rgba(8,17,11,1))] p-5 shadow-[0_30px_80px_rgba(0,0,0,0.34)] sm:p-8">
              <p className="text-xs uppercase tracking-[0.26em] text-emerald-300 sm:text-sm sm:tracking-[0.3em]">
                Fale com ela
              </p>
              <h2 className="mt-4 text-[2rem] font-semibold leading-tight sm:text-4xl">
                Gostou do que viu? Leve sua marca para esse espaço.
              </h2>
              <p className="mt-4 max-w-2xl text-[0.98rem] leading-7 text-zinc-300 sm:mt-5 sm:text-lg sm:leading-8">
                É nos detalhes que a experiência ganha valor.
                E é assim que cada momento se torna mais marcante.
              </p>

              <div className="mt-8 grid gap-4 md:grid-cols-2 md:gap-5">
                <a
                  href="https://wa.me/5592999999999?text=Oi%2C%20vi%20o%20site%20e%20quero%20falar%20sobre%20uma%20parceria."
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between rounded-[1.3rem] border border-emerald-300/20 bg-emerald-500 px-5 py-4 text-black shadow-[0_20px_40px_rgba(16,185,129,0.18)] transition hover:scale-[1.02] hover:bg-emerald-400 sm:px-6 sm:py-5"
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
                  className="group flex items-center justify-between rounded-[1.3rem] border border-white/10 bg-white/[0.04] px-5 py-4 text-white transition hover:scale-[1.02] hover:bg-white/[0.07] sm:px-6 sm:py-5"
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

              <div className="mt-6 rounded-[1.3rem] border border-white/10 bg-black/20 p-4 sm:mt-8 sm:p-5">
                <p className="text-[10px] uppercase tracking-[0.24em] text-emerald-300 sm:text-xs sm:tracking-[0.28em]">
                  Ideal para
                </p>
                <p className="mt-3 text-sm leading-7 text-zinc-200 sm:text-base sm:leading-8">
                  Restaurantes, cafeterias, marcas, espaços, eventos,
                  experiências e negócios que querem aparecer com mais beleza,
                  presença e conexão com o público.
                </p>
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