import html from "../images/html5.svg";
import css from "../images/css3.svg";
import js from "../images/javascript.svg";
import rct from "../images/react.svg";
import tw from "../images/palette.svg";
import git from "../images/github.svg";
// import fire from "../images/firebase.svg";
import { motion } from "framer-motion";

const About = () => {
  const tags = [
    { name: "HTML5", ico: html },
    { name: "CSS", ico: css },
    { name: "Javascript", ico: js },
    { name: "React", ico: rct },
    { name: "Tailwind", ico: tw },
    { name: "Git", ico: git },
    // { name: "Firebase", ico: fire },
  ];

  const anim = { opacity: 1, y: 0 };
  const init = { opacity: 0, y: "8rem" };

  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <motion.div
        animate={anim}
        initial={init}
        className="sm:w-4/5 md:w-3/5 lg:w-3/5"
      >
        <h1 className="sm:text-4xl md:text-5xl lg:text-6xl font-bold text-ascent sm:mb-4 md:mb-6 lg:mb-8 bg-gradient-to-br animate-gradient-xy text-gradient from-sky-500 via-green-500 to-violet-800">
          About.
        </h1>
        <p className="sm:text-md md:text-md lg:text-xl text-ascent mb-4 leading-relaxed">
          Hello, my name is Samarth devli located in{" "}
          <span className="text-primary font-semibold">Lucknow, India</span> and
          i love creating web related elements. To be accurate I am a front-end
          web developer and continuously learning new technologies to work on. I
          can provide efficiently written, well documented code and i believe
          that a neat and clean code is as important as a good looking website.
        </p>
        <p className="sm:text-md md:text-md lg:text-xl font-semibold mb-6">
          The technologies I work on:
        </p>
        <div className="flex flex-wrap gap-4">
          {tags.map((tag) => (
            <p
              key={tag.name}
              className="tech bg-ascent rounded-md sm:px-2 md:px-2 lg:px-4 sm:py-1 md:py-1 lg:py-2 text-base sm:text-md md:text-md lg:text-xl flex justify-center items-center gap-1"
            >
              <img
                className="h-8 sm:w-6 md:w-6 lg:w-8 inline"
                src={tag.ico}
                alt=""
              />{" "}
              {tag.name}
            </p>
          ))}
        </div>
      </motion.div>
    </div>
  );
};
export default About;
