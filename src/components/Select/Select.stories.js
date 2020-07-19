import React from "react";
import { storiesOf } from "@storybook/react";
import Select from "./Select";

storiesOf("Select", module)
  .add("Select Small", () => <Select label="Select" type="small" />)
  .add("Select Medium", () => <Select label="Select" type="medium" />)
  .add("Select Large", () => <Select label="Select" type="large" />)

  //start grey select  buttons

  .add("Grey Small", () => <Select label="Select" grey type="small" />)
  .add("Grey Medium", () => <Select label="Select" grey type="medium" />)
  .add("Grey Large", () => <Select label="Select" grey type="large" />);
