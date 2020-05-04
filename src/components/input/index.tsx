import React, { useState } from "react";
import { InputContainer, InputLabel } from "./style";

import { IInput } from "./interface";

export const Input: React.FC<IInput> = ({
  onInputChange,
  valid,
  label,
  value,
  type,
  id,
  style = {
    labelColor: "#747474",
    labelColorError: "#FF7C80",
    backgroundColor: "#f9f9f9",
    borderColor: "transparent",
    borderColorError: "#FF7C80",
    fontColor: "#3b3a3a",
  },
}: IInput) => {
  const [controllerLabel, setController] = useState(false);

  const inputChange = (e) => {
    onInputChange({
      event: e,
      field: {
        id,
        value,
        type,
      },
    });
  };

  return (
    <InputContainer valid={valid}>
      <InputLabel
        valid={valid}
        htmlFor={id}
        focus={controllerLabel || value != ""}
      >
        {label}
      </InputLabel>
      <input
        id={id}
        type={type}
        value={value}
        onFocus={() => setController(true)}
        onBlur={() => setController(false)}
        onChange={inputChange}
      />
    </InputContainer>
  );
};
