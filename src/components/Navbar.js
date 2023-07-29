import { motion } from "framer-motion";

const Navbar = (props) => {
  return (
    <div className="absolute top-12 right-12 sm:hidden md:block lg:block">
      <motion.ul className="bg-glassalttwo backdrop-blur-sm px-6 shadow-sm shadow-glassalt border-1 border-glassalttwo rounded-xl py-4 nav-box flex gap-6">
        <motion.li
          onClick={props.info[0]}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          className={props.info[1] === "Home" ? "nav-item activeN" : "nav-item"}
        >
          Home
        </motion.li>
        <motion.li
          onClick={props.info[0]}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          className={
            props.info[1] === "About" ? "nav-item activeN" : "nav-item"
          }
        >
          About
        </motion.li>
        <motion.li
          onClick={props.info[0]}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          className={
            props.info[1] === "Projects" ? "nav-item activeN" : "nav-item"
          }
        >
          Projects
        </motion.li>
        <motion.li
          onClick={props.info[0]}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          className={
            props.info[1] === "Contact" ? "nav-item activeN" : "nav-item"
          }
        >
          Contact
        </motion.li>
      </motion.ul>
    </div>
  );
};

export default Navbar;
