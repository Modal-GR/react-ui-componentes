import styled from "styled-components";

interface IFlex {
  justify?: string;
  align?: string;
  type?: string;
  wrap?: boolean;
}
interface IGrid {
  column?: string;
  row?: string;
  justify?: string;
  align?: string;
  gap?: string;
  padding?: string;
}
interface IStack {
  marginContainer?: string;
  marginElement?: string;
  paddingContainer?: string;
  paddingElement?: string;
}

const Flex = styled.div<IFlex>`
  display: flex;
  justify-content: ${({ justify }) => justify};
  align-items: ${({ align }) => align};
  flex-direction: ${({ type = "row" }) => type};
  flex-wrap: ${({ wrap }) => (wrap ? "wrap" : "unset")};
`;

const Grid = styled.div<IGrid>`
  align-items: ${({ align }) => align};
  display: grid;
  grid: ${({ column, row }) => `${row || "auto"} /  ${column || "auto"}`};
  grid-column-gap: ${({ gap }) => gap};
  justify-content: ${({ justify }) => justify};
  padding: ${({ padding }) => padding};
`;

const Stack = styled.div<IStack>`
  margin: ${({ marginContainer }) => marginContainer};
  padding: ${({ paddingContainer }) => paddingContainer};

  & > * {
    margin: ${({ marginElement }) => marginElement};
    padding: ${({ paddingElement }) => paddingElement};
  }
`;

export { Flex, Grid, Stack };
