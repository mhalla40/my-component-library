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

  .add("Large Faded Primary", () => (
    <Button type="primary" large faded label="Primary" />
  ))
  .add("Large Faded Danger", () => (
    <Button type="danger" large faded label="Danger" />
  ))
  .add("Large Faded Success", () => (
    <Button type="success" large faded label="Success" />
  ))
  .add("Large Faded Warning", () => (
    <Button type="warning" large faded label="Warning" />
  ))
  .add("Large Faded Default", () => (
    <Button type="default" large faded label="Default" />
  ))

  .add("Large Outline Primary", () => (
    <Button type="primary" large outline label="Primary" />
  ))
  .add("Large Outline Danger", () => (
    <Button type="danger" large outline label="Danger" />
  ))
  .add("Large Outline Success", () => (
    <Button type="success" large outline label="Success" />
  ))
  .add("Large Outline Warning", () => (
    <Button type="warning" large outline label="Warning" />
  ))
  .add("Large Outline Default", () => (
    <Button type="default" large outline label="Default" />
  ));
