import React from "react";

interface IInput {
  type: string;
  placeholder?: string;
  className?: string;
  isSecondary?: boolean;
  value?: string | undefined;
  disabled?: boolean;
}

const Input: React.FC<IInput> = ({
  type,
  placeholder,
  className,
  disabled = false,
  value,
}) => {
  return (
    <div className= {`${className}`}>
      <div className="field-holder">
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          disabled={disabled}
        />
      </div>
    </div>
  );
};

export default Input;
