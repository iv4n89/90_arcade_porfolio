import React from "react";
import { usePortfolioData } from "../hooks/usePortfolioData";
import type { SkillDetail } from "../types";

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
    <div
      className="fixed inset-0 flex items-center justify-center z-50 p-4 transition-all ease-in-out duration-300"
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.9)",
        backdropFilter: "blur(5px)",
      }}
      onClick={onClose}
    >
      <div
        className="bg-gray-900 border-2 border-cyan-400 rounded-lg p-6 max-w-lg w-full relative"
        style={{ boxShadow: "0 0 30px rgba(0,255,255,0.5)" }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-red-400 hover:text-red-300 font-mono text-xl font-bold cursor-pointer transition-all ease-in-out duration-300"
        >
          [X]
        </button>

        <h3
          className="text-2xl font-black font-mono text-cyan-400 mb-4 text-center"
          style={{ textShadow: "0 0 10px #00FFFF" }}
        >
          &gt; {selectedSkill.toUpperCase()}.INFO
        </h3>

        {skillInfo ? (
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <div className="text-center">
                <div className="text-green-400 font-mono text-sm">LEVEL</div>
                <div
                  className={`font-bold font-mono ${
                    skillInfo.level === "EXPERT"
                      ? "text-yellow-400"
                      : skillInfo.level === "ADVANCED"
                      ? "text-green-400"
                      : "text-cyan-400"
                  }`}
                >
                  [{skillInfo.level}]
                </div>
              </div>
              <div className="text-center">
                <div className="text-green-400 font-mono text-sm">
                  EXPERIENCE
                </div>
                <div className="text-purple-400 font-mono font-bold">
                  {skillInfo.experience}
                </div>
              </div>
            </div>

            <div>
              <div className="text-green-400 font-mono text-sm mb-2">
                DESCRIPTION:
              </div>
              <div className="text-gray-300 text-sm leading-relaxed">
                {skillInfo.description}
              </div>
            </div>

            <div>
              {(projectsUsed.length > 0 && (
                <div className="text-green-400 font-mono text-sm mb-2">
                  PROJECTS_USED:
                </div>
              )) || <></>}
              <div className="flex flex-wrap gap-2">
                {projectsUsed.map((project, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-black border border-purple-400 text-purple-400 text-xs font-mono rounded"
                  >
                    {project.title}
                  </span>
                ))}
              </div>
            </div>

            {educationData.filter((edu) => edu.skills.includes(selectedSkill))
              .length > 0 && (
              <div>
                <div className="text-green-400 font-mono text-sm mb-2">
                  CERTIFICATIONS:
                </div>
                <div className="space-y-1">
                  {educationData
                    .filter((edu) => edu.skills.includes(selectedSkill))
                    .map((cert, index) => (
                      <div
                        key={index}
                        className="text-yellow-400 font-mono text-xs"
                      >
                        ✓ {cert.title}
                      </div>
                    ))}
                </div>
              </div>
            )}

            <div className="flex gap-3 mt-6">
              <button
                onClick={() => onViewProjects(selectedSkill)}
                className="flex-1 cursor-pointer px-4 py-2 bg-cyan-400 text-black font-mono text-sm font-bold rounded hover:bg-cyan-300 transition-all transform hover:scale-105"
                style={{ boxShadow: "0 0 15px rgba(0,255,255,0.3)" }}
              >
                [VIEW_PROJECTS]
              </button>
              <button
                onClick={onClose}
                className="px-4 cursor-pointer py-2 border border-gray-400 text-gray-400 font-mono text-sm rounded hover:border-gray-300 hover:text-gray-300 transition-all"
              >
                [CLOSE]
              </button>
            </div>
          </div>
        ) : (
          <div className="text-center space-y-4">
            <div className="text-gray-400">
              Información detallada no disponible para esta skill.
            </div>
            <button
              onClick={onClose}
              className="px-4 py-2 border border-gray-400 text-gray-400 font-mono text-sm rounded hover:border-gray-300 hover:text-gray-300 transition-all"
            >
              [CLOSE]
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SkillModal;
