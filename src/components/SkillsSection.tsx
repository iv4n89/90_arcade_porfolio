import React from "react";
import type { SkillsData } from "../types";

interface SkillsSectionProps {
  isVisible: boolean;
  skillsData: SkillsData;
  onSkillClick: (skill: string) => void;
}

const SkillsSection = React.forwardRef<HTMLElement, SkillsSectionProps>(({
  isVisible,
  skillsData,
  onSkillClick,
}, ref) => {
  return (
    <section
      ref={ref}
      data-section="skills"
      className={`min-h-screen px-8 py-16 transition-all duration-1000 relative z-10 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <h2
          className="text-2xl md:text-6xl font-black font-mono text-green-300 text-center mb-12"
          style={{ textShadow: "0 0 10px #81C784" }}
        >
          &gt; SKILLS.MATRIX
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Object.entries(skillsData).map(([category, skills]) => (
            <div
              key={category}
              className="bg-gray-900 border border-green-400 rounded-lg p-6"
              style={{ boxShadow: "0 0 20px rgba(57,255,20,0.2)" }}
            >
              <h3 className="text-xl font-bold text-yellow-400 font-mono mb-4 uppercase">
                [{category}]
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {skills.map((skill: string, index: number) => (
                  <div
                    key={index}
                    onClick={() => onSkillClick(skill)}
                    className="bg-black border border-gray-600 text-center py-2 rounded text-gray-300 font-mono text-sm hover:border-cyan-400 hover:text-cyan-400 transition-all cursor-pointer transform hover:scale-105"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

SkillsSection.displayName = 'SkillsSection';

export default SkillsSection;
