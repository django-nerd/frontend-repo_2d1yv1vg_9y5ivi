import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const targetDate = new Date('2026-01-27T00:00:00+07:00');

function getTimeLeft() {
  const now = new Date();
  const diff = targetDate.getTime() - now.getTime();
  const total = Math.max(0, diff);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((total / (1000 * 60)) % 60);
  const seconds = Math.floor((total / 1000) % 60);
  return { days, hours, minutes, seconds };
}

export default function Countdown() {
  const [time, setTime] = useState(getTimeLeft());

  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="py-20" id="countdown">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl bg-gradient-to-br from-emerald-500 to-cyan-500 p-8 md:p-12 text-white shadow-lg"
        >
          <h2 className="text-2xl md:text-3xl font-bold">Hitung Mundur Isra Mi'raj</h2>
          <p className="text-white/90 mt-1">27 Januari 2026</p>

          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
            <TimeCard label="Hari" value={time.days} />
            <TimeCard label="Jam" value={time.hours} />
            <TimeCard label="Menit" value={time.minutes} />
            <TimeCard label="Detik" value={time.seconds} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function TimeCard({ label, value }) {
  return (
    <div className="rounded-2xl bg-white/10 backdrop-blur-md p-6 text-center ring-1 ring-white/20">
      <div className="text-4xl md:text-5xl font-extrabold tracking-tight">{String(value).padStart(2, '0')}</div>
      <div className="text-white/80 mt-1 text-sm uppercase tracking-wider">{label}</div>
    </div>
  );
}
