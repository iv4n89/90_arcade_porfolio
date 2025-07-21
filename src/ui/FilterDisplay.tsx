import React from 'react';
import { Button } from './';

interface FilterDisplayProps {
  filter: string | null;
  onClearFilter: () => void;
  className?: string;
}

const FilterDisplay: React.FC<FilterDisplayProps> = ({
  filter,
  onClearFilter,
  className = ''
}) => {
  if (!filter) return null;

  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <span className="text-yellow-400 text-xs">
        FILTER: [{filter.toUpperCase()}]
      </span>
      <Button
        onClick={onClearFilter}
        variant="secondary"
        size="sm"
        className="border-red-400 text-red-400 hover:bg-red-400 hover:text-black hover:border-red-400"
        style={{ boxShadow: "0 0 10px rgba(239,68,68,0.3)" }}
      >
        [CLEAR_FILTER]
      </Button>
    </div>
  );
};

export default FilterDisplay;
