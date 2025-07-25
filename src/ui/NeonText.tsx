import React from "react";

interface NeonTextProps {
  children: React.ReactNode;
  color?: "cyan" | "white" | "green" | "yellow" | "red" | "purple" | "gray" | "darkGray";
  isOn?: boolean;
  powerOutage?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

const NeonText: React.FC<NeonTextProps> = ({
  children,
  color = "cyan",
  isOn = true,
  powerOutage = false,
  className = "",
  style = {},
}) => {
  const colorClasses: Record<string, string> = {
    cyan: "text-cyan-300",
    white: "text-white",
    green: "text-green-300",
    yellow: "text-yellow-300",
    red: "text-red-300",
    purple: "text-purple-300",
    gray: "text-gray-300",
    darkGray: "text-gray-500",
  };

  const neonShadows: Record<string, string> = {
    cyan: "0 0 2px #4DD0E1, 0 0 4px #4DD0E1, 0 0 6px #4DD0E1",
    white: "0 0 1px #FFFFFF, 0 0 3px #FFFFFF, 0 0 5px #FFFFFF",
    green: "0 0 1px #81C784, 0 0 3px #81C784, 0 0 5px #81C784",
    yellow: "0 0 2px #FFC107, 0 0 4px #FFC107, 0 0 6px #FFC107",
    red: "0 0 2px #F44336, 0 0 4px #F44336, 0 0 6px #F44336",
    purple: "0 0 2px #9C27B0, 0 0 4px #9C27B0, 0 0 6px #9C27B0",
    gray: "0 0 1px #B0BEC5, 0 0 3px #B0BEC5, 0 0 5px #B0BEC5",
    darkGray: "0 0 1px #78909C, 0 0 3px #78909C, 0 0 5px #78909C",
  };

  const neonStyle = {
    textShadow: isOn ? neonShadows[color] : "none",
    transition: "all 0.2s ease-in-out",
    opacity: isOn ? 1 : powerOutage ? 0.1 : 0.4,
    ...style,
  };

  return (
    <span
      className={`${colorClasses[color]} text-3xl md:text-5xl lg:text-6xl ${className}`}
      style={neonStyle}
    >
      {children}
    </span>
  );
};

export default NeonText;
