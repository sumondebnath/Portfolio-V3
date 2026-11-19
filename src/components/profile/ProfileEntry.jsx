import Reveal from '../common/Reveal';

/**
 * Timeline/list row used by Experience and Education.
 * Only renders fields that exist in the data.
 * - heading: bold primary line (optionally a link via headingHref)
 * - meta:    muted secondary line
 * - title:   muted tertiary line
 * - dates:   faint, right-aligned on the heading row
 * - tech:    optional small technology tags
 * - footer:  optional extra content
 */
export default function ProfileEntry({
  icon: Icon,
  heading,
  headingHref,
  meta,
  title,
  dates,
  description,
  tech = [],
  footer,
  delay = 0,
}) {
  return (
    <Reveal as="article" delay={delay} className="flex items-start gap-4 py-5">
      {Icon ? (
        <span
          className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-tint-border bg-tint text-primary md:size-12"
          aria-hidden="true"
        >
          <Icon className="size-5" strokeWidth={1.8} />
        </span>
      ) : null}
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
          <h3 className="text-[15px] font-semibold leading-snug text-ink">
            {headingHref ? (
              <a
                href={headingHref}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-primary"
              >
                {heading}
              </a>
            ) : (
              heading
            )}
          </h3>
          {dates && <span className="text-xs text-faint">{dates}</span>}
        </div>
        {meta && <p className="mt-0.5 text-[13px] text-muted">{meta}</p>}
        {title && <p className="mt-0.5 text-[13px] text-muted">{title}</p>}
        {description && <p className="mt-2 text-sm leading-[1.7] text-muted">{description}</p>}
        {tech.length > 0 && (
          <ul className="mt-2 flex flex-wrap gap-1.5">
            {tech.map((item) => (
              <li key={item} className="tag">
                {item}
              </li>
            ))}
          </ul>
        )}
        {footer}
      </div>
    </Reveal>
  );
}