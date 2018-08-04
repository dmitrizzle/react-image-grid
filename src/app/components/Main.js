import React from "react";
import styled from "styled-components";

export default styled.main`
  display: flex;
  flex-wrap: wrap;
  width: 1080px;
  margin: 0 auto;

  p {
    font-family: ${props=> props.theme.typography.text.font};
  }
  ${props =>
    props.theme.size.breakpoint.max.l`
      width: 750px;
    `};
  ${props =>
    props.theme.size.breakpoint.max.m`
      width: 520px;
    `};
  ${props =>
    props.theme.size.breakpoint.max.s`
      width: 320px;
    `};
`;
