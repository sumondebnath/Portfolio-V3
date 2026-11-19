import Section from '../components/common/Section';
import { profile, sections } from '../data/portfolio';

export default function About() {
  return (
    <Section id="about" title={sections.about.title}>
      <div className="space-y-4">
        {profile.about.map((paragraph) => (
          <p key={paragraph} className="text-sm leading-[1.7] text-muted">
            {paragraph}
          </p>
        ))}
      </div>
    </Section>
  );
}