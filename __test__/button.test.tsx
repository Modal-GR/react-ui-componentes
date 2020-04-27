import * as React from "react";
import Enzyme, { shallow, ShallowWrapper } from "enzyme";
import { create, ReactTestRenderer } from "react-test-renderer";

import { Button } from "../src/index";

describe("Run tests of component <Button />", () => {
  const mockCallBack = jest.fn();
  const wrapper = shallow(<Button onClickButton={mockCallBack}>Click</Button>);

  it("should render button", () => {
    expect(wrapper).toMatchSnapshot();
    expect(wrapper).toBeTruthy();
  });

  it("should render text correct", () => {
    expect(wrapper.contains("Click")).toBeTruthy();
  });

  // Write props test default and custom value

  // Write test condition

  it("should run event click", () => {
    wrapper.simulate("click");
    expect(mockCallBack).toHaveBeenCalled();
  });
});
