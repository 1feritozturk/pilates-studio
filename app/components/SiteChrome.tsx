'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Navbar from './Navbar';
import Footer from './Footer';

export default function SiteChrome({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isAdminRoute = pathname.startsWith('/admin');

  // GA4 Event: 30 saniyeden uzun kalanlar
  useEffect(() => {
    const timer = setTimeout(() => {
      if (typeof window !== 'undefined') {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          event: 'engaged_user_30s',
        });
      }
    }, 30000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {!isAdminRoute && <Navbar />}
      <main className={`flex-1 ${isAdminRoute ? '' : 'pt-16'}`}>{children}</main>
      {!isAdminRoute && <Footer />}
    </>
  );
}
