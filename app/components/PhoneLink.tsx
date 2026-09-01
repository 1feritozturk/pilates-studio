'use client';

import { usePathname } from 'next/navigation';
import { siteConfig } from '@/lib/seo';

const TEL_HREF = `tel:+9${siteConfig.phone}`;

/**
 * Telefon bağlantısı. Tıklamayı GTM'e phone_click olarak bildirir.
 * Footer her sayfada göründüğü için tek başına server bileşeni kalabilsin
 * diye yalnızca bu bağlantı istemci tarafında çalışıyor.
 */
export default function PhoneLink({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <a
      href={TEL_HREF}
      className={className}
      onClick={() => {
        if (typeof window === 'undefined') return;
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          event: 'phone_click',
          phone_number: siteConfig.phone,
          page_path: pathname,
        });
      }}
    >
      {children}
    </a>
  );
}
