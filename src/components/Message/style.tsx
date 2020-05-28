import styled, { keyframes } from "styled-components";

const enterLeft = keyframes`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;
const enterRight = keyframes`
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;
interface MessageProps {
  backgroundColor?: string;
  direction?: string;
  maxWidth?: string;
  color?: string;
  backgroundMessage?: string;
  colorMessage?: string;
}

const MessageContainer = styled.div<MessageProps>`
  background-color: ${({ theme: { backgroundMessage }, backgroundColor }) =>
    backgroundMessage || backgroundColor};
  border-radius: ${({ direction }) =>
    direction === "left" ? "15px 15px 15px 0" : "15px 15px 0 15px"};
  box-sizing: border-box;
  margin: 0;
  max-width: ${({ maxWidth }) => maxWidth};
  animation: 1s
    ${({ direction }) => (direction === "left" ? enterLeft : enterRight)};
`;

const MessageText = styled.p<MessageProps>`
  font-size: 0.8em;
  margin: 0;
  padding: 0 15px;
  color: ${({ theme: { colorMessage }, color }) => colorMessage || color};
  &:first-of-type {
    padding-top: 15px;
  }
  &:last-of-type {
    padding-bottom: 15px;
  }
`;

export { MessageContainer, MessageText };
