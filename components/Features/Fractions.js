import React from "react";
import styled from "styled-components";
import { P, H4, Li } from "../Headings";
import Link from "../Link";
import CodeSnippet, { Line } from "../CodeSnippet";
import ExampleWrapper from "../FontFeature/ExampleWrapper";
import codeDisplayOptions from "../FontFeature/_CodeDisplayOptions";
import ChangeNotification from "../ChangeNotification";

const Wrapper = styled.div`
  > * {
    margin-top: var(--spacing-base);
  }
`;

const Frac = styled.span`
  ${props =>
    props.demoStyling === "opentype"
      ? `
    ${Wrapper} & {
        font-feature-settings: "frac";
        font-variant-numeric: diagonal-fractions;
    }
  `
      : ``};
`;

const FlexTable = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-top: var(--spacing-smallest) solid var(--color-neutral-dark);
`;

const Amount = styled.span`
  display: inline-block;
  margin-right: var(--spacing-small);
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
`;

const TR = styled.div`
  display: inline-flex;
  align-items: center;
  margin-top: 0;
  padding: var(--spacing-small) 0;
  border-bottom: 1px solid var(--color-neutral-base);

  p + p {
    margin-top: 0;
  }

  p {
    max-width: min-content;
    max-width: -moz-min-content;
    white-space: nowrap;
  }
`;

const Ingredient = styled.span``;

const Fractions = ({ demoStyling }) => (
  <Wrapper demoStyling={demoStyling}>
    <ExampleWrapper animate={demoStyling}>
      <FlexTable>
        <TR>
          <P large color="var(--color-neutral-darker)">
            <Amount>
              <ChangeNotification animate={demoStyling}>
                <Frac demoStyling={demoStyling}>1/2</Frac>
              </ChangeNotification>
            </Amount>
          </P>
          <P>
            <Ingredient>teaspoon ground cinnamon</Ingredient>
          </P>
        </TR>
        <TR>
          <P large color="var(--color-neutral-darker)">
            <Amount>
              <ChangeNotification animate={demoStyling}>
                <Frac demoStyling={demoStyling}>1/2</Frac>
              </ChangeNotification>
            </Amount>
          </P>
          <P>
            <Ingredient>teaspoon vanilla extract</Ingredient>
          </P>
        </TR>
        <TR>
          <P large color="var(--color-neutral-darker)">
            <Amount>
              <ChangeNotification animate={demoStyling}>
                <Frac demoStyling={demoStyling}>1/3</Frac>
              </ChangeNotification>
            </Amount>
          </P>
          <P>
            <Ingredient>tablespoon sugar</Ingredient>
          </P>
        </TR>
        <TR>
          <P large color="var(--color-neutral-darker)">
            <Amount>
              <ChangeNotification animate={demoStyling}>
                <Frac demoStyling={demoStyling}>1/2</Frac>
              </ChangeNotification>
            </Amount>
          </P>
          <P>
            <Ingredient>cup milk</Ingredient>
          </P>
        </TR>
        <TR>
          <P large color="var(--color-neutral-darker)">
            <Amount>
              <ChangeNotification animate={demoStyling}>
                <Frac demoStyling={demoStyling}>2/3</Frac>
              </ChangeNotification>
            </Amount>
          </P>
          <P>
            <Ingredient>cup white long-grain rice</Ingredient>
          </P>
        </TR>
      </FlexTable>
    </ExampleWrapper>
    <CodeSnippet>
      <Line>{`.fraction {`}</Line>
      {codeDisplayOptions(
        demoStyling,
        [
          <Line
            indent
            key="line-1"
          >{`font-variant-numeric: diagonal-fractions;`}</Line>,
          <Line indent key="line-2">{`font-feature-settings: "frac";`}</Line>
        ],
        [
          <Line
            indent
            key="line-3"
          >{`font-feature-settings: "frac" off;`}</Line>
        ]
      )}
      <Line>{`}`}</Line>
    </CodeSnippet>
  </Wrapper>
);

export default Fractions;
