import React from "react";
import styled, { css } from "styled-components";

import Overlay from './Overlay';

const DOT =
  "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
const padding = {
  max: `.75em`,
  lrg: `.66em`,
  med: `.5em`,
  sml: `.33em`
};
const overlayDimensions = size => css`
  left: ${size};
  right: ${size};
  bottom: ${size};
  top: ${size};
  padding: ${size};
`;
export const PictureWrap = styled.div`
  width: 270px;
  height: 270px;
  padding: ${padding.max};
  position: relative;
  cursor: pointer;
  &:hover > aside {
    display: block;
    ${overlayDimensions(padding.max)};
  }

  ${props =>
    // max-width 750px
    props.theme.size.breakpoint.max.l`
      width: 250px;
      height: 250px;
      padding: ${padding.lrg};
      &:hover > aside {
        ${overlayDimensions(padding.lrg)}
      }
    `};
  ${props =>
    // max-width: 520px
    props.theme.size.breakpoint.max.m`
      width: 173.3px;
      height: 173.3px;
      padding: ${padding.med};
      &:hover > aside {
        ${overlayDimensions(padding.med)}
      }
    `};
  ${props =>
    // max-width: 320px
    props.theme.size.breakpoint.max.s`
      width: 106.6px;
      height: 106.6px;
      padding: ${padding.sml};
      &:hover > aside {
        ${overlayDimensions(padding.sml)}
      }
    `};
`;
export const Image = styled.div`
  background-color: #eee;
  background-image: url(${props => props.src || DOT});
  background-size: cover;
  width: 100%;
  height: 100%;
`;
export const PictureOverlay = styled(Overlay)`
  font-family: ${props=> props.theme.typography.text.font};
  & > p {
    opacity: .5;
  }
`;

export default props =>
  <PictureWrap onClick={props.onClick}>
    <PictureOverlay>
      {props.user}
      <p>
        {props.caption}
      </p>
    </PictureOverlay>
    <Image {...props} />
  </PictureWrap>;
