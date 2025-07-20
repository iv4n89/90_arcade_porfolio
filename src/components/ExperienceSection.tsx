import React from "react";
import type { Experience } from "../types";
import { SectionTitle, ExperienceCard } from "../ui";
import { SectionContainer } from "../ui/SectionContainer";

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
        <SectionContainer>
          <SectionTitle color="cyan">
            &gt; EXPERIENCE.LOG
          </SectionTitle>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <ExperienceCard
                key={index}
                experience={exp}
              />
            ))}
          </div>
        </SectionContainer>
      </section>
    );
  }
);

ExperienceSection.displayName = "ExperienceSection";

export default ExperienceSection;
