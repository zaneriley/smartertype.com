import React from "react";
import styled from "styled-components";
import { COLORS } from "../../utils/css-variables";

const Icon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 18 18"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <desc>How to use this font feature.</desc>
    <path
      fill={COLORS.primary.base}
      fillRule="nonzero"
      d="M10.1 10.8C9.9 11.3 9.3 11.4 8.8 11.2 8.3 10.9 8.1 10.3 8.4 9.8 8.7 9.3 9.1 8.9 9.6 8.5L9.7 8.5C10.1 8.2 10.3 7.9 10.4 7.6 10.4 7.5 10.4 7.3 10.4 7.1 10.3 6.6 9.8 6.1 9.3 6 8.4 5.9 7.6 6.5 7.6 7.4 7.6 8 7.2 8.4 6.6 8.4 6 8.4 5.6 8 5.6 7.4 5.6 5.3 7.5 3.7 9.6 4 10.9 4.3 12 5.3 12.3 6.7 12.4 7.1 12.4 7.6 12.3 8 12.2 8.9 11.6 9.7 10.8 10.2L10.7 10.2C10.4 10.4 10.2 10.6 10.1 10.8ZM9 18C4 18 0 14 0 9 0 4 4 0 9 0 14 0 18 4 18 9 18 14 14 18 9 18ZM9 16C12.9 16 16 12.9 16 9 16 5.1 12.9 2 9 2 5.1 2 2 5.1 2 9 2 12.9 5.1 16 9 16ZM9 12C8.4 12 8 12.4 8 13 8 13.6 8.4 14 9 14 9.6 14 10 13.6 10 13 10 12.4 9.6 12 9 12"
    />
  </svg>
);

const HelpIcon = styled(Icon)`
  width: 1rem;
  height: 1rem;
`;

export default HelpIcon;
