import "sanitize.css";
import "typeface-indie-flower/index.css";
import "typeface-titillium-web/index.css";

import { Button } from "@roast-cms/react-button-beans";
import { Loader } from "@roast-cms/react-button-beans/dist/Loader";
import { Sugar } from "@roast-cms/react-sugar-styled";
import { ThemeProvider } from "styled-components";
import React from "react";
import axios from "axios";
import hdate from "human-date"

import {
  getCaptionFromFlickrString,
  getLargeImageFromFlickrM,
  getTagsFromFlickrString,
  getUserFromFlickrString
} from './utils';
import Header from "./components/Header";
import Lightbox from "./components/Lightbox";
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
        loading: false,
        data: DEFAULT_GALLERY_DATA,
        page: 1,
        isLastPage: false
      },
      lightbox: {
        show: false,
        data: {
          user: "",
          caption: ""
        }
      }
    };
    this.handleMore = this.handleMore.bind(this);
    this.handleLightbox = this.handleLightbox.bind(this);
    this.handleLightboxClose = this.handleLightboxClose.bind(this);
  }
  fetch = page => {
    this.setState({
      gallery: {
        ...this.state.gallery,
        loading: true
      }
    });
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
      const galleryMergeData = this.state.gallery.data[0].media.m
        ? this.state.gallery.data
        : [];
      this.setState({
        gallery: {
          loading: false,
          page,
          isLastPage,
          data: [...galleryMergeData, ...response.data]
        }
      });
    });
  };
  componentDidMount = () => {
    this.fetch(this.state.gallery.page);
  };
  handleMore = event => {
    event.preventDefault();
    this.fetch(this.state.gallery.page + 1);
  };
  handleLightbox = item => {
    this.setState({
      lightbox: {
        show: true,
        data: {
          user: getUserFromFlickrString(item.author),
          caption: getCaptionFromFlickrString(item.description),
          link: item.link,
          src: getLargeImageFromFlickrM(item.media.m),
          tags: getTagsFromFlickrString(item.tags),
          published: hdate.prettyPrint(item.published)
        }
      }
    });
  };
  handleLightboxClose = () => {
    this.setState({ lightbox: { show: false } });
  };
  render = () => {
    return (
      <ThemeProvider
        theme={Sugar({ font_heading: "'Indie Flower', cursive;", font_body: "'Titillium Web', sans-serif;" })}
      >
        <div>
          <Header />
          <Main>
            {this.state.gallery.data.map(item =>
              <Picture
                user={getUserFromFlickrString(item.author)}
                caption={getCaptionFromFlickrString(item.description)}
                src={item.media.m}
                key={Math.random()}
                onClick={() => this.handleLightbox(item)}
              />
            )}
          </Main>
          {this.state.gallery.data.length >= this.state.itemsPerPage &&
            !this.state.gallery.isLastPage &&
            <Button
              onClick={this.handleMore}
              loading={this.state.gallery.loading}
              loaderComponent={Loader}
            >
              Load More
            </Button>}
          {this.state.lightbox.show &&
            <Lightbox
              data={this.state.lightbox.data}
              onClick={this.handleLightboxClose}
            />}
        </div>
      </ThemeProvider>
    );
  };
}
