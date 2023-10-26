import React from "react";
import Main_Heading from "../Main_Heading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleRight, faPlay } from "@fortawesome/free-solid-svg-icons";
import Accordian from "../Accordion";

const Faq = () => {
  return (
    <div className="faq-block">
      <div className="container">
        <div className="details-faq">
          <div className="text-holder">
            <Main_Heading textheading="FAQ’s" />
            <p>
              I am so clever that sometimes I do not get a single word of what I
              am saying and get very confused. Sometimes I worry about being a
              success in a mediocre world.
            </p>
          </div>
          <div className="faq-wrap">
            <div className="video-box">
              <div className="image-holder">
                <img src="assets/images/img-faq.jpg" alt="video" />
              </div>
              <a
                href="https://www.youtube.com/embed/eAaP03Qs6cE?autoplay=1"
                className="fancy_video fancybox.iframe tran3s"
              >
                <span className="play-icon">
                  <FontAwesomeIcon icon={faPlay} />
                </span>
              </a>
            </div>
            <div className="video-text">
              <p>
                We are a dynamic consulting com- pany, located in UK. We’ve had
                the privilege to work with some of the largest consulting
                company in the business and we have established a reputation for
                always bringing inno- vation to the table project.
              </p>
              <a href="faq.html" className="faq-text">
                Click here for more FAQ’s{" "}
                <div className="double-arrow">
                  <FontAwesomeIcon
                    icon={faAngleDoubleRight}
                    className="icon-arrow"
                  />
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="accordion-block">
          <Accordian />
        </div>
      </div>
    </div>
  );
};

export default Faq;
