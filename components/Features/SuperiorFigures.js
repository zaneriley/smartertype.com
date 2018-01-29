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

  sup {
    color: var(--color-primary-base);
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

  p {
    font-variant-numeric: proportional-nums;
  }

  ${props =>
    props.demoStyling === "opentype"
      ? `
      sup {
        all: unset;
        font-variant-position: super;
        font-feature-settings: "sups";
        font-size: inherit;
        line-height: 1;
        font-weight: var(--font-weight-bold);
      }
    `
      : ``} ${props =>
  props.demoStyling === "browser"
    ? `
      sup {
        line-height: 1;
        font-weight: var(--font-weight-bold);
      }
    `
    : ``} ${props =>
  props.demoStyling === "reset"
    ? `
      sup {
        all: unset;
      }
    `
    : ``};
`;

// If toggle value = opentype feature
// else if toggle value = browser
// else if toggle value = reset
const SuperiorFigures = ({ demoStyling }) => (
  <Wrapper demoStyling={demoStyling}>
    <ExampleWrapper a>
      <P>
        Dijkstra’s algorithm is an algorithm for finding the shortest paths
        between nodes in a graph, which may represent, for example, road
        networks.
        <sup>
          <Link href="#">
            <ChangeNotification animate={demoStyling}>1</ChangeNotification>
          </Link>
        </sup>{" "}
        It was conceived by computer scientist Edsger W. Dijkstra in 1956 and
        published three years later.<sup>
          <Link href="#">
            <ChangeNotification animate={demoStyling}>2</ChangeNotification>
          </Link>
        </sup>
      </P>
    </ExampleWrapper>
    <CodeSnippet>
      <Line>{`sup {`}</Line>
      {codeDisplayOptions(
        demoStyling,
        [
          <Line indent key="line-1">
            font-variant-position: super;
          </Line>,
          <Line indent key="line-2">
            font-feature-settings: "sups";
          </Line>
        ],
        [<Line indent key="line-3">{`all: unset;`}</Line>]
      )}
      <Line>{`}`}</Line>
    </CodeSnippet>
  </Wrapper>
);

export default SuperiorFigures;
