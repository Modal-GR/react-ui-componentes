import styled from "styled-components";

const Separator = styled.hr`
  width: 100%;
  border-color: ${({ theme: { borderColor }, color }) => borderColor || color};
  margin: 20px 0;
`;

export default Separator;
