import React from "react";
import Main_Heading from "../Main_Heading";
import Form from "../Form";
const Details_Form = () => {
  return (
    <div className="form-block">
      <div className="form-wrap">
        <div className="text-holder">
          <div className="container">
            <Main_Heading textheading="Request a call back" />
            <p>
              <span className="title">For Business:</span>
              For Business inquiry fill our short feedback form or you can also
              send us an{" "}
              <a href="#" className="email">
                email
              </a>{" "}
              and we’ll get in touch shortly, or Troll Free Number{" "}
              <a href="#" className="tell">
                - (+91) 00-700-6202.
              </a>
            </p>
            <p>
              <span className="title">Office Hours :</span>
              07:30 and 19:00 Mon to Sat, Sun - Holiday
            </p>
          </div>
        </div>
        <div className="bg-form">
          <div className="container">
            <div className="detail-form">
              <Form />
            </div>
          </div>
          <div />
        </div>
      </div>
    </div>
  );
};

export default Details_Form;
