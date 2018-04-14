import React, { Component } from "react";
import PropTypes from "prop-types";
import { DropTarget } from "react-dnd";
import styled from "styled-components";

import { P, H4, NoWrap } from "../Headings";
import { dash } from "../Animations";

const style = {
  position: "relative",
  backgroundColor: "white",
  borderRadius: "var(--border-radius-base)",
  padding: "var(--spacing-large)",
  marginBottom: "var(--spacing-base)",
  textAlign: "center",
  overflow: "hidden",
  zIndex: "var(--z-base)"
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
    z-index: var(--z-top);
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

const Svg = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  width: 100%;
  height: 100%;
  z-index: var(--z-bottom);
`;

const Rect = styled.rect`
  stroke: var(--color-primary-base);
  stroke-width: var(--spacing-smaller);
  stroke-dasharray: 7;
  fill: none;
  transition: stroke-dashoffset 300ms ease;
  width: 100%;
  height: 100%;

  ${props =>
    props.isActive
      ? `
    animation: ${dash} 30s linear infinite;
  `
      : ``};
`;

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
    const { canDrop, isOver, onChange, connectDropTarget } = this.props;
    const isActive = canDrop && isOver;

    return connectDropTarget(
      <div style={style}>
        <SpaceWrapper>
          <P inline center>
            {isActive ? (
              <span>
                Release to drop<br />
                <br />
              </span>
            ) : (
              <span>
                Drag and drop here
                <NoWrap>
                  {" "}
                  or
                  <BrowseFiles
                    type="file"
                    name="file"
                    id="file"
                    accept=".woff,.otf,.ttf"
                    onChange={onChange}
                  />{" "}
                  <label htmlFor="file">browse your files.</label>
                </NoWrap>
              </span>
            )}
          </P>
          <H4 center>
            .otf, .ttf, .woff<br />
          </H4>
        </SpaceWrapper>
        <Svg viewBox="0 0 100 100" preserveAspectRatio="none">
          <Rect vectorEffect="non-scaling-stroke" isActive={isActive} />
        </Svg>
      </div>
    );
  }
}
