import Reveal from '../components/common/Reveal';
import Section from '../components/common/Section';
import { sections, skills } from '../data/portfolio';

export default function Skills() {
  return (
    <Section id="skills" title={sections.skills.title}>
      <div className="grid gap-8 sm:grid-cols-2">
        {skills.map((group, index) => (
          <Reveal key={group.category} delay={Math.min(index, 3) * 60}>
            <div>
              <h3 className="text-xs font-medium tracking-[0.04em] text-muted">
                {group.category}
              </h3>
              <ul className="mt-2 flex flex-wrap gap-1.5">
                {group.items.map((skill) => (
                  <li key={skill} className="tag">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}