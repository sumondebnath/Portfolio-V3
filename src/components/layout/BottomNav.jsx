import { FileDown, Home, Mail } from 'lucide-react';
import { resume, socialLinks } from '../../data/portfolio';
import BrandIcon from '../common/BrandIcon';

/**
 * Floating bottom navigation: Home (scroll to top), Resume (download) and
 * the social links from data (GitHub, LinkedIn, Email, … in data order).
 * Icons + accessible labels; compact pill, elevated off the bottom edge.
 */
export default function BottomNav() {
  const links = socialLinks.filter((link) => link.href && link.icon);
  const itemClass =
    'flex size-11 items-center justify-center rounded-full text-muted transition-colors hover:bg-elevated hover:text-ink';

  return (
    <nav
      aria-label="Primary navigation"
      className="fixed inset-x-0 bottom-[max(1rem,env(safe-area-inset-bottom))] z-50 flex justify-center px-3"
    >
      <div className="flex items-center gap-1 rounded-full border border-line-strong bg-bg p-1.5 shadow-[0_10px_34px_-12px_rgba(0,0,0,0.7)]">
        <a href="#home" aria-label="Home" title="Home" className={itemClass}>
          <Home className="size-5" aria-hidden="true" />
        </a>

        {resume?.href ? (
          <a
            href={resume.href}
            download={resume.download || undefined}
            aria-label={`Download ${resume.label || 'resume'}`}
            title={`Download ${resume.label || 'resume'}`}
            className={itemClass}
          >
            <FileDown className="size-5" aria-hidden="true" />
          </a>
        ) : (
          <span
            aria-disabled="true"
            title="Resume file is not available yet"
            className={`${itemClass} cursor-not-allowed text-faint`}
          >
            <FileDown className="size-5" aria-hidden="true" />
          </span>
        )}

        {links.map((link) => {
          const external = !link.href.startsWith('mailto:');
          return (
            <a
              key={link.name}
              href={link.href}
              aria-label={link.ariaLabel || link.label || link.name}
              title={link.label || link.name}
              {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              className={itemClass}
            >
              {link.icon === 'mail' ? (
                <Mail className="size-5" aria-hidden="true" />
              ) : (
                <BrandIcon type={link.icon} className="size-5" strokeWidth={1.8} />
              )}
            </a>
          );
        })}
      </div>
    </nav>
  );
}