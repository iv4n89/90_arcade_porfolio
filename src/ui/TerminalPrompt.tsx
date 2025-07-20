import React from 'react';

interface TerminalPromptProps {
  children: React.ReactNode;
  isOn?: boolean;
  powerOutage?: boolean;
  showCursor?: boolean;
  className?: string;
}

const TerminalPrompt: React.FC<TerminalPromptProps> = ({
  children,
  isOn = true,
  powerOutage = false,
  showCursor = false,
  className = ''
}) => {
  const promptStyle = {
    boxShadow: isOn ? "0 0 5px rgba(77, 208, 225, 0.1)" : "none",
    borderColor: isOn ? "#22D3EE" : "#374151",
  };

  const textStyle = {
    textShadow: isOn ? "0 0 2px #39FF14, 0 0 4px #39FF14" : "none",
    transition: "all 0.2s ease-in-out",
    opacity: isOn ? 1 : powerOutage ? 0.1 : 0.5,
  };

  return (
    <div
      className={`border-l-4 border-cyan-400 pl-6 bg-black ${className}`}
      style={promptStyle}
    >
      <div
        className="text-md sm:text-lg md:text-3xl font-mono text-green-400"
        style={textStyle}
      >
        &gt; {children}
        {showCursor && (
          <span
            className={`ml-1 ${isOn ? "animate-pulse" : ""}`}
            style={{
              opacity: powerOutage ? 0.1 : 1,
              animation: isOn ? "blink 1s infinite" : "none",
            }}
          >
            |
          </span>
        )}
      </div>
    </div>
  );
};

export default TerminalPrompt;
