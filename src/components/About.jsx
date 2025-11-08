import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="relative py-20">
      <div className="absolute inset-0 -z-0 opacity-30 bg-gradient-to-tr from-emerald-200 via-cyan-200 to-indigo-200 blur-3xl" />
      <div className="relative mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl bg-white/70 backdrop-blur-xl ring-1 ring-black/5 p-8 md:p-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Tentang ROHIS</h2>
          <p className="mt-4 text-gray-700 leading-relaxed">
            ROHIS SMAN 1 Sragen adalah organisasi kerohanian Islam yang berfokus pada
            pembinaan akhlak, penguatan literasi keislaman, dan wadah aktualisasi diri
            siswa melalui kegiatan dakwah, kajian, dan aksi sosial. Kami menjunjung nilai
            kolaborasi, profesionalitas, dan kebermanfaatan bagi lingkungan sekolah.
          </p>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-700">
            <Feature title="Berakhlak Mulia" desc="Mendorong budaya santun dan saling menghargai." />
            <Feature title="Cerdas & Kreatif" desc="Program inovatif yang relevan dengan generasi kini." />
            <Feature title="Kolaboratif" desc="Terbuka untuk bermitra demi kemajuan bersama." />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Feature({ title, desc }) {
  return (
    <div className="rounded-xl bg-white p-5 shadow-sm ring-1 ring-gray-200/60">
      <h3 className="font-semibold text-gray-900">{title}</h3>
      <p className="mt-1 text-gray-600">{desc}</p>
    </div>
  );
}
