import { Briefcase } from 'lucide-react';
import Section from '../components/common/Section';
import ProfileEntry from '../components/profile/ProfileEntry';
import { experience, sections } from '../data/portfolio';

export default function Experience() {
  return (
    <Section id="experience" title={sections.experience.title}>
      {experience.map((item, index) => {
        const dates =
          item.startDate && item.endDate
            ? `${item.startDate} – ${item.endDate}`
            : item.year;
        return (
          <ProfileEntry
            key={`${item.company}-${item.role}-${dates}`}
            icon={Briefcase}
            heading={item.company}
            headingHref={item.companyUrl}
            meta={item.role}
            dates={dates}
            description={item.description}
            tech={item.technologies}
            delay={Math.min(index, 3) * 60}
          />
        );
      })}
    </Section>
  );
}