import styled from "styled-components";

import { IButton } from "./interface";

export const Container = styled.button<IButton>`
  background-color: ${({ backgroundColor }) => backgroundColor};
  border-radius: ${({ borderRadius }) => borderRadius};
  border: 1px solid ${({ borderColor }) => borderColor || "transparent"};
  color: ${({ color }) => color};
  cursor: pointer;
  font-size: 1em;
  font-weight: 700;
  padding: 8px 30px;
  width: 100%;
  max-width: ${({ maxWidth }) => maxWidth};
  transition: 0.4s all;
  &:hover {
    ${({ hoverType, backgroundColor }) => {
      if (hoverType.ZoomIn)
        return {
          transform: "scale(1.08)",
        };

      if (hoverType.ZoomOut)
        return {
          transform: "scale(0.95)",
        };

      if (hoverType.Outline)
        return {
          backgroundColor: "transparent",
          color: backgroundColor,
          borderColor: backgroundColor,
        };
    }}
  }
  &:disabled {
  }
`;
