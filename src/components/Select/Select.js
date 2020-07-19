import React from "react";
import "./Select.css";

const Select = (props) => {
  let classList = "";

  let types = ["small", "medium", "large"];

  if (types.includes(props.type)) {
    classList += `select-${props.type}`;
  }

  if (props.grey) {
    classList += ` select-grey`;
  }

  return (
    <select className={classList}>
      <option>Select</option>
    </select>
  );
};

export default Select;
