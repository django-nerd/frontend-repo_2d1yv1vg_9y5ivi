import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';

const gallery = [
  'https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1520975624749-5f62b6b7ef2a?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1472145246862-b24cf25c4a36?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop',
];

export default function GalleryContact() {
  return (
    <section id="gallery" className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Galeri Kegiatan</h2>
          <p className="mt-2 text-gray-600">Beberapa momen hangat dari aktivitas keislaman.</p>
        </div>

        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-4">
          {gallery.map((url, i) => (
            <motion.div
              key={url}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="overflow-hidden rounded-2xl ring-1 ring-black/5"
            >
              <img src={url} alt={`Galeri ${i + 1}`} className="h-40 w-full object-cover md:h-56 hover:scale-105 transition-transform duration-500" />
            </motion.div>
          ))}
        </div>

        <div id="contact" className="mt-20 rounded-3xl bg-white p-8 md:p-12 ring-1 ring-gray-200 shadow-sm">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Kontak</h3>
            <p className="text-gray-600 mt-1">Mari berdiskusi tentang kolaborasi terbaik untuk acara.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ContactCard icon={<Phone size={18} />} title="WhatsApp" desc="Hubungi panitia" href="https://wa.me/6281234567890" label="+62 812-3456-7890" />
            <ContactCard icon={<Mail size={18} />} title="Email" desc="Kirim proposal" href="mailto:rohissmansa@example.com" label="rohissmansa@example.com" />
            <ContactCard icon={<MapPin size={18} />} title="Lokasi" desc="SMAN 1 Sragen" href="https://maps.google.com/?q=SMAN+1+Sragen" label="Lihat di Google Maps" />
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactCard({ icon, title, desc, href, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group rounded-2xl p-6 ring-1 ring-gray-200 hover:ring-emerald-300 transition-all bg-gradient-to-br from-white to-gray-50"
    >
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 ring-1 ring-emerald-500/20">
          {icon}
        </div>
        <div>
          <div className="font-semibold text-gray-900">{title}</div>
          <div className="text-sm text-gray-600">{desc}</div>
        </div>
      </div>
      <div className="mt-4 text-emerald-700 group-hover:underline">{label}</div>
    </a>
  );
}
