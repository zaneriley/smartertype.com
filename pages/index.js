import React from "react";
import styled from "styled-components";
import Meta from "../components/Meta";
import { H1, H2, H3 } from "../components/Headings";

export default () =>
  <div>
    <Meta />
    <H1>Smarter Typography</H1>
    <H2>This is an h2</H2>
    <H3>This is an h3</H3>
    <p>
      Upload a font to see the typographic features it supports. Don’t worry,
      fonts aren’t stored. Everything happens in the browser.
    </p>
  </div>;
