import React from "react";
import styled from "styled-components";
import { Sidebar } from "./Grid";
import { COLORS } from "../utils/css-variables";

const StyledHR = styled.div`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  grid-gap: var(--spacing-base);
  align-items: center;
  width: 100%;
  margin: var(--spacing-large) 0;
  color: var(--color-neutral-dark);
  user-select: none;

  &:before,
  &:after {
    display: block;
    width: 100%;
    height: 1px;
    background-color: var(--color-neutral-base);
    content: "";
  }
`;

function returnHR(wide) {
  if (wide) {
    return <StyledHR>§</StyledHR>;
  }
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="55"
      height="6"
      viewBox="0 140 55 6"
      version="1.1"
    >
      <path
        fill={COLORS.primary.base}
        d="M44.84 140C47.65 140 50.47 140.19 53.32 140.82 54.38 141.04 54.97 142.01 55 142.97 55.02 143.92 54.5 144.86 53.32 145.08 48.85 145.98 44.38 146.09 39.91 145.95 35.42 145.81 30.93 145.42 26.44 145.3 22.21 145.3 17.92 145.64 13.63 145.78 9.36 145.91 5.08 145.84 0.87 145.04 0.6 144.8 0.39 144.51 0.24 144.18 0.1 143.88 0.02 143.54 0.02 143.18 -0.08 142.45 0.2 141.81 0.69 141.32 1.19 140.82 1.92 140.48 2.72 140.37 7.07 140.37 11.48 140.2 15.9 140.11 20.31 140.03 24.73 140.03 29.07 140.37 33.17 140.59 37.2 140.25 41.23 140.08 42.43 140.03 43.64 140 44.84 140Z"
      />
    </svg>
  );
}

export const HorizontalRule = ({ wide, className }) => {
  return returnHR(wide);
};

export default HorizontalRule;
