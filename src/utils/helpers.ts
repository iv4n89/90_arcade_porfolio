import type { Project } from "../types";

export const getSkillLevelColor = (level: string): string => {
  switch (level) {
    case "EXPERT":
      return "text-yellow-400";
    case "ADVANCED":
      return "text-green-400";
    case "INTERMEDIATE":
      return "text-cyan-400";
    default:
      return "text-gray-400";
  }
};

export const filterProjectsByTechnology = (
  projects: Project[],
  filter: string | null
): Project[] => {
  if (!filter) return projects;

  return projects.filter((project) =>
    project.technologies.some((tech) =>
      tech.toLowerCase().includes(filter.toLowerCase())
    )
  );
};

export const generateNeonStyle = (
  color: string,
  isVisible: boolean = true,
  flickering: boolean = false
) => ({
  textShadow:
    isVisible && !flickering
      ? `0 0 3px ${color}, 0 0 8px ${color}, 0 0 12px ${color}`
      : "none",
  transition: "all 0.3s ease-in-out",
  opacity: isVisible && !flickering ? 1 : 0.3,
});
