import "jest-styled-components";

import { Sugar } from "@roast-cms/react-sugar-styled";
import React from "react";

import { shallow } from "enzyme";

import Header, { Title, HeaderWrap } from "./Header";

test("Render Header without crashing, match snapshot", () => {
  const element = shallow(<Header />);
  expect(element).toMatchSnapshot();
});

test("Render Title without crashing, match snapshot", () => {
  const element = shallow(
    <Title
      theme={Sugar({
        font_heading: "'Indie Flower', cursive;",
        font_body: "'Titillium Web', sans-serif;"
      })}
    />
  );
  expect(element).toMatchSnapshot();
});

test("Render HeaderWrap without crashing, match snapshot", () => {
  const element = shallow(<HeaderWrap />);
  expect(element).toMatchSnapshot();
});
