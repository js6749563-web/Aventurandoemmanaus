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

  // VÍDEO DE COMIDA / DESTAQUE
  const VIDEO_DESTAQUE =
    "https://res.cloudinary.com/dvyqn6i09/video/upload/f_mp4,q_auto:good,vc_h264/video-destaque_a1rkzo.mp4";

  const POSTER_DESTAQUE =
    "https://res.cloudinary.com/dvyqn6i09/video/upload/so_0,f_jpg,q_auto/video-destaque_a1rkzo.jpg";

  // SEGUNDO VÍDEO
  const VIDEO_PASSEIO =
    "https://res.cloudinary.com/dvyqn6i09/video/upload/f_mp4,q_auto:good,vc_h264/video-passeio_egzmvm.mp4";

  const POSTER_PASSEIO =
    "https://res.cloudinary.com/dvyqn6i09/video/upload/so_0,f_jpg,q_auto/video-passeio_egzmvm.jpg";

  // FUNDO DO INÍCIO
  const VIDEO_FUNDO = VIDEO_DESTAQUE;
  const POSTER_FUNDO = POSTER_DESTAQUE;

  const gallery = [
    {
      eyebrow: "Destaque principal",
      title: "Conteúdo que desperta desejo",
      text: "Vídeo em destaque para apresentar experiências, sabores e momentos com uma estética forte, moderna e memorável.",
      video: VIDEO_DESTAQUE,
      poster: POSTER_DESTAQUE,
      large: true,
    },
    {
      eyebrow: "Destaque extra",
      title: "Vivência, presença e atmosfera",
      text: "Outro recorte visual para mostrar lugares, experiências e a forma como a Esther transforma presença em conexão com o público.",
      video: VIDEO_PASSEIO,
      poster: POSTER_PASSEIO,
      large: false,
    },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 },
  };

  const navLinks = [
    ["Início", "#inicio"],
    ["Contato", "#contato"],
  ];

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#051009] text-white selection:bg-emerald-300 selection:text-black">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[rgba(4,10,7,0.78)] backdrop-blur-xl">
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
                  Gostou do estilo da Esther e quer divulgar sua marca de forma
                  natural, bonita e profissional?
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
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        />

        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,8,6,0.88)_0%,rgba(4,8,6,0.76)_38%,rgba(4,8,6,0.70)_65%,rgba(4,8,6,0.88)_100%)] lg:bg-[linear-gradient(90deg,rgba(4,8,6,0.90)_0%,rgba(4,8,6,0.75)_36%,rgba(4,8,6,0.42)_64%,rgba(4,8,6,0.72)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(40,109,67,0.20),transparent_35%)]" />

        <div className="relative mx-auto grid max-w-7xl gap-8 px-4 pb-14 pt-12 sm:px-5 sm:pb-16 sm:pt-14 md:px-8 lg:min-h-[82vh] lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:gap-12 lg:px-14 lg:py-20">
          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <span className="inline-flex rounded-full border border-emerald-200/20 bg-emerald-400/15 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.22em] text-emerald-100 backdrop-blur sm:px-4 sm:text-xs sm:tracking-[0.28em]">
              Conteúdo, imagem e presença
            </span>

            <h1 className="mt-5 max-w-4xl text-[2.3rem] font-semibold leading-[1.02] sm:mt-6 sm:text-5xl sm:leading-[1.02] lg:text-[4.7rem]">
              Descubra sabores, lugares e experiências com uma presença que chama atenção de verdade.
            </h1>

            <p className="mt-5 max-w-2xl text-[0.98rem] leading-7 text-zinc-200 sm:mt-6 sm:text-lg sm:leading-8 md:text-xl">
              Esther cria conteúdos visuais que valorizam marcas, experiências
              e ambientes de forma natural. O objetivo é transformar presença
              em desejo, conexão e lembrança.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:gap-4">
              <a
                href="#contato"
                className="inline-flex w-full items-center justify-center rounded-full bg-white px-6 py-3.5 text-base font-semibold text-black transition hover:scale-[1.02] sm:w-auto sm:px-7"
              >
                Falar com ela
              </a>
              <a
                href="#destaques"
                className="inline-flex w-full items-center justify-center rounded-full border border-white/15 bg-black/20 px-6 py-3.5 text-base font-medium text-white backdrop-blur transition hover:bg-white/10 sm:w-auto sm:px-7"
              >
                Ver destaques
              </a>
            </div>

            <div className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-3">
              {[
                [
                  "Imagem forte",
                  "Conteúdo com estética limpa, moderna e marcante.",
                ],
                [
                  "Mais desejo",
                  "Vídeos que valorizam o ambiente e despertam interesse.",
                ],
                [
                  "Contato direto",
                  "Quem gostar do trabalho pode chamar de forma simples.",
                ],
              ].map(([title, text]) => (
                <div
                  key={title}
                  className="rounded-[1.25rem] border border-white/10 bg-white/[0.04] p-4 backdrop-blur sm:rounded-[1.4rem]"
                >
                  <p className="text-sm font-semibold text-white">{title}</p>
                  <p className="mt-2 text-sm leading-6 text-zinc-300">{text}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mx-auto w-full max-w-[360px] justify-self-center lg:mx-0 lg:max-w-none lg:justify-self-end"
          >
            <div className="overflow-hidden rounded-[1.8rem] border border-white/10 bg-[rgba(9,16,12,0.72)] p-2 shadow-[0_30px_80px_rgba(0,0,0,0.48)] backdrop-blur-xl sm:rounded-[2rem]">
              <div className="overflow-hidden rounded-[1.35rem] sm:rounded-[1.6rem]">
                <SmartVideo
                  src={VIDEO_DESTAQUE}
                  poster={POSTER_DESTAQUE}
                  className="aspect-[4/5] w-full object-cover"
                />
              </div>

              <div className="px-3 pb-2 pt-4 sm:px-2 sm:pb-1 sm:pt-5">
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
      </section>

      <section
        id="destaques"
        className="border-b border-white/10 bg-[linear-gradient(180deg,#07130c_0%,#04100a_100%)]"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-5 sm:py-16 md:px-8 lg:px-14">
          <div className="mb-8 flex flex-col gap-4 sm:mb-10 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-xs uppercase tracking-[0.26em] text-emerald-300 sm:text-sm sm:tracking-[0.3em]">
                Destaques
              </p>
              <h2 className="mt-4 text-[2rem] font-semibold leading-tight sm:text-4xl md:text-5xl">
                Um visual mais limpo, forte e profissional para apresentar o que importa.
              </h2>
            </div>
            <p className="max-w-xl text-[0.98rem] leading-7 text-zinc-300 sm:text-base sm:leading-8">
              Aqui ficam os vídeos principais, com foco em estética, presença e
              valorização da experiência de forma simples e elegante.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
            {gallery.map((item, index) => (
              <motion.article
                key={item.title}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className={`overflow-hidden rounded-[1.7rem] border border-white/10 bg-[linear-gradient(180deg,rgba(14,24,18,0.95),rgba(6,14,9,1))] shadow-[0_30px_80px_rgba(0,0,0,0.34)] ${
                  item.large ? "lg:min-h-[560px]" : "lg:min-h-[560px]"
                }`}
              >
                <div className="p-3 sm:p-4">
                  <div className="overflow-hidden rounded-[1.3rem] border border-white/10 bg-black/20">
                    <SmartVideo
                      src={item.video}
                      poster={item.poster}
                      className={`w-full object-cover ${
                        item.large
                          ? "aspect-[16/10] lg:aspect-[16/11]"
                          : "aspect-[16/10] lg:aspect-[4/4.2]"
                      }`}
                    />
                  </div>
                </div>

                <div className="px-5 pb-5 pt-2 sm:px-6 sm:pb-6">
                  <p className="text-[10px] uppercase tracking-[0.28em] text-emerald-300 sm:text-xs sm:tracking-[0.35em]">
                    {item.eyebrow}
                  </p>

                  <h3 className="mt-4 text-[1.65rem] font-semibold leading-tight text-white sm:text-3xl">
                    {item.title}
                  </h3>

                  <p className="mt-4 max-w-2xl text-[0.98rem] leading-7 text-zinc-300 sm:text-base sm:leading-8">
                    {item.text}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="contato" className="border-b border-white/10 bg-white/[0.03]">
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
                  Divulgação, presença em locais, campanhas visuais e parcerias
                  estratégicas
                </p>
              </div>
            </div>

            <div className="rounded-[1.6rem] border border-white/10 bg-[linear-gradient(180deg,rgba(12,21,15,0.95),rgba(8,17,11,1))] p-5 shadow-[0_30px_80px_rgba(0,0,0,0.34)] sm:rounded-[2rem] sm:p-8">
              <p className="text-xs uppercase tracking-[0.26em] text-emerald-300 sm:text-sm sm:tracking-[0.3em]">
                Fale com ela
              </p>
              <h2 className="mt-4 text-[2rem] font-semibold leading-tight sm:text-4xl md:text-5xl">
                Gostou do que viu? Leve sua marca para esse espaço.
              </h2>
              <p className="mt-4 max-w-2xl text-[0.98rem] leading-7 text-zinc-300 sm:mt-5 sm:text-lg sm:leading-8">
                Uma conversa simples, direta e profissional para construir uma
                parceria bonita e estratégica.
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

              <div className="mt-6 rounded-[1.3rem] border border-white/10 bg-black/20 p-4 sm:mt-8 sm:rounded-[1.6rem] sm:p-5">
                <p className="text-[10px] uppercase tracking-[0.24em] text-emerald-300 sm:text-xs sm:tracking-[0.28em]">
                  Ideal para
                </p>
                <p className="mt-3 text-sm leading-7 text-zinc-200 sm:text-base sm:leading-8">
                  Restaurantes, cafeterias, marcas, espaços, eventos,
                  experiências e negócios que querem se apresentar com mais
                  presença, beleza e conexão com o público.
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