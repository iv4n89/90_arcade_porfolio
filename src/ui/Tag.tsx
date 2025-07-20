import React from 'react';

interface TagProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary';
}

const Tag: React.FC<TagProps> = ({ 
  children, 
  className = '',
  variant = 'primary'
}) => {
  const baseClasses = "px-2 py-1 text-xs font-mono rounded";
  const variantClasses = {
    primary: "bg-black border border-purple-400 text-purple-400",
    secondary: "bg-gray-800 border border-gray-500 text-gray-300"
  };

  return (
    <span className={`${baseClasses} ${variantClasses[variant]} ${className}`}>
      {children}
    </span>
  );
};

export default Tag;
