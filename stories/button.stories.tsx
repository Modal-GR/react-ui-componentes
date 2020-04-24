import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { text, object } from "@storybook/addon-knobs";
import { Button } from "../src";

storiesOf("Button", module).add("Default", () => (
  <Button
    backgroundColor={text("backgroundColor", "#073d92")}
    borderRadius={text("borderRadius", "30px")}
    borderColor={text("borderColor", "#073d92")}
    color={text("color", "#fff")}
    onClickButton={action("onClick")}
    hoverType={object("hover type", { ZoomOut: true })}
  >
    {text("Label", "Click Me")}
  </Button>
));
