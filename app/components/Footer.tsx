import Link from 'next/link';
import SocialIconLinks from './SocialIcons';
import PhoneLink from './PhoneLink';

export default function Footer() {
  return (
    <footer className="bg-[#1C1C1C] text-[#9E9E9E] py-12 mt-auto">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="mb-3">
              <p className="text-lg font-semibold tracking-widest uppercase text-white">Elvin Öztürk</p>
              <p className="text-xs tracking-[0.12em] text-[#6B3D7A] uppercase">Online Pilates</p>
            </div>
            <p className="text-base leading-relaxed">
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
            <ul className="space-y-2.5 text-sm text-[#C4C4C4]">
              <li>
                <a
                  href="mailto:info@elvinozturk.com"
                  className="flex items-center gap-2.5 hover:text-white transition-colors"
                >
                  <svg aria-hidden="true" viewBox="0 0 24 24" className="w-4 h-4 flex-shrink-0 fill-none stroke-[#C9A87A]" strokeWidth="1.8">
                    <rect x="3" y="5" width="18" height="14" rx="2.5" />
                    <path d="m4 7 8 6 8-6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  info@elvinozturk.com
                </a>
              </li>
              <li>
                <PhoneLink className="flex items-center gap-2.5 hover:text-white transition-colors">
                  <svg aria-hidden="true" viewBox="0 0 24 24" className="w-4 h-4 flex-shrink-0 fill-none stroke-[#C9A87A]" strokeWidth="1.8">
                    <path
                      d="M5 3h3.5l1.8 4.4-2.2 1.6a12.5 12.5 0 0 0 6.9 6.9l1.6-2.2L21 15.5V19a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 3 5.2 2 2 0 0 1 5 3Z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  0538 018 89 54
                </PhoneLink>
              </li>
            </ul>

            <div className="mt-5 pt-5 border-t border-white/10">
              <p className="text-[#8A8A8A] text-xs tracking-[0.08em] uppercase mb-3">Takip edin</p>
              <SocialIconLinks />
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-xs">
          <p>© 2025 Elvin Öztürk Online Pilates. Tüm hakları saklıdır.</p>
          <Link
            href="/randevu"
            className="px-5 py-2 bg-[#C9A87A] text-[#1A1218] text-sm font-medium rounded-full hover:bg-[#B8976A] transition-colors"
          >
            Derse Kaydol
          </Link>
        </div>
      </div>
    </footer>
  );
}
