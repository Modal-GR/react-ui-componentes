import styled from "styled-components";

interface IContent {
  minHeight?: string;
  maxHeight?: string;
}

const Content = styled.div<IContent>`
  padding: 90px 20px 0;
  max-width: 1280px;
  margin: auto;
  min-height: ${({ minHeight }) => minHeight};
  max-height: ${({ maxHeight }) => maxHeight};
  display: flex;
  flex-direction: column;
`;

export { Content };
