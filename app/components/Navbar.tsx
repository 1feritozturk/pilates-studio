'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const links = [
  { href: '/', label: 'Ana Sayfa' },
  { href: '/dersler', label: 'Dersler' },
  { href: '/galeri', label: 'Galeri' },
  { href: '/hakkimda', label: 'Hakkımda' },
  { href: '/iletisim', label: 'İletişim' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#FAFAF8]/95 backdrop-blur-sm border-b border-[#EDE0CF]">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex flex-col leading-tight">
          <span className="text-base font-semibold tracking-widest uppercase text-[#1C1C1C]">Elvin Öztürk</span>
          <span className="text-[10px] tracking-[0.2em] text-[#7D9B76] uppercase">Online Pilates</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm tracking-wide transition-colors ${
                pathname === link.href
                  ? 'text-[#7D9B76] font-medium'
                  : 'text-[#5A5A5A] hover:text-[#1C1C1C]'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <Link
          href="/randevu"
          className="hidden md:inline-flex items-center px-5 py-2 bg-[#7D9B76] text-white text-sm font-medium rounded-full hover:bg-[#6A8B63] transition-colors"
        >
          Derse Kaydol
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menü"
        >
          <span className={`block w-6 h-0.5 bg-[#1C1C1C] transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-[#1C1C1C] transition-all ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-[#1C1C1C] transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#FAFAF8] border-t border-[#EDE0CF] px-6 py-4 flex flex-col gap-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`text-sm tracking-wide py-1 ${
                pathname === link.href ? 'text-[#7D9B76] font-medium' : 'text-[#5A5A5A]'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/randevu"
            onClick={() => setMenuOpen(false)}
            className="mt-2 inline-flex items-center justify-center px-5 py-2.5 bg-[#7D9B76] text-white text-sm font-medium rounded-full"
          >
            Derse Kaydol
          </Link>
        </div>
      )}
    </header>
  );
}
