import React from "react";
import styled from "styled-components";
import { P, NoWrap } from "../Headings";
import LigGrid from "../LigGrid";
import Link from "../Link";
import CodeSnippet, { Line } from "../CodeSnippet";
import ExampleWrapper from "../FontFeature/ExampleWrapper";
import codeDisplayOptions from "../FontFeature/_CodeDisplayOptions";
import ChangeNotification from "../ChangeNotification";

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

const ChangeSinf = ({ demoStyling, children }) => (
  <ChangeNotification animate={demoStyling}>
    <Sinf demoStyling={demoStyling}>{children}</Sinf>
  </ChangeNotification>
);

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
            <ChangeSinf demoStyling={demoStyling}>6</ChangeSinf>
            H
            <ChangeSinf demoStyling={demoStyling}>1</ChangeSinf>
            <ChangeSinf demoStyling={demoStyling}>2</ChangeSinf>
            O
            <ChangeSinf demoStyling={demoStyling}>6</ChangeSinf>
            O + 6O
            <ChangeSinf demoStyling={demoStyling}>2</ChangeSinf>
            O →
          </NoWrap>{" "}
          <NoWrap>
            6CO
            <ChangeSinf demoStyling={demoStyling}>2</ChangeSinf>
            CO + 6H
            <ChangeSinf demoStyling={demoStyling}>2</ChangeSinf>
            H
            <ChangeSinf demoStyling={demoStyling}>0</ChangeSinf>
          </NoWrap>
        </SmallCaps>
      </P>
    </ExampleWrapper>
    <CodeSnippet>
      <Line>{`.scientific-inferiors {`}</Line>
      {codeDisplayOptions(
        demoStyling,
        [
          <Line indent key="line-1">
            font-feature-settings: "sinf";
          </Line>
        ],
        [
          <Line
            indent
            key="line-2"
          >{`font-feature-settings: "sinf" off;`}</Line>
        ]
      )}
      <Line>{`}`}</Line>
    </CodeSnippet>
  </Wrapper>
);

export default ScientificInferiors;
