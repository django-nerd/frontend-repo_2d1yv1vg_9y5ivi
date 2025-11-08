import Hero from './components/Hero';
import About from './components/About';
import Countdown from './components/Countdown';
import Plans from './components/Plans';
import GalleryContact from './components/GalleryContact';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white text-gray-900">
      <header className="sticky top-0 z-50 backdrop-blur bg-white/60 border-b border-gray-200/60">
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
          <a href="#" className="font-extrabold tracking-tight text-xl">ROHIS SMAN 1 SRAGEN</a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#about" className="hover:text-emerald-600">Tentang</a>
            <a href="#countdown" className="hover:text-emerald-600">Countdown</a>
            <a href="#plans" className="hover:text-emerald-600">Paket</a>
            <a href="#gallery" className="hover:text-emerald-600">Galeri</a>
            <a href="#contact" className="hover:text-emerald-600">Kontak</a>
          </nav>
          <a href="#plans" className="inline-flex items-center rounded-lg bg-emerald-500 px-3 py-2 text-white hover:bg-emerald-600 text-sm">Dukung Sekarang</a>
        </div>
      </header>

      <main>
        <Hero />
        <About />
        <Countdown />
        <Plans />
        <GalleryContact />
      </main>

      <footer className="mt-10 border-t border-gray-200/80">
        <div className="max-w-6xl mx-auto px-6 py-8 text-sm text-gray-600 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>© {new Date().getFullYear()} ROHIS SMAN 1 Sragen. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <a href="#plans" className="hover:text-emerald-700">Sponsorship</a>
            <a href="#contact" className="hover:text-emerald-700">Kontak</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
