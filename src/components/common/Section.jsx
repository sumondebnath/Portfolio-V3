import Container from './Container';
import Reveal from './Reveal';

/**
 * Page section wrapper. Sections separate themselves with spacing and
 * typography only — no horizontal rules/borders between sections.
 * All sections share the exact same horizontal boundary via Container.
 */
export default function Section({ id, label, title, intro, children }) {
  return (
    <section id={id} className="relative">
      <Container className="py-14 md:py-20">
        <Reveal>
          {label && <span className="badge">{label}</span>}
          <h2 className="text-[1.5rem] font-bold leading-[1.2] tracking-[-0.02em] text-ink md:text-[2rem]">
            {title}
          </h2>
          {intro && (
            <p className="mt-3 max-w-[40rem] text-sm leading-[1.7] text-muted">{intro}</p>
          )}
        </Reveal>
        <div className="mt-8">{children}</div>
      </Container>
    </section>
  );
}