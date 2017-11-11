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
  text-align: ${props => props.center ? 'center' : 'left'};
  ${TYPESTYLES.largest};
`;

const Larger = styled.h2`
  display: flex;
  width: 100%;
  text-align: ${props => props.center ? 'center' : 'left'};
  ${TYPESTYLES.larger};
`;

const Large = styled.h3`
  display: flex;
  width: 100%;
  text-align: ${props => props.center ? 'center' : 'left'};
  ${TYPESTYLES.large};
`;

const Default = styled.p`
  display: flex;
  width: 100%;
  text-align: ${props => props.center ? 'center' : 'left'};
  ${TYPESTYLES.base};
`;

const Small = styled.h4`
  display: flex;
  width: 100%;
  text-align: ${props => props.center ? 'center' : 'left'};
  ${TYPESTYLES.small};
`;

export const H1 = ({ center, children })=> (
  <Largest center={center}>
    <OpticalAdjustment>{children}</OpticalAdjustment>
  </Largest>
);

export const H2 = ({ center, children })=> (
  <Larger center={center}>
    <OpticalAdjustment>{children}</OpticalAdjustment>
  </Larger>
);

export const H3 = ({ center, children })=> (
  <Large center={center}>
    <OpticalAdjustment>{children}</OpticalAdjustment>
  </Large>
);

export const P = ({ center, children })=> (
  <Default center={center}>
    <OpticalAdjustment>{children}</OpticalAdjustment>
  </Default>
);

export const H4 = ({ center, children })=> (
  <Small center={center}>
    <OpticalAdjustment>{children}</OpticalAdjustment>
  </Small>
);
