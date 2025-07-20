import React from "react";
import { usePortfolioData } from "../hooks/usePortfolioData";
import type { SkillDetail } from "../types";
import {
  Button,
  InfoMessage,
  Modal,
  ModalTitle,
  Section,
  StatDisplay,
  Tag,
} from "../ui";

interface SkillModalProps {
  selectedSkill: string | null;
  skillDetails: Record<string, SkillDetail>;
  onClose: () => void;
  onViewProjects: (skill: string) => void;
}

const SkillModal: React.FC<SkillModalProps> = ({
  selectedSkill,
  skillDetails,
  onClose,
  onViewProjects,
}) => {
  const { projectsData, educationData } = usePortfolioData();
  if (!selectedSkill) return null;

  const skillInfo = skillDetails[selectedSkill];

  const projectsUsed = projectsData.filter((project) =>
    project.technologies.includes(selectedSkill)
  );

  return (
    <Modal isOpen={!!selectedSkill} onClose={onClose}>
      <ModalTitle>&gt; {selectedSkill?.toUpperCase()}.INFO</ModalTitle>

      {skillInfo ? (
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <StatDisplay
              label="LEVEL"
              value={`[${skillInfo.level}]`}
              valueColor={
                skillInfo.level === "EXPERT"
                  ? "text-yellow-400"
                  : skillInfo.level === "ADVANCED"
                  ? "text-green-400"
                  : "text-cyan-400"
              }
            />
            <StatDisplay
              label="EXPERIENCE"
              value={skillInfo.experience}
              valueColor="text-purple-400"
            />
          </div>

          <Section title="DESCRIPTION">
            <div className="text-gray-300 text-sm leading-relaxed">
              {skillInfo.description}
            </div>
          </Section>

          {projectsUsed.length > 0 && (
            <Section title="PROJECTS_USED">
              <div className="flex flex-wrap gap-2">
                {projectsUsed.map((project, index) => (
                  <Tag key={index} variant="primary">
                    {project.title}
                  </Tag>
                ))}
              </div>
            </Section>
          )}

          {educationData.filter((edu) => edu.skills.includes(selectedSkill!))
            .length > 0 && (
            <Section title="CERTIFICATIONS">
              <div className="space-y-1">
                {educationData
                  .filter((edu) => edu.skills.includes(selectedSkill!))
                  .map((cert, index) => (
                    <div
                      key={index}
                      className="text-yellow-400 font-mono text-xs"
                    >
                      ✓ {cert.title}
                    </div>
                  ))}
              </div>
            </Section>
          )}

          <div className="flex gap-3 mt-6">
            <Button
              onClick={() => onViewProjects(selectedSkill!)}
              variant="primary"
              fullWidth
            >
              [VIEW_PROJECTS]
            </Button>
            <Button onClick={onClose} variant="secondary">
              [CLOSE]
            </Button>
          </div>
        </div>
      ) : (
        <InfoMessage>
          Detailed information not available for this skill.
          <div className="mt-4">
            <Button onClick={onClose} variant="secondary">
              [CLOSE]
            </Button>
          </div>
        </InfoMessage>
      )}
    </Modal>
  );
};

export default SkillModal;
