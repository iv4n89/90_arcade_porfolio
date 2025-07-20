import React from 'react';
import type { Education } from '../types';

interface EducationCardProps {
  education: Education;
  className?: string;
}

const EducationCard: React.FC<EducationCardProps> = ({
  education,
  className = ''
}) => {
  return (
    <div
      className={`bg-gray-900 border border-purple-400 rounded-lg p-6 transition-all duration-300 ${className}`}
      style={{ boxShadow: "0 0 20px rgba(186,104,200,0.2)" }}
    >
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
        <h3 className="text-xl font-bold text-cyan-300 font-mono wrap-break-word">
          {education.title}
        </h3>
        <span className="text-green-400 font-mono text-sm">
          [{education.period}]
        </span>
      </div>
      <h4 className="text-yellow-400 font-mono mb-3">
        {education.institution}
      </h4>
      <p className="text-gray-300">{education.description}</p>
    </div>
  );
};

export default EducationCard;
