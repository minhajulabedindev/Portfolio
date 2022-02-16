import React from "react";
import "./Contact.css";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Contact = () => {
  return (
    <div className="py-lg-5 my-lg-3">
      <h3 data-aos="zoom-in" data-aos-duration="1000">
        Contact <span className="colors py-lg-5">Me</span>
      </h3>

      <div class="container background over containe py-lg-5 my-5">
        <div class="con d-flex">
          <div class="left-side" data-aos="fade-right" data-aos-duration="2000">
            <div class="address details">
              <i class="fas fa-map-marker-alt"></i>
              <div class="topic">Address</div>
              <div class="text-one">Surkhet, NP12</div>
              <div class="text-two">Birendranagar 06</div>
            </div>
            <div class="phone details">
              <i class="fas fa-phone-alt"></i>
              <div class="topic">Phone</div>
              <div class="text-one">+0098 9893 5647</div>
              <div class="text-two">+0096 3434 5678</div>
            </div>
            <div class="email details">
              <i class="fas fa-envelope"></i>
              <div class="topic">Email</div>
              <div class="text-one">codinglab@gmail.com</div>
              <div class="text-two">info.codinglab@gmail.com</div>
            </div>
          </div>
          <div class="right-side" data-aos="zoom-in-up" data-aos-duration="2000">
            <div class="topic-text">Send us a message</div>
            <p>
              If you have any work from me or any types of quries related to my tutorial, you can send me message from here. It's my pleasure to help
              you.
            </p>
            <form action="#">
              <div class="input-box">
                <input type="text" placeholder="Enter your name" />
              </div>
              <div class="input-box">
                <input type="text" placeholder="Enter your email" />
              </div>
              <div class="input-box message-box"></div>
              <div class="button">
                <input type="button" value="Send Now" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
