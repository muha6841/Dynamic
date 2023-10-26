import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faLinkedinIn,
  faSkype,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import React from "react";

const Social_Network = () => {
  return (
    <div className="social">
      <ul className="social-lists">
        <li>
          <a href="#">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
        </li>
        <li>
          <a href="#">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </li>
        <li>
          <a href="#">
            <FontAwesomeIcon icon={faSkype} />
          </a>
        </li>
        <li>
          <a href="#">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Social_Network;
