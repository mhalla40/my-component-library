import React from "react";
import { storiesOf } from "@storybook/react";
import Button from "./Button";

function onClick() {
  alert("you clicked me");
}

storiesOf("Button", module)
  .add("Primary", () => (
    <Button type="primary" whenClicked={onClick} label="Primary" />
  ))
  .add("Danger", () => <Button type="danger" label="Danger" />)
  .add("Success", () => <Button type="success" label="Success" />)
  .add("Warning", () => <Button type="warning" label="Warning" />)
  .add("Default", () => <Button type="default" label="Default" />)

  //outline buttons
  .add("Outline Primary", () => (
    <Button type="primary" outline label="Primary" />
  ))
  .add("Outline Danger", () => <Button type="danger" outline label="Danger" />)
  .add("Outline Success", () => (
    <Button type="success" outline label="Success" />
  ))
  .add("Outline Warning", () => (
    <Button type="warning" outline label="Warning" />
  ))
  .add("Outline Default", () => (
    <Button type="default" outline label="Default" />
  ))

  //faded buttons
  .add("Faded Primary", () => <Button type="primary" faded label="Primary" />)
  .add("Faded Danger", () => <Button type="danger" faded label="Danger" />)
  .add("Faded Success", () => <Button type="success" faded label="Success" />)
  .add("Faded Warning", () => <Button type="warning" faded label="Warning" />)
  .add("Faded Default", () => <Button type="default" faded label="Default" />)

  .add("Large Primary", () => <Button type="primary" large label="Primary" />)
  .add("Large Danger", () => <Button type="danger" large label="Danger" />)
  .add("Large Success", () => <Button type="success" large label="Success" />)
  .add("Large Warning", () => <Button type="warning" large label="Warning" />)
  .add("Large Default", () => <Button type="default" large label="Default" />)

  .add("Tinted Primary", () => <Button type="primary" tinted label="Primary" />)
  .add("Tinted Danger", () => <Button type="danger" tinted label="Danger" />)
  .add("Tinted Success", () => <Button type="success" tinted label="Success" />)
  .add("Tinted Warning", () => <Button type="warning" tinted label="Warning" />)
  .add("Tinted Default", () => <Button type="default" tinted label="Default" />)

  .add("Border Primary", () => <Button type="primary" border label="Primary" />)
  .add("Border Danger", () => <Button type="danger" border label="Danger" />)
  .add("Border Success", () => <Button type="success" border label="Success" />)
  .add("Border Warning", () => <Button type="warning" border label="Warning" />)
  .add("Border Default", () => (
    <Button type="default" border label="Default" />
  ));
