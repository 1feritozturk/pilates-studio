import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#1C1C1C] text-[#9E9E9E] py-12 mt-auto">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="mb-3">
              <p className="text-lg font-semibold tracking-widest uppercase text-white">Elvin Öztürk</p>
              <p className="text-xs tracking-[0.2em] text-[#52C77E] uppercase">Online Pilates</p>
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
                { href: '/blog', label: 'Blog' },

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

          <div>
            <p className="text-white text-sm font-medium tracking-wider uppercase mb-4">Guven</p>
            <ul className="space-y-2 text-sm">
              {[
                { href: '/gizlilik-politikasi', label: 'Gizlilik Politikasi' },
                { href: '/cerez-politikasi', label: 'Cerez Politikasi' },
                { href: '/kullanim-kosullari', label: 'Kullanim Kosullari' },
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
                <a href="mailto:1elvinozturk@gmail.com" className="hover:text-white transition-colors">
                  1elvinozturk@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+905380188954" className="hover:text-white transition-colors">
                  0538 018 89 54
                </a>
              </li>
              <li className="pt-2">
                <a
                  href="https://www.instagram.com/elvinozturrk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  @elvinozturrk
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-xs">
          <p>© 2025 Elvin Öztürk Online Pilates. Tüm hakları saklıdır.</p>
          <Link
            href="/randevu"
            className="px-5 py-2 bg-[#FF6B5A] text-white text-sm font-medium rounded-full hover:bg-[#E8564A] transition-colors"
          >
            Derse Kaydol
          </Link>
        </div>
      </div>
    </footer>
  );
}
