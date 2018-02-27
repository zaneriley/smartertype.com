import React from "react";
import styled from "styled-components";
import { P } from "../Headings";
import Link from "../Link";
import CodeSnippet, { Line } from "../CodeSnippet";
import ExampleWrapper from "../FontFeature/ExampleWrapper";
import codeDisplayOptions from "../FontFeature/_CodeDisplayOptions";
import ChangeNotification from "../ChangeNotification";

const Wrapper = styled.div`
  > * + * {
    margin-top: var(--spacing-base);
  }

  ${props =>
    props.demoStyling === "opentype"
      ? `
    `
      : ``} ${props =>
  props.demoStyling === "browser"
    ? `
    `
    : ``} ${props =>
  props.demoStyling === "reset"
    ? `
    `
    : ``};
`;

// If toggle value = opentype feature
// else if toggle value = browser
// else if toggle value = reset
const StylisticAlternates = ({ demoStyling }) => (
  <Wrapper demoStyling={demoStyling}>
    <ExampleWrapper>
      <P />
    </ExampleWrapper>
    <CodeSnippet>
      <Line>{`sup {`}</Line>
      {codeDisplayOptions(demoStyling, [
        <Line indent key="line-1">
          TODO
        </Line>
      ])}
      <Line>{`}`}</Line>
    </CodeSnippet>
  </Wrapper>
);

export default StylisticAlternates;
