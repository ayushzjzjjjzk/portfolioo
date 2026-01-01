import React from "react";
import { skillsData } from "../../utils/skillsData";

const Skills = () => {
  return (
    <section className="w-full bg-black text-white px-5 py-20 ">
      {/* Title */}
      <h2 className="text-4xl font-bold mb-12 text-center">
        Skills
      </h2>

      {/* Skills Grid */}
      <div className="flex justify-center flex-wrap gap-4 max-w-4xl mx-auto ">
        {skillsData.map((skill, index) => (
          <div
            key={index}
            className="relative px-4 py-2 border border-white rounded-full text-sm font-medium bg-white text-black transition cursor-pointer group"
            title={skill}
          >
            {skill}
            <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition pointer-events-none ">
              {skill}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
