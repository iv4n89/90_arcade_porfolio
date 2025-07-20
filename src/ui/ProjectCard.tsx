import React from 'react';
import type { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  projectFilter: string | null;
  onTechClick: (section: string, filter: string) => void;
  className?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  projectFilter,
  onTechClick,
  className = ''
}) => {
  return (
    <div
      className={`bg-gray-900 border border-yellow-400 rounded-lg p-6 transition-all duration-300 transform ${className}`}
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
  );
};

export default ProjectCard;
