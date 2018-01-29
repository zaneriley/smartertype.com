import React from "react";
import styled from "styled-components";
import { rerenderNotification } from "./Animations";

const Wrapper = ({ children, animate }) => <span>{children}</span>;

const ChangeNotification = styled.span`
  position: relative;
  transition: color 300ms ease-in-out;

  &::after {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--color-accent-light);
    opacity: 0;
    content: "";
    z-index: -1;

    ${props =>
      props.animate
        ? `
    animation: ${rerenderNotification} 1s ease-out 1 forwards;
    `
        : ``};
  }
`;

export default ChangeNotification;
