import React from "react";
import "./Voucher.css";

const Voucher = (props) => {
  let classList = "";

  let types = ["voucher"];

  if (types.includes(props.type)) {
    classList += ` voucher-${props.type}`;
  }

  return (
    <form>
      <div className="box">
        <input placeholder="Voucher Code" className={classList}></input>
        <label>{props.label}</label>
      </div>
    </form>
  );
};
export default Voucher;
