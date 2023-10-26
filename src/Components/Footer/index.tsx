import React from "react";
import Social_Network from "../Social_Network";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer-wrap">
          <div className="footer-text">
            <p>
              © 2022 <a href="#">Website</a>
            </p>
          </div>
          <Social_Network/>
        </div>
      </div>
    </div>
  );
};

export default Footer;
