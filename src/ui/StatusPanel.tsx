import React from "react";

interface StatusPanelProps {
  status?: string;
  location?: string;
  className?: string;
  onContactClick?: () => void;
}

const StatusPanel: React.FC<StatusPanelProps> = ({
  status = "[ONLINE]",
  location = "HUELVA, ES",
  className = "",
  onContactClick,
}) => {
  return (
    <div className={`mt-12 pt-6 border-t border-gray-700 ${className}`}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs font-mono">
        <div>
          <div className="text-cyan-400 mb-1">SYSTEM STATUS</div>
          <div className="text-green-400">{status}</div>
        </div>
        <div>
          <div className="text-cyan-400 mb-1">LOCATION</div>
          <div className="text-gray-300">{location}</div>
        </div>
        <div>
          <div className="text-cyan-400 mb-1">CONTACT</div>
          <a
            className="text-green-400 cursor-pointer underline underline-offset-8 hover:text-green-300 transition-colors"
            onClick={onContactClick}
          >
            {"[ AVAILABLE ]"}
          </a>
        </div>
      </div>
    </div>
  );
};

export default StatusPanel;
