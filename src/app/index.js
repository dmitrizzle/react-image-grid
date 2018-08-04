import "sanitize.css";
import "typeface-indie-flower/index.css";

import { Sugar } from "@roast-cms/react-sugar-styled";
import { ThemeProvider } from "styled-components";
import React from "react";
import axios from "axios";

import Header from "./components/Header";
import Main from "./components/Main";
import Picture from "./components/Picture";

const DEFAULT_GALLERY_DATA = [
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
      itemsPerPage: 12,
      gallery: {
        data: DEFAULT_GALLERY_DATA,
        page: 1,
        isLastPage: false
      }
    };
    this.handleMore = this.handleMore.bind(this);
  }
  fetch = page => {
    axios({
      method: "get",
      params: {
        _page: page,
        _limit: this.state.itemsPerPage
      },
      url: "http://localhost:3000/posts"
    }).then(response => {
      const isLastPage = !(
        response.data.length - this.state.itemsPerPage ===
        0
      );
      this.setState({
        gallery: {
          page,
          isLastPage,
          data: [...this.state.gallery.data, ...response.data]
        }
      });
    });
  };
  componentDidMount = () => {
    this.setState({
      gallery: {
        ...this.state.gallery,
        data: []
      }
    });
    this.fetch(this.state.gallery.page);
  };
  handleMore = event => {
    event.preventDefault();
    this.fetch(this.state.gallery.page + 1);
  };
  render = () => {
    return (
      <ThemeProvider theme={Sugar({})}>
        <div>
          <Header />
          <Main>
            {this.state.gallery.data.map(item => {
              return <Picture src={item.media.m} key={Math.random()} />;
            })}
          </Main>
          {this.state.gallery.data.length >= this.state.itemsPerPage &&
            !this.state.gallery.isLastPage &&
            <a href="#more" onClick={this.handleMore}>
              More
            </a>}
        </div>
      </ThemeProvider>
    );
  };
}
