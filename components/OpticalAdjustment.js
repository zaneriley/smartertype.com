import React from "react";
import styled from "styled-components";

const OpticalAdjustment = styled.span`
  margin-top: calc((var(--computedLineHeight) - var(--fontSize)) / 2 * -1 - (var(--distanceTop) / 2 * 1em));
  margin-bottom: calc((var(--computedLineHeight) - var(--fontSize)) / 2 * -1 - (var(--distanceBottom) / 2 * 1em));
`;

export default OpticalAdjustment;
