import { Link as ScrollLink } from "react-scroll";

export default function HeroSection() {
  return (
    <div className="w-full flex justify-center py-5 pt-36 dark:bg-black">
      <div className="w-2/3 max-sm:w-full flex flex-col items-center">

        {/* Avatar Image */}
        <img
          src="/ayushPhoto.png"
          alt="ayush singh ramola"
          className="w-28 h-28 rounded-full object-cover"
        />

        <div className="mt-4 px-32 max-sm:px-4">
          <h1 className="text-[3rem] mt-2 max-sm:text-[1.6rem] whitespace-nowrap font-bold tracking-tight text-center font-bricolage">
            Hi, I am Ayush Singh Ramola
          </h1>


          <p className="mt-2 max-sm:mt-5 max-sm:px-3 text-base max-sm:text-sm text-center leading-6 font-inter">
            20, I break things, learn fast, and make things happen.
            Deep into code and CS; anything that pushes limits.
            History, curiosity, cricket, and books shaped me.
            Still chasing mastery.
            <br />
            If you’re working on something real, let’s talk.
          </p>
        </div>

        <div className="mt-8 flex gap-4">
          <a
            href="https://cal.com/ayush-singh-ramola-dfjxej/15min"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="px-5 py-2 rounded-lg border dark:border-white hover:bg-blue-500 transition">
              Book a meet
            </button>
          </a>

          <button className="px-5 py-2 rounded-lg border dark:border-white hover:bg-blue-500 hover:text-white transition">
            <ScrollLink
              to="contact-section"
              smooth
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