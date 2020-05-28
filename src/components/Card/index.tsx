import styled from "styled-components";

interface IStyle {
  background?: string;
  padding?: string;
  color?: string;
  minWidth?: string;
  maxWidth?: string;
  height?: string;
  cardColor?: string;
}

const Card = styled.div<IStyle>`
  background-color: ${({ theme: { cardColor }, background }) =>
    cardColor || background || "#e3f3ff"};
  padding: ${({ padding = "15px 25px" }) => padding};
  width: 100%;
  height: ${({ height }) => height};
  border-radius: 10px;
  box-sizing: border-box;
  min-width: ${({ minWidth = "250px" }: IStyle) => minWidth};
  max-width: ${({ maxWidth }: IStyle) => maxWidth};
  color: ${({ color = "#073d92" }: IStyle) => color};
`;

export default Card;
