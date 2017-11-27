import React, { Component } from "react";
import PropTypes from "prop-types";
import { DropTarget } from "react-dnd";
import styled from "styled-components";
import { P, H4, NoWrap } from "../Headings";

const style = {
  position: "relative",
  backgroundColor: "white",
  border: "4px dashed var(--color-primary-base)",
  borderRadius: "var(--border-radius-base)",
  padding: "var(--spacing-base)",
  textAlign: "center",
  overflow: "hidden"
};

const BrowseFiles = styled.input`
  position: absolute;
  /* stylelint-disable unit-blacklist */
  width: 1px;
  height: 1px;
  padding: 0;
  clip: rect(1px, 1px, 1px, 1px);
  border: 0;
  overflow: hidden;
  /* stylelint-enable unit-blacklist */
  & + label {
    cursor: pointer;
    font-weight: var(--font-weight-bold);
    color: var(--color-primary-base);
  }
`;

const SpaceWrapper = styled.div`
  > * + * {
    margin-top: var(--spacing-base);
  }

  h4 {
    color: var(--color-neutral-darker);
  }
`;

const FileIcon = () => (
  <svg
    width="98"
    height="128"
    viewBox="0 0 98 128"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <desc>File Upload Icon</desc>
    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <polygon
        id="fileBase"
        fill="#FFD4A3"
        points="0 0.0001215311 0 127.000122 97.694704 127.000122 97.694704 16.9722435 80.6402617 0.0001215311"
      />
      <polygon
        id="fileCorner"
        fill="#FFB969"
        points="80.5980393 0.0001215311 80.5980393 17.0144756 97.6949178 17.0144756"
      />
    </g>
  </svg>
);

const boxTarget = {
  drop(props, monitor) {
    if (props.onDrop) {
      props.onDrop(props, monitor);
    }
  }
};

@DropTarget(props => props.accepts, boxTarget, (connect, monitor) => ({
  connectDropTarget: connect.dropTarget(),
  isOver: monitor.isOver(),
  canDrop: monitor.canDrop()
}))
export default class TargetBox extends Component {
  static propTypes = {
    connectDropTarget: PropTypes.func.isRequired,
    isOver: PropTypes.bool.isRequired,
    canDrop: PropTypes.bool.isRequired,
    accepts: PropTypes.arrayOf(PropTypes.string).isRequired,
    onDrop: PropTypes.func
  };

  render() {
    const { canDrop, isOver, connectDropTarget } = this.props;
    const isActive = canDrop && isOver;

    return connectDropTarget(
      <div style={style}>
        <SpaceWrapper>
          <P inline>
            {isActive ? (
              "Release to drop"
            ) : (
              <span>
                Drag and drop here
                <NoWrap>
                  {" "}
                  or
                  <BrowseFiles type="file" name="file" id="file" />{" "}
                  <label htmlFor="file">browse your files.</label>
                </NoWrap>
              </span>
            )}
          </P>
          <H4 center>.otf .woff .woff2</H4>
        </SpaceWrapper>
      </div>
    );
  }
}
