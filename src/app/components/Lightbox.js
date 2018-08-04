import React from "react";
import styled from "styled-components";

import { Title } from './Header';
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
  padding: 1em;
  border-radius: .5em;
  & > p {
    padding-top: 1em;
  }
`;

export default props => {
  return (
    <LightboxOverlay onClick={props.onClick}>
      <Box>
        <Title>Image by {props.data.user}</Title>
        <p>
          {props.data.caption}
        </p>
      </Box>
    </LightboxOverlay>
  );
};
