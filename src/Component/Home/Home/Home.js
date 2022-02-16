import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import Aos from "../../Aos/Aos";
import Contact from "../../Contact/Contact";

// import ScrollAnimation from "react-animate-on-scroll";
import MyServise from "../../MyServise/MyServise";
import Footer from "../../Shared/Footer/Footer";
import Skill from "../../Skill/Skill";
import About from "../Banner/About/About";
import Banner from "../Banner/Banner";

const Home = () => {
  return (
    <div>
      <Aos></Aos>

      <About></About>

      <Skill></Skill>

      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default Home;
