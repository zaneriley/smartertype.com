import React from "react";
import styled from "styled-components";
import { P, H4, Li } from "../Headings";
import Link from "../Link";
import CodeSnippet, { Line } from "../CodeSnippet";
import ExampleWrapper from "../FontFeature/ExampleWrapper";
import codeDisplayOptions from "../FontFeature/_CodeDisplayOptions";

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
    }
  `
      : ``};
`;

const Ul = styled.ul`
  padding-left: 0;
`;

const Amount = styled.span`
  text-align: center;
  padding-right: var(--spacing-smaller);
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
`;

const Ingredient = styled.span``;

const Fractions = ({ demoStyling }) => (
  <Wrapper demoStyling={demoStyling}>
    <ExampleWrapper animate={demoStyling}>
      <Ul>
        <Li>
          <Amount>8</Amount>
          <Ingredient>large shiitake mushrooms</Ingredient>
        </Li>
        <Li>
          <Amount>1</Amount>
          <Ingredient>teaspoon light soy sauce</Ingredient>
        </Li>
        <Li>
          <Amount>
            1<Frac demoStyling={demoStyling}>1/4</Frac>
          </Amount>
          <Ingredient>tablespoon sesame oil</Ingredient>
        </Li>
        <Li>
          <Amount>
            <Frac demoStyling={demoStyling}>1/2</Frac>
          </Amount>
          <Ingredient>teaspoon sugar</Ingredient>
        </Li>
        <Li>
          <Amount>
            <Frac demoStyling={demoStyling}>1/8</Frac>
          </Amount>
          <Ingredient>teaspoon ground white pepper</Ingredient>
        </Li>
      </Ul>
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
