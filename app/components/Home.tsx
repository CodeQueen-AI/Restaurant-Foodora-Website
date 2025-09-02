"use client";
import { FaPlay } from "react-icons/fa";
import { motion, Variants } from "framer-motion";

export default function Page() {
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 120 },
    },
  };

  return (
    <main className="h-screen bg-[#0b0b0b] text-white">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700;900&family=Playfair+Display:ital,wght@0,700;1,700&display=swap');
        :root {
          --font-sans: 'Montserrat', system-ui, -apple-system, Segoe UI, Roboto,
            'Helvetica Neue', Arial, 'Noto Sans', 'Apple Color Emoji',
            'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif;
          --font-serif: 'Playfair Display', Georgia, 'Times New Roman', serif;
        }
        html,
        body {
          font-family: var(--font-sans);
        }
      `}</style>

      <section
        className="relative overflow-hidden bg-cover bg-center min-h-[450px]"
        style={{ backgroundImage: "url('/Home.jpg')" }}>
        <div className="absolute inset-0 bg-black/60 z-0"></div>

        <motion.div
          className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-6 py-28 md:grid-cols-2 md:py-40 relative z-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible">
          <div className="relative z-10 md:pl-12">
            <motion.p
              className="mb-6 text-xs tracking-[0.35em] text-orange-400"
              variants={itemVariants}>
              HAPPINESS
            </motion.p>

            <motion.h1 className="leading-[0.95]" variants={itemVariants}>
              <span className="block text-6xl font-extrabold tracking-tight md:text-7xl">
                SUNNY
              </span>
              <span
                className="block font-bold italic text-[52px] leading-[0.9] text-amber-500 md:text-[64px]"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                Food Golden
              </span>
              <span className="block text-6xl font-extrabold tracking-tight md:text-7xl">
                MOOD
              </span>
            </motion.h1>

            <motion.div
              className="mt-8 flex items-center gap-4"
              variants={itemVariants}
            >
              <a
                href="/Menu"
                className="inline-flex items-center rounded-full bg-orange-400 px-5 py-3 text-sm font-bold uppercase tracking-wide text-black shadow-[0_10px_30px_rgba(245,158,11,0.35)] transition-transform hover:scale-[1.02] active:scale-[0.98]"
              >
                Nouvelle Menu
              </a>

              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-semibold uppercase tracking-wide text-white/90 hover:border-white/40 hover:text-white"
              >
                <span className="grid h-8 w-8 place-items-center rounded-full bg-white/10">
                  <FaPlay className="h-4 w-4" />
                </span>
                How To Order
              </a>
            </motion.div>
          </div>
        </motion.div>

        <div className="pointer-events-none absolute left-0 top-0 h-full w-1/3 bg-gradient-to-r from-black via-black/70 to-transparent z-0" />
      </section>

      <div className="h-10" />
    </main>
  );
}

