import React from "react";

interface ContactFieldProps {
  label: string;
  value: string;
  actionType?: "copy" | "visit";
  href?: string;
  onCopy?: (text: string) => void;
}

export const ContactField: React.FC<ContactFieldProps> = ({
  label,
  value,
  actionType,
  href,
  onCopy,
}) => {
  const handleAction = () => {
    if (actionType === "copy" && onCopy) {
      onCopy(value);
    }
  };

  const getButtonStyles = () => {
    switch (actionType) {
      case "copy":
        return "px-2 py-1 border border-cyan-400 text-cyan-400 text-3xs hover:bg-cyan-400 hover:text-black transition-all cursor-pointer";
      case "visit":
        return "px-2 py-1 border border-purple-400 text-purple-400 text-3xs hover:bg-purple-400 hover:text-black transition-all cursor-pointer";
      default:
        return "";
    }
  };

  const renderActionButton = () => {
    if (!actionType) return null;

    if (actionType === "visit" && href) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={getButtonStyles()}
        >
          [VISIT]
        </a>
      );
    }

    if (actionType === "copy") {
      return (
        <button
          onClick={handleAction}
          className={getButtonStyles()}
        >
          [COPY]
        </button>
      );
    }

    return null;
  };

  return (
    <div className="border border-green-400 rounded p-3 bg-black transition-all duration-300">
      <div className="flex items-center justify-between">
        <div className={actionType === "visit" ? "flex-1" : ""}>
          <div className="text-green-400 text-2xs">
            {label}
          </div>
          <div className={`text-gray-300 ${actionType === "visit" ? "text-2xs break-all pr-3" : "text-xs"}`}>
            {value}
          </div>
        </div>
        {renderActionButton()}
      </div>
    </div>
  );
};
