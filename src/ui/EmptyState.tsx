import React from 'react';

interface EmptyStateProps {
  title: string;
  message: string;
  filter?: string | null;
  className?: string;
}

const EmptyState: React.FC<EmptyStateProps> = ({
  title,
  message,
  filter,
  className = ''
}) => {
  return (
    <div className={`text-center py-16 ${className}`}>
      <div className="text-red-400 font-mono text-xl mb-4">
        {title}
      </div>
      <div className="text-gray-400 font-mono text-sm">
        {message}
        {filter && (
          <span> [{filter.toUpperCase()}]</span>
        )}
      </div>
    </div>
  );
};

export default EmptyState;
