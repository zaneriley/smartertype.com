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
      sup {
        all: unset;
        font-variant-position: super;
        font-feature-settings: "sups";
        font-size: inherit;
        line-height: 1;
        font-weight: var(--font-weight-bold);
      }
    ` : ``}

    ${props => props.demoStyling === "browser" ? `
      sup {
        font-weight: var(--font-weight-bold);
      }
    ` : ``}

  ${props => props.demoStyling === "reset" ? `
      sup {
        all: unset;
      }
    ` : ``}
`;

// If toggle value = opentype feature
// else if toggle value = browser
// else if toggle value = reset
const SuperiorFigures = ({demoStyling}) => (
  <Wrapper demoStyling={demoStyling}>
    <ExampleWrapper animate={demoStyling}>
      <P>
        Dijkstra’s algorithm is an algorithm for finding the shortest paths
        between nodes in a graph, which may represent, for example, road networks.
        <sup>
          <Link href="#">1</Link>
        </sup>{" "}
        It was conceived by computer scientist Edsger W. Dijkstra in 1956 and
        published three years later.<sup>
          <Link href="#">2</Link>
        </sup>
      </P>
    </ExampleWrapper>
    <CodeSnippet>
      <Line>{`sup {`}</Line>
      <Line indent>font-variant-position: super;</Line>
      <Line>{`}`}</Line>
    </CodeSnippet>
  </Wrapper>
);

export default SuperiorFigures;
