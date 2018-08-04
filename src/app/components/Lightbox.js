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
  max-width: 300px;
  margin: 10% auto 0;
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
`;

export default props => {
  return (
    <LightboxOverlay onClick={props.onClick}>
      <Box>
        <Title>
          Image by {props.data.user}
        </Title>
        <p>
          {props.data.caption}
        </p>
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
