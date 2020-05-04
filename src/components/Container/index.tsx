import styled from "styled-components";

interface IContent {
  minHeight?: string;
}

const Content = styled.div<IContent>`
  padding: 90px 20px 0;
  max-width: 1280px;
  margin: auto;
  min-height: calc(100% - 70px);
  display: flex;
  flex-direction: column;
`;

export { Content };
