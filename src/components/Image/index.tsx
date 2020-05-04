import styled from "styled-components";

interface IImageResponsive {
  position?: string;
}

const ImageResponsive = styled.img<IImageResponsive>`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: ${({ position = "center" }: IImageResponsive) => position};
`;
export default ImageResponsive;
