import React from "react";
import styled, { keyframes } from "styled-components";

export const rerenderNotification = keyframes`
  from {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`;

export const dash = keyframes`
  to {
    stroke-dashoffset: -1000;
  }
`;
