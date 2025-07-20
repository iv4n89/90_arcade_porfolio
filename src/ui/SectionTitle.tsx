import React from 'react';

interface SectionTitleProps {
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  color?: 'cyan' | 'green' | 'yellow' | 'purple' | 'red';
  className?: string;
  style?: React.CSSProperties;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  children,
  size = 'lg',
  color = 'cyan',
  className = '',
  style = {}
}) => {
  const sizeClasses = {
    sm: 'text-xl md:text-2xl',
    md: 'text-2xl md:text-4xl',
    lg: 'text-2xl md:text-6xl',
    xl: 'text-4xl md:text-8xl'
  };

  const colorClasses = {
    cyan: 'text-cyan-300',
    green: 'text-green-300',
    yellow: 'text-yellow-300',
    purple: 'text-purple-300',
    red: 'text-red-300'
  };

  const shadowColors = {
    cyan: '0 0 10px #4DD0E1',
    green: '0 0 10px #81C784',
    yellow: '0 0 10px #FFC107',
    purple: '0 0 10px #9C27B0',
    red: '0 0 10px #F44336'
  };

  const titleStyle = {
    textShadow: shadowColors[color],
    ...style
  };

  return (
    <div className="flex flex-col justify-center items-center mb-8">
      <h2
        className={`font-black font-mono text-center ${sizeClasses[size]} ${colorClasses[color]} ${className}`}
        style={titleStyle}
      >
        {children}
      </h2>
    </div>
  );
};

export default SectionTitle;
