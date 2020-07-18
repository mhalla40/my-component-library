import React from "react";
import { storiesOf } from "@storybook/react";
import Form from "./Form";

storiesOf("Form", module)
  .add("Small Email", () => <Form type="small" />)
  .add("Medium Email", () => <Form type="medium" />)
  .add("Large Email", () => <Form type="large" />);
