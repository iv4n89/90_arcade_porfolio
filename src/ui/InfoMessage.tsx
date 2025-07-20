import React from 'react';

interface InfoMessageProps {
  children: React.ReactNode;
  className?: string;
}

const InfoMessage: React.FC<InfoMessageProps> = ({ 
  children, 
  className = '' 
}) => {
  return (
    <div className={`text-center space-y-4 ${className}`}>
      <div className="text-gray-400">
        {children}
      </div>
    </div>
  );
};

export default InfoMessage;
