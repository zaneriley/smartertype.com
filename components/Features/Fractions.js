import React from "react";
import styled from "styled-components";
import { P, H4, Li } from "../Headings";
import Link from "../Link";
import CodeSnippet, { Line } from "../CodeSnippet";
import ExampleWrapper from "../FontFeature/ExampleWrapper";

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

// If toggle value = opentype feature
// else if toggle value = browser
// else if toggle value = reset
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
      <Line indent>font-variant-numeric: diagonal-fractions;</Line>
      <Line>{`}`}</Line>
    </CodeSnippet>
  </Wrapper>
);

export default Fractions;
