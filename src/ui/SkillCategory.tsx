import React from 'react';

interface SkillCategoryProps {
  category: string;
  skills: string[];
  onSkillClick: (skill: string) => void;
  className?: string;
}

const SkillCategory: React.FC<SkillCategoryProps> = ({
  category,
  skills,
  onSkillClick,
  className = ''
}) => {
  return (
    <div
      className={`bg-gray-900 border border-green-400 rounded-lg p-6 ${className}`}
      style={{ boxShadow: "0 0 20px rgba(57,255,20,0.2)" }}
    >
      <h3 className="text-xl font-bold text-yellow-400 font-mono mb-4 uppercase">
        [{category}]
      </h3>
      <div className="grid grid-cols-2 gap-3">
        {skills.map((skill: string, index: number) => (
          <div
            key={index}
            onClick={() => onSkillClick(skill)}
            className="bg-black border border-gray-600 text-center py-2 rounded text-gray-300 font-mono text-sm hover:border-cyan-400 hover:text-cyan-400 transition-all cursor-pointer transform hover:scale-105"
          >
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillCategory;
