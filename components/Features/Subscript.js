import React from "react";
import styled from "styled-components";
import { P } from "../Headings";
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

  ${props => props.demoStyling === "opentype" ? `
      sub {
        all: unset;
        font-variant-position: sub;
        font-feature-settings: 'subs' !important;
        font-variant-caps: normal;
        font-size: inherit;
        line-height: 1;
      }
    ` : ``}

    ${props => props.demoStyling === "browser" ? `
      sub {

      }
    ` : ``}

  ${props => props.demoStyling === "reset" ? `
      sub {
        all: unset;
      }
    ` : ``}
`;

const SmallCaps = styled.span`
  font-feature-settings: 'c2sc','smcp';
  font-variant-caps: all-small-caps;
`;
// If toggle value = opentype feature
// else if toggle value = browser
// else if toggle value = reset
const Subscript = ({demoStyling}) => (
  <Wrapper demoStyling={demoStyling}>
    <ExampleWrapper animate={demoStyling}>
      <P>
        The chemical formula for caffeine is <SmallCaps>C<sub>8</sub>H<sub>10</sub>N<sub>4</sub>O</SmallCaps>.
      </P>
    </ExampleWrapper>
    <CodeSnippet>
      <Line>{`sub {`}</Line>
      <Line indent>font-variant-position: sub;</Line>
      <Line>{`}`}</Line>
    </CodeSnippet>
  </Wrapper>
);

export default Subscript;
