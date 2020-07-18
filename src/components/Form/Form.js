import React from "react";
import "./Form.css";

const Form = (props) => {
  let classList = "";

  let types = ["small", "medium", "large"];

  if (types.includes(props.type)) {
    classList += `form-${props.type}`;
  }

  return (
    <form>
      <label>Email</label>
      <br />
      <input className={classList} type="text" placeholder="Email"></input>
    </form>
  );
};

export default Form;
