import React from 'react';

interface SectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ 
  title, 
  children,
  className = '' 
}) => {
  return (
    <div className={className}>
      <div className="text-green-400 font-mono text-sm mb-2">
        {title}:
      </div>
      {children}
    </div>
  );
};

export default Section;
