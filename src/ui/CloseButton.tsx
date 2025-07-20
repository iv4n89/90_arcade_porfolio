import React from 'react';

interface CloseButtonProps {
  onClick: () => void;
  className?: string;
}

const CloseButton: React.FC<CloseButtonProps> = ({ 
  onClick, 
  className = '' 
}) => {
  return (
    <button
      onClick={onClick}
      className={`absolute top-4 right-4 text-red-400 hover:text-red-300 font-mono text-xl font-bold cursor-pointer transition-all ease-in-out duration-300 ${className}`}
    >
      [X]
    </button>
  );
};

export default CloseButton;
