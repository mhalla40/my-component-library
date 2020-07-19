import React from "react";
import { storiesOf } from "@storybook/react";
import Counter from "./Counter";
import "./Counter.css";

storiesOf("Counter", module).add("Counter", () => <Counter type="counter" />);
