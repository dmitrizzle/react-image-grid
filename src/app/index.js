import "sanitize.css";
import "typeface-indie-flower/index.css";

import { Sugar } from "@roast-cms/react-sugar-styled";
import { ThemeProvider } from "styled-components";
import React from "react";
import axios from 'axios';

import Header from "./components/Header";
import Main from "./components/Main";
import Picture from "./components/Picture";

const DEFAULT_GRID_STATE = [
  {
    media: {}
  },
  {
    media: {}
  },
  {
    media: {}
  }
];
export default class extends React.PureComponent {
  constructor(props) {
    super();
    this.state = {
      gallery: DEFAULT_GRID_STATE
    };
  }
  componentDidMount = () => {
    axios({
      method: "get",
      params: {
        _page: 1,
        _limit: 12
      },
      url: "http://localhost:3000/posts"
    }).then(response => {
      this.setState({
        gallery: response.data
      })
      console.log(response.data);
    });
  };
  render = () => {
    return (
      <ThemeProvider theme={Sugar({})}>
        <div>
          <Header />
          <Main>
            {this.state.gallery.map(item => {
              return <Picture src={item.media.m} key={Math.random()} />;
            })}
          </Main>
        </div>
      </ThemeProvider>
    );
  };
}
