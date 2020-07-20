import React from "react";
import { storiesOf } from "@storybook/react";
import Voucher from "./Voucher";

storiesOf("Voucher", module).add("Voucher", () => (
  <Voucher type="voucher" label="Redeem" placeholder="Voucher Code" />
));
