import React from "react";
import styled from "styled-components";

const OpticalAdjustment = styled.span`
  margin-top: calc(((var(--computedLineHeight) / 2  * -1) - (var(--capital-height) * -1px)) + (var(--distanceTop) * -1em - 1px) + 1px);
  margin-bottom: calc(((var(--computedLineHeight) / 2  * -1) - (var(--capital-height) * -1px)) + (var(--distanceBottom) * -1em - 1px) + 1px);
  vertical-align: calc(var(--valign) * -1px);
`;

export default OpticalAdjustment;