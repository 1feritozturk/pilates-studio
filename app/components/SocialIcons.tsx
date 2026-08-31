import { socialLinks } from '@/lib/seo';

type IconProps = { className?: string };

export function InstagramIcon({ className = 'w-5 h-5' }: IconProps) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className={`${className} fill-none stroke-current`} strokeWidth="1.8">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.3" cy="6.8" r="0.9" className="fill-current stroke-none" />
    </svg>
  );
}

export function FacebookIcon({ className = 'w-5 h-5' }: IconProps) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className={`${className} fill-current`}>
      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.52 1.49-3.91 3.77-3.91 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.78-1.63 1.57v1.89h2.78l-.45 2.91h-2.33V22c4.78-.76 8.44-4.92 8.44-9.94Z" />
    </svg>
  );
}

export function YoutubeIcon({ className = 'w-5 h-5' }: IconProps) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className={`${className} fill-current`}>
      <path d="M21.58 7.19a2.5 2.5 0 0 0-1.76-1.77C18.25 5 12 5 12 5s-6.25 0-7.82.42A2.5 2.5 0 0 0 2.42 7.2 26.1 26.1 0 0 0 2 12a26.1 26.1 0 0 0 .42 4.81 2.5 2.5 0 0 0 1.76 1.77C5.75 19 12 19 12 19s6.25 0 7.82-.42a2.5 2.5 0 0 0 1.76-1.77A26.1 26.1 0 0 0 22 12a26.1 26.1 0 0 0-.42-4.81ZM10 15.02V8.98L15.2 12 10 15.02Z" />
    </svg>
  );
}

const socialAccounts = [
  { href: socialLinks.instagram, label: 'Instagram', Icon: InstagramIcon },
  { href: socialLinks.facebook, label: 'Facebook', Icon: FacebookIcon },
  { href: socialLinks.youtube, label: 'YouTube', Icon: YoutubeIcon },
] as const;

/** Footer için yuvarlak çerçeveli, yazısız sosyal medya ikonları. */
export default function SocialIconLinks() {
  return (
    <div className="flex gap-2.5">
      {socialAccounts.map(({ href, label, Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          title={label}
          className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-[#C4C4C4] hover:text-white hover:border-white/50 transition-colors"
        >
          <Icon />
        </a>
      ))}
    </div>
  );
}
