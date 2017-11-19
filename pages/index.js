import React from "react";
import styled from "styled-components";
import Meta from "../components/Meta";
import { H1, H2, H3, H4, P } from "../components/Headings";
import { Grid, Main, Sidebar } from "../components/Grid";
import Link from "../components/Link";
import HorizontalRule from "../components/HorizontalRule";
import FontFeature from "../components/FontFeature";
import { Line } from "../components/CodeSnippet";

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
        <FontFeature 
          title="Superior Figures"
          name="superior-figures"
          example={
            <P>
              Dijkstra’s algorithm is an algorithm for finding the shortest paths
              between nodes in a graph, which may represent, for example, road
              networks.
              <sup>
                <Link href="#">1</Link>
              </sup>{" "}
              It was conceived by computer scientist Edsger W. Dijkstra in 1956 and
              published three years later.
              <sup>
                <Link href="#">2</Link>
              </sup>
            </P>
          }
          code={[
            <Line key="line1">{`blockquote {`}</Line>,
            <Line indent key="line2">hanging-puntuation: first allow-end;</Line>,
            <Line key="line3">{`}`}</Line>
          ]}
        />
        <HorizontalRule wide />
        <FontFeature />
        <HorizontalRule wide />
        <FontFeature />
        <HorizontalRule wide />
        <FontFeature />
      </Main>
    </Grid>
  </div>
);
