import "sanitize.css";
import "typeface-indie-flower/index.css";

import { Sugar } from "@roast-cms/react-sugar-styled";
import { ThemeProvider } from "styled-components";
import React from "react";

import Header from "./components/Header";
import Main from "./components/Main";
import Picture from "./components/Picture";

const mockSrc =
  "https://res.cloudinary.com/analog-cafe/image/upload/c_scale,fl_progressive,w_520/image-froth_1333333_Byl1aAiE7.jpg";
export default () =>
  <ThemeProvider theme={Sugar({})}>
    <div>
      <Header />
      <Main>
        <Picture src={mockSrc} />
        <Picture src={mockSrc} />
        <Picture src={mockSrc} />
        <Picture src={mockSrc} />
        <Picture src={mockSrc} />
        <Picture src={mockSrc} />
        <Picture src={mockSrc} />
      </Main>
    </div>
  </ThemeProvider>;
