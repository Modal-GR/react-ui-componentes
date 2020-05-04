import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { text, color, object } from "@storybook/addon-knobs";
import { Title } from "../src";

storiesOf("Content | Title", module).add("Default", () => (
  <Title
    override={object("Override", {
      textDecoration: "underline",
      fontSize: "4em",
    })}
    color={color("Text color", "white")}
  >
    {text("Content", "Hi! My name is Nestor")}
  </Title>
));
