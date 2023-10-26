import React, { ReactElement, ReactNode } from "react";

interface IButton {
  btntext: ReactElement | ReactNode | string;
  className: string;
}

const Button: React.FC<IButton> = ({ btntext, className }) => {
  return (
    <button className={`button ${className}`} >
      {btntext}
    </button>
    
  );
};

export default Button;