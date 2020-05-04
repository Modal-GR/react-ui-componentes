import React from "react";
import { ContainerStar } from "./style";

interface IStars {
  activedStars: number;
  color?: string;
  colorDisabled?: string;
}

const Stars: React.FC<IStars> = ({
  activedStars,
  color,
  colorDisabled,
}: IStars) => {
  return (
    <ContainerStar
      color={color}
      colorDisabled={colorDisabled}
      active={activedStars}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="14.792"
        height="14.157"
        viewBox="0 0 14.792 14.157"
      >
        <path
          d="M6.6.492,4.8,4.153.758,4.742a.885.885,0,0,0-.489,1.51L3.191,9.1,2.5,13.122a.884.884,0,0,0,1.283.932l3.614-1.9,3.614,1.9a.885.885,0,0,0,1.283-.932L11.6,9.1l2.922-2.848a.885.885,0,0,0-.489-1.51L9.995,4.153,8.189.492A.885.885,0,0,0,6.6.492Z"
          transform="translate(0 0)"
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="14.792"
        height="14.157"
        viewBox="0 0 14.792 14.157"
      >
        <path
          d="M6.6.492,4.8,4.153.758,4.742a.885.885,0,0,0-.489,1.51L3.191,9.1,2.5,13.122a.884.884,0,0,0,1.283.932l3.614-1.9,3.614,1.9a.885.885,0,0,0,1.283-.932L11.6,9.1l2.922-2.848a.885.885,0,0,0-.489-1.51L9.995,4.153,8.189.492A.885.885,0,0,0,6.6.492Z"
          transform="translate(0 0)"
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="14.792"
        height="14.157"
        viewBox="0 0 14.792 14.157"
      >
        <path
          d="M6.6.492,4.8,4.153.758,4.742a.885.885,0,0,0-.489,1.51L3.191,9.1,2.5,13.122a.884.884,0,0,0,1.283.932l3.614-1.9,3.614,1.9a.885.885,0,0,0,1.283-.932L11.6,9.1l2.922-2.848a.885.885,0,0,0-.489-1.51L9.995,4.153,8.189.492A.885.885,0,0,0,6.6.492Z"
          transform="translate(0 0)"
        />
      </svg>
    </ContainerStar>
  );
};

export default Stars;
