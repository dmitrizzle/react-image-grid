import "sanitize.css";
import "typeface-indie-flower/index.css";

import { Sugar } from "@roast-cms/react-sugar-styled";
import { ThemeProvider } from "styled-components";
import React from "react";

import Header from "./components/Header";
import Main from "./components/Main";
import Picture from "./components/Picture";

const mockSrc = [
  "https://farm2.staticflickr.com/1818/43766087152_a5f8bfe93a_m.jpg",
  "https://farm1.staticflickr.com/939/43098220234_44b423bdaa_m.jpg",
  "https://farm2.staticflickr.com/1819/43098024864_b6490c694f_m.jpg",
  "https://farm2.staticflickr.com/1778/42005642750_64ddc48dd5_m.jpg",
  "https://farm2.staticflickr.com/1840/42910771235_e28d308181_m.jpg",
  "https://farm2.staticflickr.com/1834/43814235591_c33d2a996e_m.jpg",
  "https://farm1.staticflickr.com/856/28855487417_25a7876483_m.jpg",
  "https://farm2.staticflickr.com/1813/43743914412_51215db1b1_m.jpg"
];
export default class extends React.PureComponent {
  constructor(props) {
    super()
  }
  componentDidMount = () => {
    console.log("mount");
  }
  render = () => {
    return (
      <ThemeProvider theme={Sugar({})}>
        <div>
          <Header />
          <Main>
            {mockSrc.map(item => {
              return <Picture src={item} key={item} />;
            })}
          </Main>
        </div>
      </ThemeProvider>
    );
  };
}
