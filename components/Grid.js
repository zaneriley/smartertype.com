import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { BREAKPOINTS } from "../utils/css-variables";

const StyledGrid = styled.div``;

export const Main = styled.main`
  max-width: calc(593px + var(--column-gap-base) * 2);
  padding: 0 var(--column-gap-base);
  margin-top: var(--spacing-larger);
  margin-right: auto;
  margin-left: auto;
  width: 100%;

  transform: ${props =>
    props.transform
      ? `translateX(calc((var(--column-gap) * 2 + calc(100% * 2/12)) * -1));`
      : ``};

  > * + * {
    margin-top: var(--spacing-large);
  }

  @media screen and (min-width: ${BREAKPOINTS.medium}) {
    margin-top: var(--spacing-base);
  }
`;

/* TODO: progressively load the background image */
export const Sidebar = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  top: 0;
  margin-top: 0;
  padding: var(--spacing-base);
  min-height: min-content;
  height: 75vh;
  background-color: var(--color-accent-base);
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
