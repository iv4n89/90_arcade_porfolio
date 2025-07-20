import React from 'react';

interface ModalTitleProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const ModalTitle: React.FC<ModalTitleProps> = ({ 
  children, 
  className = '',
  style = {}
}) => {
  return (
    <h3
      className={`text-2xl font-black font-mono text-cyan-400 mb-4 text-center ${className}`}
      style={{ 
        textShadow: "0 0 10px #00FFFF",
        ...style 
      }}
    >
      {children}
    </h3>
  );
};

export default ModalTitle;
