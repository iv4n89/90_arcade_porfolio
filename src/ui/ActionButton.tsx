import React from "react";

interface ActionButtonProps {
  type: "copy" | "visit" | "close";
  onClick?: () => void;
  href?: string;
  children?: React.ReactNode;
}

export const ActionButton: React.FC<ActionButtonProps> = ({
  type,
  onClick,
  href,
  children,
}) => {
  const getButtonStyles = () => {
    switch (type) {
      case "copy":
        return "px-2 py-1 border border-cyan-400 text-cyan-400 text-3xs hover:bg-cyan-400 hover:text-black transition-all cursor-pointer";
      case "visit":
        return "px-2 py-1 border border-purple-400 text-purple-400 text-3xs hover:bg-purple-400 hover:text-black transition-all cursor-pointer";
      case "close":
        return "px-4 py-2 border cursor-pointer border-gray-400 text-gray-400 text-2xs rounded hover:border-gray-300 hover:text-gray-300 transition-all";
      default:
        return "";
    }
  };

  const getButtonText = () => {
    if (children) return children;
    switch (type) {
      case "copy":
        return "[COPY]";
      case "visit":
        return "[VISIT]";
      case "close":
        return "[CLOSE_CONNECTION]";
      default:
        return "";
    }
  };

  if (type === "visit" && href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={getButtonStyles()}
      >
        {getButtonText()}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      className={getButtonStyles()}
    >
      {getButtonText()}
    </button>
  );
};
