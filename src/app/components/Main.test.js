import "jest-styled-components";

import React from "react";

import { shallow } from "enzyme";
import { Sugar } from "@roast-cms/react-sugar-styled";

import Main from "./Main";

test("Render Main without crashing, match snapshot", () => {
  const element = shallow(<Main theme={Sugar({})} />);
  expect(element).toMatchSnapshot();
});
