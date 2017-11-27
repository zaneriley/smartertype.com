import React from "react";
import styled from "styled-components";
import { P, NoWrap } from "../Headings";
import Link from "../Link";
import CodeSnippet, { Line } from "../CodeSnippet";
import ExampleWrapper from "../FontFeature/ExampleWrapper";

const Wrapper = styled.div`
  > * {
    margin-top: var(--spacing-base);
  }

  sup {
    a::before,
    a::after {
      display: inline;
    }

    a::before {
      content: "(";
    }

    a::after {
      content: ")";
    }
  }
`;

const SmallCaps = styled.span`
  font-feature-settings: "c2sc", "smcp";
`;

const Sinf = styled.span`
  ${props =>
    props.demoStyling === "opentype"
      ? `
      font-feature-settings: "sinf", "subs" off, "sups" off, "c2sc" off, "smcp" off;`
      : ``};
`;

// If toggle value = opentype feature
// else if toggle value = browser
// else if toggle value = reset
const ScientificInferiors = ({ demoStyling }) => (
  <Wrapper demoStyling={demoStyling}>
    <ExampleWrapper animate={demoStyling}>
      <P>The balanced chemical equation for Cellular respiration: </P>
      <P center>
        <SmallCaps>
          <NoWrap>
            C
            <Sinf demoStyling={demoStyling}>6</Sinf>
            H
            <Sinf demoStyling={demoStyling}>1</Sinf>
            <Sinf demoStyling={demoStyling}>2</Sinf>
            O
            <Sinf demoStyling={demoStyling}>6</Sinf>
            O + 6O
            <Sinf demoStyling={demoStyling}>2</Sinf>
            O →
          </NoWrap>{" "}
          <NoWrap>
            6CO
            <Sinf demoStyling={demoStyling}>2</Sinf>
            CO + 6H
            <Sinf demoStyling={demoStyling}>2</Sinf>
            H
            <Sinf demoStyling={demoStyling}>0</Sinf>
          </NoWrap>
        </SmallCaps>
      </P>
    </ExampleWrapper>
    <CodeSnippet>
      <Line>{`.scientific-inferiors {`}</Line>
      <Line indent>font-variant-position: sinf;</Line>
      <Line>{`}`}</Line>
    </CodeSnippet>
  </Wrapper>
);

export default ScientificInferiors;
