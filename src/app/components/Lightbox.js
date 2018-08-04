import { Button } from "@roast-cms/react-button-beans";
import React from "react";
import styled from "styled-components";

import { Title } from "./Header";
import Overlay from "./Overlay";

export const LightboxOverlay = styled(Overlay)`
  position: fixed;
  display: block;
  z-index: 2;
  cursor: pointer;
  overflow-y: scroll;
`;
export const Box = styled.div`
  max-width: 520px;
  width: 90%;
  margin: 2em auto;
  background: #fff;
  color: #000;
  border-radius: .5em;
  overflow: hidden;
  & h1 {
    padding: .5em;
    background: #eee;
  }
  & p {
    padding: 1em;
    margin: 0;
    font-family: ${props => props.theme.typography.text.font};
  }
`;
export const LightboxButton = styled(Button)`
  border-radius: 0;
  margin-bottom: 0;
  max-width: 100%;
`;
export const ImageLarge = styled.img`width: 100%;`;

export default props => {
  return (
    <LightboxOverlay onClick={props.onClick}>
      <Box>
        <Title>
          Image by {props.data.user}
        </Title>
        <ImageLarge src={props.data.src} />
        <p>
          {props.data.caption}
        </p>
        {props.data.tags &&
          props.data.tags.length > 0 &&
          <p>
            <strong>Tags:</strong>{" "}
            {props.data.tags.map((tag, count) => {
              return `${tag}${count === props.data.tags.length - 1
                ? "."
                : ","} `;
            })}
          </p>}
          <p><small>Published on {props.data.published}</small></p>
        <LightboxButton
          onClick={event => {
            event.stopPropagation();
            window.open(props.data.link);
          }}
          inverse
        >
          See on Flickr
        </LightboxButton>
      </Box>
    </LightboxOverlay>
  );
};
