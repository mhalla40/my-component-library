import React from "react";
import { storiesOf } from "@storybook/react";
import Icons from "./Icons";
import hearts from "./hearts.png";
import cart from "./cart_2.png";

storiesOf("Icons", module)
  .add("Add", () => <Icons type="icon" cart img={cart} label="Add To Cart" />)
  .add("Favorites", () => (
    <Icons type="icon" hearts img={hearts} label="Add To Favorites" />
  ))
  .add("Cart", () => <Icons type="icon" cart img={cart} />)
  .add("Heart", () => <Icons type="icon" hearts img={hearts} />);
