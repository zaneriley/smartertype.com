import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledGrid = styled.div`
  display: grid;
  max-width: calc(1248px + var(--column-gap) * 2);
  margin: 0 auto;
  padding: 0 var(--column-gap);
  grid-template-columns: repeat(12, 1fr);
  grid-column-gap: var(--column-gap);

  ${props =>
    props.left
      ? `
    position: fixed;
    top: 0;
    left: 0;
    padding-left: 0;
    transform: ${props => (props.transform ? `translateX(-100%);` : ``)};
    /* Hack to have two grids look like one */
    pointer-events: none;
    `
      : ``} > * {
    margin-top: 0;
  }
`;

export const Main = styled.main`
  grid-column: span 6 / 12;

  transform: ${props =>
    props.transform
      ? `translateX(calc((var(--column-gap) * 2 + calc(100% * 2/12)) * -1));`
      : ``};
  > * {
    margin-top: var(--spacing-large);
  }
`;

/* TODO: progressively load the background image */
export const Sidebar = styled.aside`
  max-width: 472px;
  padding: var(--spacing-base);
  min-height: 100vh;
  background-color: var(--color-accent-base);
  background-image: url("/static/images/background-texture-1440w.jpg");
  background-position: top center;
  background-size: cover;
  background-repeat: no-repeat;
  pointer-events: all;
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
