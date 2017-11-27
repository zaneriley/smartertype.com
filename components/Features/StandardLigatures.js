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

const LigGrid = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: var(--spacing-base);
  align-items: center;
  border: 1px solid var(--color-neutral-base);
  border-radius: var(--border-radius-base);
  color: var(--color-neutral-darker);

  > * {
    margin-top: 0;
  }

  > * + * {
    border-left: 1px solid var(--color-neutral-base);
    padding: var(--spacing-small) 0;
  }
`;

// If toggle value = opentype feature
// else if toggle value = browser
// else if toggle value = reset
const StandardLigatures = ({ demoStyling }) => (
  <Wrapper demoStyling={demoStyling}>
    <ExampleWrapper animate={demoStyling}>
      <P>
        A scruffy marmot often finds cactus flowers offtrack. Spectacular
        mysteries sends stories of doom unraveling. The beetle scuttled across a
        milkweed leaf, its aeneous body like a golden shield.<br />
      </P>
      <LigGrid>
        <P center large>
          ft
        </P>{" "}
        <P center large>
          fi
        </P>{" "}
        <P center large>
          fj
        </P>{" "}
        <P center large>
          fl
        </P>{" "}
        <P center large>
          ff
        </P>{" "}
        <P center large>
          ffi
        </P>{" "}
        <P center large>
          ffj
        </P>{" "}
        <P center large>
          ffl
        </P>{" "}
        <P center large>
          st
        </P>{" "}
        <P center large>
          ae
        </P>{" "}
        <P center large>
          oo
        </P>
      </LigGrid>
    </ExampleWrapper>
    <CodeSnippet>
      <Line>{`p {`}</Line>
      <Line indent>font-variant-ligatures: common-ligatures;</Line>
      <Line>{`}`}</Line>
    </CodeSnippet>
  </Wrapper>
);

export default StandardLigatures;
