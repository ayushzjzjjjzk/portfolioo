import React from "react";
import { experienceData } from "../../utils/experienceData";

const Experience = () => {
  return (
    <section className="w-full bg-black text-white px-5 py-20 rounded-full">
      
      {/* Title */}
      <h2 className="text-4xl font-bold mb-8 text-center">
        Experience
      </h2>

      {/* Experience List */}
      <div className="space-y-5">
        {experienceData.map((exp, index) => (
          <div
            key={index}
            className="border border-gray-400 rounded-lg p-5 hover:shadow-sm transition"
          >
            <div className="flex justify-between items-start flex-wrap gap-2">
              <div>
                <h3 className="text-lg font-medium">
                  {exp.role}
                </h3>
                <p className="text-sm text-white">
                  {exp.company}
                </p>
              </div>

              <span className="text-sm text-white">
                {exp.duration}
              </span>
            </div>

            <p className="mt-3 text-sm text-white leading-relaxed">
              {exp.description}
            </p>
          </div>
        ))}
      </div>

    </section>
  );
};

export default Experience;
