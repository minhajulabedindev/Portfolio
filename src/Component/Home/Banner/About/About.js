import React from "react";
import "./About.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import CountUp from "react-countup";
import "animate.css/animate.min.css";

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const About = () => {
  return (
    <div className="container who  my-lg-5 ">
      <div className="row my-lg-5 ">
        {" "}
        <div className="texts p-lg-5">
          <h1 spellcheck="false" contenteditable="true">
            About <span className="colors">Me</span>
          </h1>
          <h6 id="myDIV"> Who I Am</h6>
        </div>
        <div className="col-lg-6 " data-aos="fade-up-right" data-aos-duration="1500">
          <img className="w-75   " src="https://i.ibb.co/fkZhFSg/Optimized-atiqur.jpg"></img>{" "}
        </div>
        <div className="col-lg-6 " data-aos="fade-up" data-aos-duration="1500">
          <div className="mt-lg-5 pt-5 pt-lg-5 text">
            <p>
              I am Minhajul Abedin a junior web developer. I have gained knowledge on the subjects HTML, CSS, Javascript , React, MongoDB, GitHub,
              Firebase, React router, Express, Node.js . Web development professional with demonstrated experience in front-end development,
              production and deployment of scalable applications. I can supporting the back-end architecture as part of driving the entire development
              life-cycle.
            </p>
          </div>
        </div>
        {/* <CountUp start={0} end={100} duration={10} /> */}
      </div>
    </div>
  );
};

export default About;
