import React from "react";
import styled from "styled-components";
import { BREAKPOINTS, TYPEUNITS, TYPESTYLES, TYPEFACES, COLORS, SHADOWS } from "../utils/css-variables";
import { H4 } from "./Headings.js";


const ToggleWrapper = styled.div`
  border: 1px solid ${COLORS.neutral.base};
  border-radius: var(--border-radius-base);
  overflow: hidden;

  legend + & {
    margin-top: var(--spacing-smaller);
  }
`;

const ToggleLabel = styled.label`

  & input {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }

  & > * {
    margin-top: 0;
  }

  & > span {
    display: inline-block;
    padding: var(--spacing-smaller);
    color: ${COLORS.primary.base};
  }
  
  & input:not(:checked) + span {
    background: ${COLORS.neutral.lightest};
  }

  & input:checked + span {
    background: ${COLORS.neutral.light};
    box-shadow: ${SHADOWS.inset};
  }

  * + & > span {
    border-left: 1px solid ${COLORS.neutral.base};
  }
`;

const ToggleItem = props => (
  <ToggleLabel>
    <input
      type="radio" 
      name="name" 
      value={props.label} />
    <span>
      <H4>{props.label}</H4>
    </span>
  </ToggleLabel>
);

const Fieldset = styled.fieldset`
  position: relative;
  display: inline-block;
  padding: 0;
  border: 0;
  vertical-align: middle;

  legend {
    color: var(--color-neutral-dark);
  }
`;

const Toggle = () => (
  <Fieldset>
    <legend>
      <H4>Display Options</H4>
    </legend>
    <ToggleWrapper>
      <ToggleItem label="OpenType" checked />
      <ToggleItem label="Browser" />
      <ToggleItem label="Reset" />
    </ToggleWrapper>
  </Fieldset>
);

export default Toggle;
