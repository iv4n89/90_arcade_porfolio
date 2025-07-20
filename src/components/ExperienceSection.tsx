import React from "react";
import type { Experience } from "../types";

interface ExperienceSectionProps {
  isVisible: boolean;
  experiences: Experience[];
  projectFilter: string | null;
  onClearFilter: () => void;
}

const ExperienceSection = React.forwardRef<HTMLElement, ExperienceSectionProps>(
  ({ isVisible, experiences }, ref) => {
    return (
      <section
        ref={ref}
        data-section="experience"
        className={`min-h-screen px-8 pt-16 pb-8 transition-all duration-1000 relative z-10 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
        }`}
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col justify-center items-center mb-8">
            <h2
              className="text-2xl md:text-6xl font-black font-mono text-cyan-300 text-center"
              style={{ textShadow: "0 0 10px #4DD0E1" }}
            >
              &gt; EXPERIENCE.LOG
            </h2>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-gray-900 border border-purple-400 rounded-lg p-6 hover:border-cyan-400 transition-all duration-300"
                style={{ boxShadow: "0 0 20px rgba(138,43,226,0.2)" }}
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                  <h3 className="text-xl font-bold text-green-300 font-mono">
                    {exp.title}
                  </h3>
                  <span className="text-yellow-400 font-mono text-sm">
                    [{exp.period}]
                  </span>
                </div>
                <h4 className="text-purple-300 font-mono mb-3">
                  {exp.company}
                </h4>
                <p className="text-gray-300 mb-4">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-black border border-cyan-400 text-cyan-400 text-xs font-mono rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
);

ExperienceSection.displayName = "ExperienceSection";

export default ExperienceSection;
