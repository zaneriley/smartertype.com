import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { BREAKPOINTS } from "../utils/css-variables";

const StyledGrid = styled.div``;

export const Main = styled.main`
  max-width: var(--max-width-prose);
  padding: 0 var(--column-gap-base);
  margin-top: var(--spacing-larger);
  margin-right: auto;
  margin-left: auto;
  margin-bottom: var(--spacing-larger);
  width: 100%;

  transform: ${props =>
    props.transform
      ? `translateX(calc((var(--column-gap) * 2 + calc(100% * 2/12)) * -1));`
      : ``};

  > * + * {
    margin-top: var(--spacing-large);
  }

  @media screen and (min-width: ${BREAKPOINTS.medium}px) {
    margin-top: var(--spacing-large);
    margin-bottom: var(--spacing-large);
  }
`;

/* TODO: progressively load the background image */
export const Sidebar = styled.aside`
  top: 0;
  margin-top: 0;
  padding: var(--spacing-base) var(--column-gap-base);
  width: 100%;
  height: 75vh;
  background-color: var(--color-primary-light);
  background-image: url("/static/images/background-texture-1440w.jpg");
  background-position: top center;
  background-size: cover;
  background-repeat: no-repeat;
  pointer-events: all;

  @media screen and (min-width: ${BREAKPOINTS.medium}px) {
    position: sticky;
    margin: 0;
    max-width: 472px;
    padding: var(--column-gap-base);
    grid-template-columns: repeat(12, 1fr);
    height: 100vh;
    overflow-x: hidden;
    overflow-y: scroll;
  }
`;

export const Grid = ({ className, children, left }) => (
  <StyledGrid className={className} left={left}>
    {children}
  </StyledGrid>
);

Grid.PropTypes = {
  className: PropTypes.string,
  children: PropTypes.node
};
