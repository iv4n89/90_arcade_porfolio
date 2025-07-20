import React from "react";
import type { Education } from "../types";
import { SectionTitle, EducationCard } from "../ui";
import { SectionContainer } from "../ui/SectionContainer";

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
      <SectionContainer>
        <SectionTitle color="purple">
          &gt; EDUCATION.DB
        </SectionTitle>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <EducationCard
              key={index}
              education={edu}
            />
          ))}
        </div>
      </SectionContainer>
    </section>
  );
});

EducationSection.displayName = 'EducationSection';

export default EducationSection;
