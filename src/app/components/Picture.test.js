import "jest-styled-components";

import { Sugar } from "@roast-cms/react-sugar-styled";
import React from "react";

import { shallow } from "enzyme";

import Picture, { PictureWrap, Image } from "./Picture";

test("Render PictureWrap without crashing, match snapshot", () => {
  const element = shallow(<PictureWrap theme={Sugar({})} />);
  expect(element).toMatchSnapshot();
});
test("Render Picture without crashing, match snapshot", () => {
  const element = shallow(<Picture />);
  expect(element).toMatchSnapshot();
});
test("Render Image without crashing, match snapshot", () => {
  const element = shallow(<Image />);
  expect(element).toMatchSnapshot();
});
