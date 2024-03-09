import React from "react";
import SkillsItem from "./skills-Item";
import SkillsLanguage from "./Skills-language";

const Skills = () => {
  return (
    <div className="pt-[4rem] md:pt-[8rem] pb-[5rem] bg-[#09101a]">
      <h1 className="heading">
        Education & <span className="text-[#b03320]">Skills</span>
      </h1>
      <div className="w-[80%] mx-auto pt-[4rem] md:pt-[8rem] grid grid-cols-1 md:grid-cols-2 gap-[2rem] items-center">
        <div>
          <SkillsItem
            title="Django Developer"
            year="2022 - 2023"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            cupiditate harum autem, aut porro laudantium obcaecati possimus, velit,
            vitae suscipit quaerat."
          />
          <SkillsItem
            title="React Js Developer"
            year="2022 - 2023"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            cupiditate harum autem, aut porro laudantium obcaecati possimus, velit,
            vitae suscipit quaerat."
          />
          <SkillsLanguage
            skill1="Python"
            skill2="Html/Css"
            skill3="Java"
            level1="w-[88%]"
            level2="w-[90%]"
            level3="w-[70%]"
          />
        </div>
        <div>
          <SkillsItem
            title="Svelte & Sveltekit Developer"
            year="2022 - 2023"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            cupiditate harum autem, aut porro laudantium obcaecati possimus, velit,
            vitae suscipit quaerat."
          />
          <SkillsItem
            title="Next Js Developer"
            year="2022 - 2023"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            cupiditate harum autem, aut porro laudantium obcaecati possimus, velit,
            vitae suscipit quaerat."
          />
          <SkillsLanguage
            skill1="Svelte Js"
            skill2="React Js"
            skill3="TypeScript"
            level1="w-[91%]"
            level2="w-[87%]"
            level3="w-[63%]"
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;
