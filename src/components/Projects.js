import { motion } from "framer-motion";
import React, { useState, useRef, useEffect } from "react";
import Card from "./Card";

const Projects = () => {
  const data = [
    {
      name: "Bimaper",
      desc: "A website frontend made for Bimaper, a sub brand of Wilman Infra Group. And is a solo project of mine.",
      tags: ["Js", "UI&UX", "Tailwind", "React"],
      link: "https://biamper-web.netlify.app/",
      gitl: "https://github.com/samarth502/Biamper-project",
    },
    // {
    //   name: "Portfolio (old)",
    //   desc: "It is a simple minimalistic portfolio website made by me to showcase some of my best works and for people to find me on the internet. The portfolio contains every detail one might need in order to get in touch officially.",
    //   tags: ["Js", "git", "Tailwind", "React"],
    //   link: "https://animesh-kumar.netlify.app/",
    //   gitl: "https://github.com/AnimeshDev1999/My-portfolio",
    // },
    // {
    //   name: "Earthly",
    //   desc: "The website was made as a project for a Ireland based company named 'Earthly' which is a eco-friendly products company",
    //   tags: ["Js", "git", "Tailwind", "React"],
    //   link: "https://earthly-ireland.netlify.app/",
    //   gitl: "https://github.com/AnimeshDev1999/Earthly",
    // },
    {
      name: "Food Place",
      desc: "Food Place is one of my self projects. It is a website design for an imaginary food subscription service startup that is intended to make people eat well and healthy in todays busy world without having to worry about cooking daily.",
      tags: ["Js", "Html", "Css", "Git", "Ps"],
      link: "https://mellifluous-youtiao-6799f1.netlify.app/",
      gitl: "https://github.com/samarth502/Food-place/tree/main/Food-place-main/Food-place-main",
    },
    {
      name: "E-commerce website",
      desc: "he website will be built on a robust e-commerce platform like Shopify, Magento, or WooCommerce, providing a solid foundation for online selling and transactions.",
      tags: ["Js", "Html", "Css", "Bootstrap"],
      link: "https://crazyshop.netlify.app/",
      gitl: "https://github.com/samarth502/E-commerce-side",
    },
    
    // {
    //   name: "Expense Tracker",
    //   desc: "An expense tracking web app made with javascript data structures which shows detailed statistics of your entered data based on the maximum expense made per month also includes structures like bar graph.",
    //   tags: ["Html", "Css", "React", "Git", "Jquerry"],
    //   link: "https://expenses-tracker-m1.netlify.app/",
    //   gitl: "https://github.com/AnimeshDev1999/expense-tracker",
    // },
    // {
    //   name: "Shuttle",
    //   desc: "Shuttle is a project of mine that included a group of 3 people working on it we synced our work in order to get this project together the project is the update to previously existing website named shuttle and was created again from scratch.",
    //   tags: ["Js", "Html", "Css", "Git", "Collab"],
    //   link: "https://animeshdev1999.github.io/Shuttle-new/",
    //   gitl: "https://github.com/AnimeshDev1999/Shuttle-new",
    // },
    {
      name: "Weather",
      desc: "Weather is a self project by me it uses open weather API to show the forecast world wide with things like lowest/highest temperature, location, time etc. It also contains java apps like time and weather updater.",
      tags: ["Js", "Html", "Css", "Git", "Api"],
      link: "https://animeshdev1999.github.io/Weather-app/",
      gitl: "https://github.com/AnimeshDev1999/Weather-app",
    },
  ];

  const anim = { opacity: 1, y: 0 };
  const init = { opacity: 0, y: "8rem" };

  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <div className="h-screen w-screen flex items-center justify-center overflow-hidden">
      <motion.div
        animate={anim}
        initial={init}
        className="sm:w-4/5 md:w-3/5 lg:w-3/5 relative"
      >
        <h1 className="sm:text-4xl md:text-5xl lg:text-6xl font-bold text-ascent sm:mb-4 md:mb-6 lg:mb-8 bg-gradient-to-br animate-gradient-xy text-gradient from-sky-500 via-green-500 to-violet-800">
          Projects.
        </h1>
        <motion.div
          ref={carousel}
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          layout
          className="flex gap-10"
        >
          {data.map((entry) => (
            <Card info={entry} key={entry.name}></Card>
          ))}
        </motion.div>
        <div className="flex gap-3 absolute top-0 right-0 text-primary text-xl pointer-events-none bg-glassalttwo backdrop-blur-sm shadow-sm shadow-glassalt border-1 border-glassalttwo rounded-xl px-4 py-2">
          <span className="animate-arr">&#9664;</span>
          <span>Swipe</span>
        </div>
      </motion.div>
    </div>
  );
};
export default Projects;
