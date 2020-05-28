import PropTypes from "prop-types";
import React from "react";
import * as Style from "./style";

interface MessageProps {
  children: Element;
  text: String[];
  direction: string;
  style?: {
    backgroundColor?: string;
    color?: string;
    maxWidth?: string;
  };
}

const Message = ({
  children,
  text,
  direction = "left",
  style = {
    backgroundColor: "",
    color: "",
    maxWidth: "",
  },
}: MessageProps) => (
  <Style.MessageContainer direction={direction} {...style}>
    {Array.isArray(text) ? (
      text.map((p, index) => (
        <Style.MessageText key={index} {...style}>
          {p}
        </Style.MessageText>
      ))
    ) : (
      <Style.MessageText {...style}>{text}</Style.MessageText>
    )}

    {children}
  </Style.MessageContainer>
);

export default Message;
