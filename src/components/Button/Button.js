import React from "react";
import "./Button.css";
// This is a functional component - just sent up a little differently as an arrow function!
const Button = (props) => {
  let classList = "";

  let types = ["primary", "danger", "success", "warning", "default"];

  if (types.includes(props.type)) {
    classList += `button-${props.type}`;
  }
  if (props.large) {
    classList += ` button-large`; // Note the spacing here since we are adding to the string!
  }
  if (props.outline) {
    classList += ` button-outline-${props.type}`;
  }

  return (
    <button className={classList} onClick={props.whenClicked}>
      {props.label}
    </button>
  );
};
export default Button;
