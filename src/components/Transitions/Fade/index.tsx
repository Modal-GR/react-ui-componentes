import React from "react";
import { Transition } from "react-transition-group";

interface IFade {
  children: any;
  in: Boolean;
  duration: Number;
}

const Fade = ({ children, in: inProp, duration }: IFade) => {
  const transtionStyles = {
    entering: { opacity: 0 },
    entered: { opacity: 1 },
    exiting: { opacity: 0 },
    exited: { opacity: 0 },
  };
  const defaultStyle = {
    transition: `all ${duration}ms`,
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

export default Fade;
