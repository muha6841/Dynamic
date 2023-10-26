import React from "react";

interface IMain_Heading {
  textheading: string;
}

const Main_Heading: React.FC<IMain_Heading> = ({ textheading }) => {
  return (
    <div className="main-heading">
      <div className="heading-wrap">
        <h2>{textheading}</h2>
        <span className="circle"></span>
      </div>
      <span className="border-line"></span>
    </div>
  );
};

export default Main_Heading;
