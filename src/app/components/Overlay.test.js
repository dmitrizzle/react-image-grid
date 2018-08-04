import "jest-styled-components";

import { Sugar } from "@roast-cms/react-sugar-styled";
import React from "react";

import { shallow } from "enzyme";

import Overlay from "./Overlay";

test("Render Overlay without crashing, match snapshot", () => {
  const element = shallow(<Overlay theme={Sugar({})} />);
  expect(element).toMatchSnapshot();
});
