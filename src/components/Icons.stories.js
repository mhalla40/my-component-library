import React from "react";
import { storiesOf } from "@storybook/react";
import Icons from "./Icons";

storiesOf("Icons", module)
  .add("Cart", () => <Icons type="cart" label="Add To Cart" />)
  .add("Favorites", () => <Icons type="favorites" label="Add To Favorites" />);
