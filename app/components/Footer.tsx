import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#1C1C1C] text-[#9E9E9E] py-12 mt-auto">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="mb-3">
              <p className="text-lg font-semibold tracking-widest uppercase text-white">Elvin Öztürk</p>
              <p className="text-xs tracking-[0.2em] text-[#7D9B76] uppercase">Online Pilates</p>
            </div>
            <p className="text-sm leading-relaxed">
              Nerede olursanız olun, online grup ve bireysel derslerle Pilates&apos;in gucunu kesfedin.
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="text-white text-sm font-medium tracking-wider uppercase mb-4">Sayfalar</p>
            <ul className="space-y-2 text-sm">
              {[
                { href: '/dersler', label: 'Dersler' },
                { href: '/galeri', label: 'Galeri' },
                { href: '/hakkimda', label: 'Hakkımda' },
                { href: '/iletisim', label: 'İletişim' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-white text-sm font-medium tracking-wider uppercase mb-4">İletişim</p>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="mailto:info@elvinozturk.com.tr" className="hover:text-white transition-colors">
                  info@elvinozturk.com.tr
                </a>
              </li>
              <li>
                <a href="tel:+905001234567" className="hover:text-white transition-colors">
                  +90 (500) 123 45 67
                </a>
              </li>
              <li className="pt-2">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  @elvinozturk.pilates
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-xs">
          <p>© 2025 Elvin Öztürk Online Pilates. Tüm hakları saklıdır.</p>
          <Link
            href="/randevu"
            className="px-5 py-2 bg-[#7D9B76] text-white text-sm font-medium rounded-full hover:bg-[#6A8B63] transition-colors"
          >
            Derse Kaydol
          </Link>
        </div>
      </div>
    </footer>
  );
}
