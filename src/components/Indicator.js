import { motion } from "framer-motion";

const Indicator = (props) => {
  return (
    <div className="absolute bottom-12 left-1/2 -translate-x-1/2 sm:hidden md:flex lg:flex justify-center items-center gap-6">
      <motion.div
        layer
        className={props.info === "Home" ? "nav-dock dock-active" : "nav-dock"}
      ></motion.div>
      <motion.div
        layer
        className={props.info === "About" ? "nav-dock dock-active" : "nav-dock"}
      ></motion.div>
      <motion.div
        layer
        className={
          props.info === "Projects" ? "nav-dock dock-active" : "nav-dock"
        }
      ></motion.div>
      <motion.div
        layer
        className={
          props.info === "Contact" ? "nav-dock dock-active" : "nav-dock"
        }
      ></motion.div>
    </div>
  );
};

export default Indicator;
