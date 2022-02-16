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
    <div className="container who pb-lg-5 usercard  ">
      <div className="row ">
        {" "}
        <div className="texts p-5">
          <h1 data-aos="zoom-in" data-aos-duration="1000" className="p-lg-5 mb-lg-5" spellcheck="false" contenteditable="true">
            About <span className="colors">Me</span>
          </h1>
        </div>
        <div className="col-lg-6 " data-aos="fade-up-right" data-aos-duration="1500">
          <img className="w-75   " src="https://i.ibb.co/fkZhFSg/Optimized-atiqur.jpg"></img>{" "}
        </div>
        <div className="col-lg-6 " data-aos="fade-up" data-aos-duration="1500">
          <div className="mt-lg-5 pt-3 ">
            <h6 id="myDIV"> Who I Am</h6>
            <p className=" text pt-2">
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
