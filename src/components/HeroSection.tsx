import React, { useMemo } from "react";

interface HeroSectionProps {
  isVisible: boolean;
  flickering: boolean;
  powerOutage: boolean;
  onTagClick: (section: string, filter?: string) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  isVisible,
  flickering,
  powerOutage,
  onTagClick,
}) => {
  const isOn = isVisible && !flickering && !powerOutage;

  const particles = useMemo(
    () =>
      [...Array(4)].map((_, i) => ({
        id: i,
        left: `${20 + Math.random() * 60}%`,
        top: `${20 + Math.random() * 60}%`,
        duration: `${4 + Math.random() * 3}s`,
        delay: `${Math.random() * 2}s`,
      })),
    []
  );

  const neonStyles = {
    firstName: {
      textShadow: isOn
        ? "0 0 2px #4DD0E1, 0 0 4px #4DD0E1, 0 0 6px #4DD0E1"
        : "none",
      transition: "all 0.2s ease-in-out",
      opacity: isOn ? 1 : powerOutage ? 0.1 : 0.4,
    },
    lastName: {
      textShadow: isOn
        ? "0 0 1px #FFFFFF, 0 0 3px #FFFFFF, 0 0 5px #FFFFFF"
        : "none",
      transition: "all 0.2s ease-in-out",
      opacity: isOn ? 1 : powerOutage ? 0.1 : 0.4,
    },
    surname: {
      textShadow: isOn
        ? "0 0 1px #81C784, 0 0 3px #81C784, 0 0 5px #81C784"
        : "none",
      transition: "all 0.2s ease-in-out",
      opacity: isOn ? 1 : powerOutage ? 0.1 : 0.4,
    },
    subtitle: {
      textShadow: isOn ? "0 0 2px #39FF14, 0 0 4px #39FF14" : "none",
      transition: "all 0.2s ease-in-out",
      opacity: isOn ? 1 : powerOutage ? 0.1 : 0.5,
    },
  };

  return (
    <div className="min-h-screen flex items-center justify-start px-8 md:px-16 relative z-10">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black font-mono tracking-wider leading-none text-left">
            <div className="text-cyan-300 mb-1" style={neonStyles.firstName}>
              IVÁN
            </div>
            <div className="text-white mb-1" style={neonStyles.lastName}>
              BETANZOS
            </div>
            <div className="text-green-300" style={neonStyles.surname}>
              MACÍAS
            </div>
          </h1>
        </div>

        <div
          className="border-l-4 border-cyan-400 pl-6 bg-black"
          style={{
            boxShadow: isOn ? "0 0 5px rgba(77, 208, 225, 0.1)" : "none",
            borderColor: isOn ? "#22D3EE" : "#374151",
          }}
        >
          <div
            className="text-md sm:text-lg md:text-3xl font-mono text-green-400"
            style={neonStyles.subtitle}
          >
            &gt; FULLSTACK_DEVELOPER.EXE
            <span
              className={`ml-1 ${isOn ? "animate-pulse" : ""}`}
              style={{
                opacity: powerOutage ? 0.1 : 1,
                animation: isOn ? "blink 1s infinite" : "none",
              }}
            >
              |
            </span>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 mt-8">
          <div
            onClick={() => onTagClick("projects", "react")}
            className="px-4 py-2 border border-cyan-400 text-cyan-400 font-mono text-sm hover:bg-cyan-400 hover:text-black transition-all cursor-pointer transform hover:scale-105"
            style={{
              boxShadow: isOn ? "0 0 5px rgba(77, 208, 225, 0.2)" : "none",
              opacity: powerOutage ? 0.1 : 1,
            }}
          >
            [REACT]
          </div>
          <div
            onClick={() => onTagClick("projects", "node")}
            className="px-4 py-2 border border-green-400 text-green-400 font-mono text-sm hover:bg-green-400 hover:text-black transition-all cursor-pointer transform hover:scale-105"
            style={{
              boxShadow: isOn ? "0 0 5px rgba(74, 222, 128, 0.2)" : "none",
              opacity: powerOutage ? 0.1 : 1,
            }}
          >
            [NODE.JS]
          </div>
          <div
            onClick={() => onTagClick("projects", "java")}
            className="px-4 py-2 border border-yellow-400 text-yellow-400 font-mono text-sm hover:bg-yellow-400 hover:text-black transition-all cursor-pointer transform hover:scale-105"
            style={{
              boxShadow: isOn ? "0 0 5px rgba(250, 204, 21, 0.2)" : "none",
              opacity: powerOutage ? 0.1 : 1,
            }}
          >
            [JAVA]
          </div>
          <div
            onClick={() => onTagClick("projects", "php")}
            className="px-4 py-2 border border-purple-400 text-purple-400 font-mono text-sm hover:bg-purple-400 hover:text-black transition-all cursor-pointer transform hover:scale-105"
            style={{
              boxShadow: isOn ? "0 0 5px rgba(168, 85, 247, 0.2)" : "none",
              opacity: powerOutage ? 0.1 : 1,
            }}
          >
            [PHP]
          </div>
          <div
            onClick={() => onTagClick("projects", "angular")}
            className="px-4 py-2 border border-red-400 text-red-400 font-mono text-sm hover:bg-red-400 hover:text-black transition-all cursor-pointer transform hover:scale-105"
            style={{
              boxShadow: isOn ? "0 0 5px rgba(239, 68, 68, 0.2)" : "none",
              opacity: powerOutage ? 0.1 : 1,
            }}
          >
            [ANGULAR]
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-gray-700">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs font-mono">
            <div>
              <div className="text-cyan-400 mb-1">SYSTEM STATUS</div>
              <div className="text-green-400">[ONLINE]</div>
            </div>
            <div>
              <div className="text-cyan-400 mb-1">LOCATION</div>
              <div className="text-gray-300">HUELVA, ES</div>
            </div>
            <div>
              <div className="text-cyan-400 mb-1">LAST UPDATE</div>
              <div className="text-gray-300">2025.07.20</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 pointer-events-none">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-40"
            style={{
              left: particle.left,
              top: particle.top,
              animation: `float ${particle.duration} ease-in-out infinite`,
              animationDelay: particle.delay,
              boxShadow: "0 0 6px currentColor",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
