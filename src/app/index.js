import "sanitize.css"
import "typeface-indie-flower/index.css"

import React from "react";

import Header from './components/Header';
import Main from './components/Main';
import Picture from './components/Picture';

export default () =>
  <div>
    <Header />
    <Main>
      <Picture />
      <Picture />
      <Picture />
      <Picture />
      <Picture />
      <Picture />
      <Picture />
    </Main>
  </div>;
