import React from "react";
import styled from "styled-components";
import { P } from "../Headings";
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

  ${props =>
    props.demoStyling === "opentype"
      ? `
      sub {
        all: unset;
        font-variant-position: sub;
        font-feature-settings: 'subs' !important;
        font-variant-caps: normal;
        font-size: inherit;
        line-height: 1;
      }
    `
      : ``} ${props =>
  props.demoStyling === "browser"
    ? `
      sub {

      }
    `
    : ``} ${props =>
  props.demoStyling === "reset"
    ? `
      sub {
        all: unset;
      }
    `
    : ``};
`;

const SmallCaps = styled.span`
  font-feature-settings: "c2sc", "smcp";
  font-variant-caps: all-small-caps;
`;

// If toggle value = opentype feature
// else if toggle value = browser
// else if toggle value = reset
const Subscript = ({ demoStyling }) => (
  <Wrapper demoStyling={demoStyling}>
    <ExampleWrapper>
      <P large inline>
        The chemical formula for caffeine is{" "}
        <SmallCaps>
          C<ChangeNotification animate={demoStyling}>
            <sub>8</sub>
          </ChangeNotification>H<ChangeNotification animate={demoStyling}>
            <sub>10</sub>
          </ChangeNotification>N<ChangeNotification animate={demoStyling}>
            <sub>4</sub>
          </ChangeNotification>O
        </SmallCaps>.
      </P>
    </ExampleWrapper>
    <CodeSnippet>
      <Line>{`sub {`}</Line>
      {codeDisplayOptions(
        demoStyling,
        [
          <Line indent key="line-1">{`font-variant-position: sub;`}</Line>,
          <Line indent key="line-2">{`font-feature-settings: 'subs';`}</Line>
        ],
        [<Line indent key="line-3">{`all: unset;`}</Line>]
      )}
      <Line>{`}`}</Line>
    </CodeSnippet>
  </Wrapper>
);

export default Subscript;
