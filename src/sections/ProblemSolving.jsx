import { ArrowUpRight, Link2 } from 'lucide-react';
import Reveal from '../components/common/Reveal';
import Section from '../components/common/Section';
import { problemSolving, sections } from '../data/portfolio';

const letter = (name) => name.trim().charAt(0).toUpperCase() || '?';

/**
 * Competitive programming practice section. Renders whenever the data exists —
 * platform cards show name + description from portfolio.js; the "View profile"
 * link only appears once a real `url` is provided. Linktree card renders as a
 * link when `linktree.url` exists, otherwise as a plain card. No invented data.
 */
export default function ProblemSolving() {
  const { platforms = [], linktree } = problemSolving;
  const hasLinktree = Boolean(linktree?.url);
  if (!Array.isArray(platforms) || platforms.length === 0) return null;

  return (
    <Section
      id="problem-solving"
      title={sections.problemSolving.title}
      intro={sections.problemSolving.intro}
    >
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {platforms.map((item, index) => (
          <Reveal
            as="article"
            key={item.platform}
            className="h-full min-w-0"
            delay={Math.min(index, 4) * 70}
          >
            <div className="flex h-full flex-col gap-3 rounded-xl border border-line-strong bg-surface p-5 transition-all duration-300 hover:-translate-y-1 hover:border-tint-border hover:shadow-[0_18px_44px_-18px_rgba(94,234,212,0.25)]">
              <div className="flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-tint-border bg-tint text-sm font-bold text-primary"
                >
                  {letter(item.platform)}
                </span>
                <div className="min-w-0">
                  <h3 className="text-[15px] font-semibold leading-snug text-ink">
                    {item.platform}
                  </h3>
                  {item.username && (
                    <p className="text-xs text-faint">@{item.username}</p>
                  )}
                </div>
              </div>
              {item.description && (
                <p className="text-sm leading-[1.7] text-muted">
                  {item.description}
                </p>
              )}
              {item.url && (
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center gap-1 pt-1 text-xs font-medium text-muted transition-colors hover:text-primary"
                >
                  View profile
                  <ArrowUpRight
                    className="size-3.5"
                    strokeWidth={2}
                    aria-hidden="true"
                  />
                </a>
              )}
            </div>
          </Reveal>
        ))}

        {hasLinktree && (
          <Reveal as="article" className="h-full min-w-0" delay={140}>
            {linktree.url ? (
              <a
                href={linktree.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col gap-3 rounded-xl border border-tint-border bg-surface p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_44px_-18px_rgba(94,234,212,0.25)]"
              >
                <span
                  aria-hidden="true"
                  className="flex size-11 items-center justify-center rounded-xl bg-tint text-primary"
                >
                  <Link2 className="size-5" strokeWidth={1.8} />
                </span>
                <h3 className="text-[15px] font-semibold leading-snug text-ink">
                  {linktree.label}
                </h3>
                {linktree.description && (
                  <p className="text-sm leading-[1.7] text-muted">
                    {linktree.description}
                  </p>
                )}
                <span className="mt-auto inline-flex items-center gap-1 pt-1 text-xs font-medium text-primary">
                  Visit hub
                  <ArrowUpRight
                    className="size-3.5"
                    strokeWidth={2}
                    aria-hidden="true"
                  />
                </span>
              </a>
            ) : (
              <div className="flex h-full flex-col gap-3 rounded-xl border border-line-strong bg-surface p-5">
                <span
                  aria-hidden="true"
                  className="flex size-11 items-center justify-center rounded-xl bg-tint text-primary"
                >
                  <Link2 className="size-5" strokeWidth={1.8} />
                </span>
                <h3 className="text-[15px] font-semibold leading-snug text-ink">
                  {linktree.label}
                </h3>
                {linktree.description && (
                  <p className="text-sm leading-[1.7] text-muted">
                    {linktree.description}
                  </p>
                )}
              </div>
            )}
          </Reveal>
        )}
      </div>
    </Section>
  );
}
