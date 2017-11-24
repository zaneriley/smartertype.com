import React from "react";
import styled from "styled-components";
import Meta from "../components/Meta";
import { H1, H2, H3, H4, P } from "../components/Headings";
import { Grid, Main, Sidebar } from "../components/Grid";
import Link from "../components/Link";
import HorizontalRule from "../components/HorizontalRule";
import FontFeaturesList from "../components/FontFeaturesList";

const Nav = styled.nav`
  grid-column: span 5;

  > * {
    margin-top: var(--spacing-base);
  }
`;

const Footer = styled.footer`
  grid-column: span 5;
`;

export default () => (
  <div>
    <Meta />
    <Grid left>
      <Sidebar>
        <Nav>
          <H1>
            Smarter <br />Typography
          </H1>
          <HorizontalRule />
          <P>
            Check which typographic features your font supports. Don’t worry,
            your fonts aren’t stored. Everything happens in your browser.
          </P>
        </Nav>
        <Footer>
          <H4>
            <Link
              href="https://twitter.com/zaneriley"
              rel="noopener"
              target="_blank"
            >
              Made by @zaneriley
            </Link>
          </H4>
        </Footer>
      </Sidebar>
    </Grid>
    <Grid>
      <Main>
        <FontFeaturesList />
      </Main>
    </Grid>
  </div>
);
