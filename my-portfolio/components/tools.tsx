import React from "react";

interface Skill {
  title: string;
  hash: string;
  icon: any;
  color?: any;
}

interface SkillCategory {
  readonly skillsTitle: string;
  readonly skills: readonly Skill[];
}

interface SkillSectionProps {
  skillsData: readonly SkillCategory[];
  theme: string;
}

const toolsSection: React.FC<SkillSectionProps> = ({ skillsData, theme }) => {
  const getSkillIconSrc = (theme: string, skill: Skill) => {
    if (
      theme === "dark" &&
      (skill.title.includes("Next"))
    ) {
      return skill.icon[1];
    } else if (skill.title !== "Next.js") {
      return skill.icon;
    } else {
      return skill.icon[0];
    }
  };

  const getSkillColor = (theme: string, skill: Skill) => {
    if (
      theme === "dark" &&
      (skill.title.includes("Next"))
    ) {
      return skill.color[1];
    } else if (skill.title !== "Next.js") {
      return skill.color;
    } else {
      return skill.color[0];
    }
  };

  return (
    <article
      className={`h-auto rounded-2xl p-16 pt-32 grid grid-cols-3 gap-10 relative z-10 max-lg:w-full max-lg:grid-cols-2 max-lg:p-8  max-lg:pt-32 ${
        theme === "dark"
          ? "bg-[--blackblue] dark-mode-shadow"
          : "bg-[--icewhite] dark-shadow"
      }`}
    >
      <div
        className={`absolute top-10 left-1/2 transform -translate-x-1/2 px-4 py-2  rounded-t-xl `}
      >
        <p className="font-black text-white text-4xl">
          <span className="text-[--marron]">&lt;</span>
          {skillsData[0].skillsTitle}
          <span className="text-[--marron]">/&gt;</span>
        </p>
      </div>
      {skillsData[0].skills.map((skill, index) => (
        <div
          key={index}
          className={`skill-item cursor-pointer flex flex-col gap-8 rounded-2xl p-2 border-solid border-[0.25rem]  text-center  items-center   ${
            theme === "dark" ? "bg-[--darkblue]" : "bg-[--icewhite]"
          }`}
          data-tooltip-id="my-tooltip"
          data-tooltip-content={skill.title}
          style={{
            borderColor: getSkillColor(theme, skill),
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.animation = "pulse 2s infinite";
            e.currentTarget.style.transform = "scale(1)";
            document.documentElement.style.setProperty(
              "--box-shadow-color",
              `${getSkillColor(theme, skill)}b3`
            );
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.animation = "";
            e.currentTarget.style.transform = "";
            document.documentElement.style.setProperty(
              "--box-shadow-color",
              "inherit"
            );
          }}
        >
          <div className="h-[4rem]">
            {getSkillIconSrc(theme, skill)}
          </div>
          <h3 className="max-lg:text-[2rem] font-black text-white text-xl mb-2 max-[1024px]:hidden">
            {skill.title}
          </h3>
        </div>
      ))}
    </article>
  );
};

export default toolsSection;
