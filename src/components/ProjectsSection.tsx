import React from "react";
import type { Project } from "../types";

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
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col justify-center items-center mb-8">
            <h2
              className="text-2xl md:text-6xl font-black font-mono text-purple-300 text-center"
              style={{ textShadow: "0 0 10px #BA68C8" }}
            >
              &gt; PROJECTS.ARCHIVE
            </h2>
            {projectFilter && (
              <div className="flex items-center gap-4">
                <span className="text-yellow-400 font-mono text-sm">
                  FILTER: [{projectFilter.toUpperCase()}]
                </span>
                <button
                  onClick={onClearFilter}
                  className="px-4 py-2 cursor-pointer border border-red-400 text-red-400 rounded-lg font-mono text-sm hover:bg-red-400 hover:text-black transition-all transform hover:scale-105"
                  style={{ boxShadow: "0 0 10px rgba(239,68,68,0.3)" }}
                >
                  [CLEAR_FILTER]
                </button>
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-900 border border-yellow-400 rounded-lg p-6 transition-all duration-300 transform"
                style={{ boxShadow: "0 0 20px rgba(255,255,0,0.2)" }}
              >
                <div className="flex md:flex-row flex-col justify-between items-start mb-4 wrap-anywhere">
                  <h3 className="text-lg font-bold text-cyan-300 font-mono">
                    {project.title}
                  </h3>
                  <div className="flex flex-col items-end gap-1">
                    <span className="text-green-400 font-mono text-xs">
                      [{project.status}]
                    </span>
                    <span className="text-gray-400 font-mono text-xs">
                      {project.year}
                    </span>
                  </div>
                </div>
                <p className="text-gray-300 mb-4 text-sm">
                  {project.description}
                </p>
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 font-mono text-xs mb-4 block"
                  >
                    {project.url}
                  </a>
                )}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`px-2 py-1 bg-black border text-xs font-mono rounded cursor-pointer transition-all hover:scale-105 ${
                        projectFilter &&
                        tech.toLowerCase().includes(projectFilter.toLowerCase())
                          ? "border-yellow-400 text-black bg-yellow-400 bg-opacity-20"
                          : "border-purple-400 text-purple-400 hover:border-cyan-400 hover:text-cyan-400"
                      }`}
                      onClick={() =>
                        onTechClick("projects", tech.toLowerCase())
                      }
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {projects.length === 0 && (
            <div className="text-center py-16">
              <div className="text-red-400 font-mono text-xl mb-4">
                [NO_PROJECTS_FOUND]
              </div>
              <div className="text-gray-400 font-mono text-sm">
                No projects match the current filter: [
                {projectFilter?.toUpperCase()}]
              </div>
            </div>
          )}
        </div>
      </section>
    );
  }
);

ProjectsSection.displayName = "ProjectsSection";

export default ProjectsSection;
