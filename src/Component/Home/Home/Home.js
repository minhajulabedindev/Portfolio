import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import Aos from "../../Aos/Aos";

// import ScrollAnimation from "react-animate-on-scroll";
import MyServise from "../../MyServise/MyServise";
import Skill from "../../Skill/Skill";
import About from "../Banner/About/About";
import Banner from "../Banner/Banner";

const Home = () => {
  return (
    <div>
      <Aos></Aos>

      <Banner></Banner>

      <Skill></Skill>
    </div>
  );
};

export default Home;
