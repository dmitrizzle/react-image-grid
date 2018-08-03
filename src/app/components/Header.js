import React from "react"
import styled from "styled-components"

export const Header = styled.header`
  padding: 1em;
`
export const Title = styled.h1`
  font-family: 'Indie Flower', cursive;
  margin: 0;
  text-align: center;
`
export default () => <Header><Title>React Image Grid</Title></Header>
