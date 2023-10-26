import React, { useState } from "react";
import Input from "../Input";
import Button from "../Button";
import Select from 'react-select';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const options = [
  { value: 'Turnaround Consulting', label: 'Turnaround Consulting' },
  { value: 'Business Consulting', label: 'Business Consulting' },
];

const Form = () => {
  const [selectedOption] = useState(null);
  return (
    <div className="form">
      <h4>I would like to discuss:</h4>
      <div className="field-wrap">
        <div className="field">

          <div className="select-area">
            <Select
              defaultValue={selectedOption}
              options={options}
            />

            <div className="select-area-arrow">
              <FontAwesomeIcon icon={faChevronDown} />
            </div>
          </div>

          <span
            className="ui-selectmenu-button ui-widget ui-state-default ui-corner-all"
            id="ui-id-2-button"
            role="combobox"
            aria-expanded="false"
            aria-autocomplete="list"
            aria-owns="ui-id-2-menu"
            aria-haspopup="true"
            aria-activedescendant="ui-id-4"
            aria-labelledby="ui-id-4"
            aria-disabled="false"
          >
            <span className="ui-icon ui-icon-triangle-1-s"></span>
          </span>
        </div>
        <div className="field">
          <Input type="text" placeholder="Your Name" />
        </div>
      </div>
      <div className="field-wrap">
        <div className="field">
          <Input type="text" placeholder="Your Name" />
        </div>
        <div className="field">
          <Input type="text" placeholder="Your Name" />
        </div>
      </div>
      <Button btntext="SUBMIT" className="button-primary" />
    </div>
  );
};

export default Form;
