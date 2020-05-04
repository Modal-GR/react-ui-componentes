import React from "react";
import { Transition } from "react-transition-group";

interface ISlide {
  children: any;
  in: Boolean;
  duration: Number;
  positionX: Number;
}

const Slide = ({ children, in: inProp, duration, positionX }: ISlide) => {
  const time = 800 || duration;

  const transtionStyles = {
    entering: {
      opacity: 0,
      transform: `translate3d(${positionX || "2000"}px, 0, 0)`,
    },
    entered: { opacity: 1, transform: "translate3d(0px, 0, 0)" },
    exiting: {
      opacity: 0,
      transform: `translate3d(${positionX || "2000"}px, 0, 0)`,
    },
    exited: { opacity: 0, transform: "translate3d(2000px, 0, 0)" },
  };
  const defaultStyle = {
    transform: `translate3d(${positionX || "2000"}px, 0, 0)`,
    transition: `all ${time}s`,
    opacity: 0,
  };

  return (
    <Transition
      unmountOnExit
      mountOnEnter
      in={inProp}
      timeout={{
        appear: 500,
        enter: 300,
        exit: 500,
      }}
    >
      {(state) => (
        <div
          style={{
            ...defaultStyle,
            ...transtionStyles[state],
          }}
        >
          {children}
        </div>
      )}
    </Transition>
  );
};

export default Slide;
