import styled from "styled-components";

interface IStarStyle {
  active: number;
  color?: string;
  colorDisabled?: string;
}
const ContainerStar = styled.div<IStarStyle>`
  display: flex;
  justify-content: center;
  svg {
    margin-bottom: 10px;
    &:nth-child(1) {
      fill: ${({ active, color = "#EEA246", colorDisabled = "#5F6374" }) =>
        active > 0 ? color : colorDisabled};
      transform: rotate(-30deg);
    }
    &:nth-child(2) {
      fill: ${({ active, color = "#EEA246", colorDisabled = "#5F6374" }) =>
        active > 2 ? color : colorDisabled};
      transform: translateY(-5px);
    }
    &:nth-child(3) {
      fill: ${({ active, color = "#EEA246", colorDisabled = "#5F6374" }) =>
        active > 1 ? color : colorDisabled};
      transform: rotate(30deg);
    }
  }
`;
export { ContainerStar };
