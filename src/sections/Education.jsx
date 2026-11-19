import { ExternalLink, GraduationCap } from 'lucide-react';
import Section from '../components/common/Section';
import ProfileEntry from '../components/profile/ProfileEntry';
import { education, sections } from '../data/portfolio';

/** Only non-empty http(s) URLs become a credential link. */
function credentialHref(value) {
  if (typeof value !== 'string') return null;
  const url = value.trim();
  if (!url) return null;
  try {
    const parsed = new URL(url);
    return parsed.protocol === 'http:' || parsed.protocol === 'https:' ? url : null;
  } catch {
    return null;
  }
}

export default function Education() {
  return (
    <Section id="education" title={sections.education.title}>
      {education.map((item, index) => {
        let dates = item.startDate || item.endDate || item.status;
        if (item.startDate && item.endDate) {
          dates =
            item.startDate === item.endDate
              ? item.startDate
              : `${item.startDate} – ${item.endDate}`;
        }
        const href = credentialHref(item.credentialUrl);
        const label =
          typeof item.credentialLabel === 'string' && item.credentialLabel.trim()
            ? item.credentialLabel.trim()
            : 'Verify credential';
        const footer = href ? (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Verify credential for ${item.degree || item.institution} (opens in a new tab)`}
            className="mt-2 inline-flex min-h-11 items-center gap-1 text-xs font-medium text-muted transition-colors hover:text-primary md:min-h-0"
          >
            {label}
            <ExternalLink className="size-3.5" strokeWidth={2} aria-hidden="true" />
          </a>
        ) : null;
        return (
          <ProfileEntry
            key={`${item.institution}-${item.degree}`}
            icon={GraduationCap}
            heading={item.institution}
            headingHref={item.institutionUrl}
            meta={item.degree}
            title={item.status}
            dates={dates}
            description={item.description}
            footer={footer}
            delay={Math.min(index, 3) * 60}
          />
        );
      })}
    </Section>
  );
}
