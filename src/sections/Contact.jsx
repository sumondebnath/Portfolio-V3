import Container from '../components/common/Container';
import Reveal from '../components/common/Reveal';
import SocialLinks from '../components/common/SocialLinks';
import { profile, sections } from '../data/portfolio';

export default function Contact() {
  const emailLink = `mailto:${profile.email}`;
  return (
    <section id="contact" aria-labelledby="contact-heading" className="relative">
      <Container className="py-14 md:py-20">
        <Reveal>
          <div className="rounded-2xl border border-line-strong bg-surface px-6 py-14 text-center sm:px-10 md:py-16">
            <span className="badge">{sections.contact.label}</span>
            <h2
              id="contact-heading"
              className="text-[1.75rem] font-bold leading-[1.15] tracking-[-0.02em] text-ink md:text-[2.25rem]"
            >
              {sections.contact.title}
            </h2>
            <p className="mx-auto mt-4 max-w-[34rem] text-sm leading-[1.7] text-muted">
              {sections.contact.intro}
            </p>
            <a
              href={emailLink}
              className="mt-6 inline-block text-sm font-medium text-primary underline decoration-primary/40 underline-offset-4 transition-colors hover:text-accent hover:decoration-accent/40"
            >
              {profile.contactLabel}
            </a>
            <div className="mt-8 flex justify-center">
              <SocialLinks />
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}