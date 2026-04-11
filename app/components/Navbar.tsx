'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const links = [
  { href: '/', label: 'Ana Sayfa' },
  { href: '/dersler', label: 'Dersler' },
  { href: '/blog', label: 'Blog' },
  { href: '/hakkimda', label: 'Hakkımda' },
  { href: '/iletisim', label: 'İletişim' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#FDFEF9]/95 backdrop-blur-sm border-b border-[#D5F2E5]">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex flex-col leading-tight">
          <span className="text-base font-semibold tracking-widest uppercase text-[#1F1F1F]">Elvin Öztürk</span>
          <span className="text-[10px] tracking-[0.2em] text-[#52C77E] uppercase">Online Pilates</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm tracking-wide transition-colors ${
                pathname === link.href
                  ? 'text-[#52C77E] font-medium'
                  : 'text-[#505050] hover:text-[#1F1F1F]'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <Link
          href="/randevu"
          className="hidden md:inline-flex items-center px-5 py-2 bg-[#FF6B5A] text-white text-sm font-medium rounded-full hover:bg-[#E8564A] transition-colors"
        >
          Derse Kaydol
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menü"
        >
          <span className={`block w-6 h-0.5 bg-[#1F1F1F] transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-[#1F1F1F] transition-all ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-[#1F1F1F] transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#FDFEF9] border-t border-[#D5F2E5] px-6 py-4 flex flex-col gap-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`text-sm tracking-wide py-1 ${
                pathname === link.href ? 'text-[#52C77E] font-medium' : 'text-[#505050]'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/randevu"
            onClick={() => setMenuOpen(false)}
            className="mt-2 inline-flex items-center justify-center px-5 py-2.5 bg-[#FF6B5A] text-white text-sm font-medium rounded-full"
          >
            Derse Kaydol
          </Link>
        </div>
      )}
    </header>
  );
}
