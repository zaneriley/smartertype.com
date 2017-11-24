import React from "react";
import styled, { keyframes } from "styled-components";

export const rerenderNotification = keyframes`
  from {
    opacity: 0.65;
  }

  100% {
    opacity: 0;
    transform: scale(1.01, 1.025)
  }
`;
