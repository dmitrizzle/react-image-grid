import "jest-styled-components";

import React from "react";

import { shallow } from "enzyme";

import Header, { Title, Header as HeaderStyles } from "./Header";

test("Render Header without crashing, match snapshot", () => {
  const element = shallow(<Header />);
  expect(element).toMatchSnapshot();
});

test("Render Title without crashing, match snapshot", () => {
  const element = shallow(<Title />);
  expect(element).toMatchSnapshot();
});

test("Render HeaderStyles without crashing, match snapshot", () => {
  const element = shallow(<HeaderStyles />);
  expect(element).toMatchSnapshot();
});
