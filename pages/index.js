import React from "react";
import styled from "styled-components";
import Meta from "../components/Meta";
import { H1, H2, H3, H4 } from "../components/Headings";

export default () =>
  <div>
    <Meta />
    <H1>Smarter Typography that wraps when the line-length gets too long</H1>
    <H2>This is an h2 that wraps when the line-length gets too long</H2>
    <H3>This is an h3 that wraps when the line-length gets too long</H3>
    <p>
      Upload a font to see the typographic features it supports. Don’t worry,
      fonts aren’t stored. Everything happens in the browser.  that wraps when the line-length gets too long
    </p>

    <H4>
      Upload a font to see the typographic features it supports. Don’t worry,
      fonts aren’t stored. Everything happens in the browser.
    </H4>
  </div>;
