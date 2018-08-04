import "jest-styled-components";

import { Sugar } from "@roast-cms/react-sugar-styled";
import React from "react";

import { shallow } from "enzyme";

import Lightbox, {
  LightboxOverlay,
  Box,
  LightboxButton,
  ImageLarge
} from "./Lightbox";

test("Render Box without crashing, match snapshot", () => {
  const element = shallow(<Box theme={Sugar({})} />);
  expect(element).toMatchSnapshot();
});
test("Render Lightbox without crashing, match snapshot", () => {
  const element = shallow(
    <Lightbox
      data={{
        title: "user"
      }}
    />
  );
  expect(element).toMatchSnapshot();
});
test("Render LightboxOverlay without crashing, match snapshot", () => {
  const element = shallow(<LightboxOverlay />);
  expect(element).toMatchSnapshot();
});
test("Render LightboxButton without crashing, match snapshot", () => {
  const element = shallow(<LightboxButton />);
  expect(element).toMatchSnapshot();
});
test("Render ImageLarge without crashing, match snapshot", () => {
  const element = shallow(<ImageLarge />);
  expect(element).toMatchSnapshot();
});
