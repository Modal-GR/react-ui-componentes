import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { text, boolean, color } from "@storybook/addon-knobs";
import { Input } from "../src";

storiesOf("Input | Text", module).add("Default", () => (
  <Input
    onInputChange={action("change text")}
    valid={boolean("valid", true)}
    type={text("type", "text")}
    id={text("id", "txt_name")}
    label={text("label", "Digite seu nome:")}
    style={{
      labelColor: color("label color", "#747474"),
      labelColorError: color("label color error", "#FF7C80"),
      backgroundColor: color("background color", "#f9f9f9"),
      borderColor: color("border color", "transparent"),
      borderColorError: color("border color error", "#FF7C80"),
      fontColor: color("font color", "#3b3a3a"),
    }}
  />
));
