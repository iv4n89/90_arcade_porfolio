import React from "react";
import type { Education } from "../types";

interface EducationSectionProps {
  isVisible: boolean;
  education: Education[];
}

const EducationSection = React.forwardRef<HTMLElement, EducationSectionProps>(({
  isVisible,
  education,
}, ref) => {
  return (
    <section
      ref={ref}
      data-section="education"
      className={`min-h-screen px-8 py-16 transition-all duration-1000 relative z-10 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <h2
          className="text-2xl md:text-6xl font-black font-mono text-purple-300 text-center mb-12"
          style={{ textShadow: "0 0 10px #BA68C8" }}
        >
          &gt; EDUCATION.DB
        </h2>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-gray-900 border border-purple-400 rounded-lg p-6 transition-all duration-300"
              style={{ boxShadow: "0 0 20px rgba(186,104,200,0.2)" }}
            >
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                <h3 className="text-xl font-bold text-cyan-300 font-mono wrap-break-word">
                  {edu.title}
                </h3>
                <span className="text-green-400 font-mono text-sm">
                  [{edu.period}]
                </span>
              </div>
              <h4 className="text-yellow-400 font-mono mb-3">
                {edu.institution}
              </h4>
              <p className="text-gray-300">{edu.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

EducationSection.displayName = 'EducationSection';

export default EducationSection;
