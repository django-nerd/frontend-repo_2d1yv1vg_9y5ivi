import { useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
  'https://images.unsplash.com/photo-1606069577520-48ed439e09ed?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1544681280-d41c8e4a27e9?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1529059997568-3d847b1154f4?q=80&w=1600&auto=format&fit=crop',
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  const currentImage = useMemo(() => images[index], [index]);

  return (
    <section className="relative h-[90vh] w-full overflow-hidden rounded-b-3xl">
      <AnimatePresence mode="wait">
        <motion.img
          key={currentImage}
          src={currentImage}
          alt="Hero background"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
          className="absolute inset-0 h-full w-full object-cover"
        />
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-6">
        <motion.span
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-xs uppercase tracking-wider text-white backdrop-blur-md ring-1 ring-white/20"
        >
          ROHIS SMAN 1 SRAGEN
        </motion.span>
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight"
        >
          Sponsorship Isra Mi'raj 1447 H
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.35, duration: 0.7 }}
          className="mt-5 max-w-2xl text-base md:text-lg text-white/80"
        >
          Ayo berkolaborasi mendukung syiar Islam di lingkungan sekolah melalui
          kemitraan yang berdampak, modern, dan bermakna.
        </motion.p>

        <motion.a
          href="#plans"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="mt-8 inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-6 py-3 text-white shadow-lg shadow-emerald-500/30 hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-300"
        >
          Lihat Paket Sponsorship
        </motion.a>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
    </section>
  );
}
