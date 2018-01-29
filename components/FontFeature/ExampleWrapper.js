import React from "react";
import styled from "styled-components";
import ChangeNotification from "../ChangeNotification";

const Wrapper = styled.div`
  position: relative;

  &:hover ${ChangeNotification} {
    color: var(--color-accent-dark);
  }
`;

// If toggle value = opentype feature
// else if toggle value = browser
// else if toggle value = reset
const ExampleWrapper = ({ children, animate }) => (
  <Wrapper animate={animate}>{children}</Wrapper>
);

export default ExampleWrapper;
