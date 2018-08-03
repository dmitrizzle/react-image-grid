import "jest-styled-components";

import React from "react";

import { shallow } from "enzyme";

import Main from "./Main";

test("Render Main without crashing, match snapshot", () => {
  const element = shallow(<Main />);
  expect(element).toMatchSnapshot();
});
