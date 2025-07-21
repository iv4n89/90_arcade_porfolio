import { forwardRef } from "react";
import { SkillTag } from "../ui";
import { SectionContainer } from "../ui/SectionContainer";
import SectionTitle from "../ui/SectionTitle";

interface AboutSectionProps {
  isVisible?: boolean;
  onContactClick: () => void;
}

const AboutSection = forwardRef<HTMLElement, AboutSectionProps>(
  ({ isVisible = false, onContactClick }, ref) => {
    const handleDownloadCV = () => {
      const link = document.createElement("a");
      link.href = "/cv.pdf";
      link.download = "CV_Ivan_Betanzos.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };

    return (
      <section
        ref={ref}
        data-section="about"
        className={`min-h-screen px-8 py-16 transition-all duration-1000 relative z-10 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
        }`}
      >
        <SectionContainer>
          <SectionTitle>&gt; ABOUT_ME.exe</SectionTitle>

          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="bg-gray-900/90 border-2 border-cyan-400/50 p-6 rounded-none backdrop-blur-sm">
              {/* Terminal-style header */}
              <div className="flex items-center gap-2 mb-4 pb-2 border-b border-cyan-400/30">
                <div className="w-3 h-3 bg-red-500 rounded-none"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-none"></div>
                <div className="w-3 h-3 bg-green-500 rounded-none"></div>
                <span className="text-cyan-400 text-xs ml-2">
                  ~/about_me.txt
                </span>
              </div>

              <div className="space-y-4 text-sm leading-relaxed">
                <p className="text-white">
                  <span className="text-cyan-400">$</span> cat about_me.txt
                </p>

                <div className="text-gray-300 space-y-3 pl-4">
                  <p>
                    Full-stack developer with a passion for creating innovative
                    web applications and exceptional user experiences. My
                    approach combines clean code, scalable architecture, and
                    user-centered design.
                  </p>

                  <p>
                    Specialized in React, TypeScript, Node.js and modern
                    JavaScript ecosystem technologies. Experience working with
                    SQL/NoSQL databases, RESTful APIs, and agile development
                    tools.
                  </p>

                  <p>
                    I'm motivated by solving complex problems, learning new
                    technologies and collaborating in multidisciplinary teams.
                    Web development is both my profession and my hobby, and I
                    enjoy creating digital products that truly impact users.
                  </p>

                  <p className="text-cyan-400">
                    {
                      "> Ready to collaborate and build amazing things together!"
                    }
                  </p>
                </div>

                {/* Action buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                  <SkillTag onClick={onContactClick} color="cyan">
                    [ CONTACT_ME ]
                  </SkillTag>

                  <SkillTag onClick={handleDownloadCV} color="red">
                    [ DOWNLOAD_CV.pdf ]
                  </SkillTag>
                </div>
              </div>
            </div>
          </div>
        </SectionContainer>
      </section>
    );
  }
);

AboutSection.displayName = "AboutSection";

export default AboutSection;
