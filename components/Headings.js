import styled from "styled-components";

const variables = require("../utils/css-variables.js");

export const H1 = styled.h1`
  font-family: var(--font-family-serif);
  ${variables.TYPESTYLES.largest}
`;
export const H2 = styled.h2`${variables.TYPESTYLES.larger};`;
export const H3 = styled.h3`${variables.TYPESTYLES.large};`;
export const H4 = styled.h3`${variables.TYPESTYLES.small};`;
