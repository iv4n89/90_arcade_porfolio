import React, { useEffect, useRef, useState } from "react";
import { ContactModal } from "../components/ContactModal";
import EducationSection from "../components/EducationSection";
import ExperienceSection from "../components/ExperienceSection";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import ProjectsSection from "../components/ProjectsSection";
import SkillModal from "../components/SkillModal";
import SkillsSection from "../components/SkillsSection";
import { usePortfolioData } from "../hooks/usePortfolioData";
import type { VisibleSections } from "../types";

const Portfolio: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [flickering, setFlickering] = useState<boolean>(false);
  const [powerOutage, setPowerOutage] = useState<boolean>(false);
  const [visibleSections, setVisibleSections] = useState<VisibleSections>({});
  const [projectFilter, setProjectFilter] = useState<string | null>(null);
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);
  const [contactModalOpen, setContactModalOpen] = useState<boolean>(false);
  const {
    educationData,
    experienceData,
    projectsData,
    skillDetails,
    skillsData,
  } = usePortfolioData();

  const sectionRefs = {
    experience: useRef<HTMLElement>(null),
    projects: useRef<HTMLElement>(null),
    skills: useRef<HTMLElement>(null),
    education: useRef<HTMLElement>(null),
  };

  const scrollToSection = (section: string, filter?: string): void => {
    if (filter) setProjectFilter(filter);
    sectionRefs[section as keyof typeof sectionRefs].current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const clearFilter = (): void => {
    setProjectFilter(null);
  };

  const openSkillModal = (skill: string): void => {
    setSelectedSkill(skill);
  };

  const closeSkillModal = (): void => {
    setSelectedSkill(null);
  };

  const openContactModal = (): void => {
    setContactModalOpen(true);
  };

  const closeContactModal = (): void => {
    setContactModalOpen(false);
  };

  const handleViewProjects = (skill: string): void => {
    scrollToSection("projects", skill.toLowerCase());
    closeSkillModal();
  };

  const filteredProjects = projectFilter
    ? projectsData.filter((project) =>
        project.technologies.some((tech) =>
          tech.toLowerCase().includes(projectFilter.toLowerCase())
        )
      )
    : projectsData;

  useEffect(() => {
    const timer1 = setTimeout(() => setIsVisible(true), 500);

    const flickerInterval = setInterval(() => {
      if (Math.random() < 0.1) {
        setFlickering(true);
        setTimeout(() => setFlickering(false), 150);
      }
    }, 3000);

    const powerOutageInterval = setInterval(() => {
      if (Math.random() < 0.05 && !flickering) {
        setPowerOutage(true);

        const outageTime = 1000 + Math.random() * 1000;
        setTimeout(() => {
          setPowerOutage(false);

          let blinkCount = 0;
          const blinkInterval = setInterval(() => {
            setFlickering((prev) => !prev);
            blinkCount++;
            if (blinkCount >= 6) {
              clearInterval(blinkInterval);
              setFlickering(false);
            }
          }, 100);
        }, outageTime);
      }
    }, 8000);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => ({
              ...prev,
              [(entry.target as HTMLElement).dataset.section!]: true,
            }));
          }
        });
      },
      { threshold: 0.3 }
    );

    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      clearTimeout(timer1);
      clearInterval(flickerInterval);
      clearInterval(powerOutageInterval);
      observer.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="bg-black min-h-screen portfolio-main-background">
      <div className="fixed inset-0 pointer-events-none opacity-20 z-0 portfolio-overlay"></div>

      <HeroSection
        powerOutage={powerOutage}
        isVisible={isVisible}
        flickering={flickering}
        onTagClick={scrollToSection}
        onContactClick={openContactModal}
      />

      <ExperienceSection
        ref={sectionRefs.experience}
        isVisible={visibleSections.experience}
        experiences={experienceData}
        projectFilter={projectFilter}
        onClearFilter={clearFilter}
      />

      <ProjectsSection
        ref={sectionRefs.projects}
        isVisible={visibleSections.projects}
        projects={filteredProjects}
        projectFilter={projectFilter}
        onClearFilter={clearFilter}
        onTechClick={scrollToSection}
      />

      <SkillsSection
        ref={sectionRefs.skills}
        isVisible={visibleSections.skills}
        skillsData={skillsData}
        onSkillClick={openSkillModal}
      />

      <EducationSection
        ref={sectionRefs.education}
        isVisible={visibleSections.education}
        education={educationData}
      />

      <SkillModal
        selectedSkill={selectedSkill}
        skillDetails={skillDetails}
        onClose={closeSkillModal}
        onViewProjects={handleViewProjects}
      />

      <ContactModal open={contactModalOpen} onClose={closeContactModal} />

      <Footer onContactClick={openContactModal} />
    </div>
  );
};

export default Portfolio;
