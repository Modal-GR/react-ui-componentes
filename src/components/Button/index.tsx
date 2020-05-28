import React from "react";
import { Container } from "./style";
import { IProps } from "./interface";

export const Button: React.FC<IProps> = ({
  backgroundColor = "#073d92",
  borderColor,
  borderRadius = "30px",
  children,
  color = "#fff",
  hoverType = { ZoomIn: true },
  maxWidth,
  onClickButton,
}: IProps) => (
  <Container
    backgroundColor={backgroundColor}
    borderRadius={borderRadius}
    color={color}
    maxWidth={maxWidth}
    borderColor={borderColor}
    onClick={onClickButton}
    hoverType={hoverType}
  >
    {children}
  </Container>
);
