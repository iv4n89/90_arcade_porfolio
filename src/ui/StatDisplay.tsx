import React from 'react';

interface StatDisplayProps {
  label: string;
  value: string;
  valueColor?: string;
  className?: string;
}

const StatDisplay: React.FC<StatDisplayProps> = ({
  label,
  value,
  valueColor = 'text-purple-400',
  className = ''
}) => {
  return (
    <div className={`text-center ${className}`}>
      <div className="text-green-400 text-2xs">{label}</div>
      <div className={`font-bold text-xs ${valueColor}`}>
        {value}
      </div>
    </div>
  );
};

export default StatDisplay;
