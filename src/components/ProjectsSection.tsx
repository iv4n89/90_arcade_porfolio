import React from "react";
import type { Project } from "../types";
import { 
  SectionTitle, 
  ProjectCard, 
  FilterDisplay, 
  EmptyState 
} from "../ui";
import { SectionContainer } from "../ui/SectionContainer";

interface ProjectsSectionProps {
  isVisible: boolean;
  projects: Project[];
  projectFilter: string | null;
  onClearFilter: () => void;
  onTechClick: (section: string, filter: string) => void;
}

const ProjectsSection = React.forwardRef<HTMLElement, ProjectsSectionProps>(
  ({ isVisible, projects, projectFilter, onClearFilter, onTechClick }, ref) => {
    return (
      <section
        ref={ref}
        data-section="projects"
        className={`min-h-screen px-8 py-16 transition-all duration-1000 relative z-10 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
        }`}
      >
        <SectionContainer>
          <SectionTitle color="purple">
            &gt; PROJECTS.ARCHIVE
          </SectionTitle>
          
          <FilterDisplay 
            filter={projectFilter}
            onClearFilter={onClearFilter}
            className="mb-8 justify-center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                project={project}
                projectFilter={projectFilter}
                onTechClick={onTechClick}
              />
            ))}
          </div>

          {projects.length === 0 && (
            <EmptyState
              title="[NO_PROJECTS_FOUND]"
              message="No projects match the current filter:"
              filter={projectFilter}
            />
          )}
        </SectionContainer>
      </section>
    );
  }
);

ProjectsSection.displayName = "ProjectsSection";

export default ProjectsSection;
