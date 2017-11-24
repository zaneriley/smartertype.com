import React from "react";
import styled from "styled-components";
import { P } from "../Headings";
import Link from "../Link";
import CodeSnippet, { Line } from "../CodeSnippet";
import { rerenderNotification } from "../Animations";

const Wrapper = styled.div`
  position: relative;

  &::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: var(--border-radius-base);
    background-color: var(--color-accent-light);
    opacity: 0;
    content: "";
    z-index: -1;

  ${props => props.animate ? `
    animation: ${rerenderNotification} 500ms ease 1 forwards;
  ` : ``}
  }
`;

// If toggle value = opentype feature
// else if toggle value = browser
// else if toggle value = reset
const ExampleWrapper = ({children, animate}) => (
  <Wrapper animate={animate}>
    {children}
  </Wrapper>
);

export default ExampleWrapper;
