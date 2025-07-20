import React from "react";

interface StatusMessageProps {
  status: string;
  color?: "yellow" | "green" | "red" | "blue";
}

export const StatusMessage: React.FC<StatusMessageProps> = ({
  status,
  color = "yellow",
}) => {
  const getColorClass = () => {
    switch (color) {
      case "yellow":
        return "text-yellow-400";
      case "green":
        return "text-green-400";
      case "red":
        return "text-red-400";
      case "blue":
        return "text-blue-400";
      default:
        return "text-yellow-400";
    }
  };

  return (
    <div className={`${getColorClass()} font-mono text-xs mb-2`}>
      STATUS: [{status}]
    </div>
  );
};
