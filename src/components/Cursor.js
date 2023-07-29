import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Cursor = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const mouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", mouseMove);
    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);
  const variants = {
    default: {
      x: mousePos.x - 12,
      y: mousePos.y - 12,
    },
  };

  return (
    <motion.div
      variants={variants}
      animate={"default"}
      transition={{ duration: 0 }}
      className="h-4 w-4 bg-ascent pointer-events-none rounded-full fixed top-0 left-0"
    ></motion.div>
  );
};
export default Cursor;
