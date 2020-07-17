import React from "react";
import "./Icons.css";

const Icons = (props) => {
  let classList = "";

  let types = ["cart", "favorites"];

  if (types.includes(props.type)) {
    classList += `icons-${props.type}`;
  }

  return <button className={classList}>{props.label}</button>;
};

export default Icons;
