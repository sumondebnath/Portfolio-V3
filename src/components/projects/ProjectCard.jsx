import { ArrowUpRight } from 'lucide-react';
import BrandIcon from '../common/BrandIcon';
import Reveal from '../common/Reveal';

/**
 * Text-based project card — mirrors the reference's clean, typography-driven
 * project presentation. No images, thumbnails or placeholders; only renders
 * the fields that exist in the data (title, dates, description, tags, links).
 */
export default function ProjectCard({ project, delay = 0 }) {
  const dates = project.dates || project.year;
  const tags = project.technologies || project.tags || [];
  const repos = Array.isArray(project.repos)
    ? project.repos.filter((repo) => repo && repo.href)
    : [];
  return (
    <Reveal as="article" className="h-full min-w-0" delay={delay}>
      <div className="flex h-full flex-col gap-3 rounded-xl border border-line-strong bg-surface p-5 transition-all duration-300 hover:-translate-y-1 hover:border-tint-border hover:shadow-[0_18px_44px_-18px_rgba(94,234,212,0.25)]">
        <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
          <h3 className="text-[16px] font-semibold leading-snug tracking-[-0.01em] text-ink">
            {project.title}
          </h3>
          {dates && <span className="shrink-0 text-xs text-faint">{dates}</span>}
        </div>
        <p className="text-sm leading-[1.7] text-muted">{project.description}</p>
        {tags.length > 0 && (
          <ul className="flex flex-wrap gap-1.5">
            {tags.map((tag) => (
              <li key={tag} className="tag">
                {tag}
              </li>
            ))}
          </ul>
        )}
        {(project.live || project.github || repos.length > 0) && (
          <div className="mt-auto flex flex-wrap gap-x-5 gap-y-1 pt-1">
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-medium text-muted transition-colors hover:text-primary"
              >
                Website
                <ArrowUpRight className="size-3.5" strokeWidth={2} aria-hidden="true" />
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-medium text-muted transition-colors hover:text-primary"
              >
                <BrandIcon type="github" className="size-3.5" strokeWidth={2} />
                Source
              </a>
            )}
            {repos.map((repo) => (
              <a
                key={`${repo.label}-${repo.href}`}
                href={repo.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} ${repo.label} repository`}
                className="inline-flex items-center gap-1 text-xs font-medium text-muted transition-colors hover:text-primary"
              >
                <BrandIcon type="github" className="size-3.5" strokeWidth={2} />
                {repo.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </Reveal>
  );
}