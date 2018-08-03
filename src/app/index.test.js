import { shallow } from "enzyme";
import React from "react";

import App from "./";

test("Render App without crashing, match snapshot", () => {
  const element = shallow(<App />);
  expect(element).toMatchSnapshot();
});
