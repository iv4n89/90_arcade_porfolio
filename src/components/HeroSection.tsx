import React from "react";
import {
  NeonText,
  TerminalPrompt,
  SkillTag,
  StatusPanel,
  ParticleSystem,
} from "../ui";
import { SectionContainer } from "../ui/SectionContainer";

interface HeroSectionProps {
  isVisible: boolean;
  flickering: boolean;
  powerOutage: boolean;
  onTagClick: (section: string, filter?: string) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  isVisible,
  flickering,
  powerOutage,
  onTagClick,
}) => {
  const isOn = isVisible && !flickering && !powerOutage;

  return (
    <div className="min-h-screen flex items-center justify-start px-8 md:px-16 relative z-10">
      <SectionContainer>
        <div className="mb-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-mono tracking-wider leading-none text-left flex flex-col">
            <NeonText
              color="white"
              isOn={isOn}
              powerOutage={powerOutage}
              className="mb-1"
            >
              IVÁN
            </NeonText>
            <NeonText
              color="cyan"
              isOn={isOn}
              powerOutage={powerOutage}
              className="mb-1"
            >
              BETANZOS
            </NeonText>
            <NeonText color="green" isOn={isOn} powerOutage={powerOutage}>
              MACÍAS
            </NeonText>
          </h1>
        </div>

        <TerminalPrompt isOn={isOn} powerOutage={powerOutage} showCursor={true}>
          FULLSTACK_DEVELOPER.EXE
        </TerminalPrompt>

        <div className="flex flex-wrap gap-4 mt-8">
          <SkillTag
            onClick={() => onTagClick("projects", "react")}
            color="cyan"
            isOn={isOn}
            powerOutage={powerOutage}
          >
            [REACT]
          </SkillTag>
          <SkillTag
            onClick={() => onTagClick("projects", "node")}
            color="green"
            isOn={isOn}
            powerOutage={powerOutage}
          >
            [NODE.JS]
          </SkillTag>
          <SkillTag
            onClick={() => onTagClick("projects", "java")}
            color="yellow"
            isOn={isOn}
            powerOutage={powerOutage}
          >
            [JAVA]
          </SkillTag>
          <SkillTag
            onClick={() => onTagClick("projects", "php")}
            color="purple"
            isOn={isOn}
            powerOutage={powerOutage}
          >
            [PHP]
          </SkillTag>
          <SkillTag
            onClick={() => onTagClick("projects", "angular")}
            color="red"
            isOn={isOn}
            powerOutage={powerOutage}
          >
            [ANGULAR]
          </SkillTag>
        </div>

        <StatusPanel />
      </SectionContainer>
      <ParticleSystem />
    </div>
  );
};

export default HeroSection;
