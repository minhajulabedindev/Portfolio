import React from "react";
import "./Aos.css";
import TypeAnimation from "react-type-animation";

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Aos = () => {
  return (
    <div className="mt-">
      <header id="welcome-section">
        <div className="forest" />
        <div className="silhouette" />
        <div className="moon" />
        <div className="container">
          <div class="usercard_header-info my-5 py-5 ">
            <h3 class="usercard_name text">
              Minhajul <span class="usercard_name-label">Abedin </span>
            </h3>
            <hr></hr>
            <span class="usercard_post text">
              <TypeAnimation cursor={true} sequence={[" Junior Full Stuck React Developer.", 1500, ""]} wrapper="h6" repeat={Infinity} />
            </span>
          </div>

          <div className="buttons py-lg-5">
            <a href="#projects">my portfolio</a>
            <a href="#contact" className="cta">
              get in touch
            </a>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Aos;
