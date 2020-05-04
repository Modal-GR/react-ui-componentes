import styled from "styled-components";

interface IStyle {
  background?: string;
  padding?: string;
  color?: string;
  minWidth?: string;
  height?: string;
}

const Card = styled.div<IStyle>`
  background-color: ${({ background = "#e3f3ff" }: IStyle) => background};
  padding: ${({ padding = "15px 25px" }) => padding};
  width: 100%;
  height: ${({ height }) => height};
  border-radius: 10px;
  display: flex;
  align-items: center;
  min-width: ${({ minWidth = "250px" }: IStyle) => minWidth};
  color: ${({ color = "#073d92" }: IStyle) => color};
`;

export default Card;
