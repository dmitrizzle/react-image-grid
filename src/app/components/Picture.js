import React from "react";
import styled from "styled-components";

const DOT =
  "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";

export const PictureWrap = styled.div`
  width: 270px;
  height: 270px;
  padding: .75em;

  ${props =>
    // max-width 750px
    props.theme.size.breakpoint.max.l`
      width: 250px;
      height: 250px;
      padding: .66em;
    `};
  ${props =>
    // max-width: 520px
    props.theme.size.breakpoint.max.m`
      width: 173.3px;
      height: 173.3px;
      padding: .5em;
    `};
  ${props =>
    // max-width: 320px
    props.theme.size.breakpoint.max.s`
      width: 106.6px;
      height: 106.6px;
      padding: .33em;
    `};
`;
export const Image = styled.div`
  background-image: url(${props => props.src || DOT});
  background-size: cover;
  width: 100%;
  height: 100%;
`;

export default (props) =>
  <PictureWrap >
    <Image {...props} />
  </PictureWrap>;
