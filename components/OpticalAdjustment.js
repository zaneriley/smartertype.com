import React from "react";
import styled from "styled-components";

const OpticalAdjustment = styled.span`
  margin-top: calc(var(--distanceTop) * -1em);
  margin-bottom: calc(var(--distanceBottom) * -1em);
  vertical-align: calc(var(--valign) * -1px);
`;

export default OpticalAdjustment;