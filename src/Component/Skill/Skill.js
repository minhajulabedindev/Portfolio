import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import ProgressBar from "react-customizable-progressbar";
import "./Skill.css";

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
const Skill = () => {
  return (
    <div className="  background my-5 p-lg-5 no-gutters over">
      <div className="container py-lg-5">
        <div className="py-5">
          <h3 className="p-4 ">
            <span className="colors">My </span>Skill
          </h3>
        </div>{" "}
        <div className="row row-cols-3 row-cols-lg-5 g-2 g-lg-3">
          <div data-aos="fade-right" data-aos-duration="2000" className="col ">
            {" "}
            <div className="single-chart ">
              <svg viewBox="0 0 36 36" className="circular-chart green">
                <path
                  className="circle-bg"
                  d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path
                  className="circle"
                  stroke-dasharray="90, 100"
                  d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <text x="18" y="20.35" className="percentage">
                  90%
                </text>
              </svg>
              <strong>HTML</strong>
            </div>
          </div>
          <div data-aos="fade-right" data-aos-duration="2000" className="col">
            {" "}
            <div className="single-chart">
              <svg viewBox="0 0 36 36" className="circular-chart orange">
                <path
                  className="circle-bg"
                  d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path
                  className="circle"
                  stroke-dasharray="90, 100"
                  d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <text x="18" y="20.35" className="percentage">
                  90%
                </text>
              </svg>
              <strong>CSS</strong>
            </div>{" "}
          </div>
          <div data-aos="fade-right" data-aos-duration="2000" className="col">
            {" "}
            <div className="single-chart">
              <svg viewBox="0 0 36 36" className="circular-chart pink">
                <path
                  className="circle-bg"
                  d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path
                  className="circle"
                  stroke-dasharray="93, 100"
                  d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <text x="18" y="20.35" className="percentage">
                  93%
                </text>
              </svg>
              <strong>Bootstrap</strong>
            </div>{" "}
          </div>
          <div data-aos="fade-right" data-aos-duration="2000" className="col">
            {" "}
            <div className="single-chart">
              <svg viewBox="0 0 36 36" className="circular-chart  darkMagenta">
                <path
                  className="circle-bg"
                  d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path
                  className="circle"
                  stroke-dasharray="95, 100"
                  d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <text x="18" y="20.35" className="percentage">
                  95%
                </text>
              </svg>
              <strong>tailwidth</strong>
            </div>{" "}
          </div>
          {/* <div className="col-md-3 col-sm-3 col-lg-2"> </div> */}
          <div data-aos="fade-right" data-aos-duration="2000" className="col">
            {" "}
            <div className="single-chart">
              <svg viewBox="0 0 36 36" className="circular-chart blue">
                <path
                  className="circle-bg"
                  d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path
                  className="circle"
                  stroke-dasharray="88, 100"
                  d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <text x="18" y="20.35" className="percentage">
                  88%
                </text>
              </svg>
              <strong>Material-UI</strong>
            </div>{" "}
          </div>
          <div data-aos="fade-left" data-aos-duration="2000" className="col">
            {" "}
            <div className="single-chart">
              <svg viewBox="0 0 36 36" className="circular-chart darkMagenta ">
                <path
                  className="circle-bg"
                  d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path
                  className="circle"
                  stroke-dasharray="79, 100"
                  d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <text x="18" y="20.35" className="percentage ">
                  79%
                </text>
              </svg>
              <strong>Javascript</strong>
            </div>{" "}
          </div>
          <div data-aos="fade-left" data-aos-duration="2000" className="col">
            <div className="single-chart">
              <svg viewBox="0 0 36 36" className="circular-chart pink ">
                <path
                  className="circle-bg"
                  d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path
                  className="circle"
                  stroke-dasharray="79, 100"
                  d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <text x="18" y="20.35" className="percentage ">
                  93%
                </text>
              </svg>
              <strong>React</strong>
            </div>
          </div>
          <div data-aos="fade-left" data-aos-duration="2000" className="col">
            {" "}
            <div className="single-chart">
              <svg viewBox="0 0 36 36" className="circular-chart green">
                <path
                  className="circle-bg"
                  d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path
                  className="circle"
                  stroke-dasharray="88, 100"
                  d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <text x="18" y="20.35" className="percentage">
                  88%
                </text>
              </svg>
              <strong>MongoDB</strong>
            </div>
          </div>
          <div data-aos="fade-left" data-aos-duration="2000" className="col">
            <div className="single-chart">
              <svg viewBox="0 0 36 36" className="circular-chart blue">
                <path
                  className="circle-bg"
                  d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path
                  className="circle"
                  stroke-dasharray="88, 100"
                  d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <text x="18" y="20.35" className="percentage">
                  88%
                </text>
              </svg>
              <strong>NodeJS</strong>
            </div>
          </div>
          <div data-aos="fade-left" data-aos-duration="2000" className="col">
            <div className="single-chart">
              <svg viewBox="0 0 36 36" className="circular-chart orange">
                <path
                  className="circle-bg"
                  d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path
                  className="circle"
                  stroke-dasharray="85, 100"
                  d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <text x="18" y="20.35" className="percentage">
                  85%
                </text>
              </svg>
              <strong>Firebase</strong>
            </div>
          </div>
          <div className="col"></div>
          <div className="col"></div>
          <div className="col"></div>
          <div className="col"></div>
          <div className="col"></div>
        </div>
        {/* ================================================== */}
        <div className="flex-wrapper my-lg-3 "></div>
      </div>
    </div>
  );
};

export default Skill;
