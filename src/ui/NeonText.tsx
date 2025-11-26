import React, { useMemo } from "react";

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
    cyan: "text-cyan-100",
    white: "text-white",
    green: "text-green-100",
    yellow: "text-yellow-100",
    red: "text-red-100",
    purple: "text-purple-100",
    gray: "text-gray-200",
    darkGray: "text-gray-400",
  };

  const neonShadows: Record<string, string> = {
    cyan: "0 0 5px #fff, 0 0 10px #fff, 0 0 20px #4DD0E1, 0 0 30px #4DD0E1, 0 0 40px #4DD0E1",
    white: "0 0 5px #fff, 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #bbb, 0 0 40px #999",
    green: "0 0 5px #fff, 0 0 10px #fff, 0 0 20px #81C784, 0 0 30px #81C784, 0 0 40px #81C784",
    yellow: "0 0 5px #fff, 0 0 10px #fff, 0 0 20px #FFC107, 0 0 30px #FFC107, 0 0 40px #FFC107",
    red: "0 0 5px #fff, 0 0 10px #fff, 0 0 20px #F44336, 0 0 30px #F44336, 0 0 40px #F44336",
    purple: "0 0 5px #fff, 0 0 10px #fff, 0 0 20px #9C27B0, 0 0 30px #9C27B0, 0 0 40px #9C27B0",
    gray: "0 0 2px #fff, 0 0 5px #B0BEC5, 0 0 10px #B0BEC5",
    darkGray: "0 0 2px #fff, 0 0 5px #78909C, 0 0 10px #78909C",
  };

  const offShadow = "none";
  const offColor = "rgba(255, 255, 255, 0.1)";

  const characters = useMemo(() => {
    if (typeof children === "string") {
      return children.split("");
    }
    return [children];
  }, [children]);

  return (
    <span className={`inline-block ${className}`} style={style}>
      {characters.map((char, index) => {
        const shouldFlicker = index % 3 === 0 || index % 7 === 0; 
        const flickerDuration = 2 + (index % 5) * 0.5; 
        const flickerDelay = (index % 10) * 0.2; 

        const charStyle: React.CSSProperties = {
          color: isOn ? undefined : offColor,
          textShadow: isOn ? neonShadows[color] : offShadow,
          transition: "color 0.2s ease-in-out, text-shadow 0.2s ease-in-out, opacity 0.2s ease-in-out",
          opacity: isOn ? 1 : powerOutage ? 0.05 : 0.3,
          animation: isOn && shouldFlicker 
            ? `neon-flicker-intense ${flickerDuration}s infinite alternate ${flickerDelay}s` 
            : "none",
        };

        return (
          <span
            key={index}
            className={`${isOn ? colorClasses[color] : ""} inline-block transition-all duration-200`}
            style={charStyle}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        );
      })}
    </span>
  );
};

export default NeonText;
