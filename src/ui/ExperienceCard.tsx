import React from 'react';
import { Tag } from './';
import type { Experience } from '../types';

interface ExperienceCardProps {
  experience: Experience;
  className?: string;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  experience,
  className = ''
}) => {
  return (
    <div
      className={`bg-gray-900 border border-purple-400 rounded-lg p-6 hover:border-cyan-400 transition-all duration-300 ${className}`}
      style={{ boxShadow: "0 0 20px rgba(138,43,226,0.2)" }}
    >
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
        <h3 className="text-xl font-bold text-green-300 font-mono">
          {experience.title}
        </h3>
        <span className="text-yellow-400 font-mono text-sm">
          [{experience.period}]
        </span>
      </div>
      <h4 className="text-purple-300 font-mono mb-3">
        {experience.company}
      </h4>
      <p className="text-gray-300 mb-4">{experience.description}</p>
      <div className="flex flex-wrap gap-2">
        {experience.technologies.map((tech, techIndex) => (
          <Tag key={techIndex} variant="primary">
            {tech}
          </Tag>
        ))}
      </div>
    </div>
  );
};

export default ExperienceCard;
