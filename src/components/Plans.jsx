import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const tiers = [
  {
    name: 'Silver',
    price: 'Rp 1.000.000+',
    color: 'from-gray-100 to-gray-50',
    ring: 'ring-gray-200',
    benefits: [
      'Logo di poster & publikasi digital',
      'Ucapan terima kasih saat acara',
      'Sertifikat apresiasi',
    ],
  },
  {
    name: 'Gold',
    price: 'Rp 2.500.000+',
    color: 'from-amber-100 to-yellow-50',
    ring: 'ring-amber-200',
    benefits: [
      'Semua benefit Silver',
      'Logo di banner panggung',
      'Booth promosi saat acara',
      'Publikasi khusus di media sosial',
    ],
  },
  {
    name: 'Diamond',
    price: 'Rp 5.000.000+',
    color: 'from-cyan-100 to-emerald-50',
    ring: 'ring-emerald-200',
    benefits: [
      'Semua benefit Gold',
      'Nama disebut di seluruh sesi utama',
      'Penempatan logo premium',
      'Sesi presentasi 5 menit',
      'Akses database peserta (opsional, sesuai regulasi sekolah)',
    ],
  },
];

export default function Plans() {
  return (
    <section id="plans" className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Paket Sponsorship</h2>
          <p className="mt-2 text-gray-600">Pilih kemitraan terbaik untuk mendukung acara Isra Mi'raj.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiers.map((tier, idx) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className={`rounded-3xl bg-gradient-to-br ${tier.color} ring-1 ${tier.ring} p-6 md:p-8 shadow-sm`}
            >
              <div className="flex items-baseline justify-between">
                <h3 className="text-2xl font-bold text-gray-900">{tier.name}</h3>
                <span className="text-sm text-gray-700">{tier.price}</span>
              </div>
              <ul className="mt-6 space-y-3">
                {tier.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-gray-800">
                    <span className="mt-1 rounded-full bg-emerald-500/10 p-1 text-emerald-600 ring-1 ring-emerald-500/20">
                      <Check size={16} />
                    </span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="mt-8 inline-flex w-full items-center justify-center rounded-xl bg-gray-900 px-4 py-3 text-white hover:bg-black/90"
              >
                Dukung Paket {tier.name}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
