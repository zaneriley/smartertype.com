import React from "react";
import styled from "styled-components";
import { COLORS } from "../../utils/css-variables";
import { H4 } from "../Headings";
import CopyIcon from "./Icon";

const ButtonWrapper = ({ className }) => (
  <button className={className}>
    <H4>
      <CopyIcon /> Copy
    </H4>
  </button>
);

const CopyButton = styled(ButtonWrapper)`
  position: absolute;
  right: 0;
  bottom: 0;
  padding: var(--spacing-small);
  border: 0;
  background-color: transparent;
  user-select: none;
  cursor: pointer;
  -webkit-apperance: none;
  appearance: none;

  & * {
    cursor: inherit;
  }
`;

export default CopyButton;
