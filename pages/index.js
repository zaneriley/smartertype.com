import React from "react";
import styled from "styled-components";
import Meta from "../components/Meta";
import { H1, H2, H3, H4, P, NoWrap } from "../components/Headings";
import { Grid, Main, Sidebar } from "../components/Grid";
import DragAndDrop from "../components/DragAndDrop";
import Link from "../components/Link";
import HorizontalRule from "../components/HorizontalRule";
import FontFeaturesList from "../components/FontFeaturesList";
import DemoFont from "../components/DragAndDrop/DemoFont";
import { BREAKPOINTS } from "../utils/css-variables";

const Nav = styled.nav`
  grid-column: span 5;

  > * + * {
    margin-top: var(--spacing-base);
  }
`;

const Footer = styled.footer`
  grid-column: span 5;
  justify-self: flex-end;
  margin-top: auto;
  margin-bottom: 0;
  padding-top: var(--spacing-large);

  > * + * {
    margin-top: var(--spacing-base);
  }
`;

const PageWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media screen and (min-width: ${BREAKPOINTS.medium}px) {
    flex-wrap: nowrap;
  }
`;

export default () => (
  <PageWrapper>
    <Meta />
    <Sidebar>
      <Nav>
        <H1>
          Smarter <br />Typography
        </H1>
        <HorizontalRule />
        <P>
          Check which typographic features your font supports. Don’t worry, your
          fonts aren’t stored. Everything happens in{" "}
          <NoWrap>your browser.</NoWrap>
        </P>
        <DragAndDrop />
      </Nav>
      <Footer>
        <H4 center>
          <Link href="https://twitter.com/zaneriley" rel target="_blank">
            Made by @zaneriley
          </Link>
        </H4>
      </Footer>
    </Sidebar>
    <Main>
      <FontFeaturesList />
    </Main>
  </PageWrapper>
);
