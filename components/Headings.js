import React from "react";
import styled from "styled-components";
import {
  BREAKPOINTS,
  TYPEUNITS,
  TYPESTYLES,
  TYPEFACES,
  COLORS
} from "../utils/css-variables";
import OpticalAdjustment from "./OpticalAdjustment";

const Largest = styled.h1`
  display: flex;
  width: 100%;
  ${TYPEFACES.sourceSerifPro} ${TYPESTYLES.largest};
`;

const Larger = styled.h2`
  display: flex;
  width: 100%;
  ${TYPEFACES.sourceSerifPro} ${TYPESTYLES.larger};
`;

const Large = styled.h3`
  display: flex;
  width: 100%;
  ${TYPESTYLES.large} ${TYPEFACES.sourceSansPro};
`;

const Default = styled.p`
  display: flex;
  width: 100%;
  ${TYPESTYLES.base} ${TYPEFACES.sourceSansPro};
`;

const Small = styled.h4`
  display: flex;
  width: 100%;
  ${TYPESTYLES.small} ${TYPEFACES.sourceSansPro};
`;

export const H1 = props => (
  <Largest>
    <OpticalAdjustment>{props.children}</OpticalAdjustment>
  </Largest>
);

export const H2 = props => (
  <Larger>
    <OpticalAdjustment>{props.children}</OpticalAdjustment>
  </Larger>
);

export const H3 = props => (
  <Large>
    <OpticalAdjustment>{props.children}</OpticalAdjustment>
  </Large>
);

export const P = props => (
  <Default>
    <OpticalAdjustment>{props.children}</OpticalAdjustment>
  </Default>
);

export const H4 = props => (
  <Small>
    <OpticalAdjustment>{props.children}</OpticalAdjustment>
  </Small>
);
