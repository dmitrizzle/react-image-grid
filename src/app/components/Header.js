import React from "react";
import styled from "styled-components";

export const HeaderWrap = styled.header`padding: 1em;`;
export const Title = styled.h1`
  font-family: 'Indie Flower', cursive;
  margin: 0;
  text-align: center;
`;
export default () =>
  <HeaderWrap>
    <Title>React Image Grid</Title>
  </HeaderWrap>;
