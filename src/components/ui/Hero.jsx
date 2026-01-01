import { Link as ScrollLink } from "react-scroll";
import ayushPhoto from "../../photos/ayushPhoto.png";

export default function HeroSection() {
  return (
    <div className="w-full flex justify-center py-5 pt-36 dark:bg-black">
      <div className="w-2/3 max-sm:w-full flex flex-col items-center">

        {/* Avatar Image */}
        <img
          src={ayushPhoto}
          alt="ayush singh ramola"
          className="w-28 h-28 rounded-full object-cover"
        />

        <div className="mt-4 px-32 max-sm:px-4">
          <h1 className="text-[3rem] mt-2 max-sm:text-[1.6rem] whitespace-nowrap font-bold tracking-tight text-center font-bricolage">
            Hi, I am Ayush singh ramola
          </h1>

          <p className="mt-2 max-sm:mt-5 max-sm:px-3 text-base max-sm:text-sm text-center font-normal tracking-normal leading-6 font-inter">
            20, i break things, learn fast, and make shit happen. deep into code and cs;
            anything that pushes the limits. history, curiosity, cricket, and great books
            shaped me. still chasing mastery.
            <br />
            If you’re working on something real, let’s talk.
          </p>
        </div>

        <div className="mt-8 flex gap-4">

          {/* Book a meet */}
          <a
            href="https://cal.com/ayush-singh-ramola-dfjxej/15min"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="px-5 py-2 rounded-lg border border-black dark:border-white hover:bg-blue-500 hover:bg-blue-500 transition cursor-pointer">
              Book a meet
            </button>
          </a>

          {/* Scroll button */}
          <button className="px-5 py-2 rounded-lg border border-black dark:border-white hover:bg-blue-500 hover:text-white transition cursor-pointer">
            <ScrollLink
              to="contact-section"
              smooth={true}
              offset={-120}
              duration={1100}
            >
              Get in touch
            </ScrollLink>
          </button>

        </div>
      </div>
    </div>
  );
}
