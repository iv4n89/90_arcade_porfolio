import React from 'react';

interface SkillTagProps {
  children: React.ReactNode;
  onClick: () => void;
  color?: 'cyan' | 'green' | 'yellow' | 'purple' | 'red';
  isOn?: boolean;
  powerOutage?: boolean;
  className?: string;
}

const SkillTag: React.FC<SkillTagProps> = ({
  children,
  onClick,
  color = 'cyan',
  isOn = true,
  powerOutage = false,
  className = ''
}) => {
  const colorClasses = {
    cyan: 'border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black',
    green: 'border-green-400 text-green-400 hover:bg-green-400 hover:text-black',
    yellow: 'border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black',
    purple: 'border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-black',
    red: 'border-red-400 text-red-400 hover:bg-red-400 hover:text-black'
  };

  const shadowColors = {
    cyan: 'rgba(77, 208, 225, 0.2)',
    green: 'rgba(74, 222, 128, 0.2)',
    yellow: 'rgba(250, 204, 21, 0.2)',
    purple: 'rgba(168, 85, 247, 0.2)',
    red: 'rgba(239, 68, 68, 0.2)'
  };

  const tagStyle = {
    boxShadow: isOn ? `0 0 5px ${shadowColors[color]}` : "none",
    opacity: powerOutage ? 0.1 : 1,
  };

  return (
    <div
      onClick={onClick}
      className={`px-4 py-2 border font-mono text-sm transition-all cursor-pointer transform hover:scale-105 ${colorClasses[color]} ${className}`}
      style={tagStyle}
    >
      {children}
    </div>
  );
};

export default SkillTag;
