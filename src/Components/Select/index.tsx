import React from "react";
import Select from "react-select";

const options = [
  { value: "Turnaround Consulting", label: "Turnaround Consulting" },
  { value: "Business Consulting", label: "Business Consulting" },
  { value: "Business Consulting", label: "Business Consulting" },
];


const FormSelect = () => {
  return (
    <div>
      <Select options={options} defaultValue={options[1]} />
    </div>
  )
}

export default FormSelect;

