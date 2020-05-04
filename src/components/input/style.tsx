import styled from "styled-components";
import { IInputContainer, ILabel } from "./interface";

const InputContainer = styled.label<IInputContainer>`
  display: flex;
  width: 100%;
  flex-direction: column;
  background-color: #f9f9f9;
  padding: 25px 15px 12px;
  font-family: "Source Sans Pro", sans-serif;
  font-weight: 600;
  border-radius: 10px;
  justify-content: center;
  position: relative;
  height: 55px;
  box-sizing: border-box;
  border: 1px solid ${({ valid }) => (valid ? "transparent" : "#FF7C80")};
  & > input {
    border: none;
    background-color: transparent;
    outline: none;
    color: #3b3a3a;
    font-weight: bold;
    font-size: 0.85em;
  }
`;

const InputLabel = styled.span<ILabel>`
  font-size: ${({ focus }) => (focus ? "0.7em" : "0.85em")};
  color: ${({ valid }) => (valid ? "#747474" : "#FF7C80")};
  position: absolute;
  top: ${({ focus }) => (focus ? "12px" : "48%")};
  transform: ${({ focus }) => !focus && "translateY(-50%)"};
  transition: 0.4s all;
  font-weight: 600;
`;

export { InputContainer, InputLabel };
