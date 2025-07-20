import React from "react";
import type { SkillsData } from "../types";
import { SectionTitle, SkillCategory } from "../ui";
import { SectionContainer } from "../ui/SectionContainer";
import { SkillsGrid } from "../ui/SkillsGrid";

interface SkillsSectionProps {
  isVisible: boolean;
  skillsData: SkillsData;
  onSkillClick: (skill: string) => void;
}

const SkillsSection = React.forwardRef<HTMLElement, SkillsSectionProps>(
  ({ isVisible, skillsData, onSkillClick }, ref) => {
    return (
      <section
        ref={ref}
        data-section="skills"
        className={`min-h-screen px-8 py-16 transition-all duration-1000 relative z-10 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
        }`}
      >
        <SectionContainer>
          <SectionTitle color="green">&gt; SKILLS.MATRIX</SectionTitle>

          <SkillsGrid>
            {Object.entries(skillsData).map(([category, skills]) => (
              <SkillCategory
                key={category}
                category={category}
                skills={skills}
                onSkillClick={onSkillClick}
              />
            ))}
          </SkillsGrid>
        </SectionContainer>
      </section>
    );
  }
);

SkillsSection.displayName = "SkillsSection";

export default SkillsSection;
