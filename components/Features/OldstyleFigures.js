import React from "react";
import styled from "styled-components";
import { P } from "../Headings";
import LigGrid from "../LigGrid";
import Link from "../Link";
import CodeSnippet, { Line } from "../CodeSnippet";
import ExampleWrapper from "../FontFeature/ExampleWrapper";
import codeDisplayOptions from "../FontFeature/_CodeDisplayOptions";

const Wrapper = styled.div`
  > * {
    margin-top: var(--spacing-base);
  }

  ${props =>
    props.demoStyling === "opentype"
      ? `
    p {
        font-variant-numeric: oldstyle-nums;
      }
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

const OldstyleFigures = ({ demoStyling }) => (
  <Wrapper demoStyling={demoStyling}>
    <ExampleWrapper animate={demoStyling}>
      <P>
        On November 7, 2016, debt held by the public was $14.3 trillion or about
        76% of the previous 12 months of GDP. Intragovernmental holdings stood
        at $5.4 trillion, giving a combined total gross national debt of $19.8
        trillion or about 106% of the previous 12 months of GDP; $6.2 trillion
        or approximately 45% of the debt held by the public was owned by foreign
        investors, the largest of which were Japan and China at about $1.09
        trillion for Japan and $1.06 trillion for China as of December 2016.
      </P>

      <LigGrid
        characters={["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]}
      />
    </ExampleWrapper>
    <CodeSnippet>
      <Line>{`p {`}</Line>
      {codeDisplayOptions(
        demoStyling,
        [
          <Line indent key="line-1">
            font-variant-numeric: oldstyle-nums;
          </Line>
        ],
        [<Line indent key="line-2">{`font-variant-numeric: normal;`}</Line>]
      )}
      <Line>{`}`}</Line>
    </CodeSnippet>
  </Wrapper>
);

export default OldstyleFigures;
