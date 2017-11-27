import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { H4 } from "../Headings";

/* TODO: Figure out the display conflicts that's preventing 
 * the SVG from resizing properly. 
 */
const DemoFontWrapper = styled.div`
  position: relative;
  display: inline-block;
  margin-top: var(--spacing-small);
  padding: 0 var(--spacing-base);
  height: var(--spacing-base);

  > * {
    margin-top: 0;
    color: white;
  }

  h4 {
    display: inline-flex;
    z-index: 1;
  }

  svg {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    width: 100%;
    height: 100%;
    pointer-events: none;
    fill: var(--color-primary-base);
  }
`;

const DemoFont = ({ file, filename }) => (
  <DemoFontWrapper>
    <svg
      view-box="0 0 209 27"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <path d="M170.1452,0 L170.1622,0 C180.8152,0 191.5022,0.844 202.3152,3.634 C206.3452,4.642 208.5982,8.949 208.6922,13.231 C208.7852,17.449 206.7812,21.643 202.3152,22.635 C185.3492,26.627 168.3842,27.132 151.4192,26.513 C134.3852,25.892 117.3502,24.136 100.3152,23.635 C84.2831996,23.635 68.0011996,25.141 51.7191996,25.74 C35.5001996,26.337 19.2811996,26.035 3.3101996,22.45 C2.2931996,21.389 1.4681996,20.093 0.9051996,18.631 C0.3841996,17.275 0.0891996,15.775 0.0771996,14.188 C-0.3018004,10.933 0.7411996,8.06 2.6231996,5.871 C4.5301996,3.654 7.2951996,2.138 10.3151996,1.635 C26.8191996,1.635 43.5731996,0.884 60.3261996,0.51 C77.0721996,0.135 93.8191996,0.135 110.3152,1.635 C125.8582,2.637 141.1492,1.126 156.4412,0.378 C161.0052,0.155 165.5732,0 170.1452,0 Z" />
    </svg>
    <H4 center>{filename}</H4>
  </DemoFontWrapper>
);

export default DemoFont;
