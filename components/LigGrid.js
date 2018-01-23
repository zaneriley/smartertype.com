import React from "react";
import styled from "styled-components";
import { P } from "./Headings";

const LigWrapper = styled.div`
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

const LigGrid = ({ characters }) => (
  <LigWrapper>
    {characters.map(character => (
      <P center large key={character}>
        {character}
      </P>
    ))}
  </LigWrapper>
);

export default LigGrid;
