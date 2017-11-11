import React from 'react';
import styled from "styled-components";
import { COLORS } from "../../utils/css-variables";

const Icon = ({ className }) =>
  <svg className={className} viewBox="0 0 15 15" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <desc>Copy to Clipbord</desc>
    <g transform="translate(1.000000, 1.000000)" stroke={COLORS.primary.base} strokeWidth="2" fill="none">
      <path d="M3.25,9.75 L1.3,9.75 C0.58175,9.75 0,9.16825 0,8.45 L0,1.3 C0,0.58175 0.58175,0 1.3,0 L8.45,0 C9.16825,0 9.75,0.58175 9.75,1.3 L9.75,3.25 L4.55,3.25 C3.83175,3.25 3.25,3.83175 3.25,4.55 L3.25,9.75 Z" id="Inside-Square" />
      <path d="M13,11.7 C13,12.41825 12.41825,13 11.7,13 L4.55,13 C3.83175,13 3.25,12.41825 3.25,11.7 L3.25,4.55 C3.25,3.83175 3.83175,3.25 4.55,3.25 L11.7,3.25 C12.41825,3.25 13,3.83175 13,4.55 L13,11.7 Z" id="Outside-Square" />
    </g>
  </svg>

const CopyIcon = styled(Icon)`
  width: 1em;
  height: 1em;
`;

export default CopyIcon;
