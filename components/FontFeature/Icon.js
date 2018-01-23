import React from "react";
import styled from "styled-components";
import { COLORS } from "../../utils/css-variables";

const Icon = ({ className }) => (
  <svg
    className={className}
    viewBox="-1 -1 18 18"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <desc>How to use this font feature.</desc>
    <g
      fill="transparent"
      stroke={COLORS.primary.base}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 16C12.42 16 16 12.42 16 8 16 3.58 12.42 0 8 0 3.58 0 0 3.58 0 8 0 12.42 3.58 16 8 16Z" />
      <path d="M8.26 9.28C8.46 8.92 8.77 8.61 9.13 8.39L9.28 8.3C9.81 7.97 10.25 7.45 10.36 6.83 10.42 6.53 10.41 6.21 10.34 5.88 10.14 4.95 9.36 4.2 8.42 4.04 6.91 3.78 5.6 4.94 5.6 6.4" />
      <path
        fill={COLORS.primary.base}
        stroke="none"
        d="M8 11C7.45 11 7 11.45 7 12 7 12.55 7.45 13 8 13 8.55 13 9 12.55 9 12 9 11.45 8.55 11 8 11"
      />
    </g>
  </svg>
);

const HelpIcon = styled(Icon)`
  width: 1rem;
  height: 1rem;
`;

export default HelpIcon;
