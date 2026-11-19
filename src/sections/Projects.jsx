import Section from '../components/common/Section';
import ProjectCard from '../components/projects/ProjectCard';
import { projects, sections } from '../data/portfolio';

export default function Projects() {
  return (
    <Section
      id="projects"
      title={sections.projects.title}
      intro={sections.projects.intro}
    >
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.title}
            project={project}
            delay={Math.min(index, 4) * 70}
          />
        ))}
      </div>
    </Section>
  );
}
