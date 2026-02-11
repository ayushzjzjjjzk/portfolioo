import React from "react";
import { Element } from "react-scroll";

export default function ProjectCard({
  icon,
  title,
  description,
  tech = [],
  website,
  source,
}) {
  return (
     <Element name="projects">
    <div
      className="
        relative
        rounded-2xl
        border border-white/10
        bg-linear-to-br from-neutral-900 to-neutral-950
        p-6
        text-white
        transition
        hover:-translate-y-1
        hover:border-white/20
        cursor-pointer

      "
    >
      {/* Icon */}
      <div className="mb-4">
        <div className="h-10 w-10 rounded-full bg-neutral-800 flex items-center justify-center">
          {icon}
        </div>
      </div>

      {/* Title */}
      <h3 className="text-xl font-semibold mb-3">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-400 mb-6 leading-relaxed">
        {description}
      </p>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 mb-6">
        {tech.map((item) => (
          <span
            key={item}
            className="
              text-xs
              px-3
              py-1
              rounded-md
              border border-white/15
              text-gray-300
              hover:bg-white 
                hover:text-black
            "
          >
            {item}
          </span>
        ))}
      </div>

      {/* Actions */}
      <div className="flex gap-3">
        {website && (
          <a
            href={website}
            target="_blank"
            rel="noreferrer"
            className="
              inline-flex items-center gap-2
              rounded-lg
              bg-white
              px-4 py-2
              text-sm font-medium
              text-black
            "
          >
            🌐 Website
          </a>
        )}

        {source && (
          <a
            href={source}
            target="_blank"
            rel="noreferrer"
            className="
              inline-flex items-center gap-2
              rounded-lg
              border border-white/20
              px-4 py-2
              text-sm
            "
          >
            🐙 Source
          </a>
        )}
      </div>
    </div>
    </Element>
  );
}
