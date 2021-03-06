import React from "react";
import styled from "styled-components";
import { P } from "../Headings";
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

  ${props =>
    props.demoStyling === "opentype"
      ? `
    p {
        font-variant-ligatures: common-ligatures;  
      }
    `
      : ``} ${props =>
  props.demoStyling === "browser"
    ? `
    `
    : ``} ${props =>
  props.demoStyling === "reset"
    ? `
    p {
        font-variant-ligatures: none;  
      }
    `
    : ``};
`;

// If toggle value = opentype feature
// else if toggle value = browser
// else if toggle value = reset
const StandardLigatures = ({ demoStyling }) => (
  <Wrapper demoStyling={demoStyling}>
    <ExampleWrapper animate={demoStyling}>
      <P>
        A scru<ChangeNotification animate={demoStyling}>ff</ChangeNotification>y
        marmot o<ChangeNotification animate={demoStyling}>
          ft
        </ChangeNotification>en finds cactus{" "}
        <ChangeNotification animate={demoStyling}>fl</ChangeNotification>owers o<ChangeNotification
          animate={demoStyling}
        >
          ff
        </ChangeNotification>track. Spectacular my<ChangeNotification
          animate={demoStyling}
        >
          st
        </ChangeNotification>eries sends{" "}
        <ChangeNotification animate={demoStyling}>st</ChangeNotification>ories
        of d<ChangeNotification animate={demoStyling}>oo</ChangeNotification>m
        unraveling. The beetle scuttled across a milkweed leaf, its{" "}
        <ChangeNotification animate={demoStyling}>ae</ChangeNotification>neous
        body like a golden shield.<br />
      </P>
      <LigGrid
        characters={[
          "ft",
          "fi",
          "fj",
          "fl",
          "ff",
          "ffi",
          "ffj",
          "ffl",
          "st",
          "ae",
          "oo"
        ]}
      />
    </ExampleWrapper>
    <CodeSnippet>
      <Line>{`p {`}</Line>
      {codeDisplayOptions(
        demoStyling,
        [
          <Line indent key="line-1">
            font-variant-ligatures: common-ligatures;
          </Line>
        ],
        [<Line indent key="line-2">{`font-variant-ligatures: none;`}</Line>]
      )}
      <Line>{`}`}</Line>
    </CodeSnippet>
  </Wrapper>
);

export default StandardLigatures;
