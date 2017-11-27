import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { COLORS, SHADOWS } from "../utils/css-variables";
import { H4 } from "./Headings";

const ToggleWrapper = styled.div`
  border: 1px solid ${COLORS.neutral.base};
  border-radius: var(--border-radius-base);
  overflow: hidden;
  user-select: none;

  legend + & {
    margin-top: var(--spacing-smaller);
  }

  > * {
    width: 33%;
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
    display: inline-flex;
    width: 33%;
    min-width: min-content;
    height: var(--spacing-base);
    align-items: center;
    padding-right: var(--spacing-small);
    padding-left: var(--spacing-small);
    text-align: center;
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

const ToggleItem = ({ name, label, value }) => (
  <ToggleLabel>
    <input
      type="radio"
      name={name}
      value={value}
      defaultChecked={value === "opentype"}
    />
    <span>
      <H4 center>{label}</H4>
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

export default class Toggle extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { name, onChange } = this.props;

    return (
      <Fieldset onClick={onChange}>
        <legend>
          <H4>Display Options</H4>
        </legend>
        <ToggleWrapper>
          <ToggleItem
            label="OpenType"
            name={name}
            value="opentype"
            defaultChecked
          />
          <ToggleItem label="Browser" name={name} value="browser" />
          <ToggleItem label="Reset" name={name} value="reset" />
        </ToggleWrapper>
      </Fieldset>
    );
  }
}

Toggle.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func
};

ToggleItem.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
};
