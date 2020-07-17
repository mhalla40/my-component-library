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

  .add("Large Primary", () => <Button type="primary" large label="Primary" />)
  .add("Large Danger", () => <Button type="danger" large label="Danger" />)
  .add("Large Success", () => <Button type="success" large label="Success" />)
  .add("Large Warning", () => <Button type="warning" large label="Warning" />)
  .add("Large Default", () => <Button type="default" large label="Default" />);
