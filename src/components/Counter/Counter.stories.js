import React from "react";
import { storiesOf } from "@storybook/react";
import Counter from "./Counter";
import "./Counter.css";

storiesOf("Counter", module).add("Counter", () => (
  <Counter step={1} min={0} max={10} value={0} />
));
