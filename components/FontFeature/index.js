import React from "react";
import styled from "styled-components";
import Toggle from "../Toggle";
import { H3, P } from "../Headings";
import Link from "../Link";
import CodeSnippet, { Line } from "../CodeSnippet";

const HeadingControl = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  > * {
    margin: 0;
  }

  .baselineAlignment {
    padding-bottom: 0 0 var(--spacing-smaller) 0;
  }

  h3 {
    padding-bottom: var(--spacing-smaller);
  }

  fieldset {
    flex-shrink: 0;
  }
`;

const SpacingBase = styled.div`
  > * {
    margin-top: var(--spacing-base);
  }
`;

const FontFeature = ({}) => (
  <SpacingBase>
    <HeadingControl>
      <H3>Kerning</H3> <Toggle />
    </HeadingControl>
    <P>
      Dijkstra's algorithm is an algorithm for finding the shortest paths
      between nodes in a graph, which may represent, for example, road networks.
      <sup>
        <Link href="#">(1)</Link>
      </sup>{" "}
      It was conceived by computer scientist Edsger W. Dijkstra in 1956 and
      published three years later.<sup>
        <Link href="#">(2)</Link>
      </sup>
    </P>
    <CodeSnippet>
      <Line>{`blockquote {`}</Line>
      <Line indent>hanging-puntuation: first allow-end;</Line>
      <Line>{`}`}</Line>
    </CodeSnippet>
  </SpacingBase>
);

export default FontFeature;
