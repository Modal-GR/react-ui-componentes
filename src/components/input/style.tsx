import styled from "styled-components";
import { IInputContainer, ILabel } from "./interface";

const InputContainer = styled.label<IInputContainer>`
  display: flex;
  width: 100%;
  flex-direction: column;
  background-color: #f9f9f9;
  padding: 25px 15px 10px;
  font-weight: 600;
  border-radius: 10px;
  justify-content: center;
  position: relative;
  height: 70px;
  box-sizing: border-box;
  border: 1px solid ${({ valid }) => (valid ? "transparent" : "#FF7C80")};
  & > input {
    border: none;
    background-color: transparent;
    outline: none;
    color: #3b3a3a;
    font-weight: 600;
    font-size: 0.95em;
    margin-top: 3px;
  }
`;

const InputLabel = styled.span<ILabel>`
  font-size: ${({ focus }) => (focus ? "0.8em" : "0.95em")};
  color: ${({ valid }) => (valid ? "#747474" : "#FF7C80")};
  position: absolute;
  top: ${({ focus }) => (focus ? "15px" : "48%")};
  transform: ${({ focus }) => !focus && "translateY(-50%)"};
  transition: 0.4s all;
  font-weight: 600;
`;

export { InputContainer, InputLabel };
