import React from "react";
import { storiesOf } from "@storybook/react";
import Button from "./Button";

function onClick() {
  alert("you clicked me");
}

storiesOf("Button", module)
  .add("Primary", () => (
    <Button type="primary" whenClicked={onClick} label="Do Something" />
  ))
  .add("Danger", () => <Button type="danger" label="Do Something" />)
  .add("Success", () => <Button type="success" label="Do Something" />)
  .add("Warning", () => <Button type="warning" label="Do Something" />)
  .add("Default", () => <Button type="default" label="Do Something" />)

  //outline buttons
  .add("Outline Primary", () => (
    <Button type="primary" outline label="Do Something" />
  ))
  .add("Outline Danger", () => (
    <Button type="danger" outline label="Do Something" />
  ))
  .add("Outline Success", () => (
    <Button type="success" outline label="Do Something" />
  ))
  .add("Outline Warning", () => (
    <Button type="warning" outline label="Do Something" />
  ))
  .add("Outline Default", () => (
    <Button type="default" outline label="Do Something" />
  ))

  //faded buttons
  .add("Faded Primary", () => (
    <Button type="primary" faded label="Do Something" />
  ))
  .add("Faded Danger", () => (
    <Button type="danger" faded label="Do Something" />
  ))
  .add("Faded Success", () => (
    <Button type="success" faded label="Do Something" />
  ))
  .add("Faded Warning", () => (
    <Button type="warning" faded label="Do Something" />
  ))
  .add("Faded Default", () => (
    <Button type="default" faded label="Do Something" />
  ))

  //large buttons
  .add("Large Primary", () => (
    <Button type="primary" large label="Do Something" />
  ))
  .add("Large Danger", () => (
    <Button type="danger" large label="Do Something" />
  ))
  .add("Large Success", () => (
    <Button type="success" large label="Do Something" />
  ))
  .add("Large Warning", () => (
    <Button type="warning" large label="Do Something" />
  ))
  .add("Large Default", () => (
    <Button type="default" large label="Do Something" />
  ))

  //large faded buttons
  .add("Large Faded Primary", () => (
    <Button type="primary" large faded label="Do Something" />
  ))
  .add("Large Faded Danger", () => (
    <Button type="danger" large faded label="Do Something" />
  ))
  .add("Large Faded Success", () => (
    <Button type="success" large faded label="Do Something" />
  ))
  .add("Large Faded Warning", () => (
    <Button type="warning" large faded label="Do Something" />
  ))
  .add("Large Faded Default", () => (
    <Button type="default" large faded label="Do Something" />
  ))

  //large outline buttons
  .add("Large Outline Primary", () => (
    <Button type="primary" large outline label="Do Something" />
  ))
  .add("Large Outline Danger", () => (
    <Button type="danger" large outline label="Do Something" />
  ))
  .add("Large Outline Success", () => (
    <Button type="success" large outline label="Do Something" />
  ))
  .add("Large Outline Warning", () => (
    <Button type="warning" large outline label="Do Something" />
  ))
  .add("Large Outline Default", () => (
    <Button type="default" large outline label="Do Something" />
  ));
