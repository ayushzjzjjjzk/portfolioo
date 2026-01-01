import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  HomeIcon,
  CodeIcon,
  RowsIcon,
  FileIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import { FaXTwitter } from "react-icons/fa6";
import { IoPerson } from "react-icons/io5";

const Tooltip = ({ text, children }) => {
  return (
    <div className="relative group">
      {children}
      <span className="absolute top-full mt-2 left-1/2 -translate-x-1/2 
        whitespace-nowrap rounded-md bg-black px-2 py-1 text-xs text-white
        opacity-0 group-hover:opacity-100 transition pointer-events-none">
        {text}
      </span>
    </div>
  );
};

const Navbar = () => {
  const { pathname } = useLocation();

  const iconBase =
    "w-[23px] h-[18px] max-sm:w-[19px] max-sm:h-[20px]";

  const itemBase =
     "hover:px-4 max-sm:hover:px-3 py-3 rounded-full transition-all duration-300 hover:bg-neutral-800";
  const active = "text-yellow-500";

  return (
    <nav className="fixed top-0 z-50 w-full py-6 flex justify-center">
      <div className="rounded-full px-37 py-2 bg-neutral-900 shadow border flex items-center gap-10">
       
       

        <Link to="/">
          <Tooltip text="Home">
            <div className={itemBase}>
              <HomeIcon className={`${iconBase} ${pathname === "/" ? active : ""}`} />
            </div>
          </Tooltip>
        </Link>

        <a href="#projects" className="text-decoration-none">
          <Tooltip text="Projects">
            <div className={itemBase}>
              <CodeIcon className={`${iconBase}`} />
            </div>
          </Tooltip>
        </a>

        <Link to="/blogs">
          <Tooltip text="Blog">
            <div className={itemBase}>
              <RowsIcon className={`${iconBase} ${pathname.startsWith("/blogs") ? active : ""}`} />
            </div>
          </Tooltip>
        </Link>

        <Link to="/about">
          <Tooltip text="About">
            <div className={itemBase}>
              <IoPerson className={`${iconBase} ${pathname === "/about" ? active : ""}`} />
            </div>
          </Tooltip>
        </Link>

        <div className="h-5 w-px bg-gray-300" />

        <Tooltip text="Resume">
          <div className={itemBase}>
            <FileIcon className={iconBase} />
          </div>
        </Tooltip>

        <a href="https://github.com/ayushzjzjjjzk" target="_blank" rel="noreferrer">
          <Tooltip text="GitHub">
            <div className={itemBase}>
              <GitHubLogoIcon className={iconBase} />
            </div>
          </Tooltip>
        </a>

        <a href="https://x.com/DiveSarla55137" target="_blank" rel="noreferrer">
          <Tooltip text="X">
            <div className={itemBase}>
              <FaXTwitter className={iconBase} />
            </div>
          </Tooltip>
        </a>

        <a href="https://www.linkedin.com/in/ayush-singh-ramola-2b597330a/" target="_blank" rel="noreferrer">
          <Tooltip text="LinkedIn">
            <div className={itemBase}>
              <LinkedInLogoIcon className={iconBase} />
            </div>
          </Tooltip>
        </a>

      </div>
    </nav>
  );
};

export default Navbar;
