import React, { useState } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
// import Logo from "./components/Logo";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Indicator from "./components/Indicator";
import Cursor from "./components/Cursor";
import NavText from "./components/NavText";
import NavbarMob from "./components/NavbarMob";
import NavTextMob from "./components/NavTextMob";

function App() {
  const [isActive, setIsActive] = useState("Home");
  const activeHandler = (event) => {
    setIsActive(event.target.innerText);
  };
  const cta = () => {
    setIsActive("Contact");
  };

  return (
    <React.Fragment>
      {/* <Logo></Logo> */}
      <Navbar info={[activeHandler, isActive]}></Navbar>
      <NavText info={isActive}></NavText>
      <NavTextMob info={isActive}></NavTextMob>
      {/* <Hero></Hero> */}
      {/* <About></About> */}
      {/* <Projects></Projects> */}
      {/* <Contact></Contact> */}
      {isActive === "Home" ? (
        <Hero info={cta}></Hero>
      ) : isActive === "About" ? (
        <About></About>
      ) : isActive === "Projects" ? (
        <Projects></Projects>
      ) : (
        <Contact></Contact>
      )}
      <Indicator info={isActive}></Indicator>
      <NavbarMob info={[activeHandler, isActive]}></NavbarMob>
      <Cursor></Cursor>
    </React.Fragment>
  );
}

export default App;
