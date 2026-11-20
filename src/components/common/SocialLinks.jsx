import { socialLinks } from '../../data/portfolio';
import BrandIcon from './BrandIcon';

export default function SocialLinks() {
  const links = socialLinks.filter((link) => link.href && link.icon);
  return (
    <div className="flex items-center gap-2">
      {links.map((link) => {
        const external = !link.href.startsWith('mailto:');
        return (
          <a
            key={link.name}
            href={link.href}
            aria-label={link.ariaLabel || link.label || link.name}
            title={link.label || link.name}
            {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            className="flex size-11 items-center justify-center rounded-full text-muted transition-colors hover:bg-elevated hover:text-ink"
          >
            <BrandIcon type={link.icon} />
          </a>
        );
      })}
    </div>
  );
}