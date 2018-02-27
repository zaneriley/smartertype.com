import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { DragSource } from "react-dnd";
import ItemTypes from "./Constants";
import { H4 } from "../Headings";

const WrapperStyling = {
  position: "relative",
  display: "inline-block",
  cursor: "move",
  clipPath: "url(#bg)"
};

const DemoFontWrapper = styled.button`
  appearance: none;

  > * {
    margin-top: 0;
    color: white;
  }

  h4 {
    display: inline-flex;
    z-index: 1;
    padding: var(--spacing-smaller) var(--spacing-small);
  }

  svg {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 1px;
    pointer-events: none;
    fill: var(--color-primary-base);
  }
`;

export default class DemoFont extends React.Component {
  render() {
    const { file, filename, filetype } = this.props;

    return (
      <div style={WrapperStyling}>
        <DemoFontWrapper>
          <svg
            viewBox="0 0 209 27"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <defs>
              <path
                id="bg"
                d="M170.1 0C180.8 0 191.5 0.8 202.3 3.6 206.3 4.6 208.6 8.9 208.7 13.2 208.8 17.4 206.8 21.6 202.3 22.6 185.3 26.6 168.4 27.1 151.4 26.5 134.4 25.9 117.4 24.1 100.3 23.6 84.3 23.6 68 25.1 51.7 25.7 35.5 26.3 19.3 26 3.3 22.5 2.3 21.4 1.5 20.1 0.9 18.6 0.4 17.3 0.1 15.8 0.1 14.2 -0.3 10.9 0.7 8.1 2.6 5.9 4.5 3.7 7.3 2.1 10.3 1.6 26.8 1.6 43.6 0.9 60.3 0.5 77.1 0.1 93.8 0.1 110.3 1.6 125.9 2.6 141.1 1.1 156.4 0.4 161 0.2 165.6 0 170.1 0Z"
              />
            </defs>
            <g fill="none">
              <mask fill="white">
                <use xlinkHref="#bg" />
              </mask>
              <use xlinkHref="#bg" fill="#5849FE" />
            </g>
          </svg>
          <H4 center>{filename}</H4>
        </DemoFontWrapper>
      </div>
    );
  }
}

DemoFont.propTypes = {
  file: PropTypes.string.isRequired,
  filename: PropTypes.string.isRequired
};
