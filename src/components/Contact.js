import git from "../images/github.svg";
import linked from "../images/in.svg";
import insta from "../images/insta.svg";
import what from "../images/what.svg";
import { motion } from "framer-motion";

const Contact = () => {
  const anim = { opacity: 1, y: 0 };
  const init = { opacity: 0, y: "8rem" };

  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <motion.div animate={anim} initial={init} className="w-3/5">
        <h1 className="sm:text-4xl md:text-5xl lg:text-6xl font-bold text-ascent sm:mb-4 md:mb-6 lg:mb-8 bg-gradient-to-br animate-gradient-xy text-gradient from-sky-500 via-green-500 to-violet-800">
          Get in touch.
        </h1>
        <p className="sm:text-medium md:text-xl lg:text-xl text-ascent mb-8 leading-relaxed">
          I am actively looking for work so let's have a cup of coffee and
          discuss your work or just drop a text with your contact info and I
          will reach out to you.
        </p>
        <a href="mailto:samarthdevlibtech@gmail.com">
          <motion.button
            initial={{
              scale: 1,
              background: "#10101a",
              color: "#eeeeee",
            }}
            whileHover={{
              scale: 1.1,
              background: "#eeeeee",
              color: "#10101a",
            }}
            whileTap={{ scale: 0.9 }}
            className="border-2 px-8 py-4 rounded-md md:text-xl lg:text-2xl cursor-none sm:mb-20 md:mb-8 lg:mb-8"
          >
            Send an E-mail
          </motion.button>
        </a>
        <div className="flex gap-4 sm:justify-center md:justify-end lg:justify-end mb-6">
          {/* <motion.a
            whileHover={{ scale: 1.2 }}
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/_web_canavas_/?igshid=ZDdkNTZiNTM%3D"
          >
            <img className="socials" src={insta} alt="" />
          </motion.a> */}
          <motion.a
            whileHover={{ scale: 1.2 }}
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/samarth-devli-120604246/"
          >
            <img className="socials" src={linked} alt="" />
          </motion.a>
          <motion.a whileHover={{ scale: 1.2 }} href="tel:79053-53798">
            <img className="socials" src={what} alt="" />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2 }}
            target="_blank"
            rel="noreferrer"
            href="https://github.com/samarth502"
          >
            <img className="socials" src={git} alt="" />
          </motion.a>
        </div>
        <p className="sm:text-xl md:text-2xl lg:text-2xl text-ascent sm:text-center md:text-right lg:text-right mb-10">
          samarthdevlibtech@gmail.com
        </p>
      </motion.div>
    </div>
  );
};
export default Contact;
