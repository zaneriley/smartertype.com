import React from "react";
import Toggle from "../Toggle";
import { P } from "../Headings";
import CodeSnippet, { Line } from "../CodeSnippet";

const FontFeature = ({}) => (
  <div>
    <Toggle />
    <P>
      Dijkstra's algorithm is an algorithm for finding the shortest paths
      between nodes in a graph, which may represent, for example, road
      networks.(1) It was conceived by computer scientist Edsger W. Dijkstra in
      1956 and published three years later. (2)
    </P>
    <CodeSnippet>
      <Line>{` blockquote {`}</Line>
      <Line> hanging-puntuation: first allow-end;</Line>
      <Line>{`}`}</Line>
    </CodeSnippet>
  </div>
);

export default FontFeature;
