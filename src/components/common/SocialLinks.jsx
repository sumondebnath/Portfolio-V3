import { problemSolving, socialLinks } from '../../data/portfolio';
import BrandIcon from './BrandIcon';

export default function SocialLinks() {
  const links = [
    ...socialLinks.filter((link) => link.href && link.icon),
    // Linktree hub appears in the socials row only once a url exists in data.
    ...(problemSolving.linktree?.url
      ? [
          {
            name: 'Linktree',
            href: problemSolving.linktree.url,
            icon: 'linktree',
            label: problemSolving.linktree.label || 'Linktree',
          },
        ]
      : []),
  ];
  return (
    <div className="flex items-center gap-2">
      {links.map((link) => {
        const external = !link.href.startsWith('mailto:');
        return (
          <a
            key={link.name}
            href={link.href}
            aria-label={link.label || link.name}
            title={link.label || link.name}
            {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            className="inline-flex size-9 items-center justify-center rounded-xl bg-elevated text-faint transition-colors hover:bg-[rgba(224,247,250,0.1)] hover:text-ink"
          >
            <BrandIcon type={link.icon} />
          </a>
        );
      })}
    </div>
  );
}