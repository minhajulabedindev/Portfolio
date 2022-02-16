import React from "react";
import "./Aos.css";

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
          <h1>
            <span className="line">I do</span>
            <span className="line">graphic design</span>
            <span className="line">
              <span className="color">&</span> code.
            </span>
          </h1>
          <div className="buttons">
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
