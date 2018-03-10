import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Toggle from "../Toggle";
import { H3, P } from "../Headings";
import HelpIcon from "./Icon";
import { BREAKPOINTS } from "../../utils/css-variables";

const HeadingControl = styled.div`
  --control-gap: var(--spacing-base);

  display: grid;
  justify-content: space-between;
  grid-template-columns: auto-fit auto-fit;
  align-items: stretch;
  margin-top: calc(var(--spacing-small) * -1);
  flex-wrap: wrap;
  grid-template-columns: repeat(2, 1fr);
  grid-row-gap: var(--control-gap);

  > * {
    margin: 0;
  }

  .baselineAlignment {
    padding-bottom: 0 0 var(--spacing-smaller) 0;
  }

  h3 {
    padding-bottom: var(--spacing-smaller);
    white-space: nowrap;

    svg {
      margin-left: var(--spacing-small);
    }
  }

  fieldset {
    flex-shrink: 0;
    white-space: nowrap;
  }

  @media screen and (min-width: ${BREAKPOINTS.large}px) {
    > * {
      margin: 0;
    }
  }

  @media screen and (max-width: ${BREAKPOINTS.large}px) {
    > * {
      width: 100%;
    }
    fieldset {
      grid-column: span 2;
      order: 2;
    }
  }
`;

const FeatureController = styled.div`
  > * + * {
    margin-top: var(--spacing-base);
  }
`;

const AnchorHook = styled.span`
  position: relative;
  display: flex;
  align-items: flex-end;
  z-index: 1;

  input {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }

  & input:checked + div {
    position: relative;
    display: block;
    background-color: var(--color-accent-light);
    padding: var(--spacing-small) var(--spacing-small) 0;
    border-radius: var(--border-radius-base) var(--border-radius-base) 0 0;
    margin-left: calc(var(--spacing-small) * -1);

    & svg path {
      fill: var(--color-accent-dark);
    }

    &::after {
      position: absolute;
      display: block;
      bottom: 0;
      left: 0;
      width: 100%;
      height: var(--spacing-smaller);
      background-color: inherit;
      transform: translateY(100%);
      content: "";
      z-index: -1;
    }
  }

  label {
    cursor: pointer;
  }

  @media screen and (min-width: ${BREAKPOINTS.medium}px) and (pointer: fine) {
    a {
      position: absolute;
      display: block;
      top: 0;
      left: calc(-1 * var(--column-gap-small));
      padding-right: calc(var(--column-gap-small) / 2);
      color: var(--color-neutral-dark);
      opacity: 0;
      margin: 0;
      transition: opacity 350ms linear;
    }

    &:hover {
      a {
        opacity: 1;
        transition: opacity 200ms linear;
      }
    }

    &:active {
      a {
        color: var(--color-neutral-darker);
        transition: color 50ms linear;
      }
    }
  }
`;

const DescriptionPanel = styled.div`
  // using content-box because we want the padding to go outside the main content bounds.
  box-sizing: content-box;
  position: relative;
  grid-column: span 2;
  padding: calc(var(--spacing-small) + var(--spacing-smaller))
    var(--spacing-small);
  margin: calc(-1 * var(--control-gap) + var(--spacing-smaller))
    calc(var(--spacing-small) * -1) 0;
  border-radius: 0 var(--border-radius-base) var(--border-radius-base)
    var(--border-radius-base);
  background-color: var(--color-accent-lighter);
`;

const fontFeatureMachine = {
  opentype: {
    browser: "browser",
    reset: "reset"
  },
  browser: {
    opentype: "opentype",
    reset: "reset"
  },
  reset: {
    browser: "browser",
    opentype: "opentype"
  }
};

export default class FontFeature extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showStyling: "opentype",
      showDefinition: false
    };

    this.toggleFeatureDisplay = this.toggleFeatureDisplay.bind(this);
    this.toggleDefinitionDisplay = this.toggleDefinitionDisplay.bind(this);
  }

  transition(action) {
    const currentappState = this.state.showStyling;
    const nextappState = fontFeatureMachine[currentappState][action];

    if (nextappState) {
      const nextState = this.command(nextappState, action);
      this.setState({
        showStyling: nextappState
      });
    }
  }

  /* eslint-disable consistent-return, class-methods-use-this */
  command(nextState, action) {
    switch (nextState) {
      case "opentype": {
        const showStyling = "opentype";
        return showStyling;
      }
      case "browser": {
        const showStyling = "browser";
        return showStyling;
      }
      case "reset": {
        const showStyling = "reset";
        return showStyling;
      }
      default: {
        const showStyling = "opentype";
        return showStyling;
      }
    }
  }

  toggleFeatureDisplay(event) {
    this.transition(event.target.value);
  }

  toggleDefinitionDisplay() {
    this.setState({ showDefinition: !this.state.showDefinition });
  }

  renderStyling() {
    return this.state.showStyling;
  }

  render() {
    const { title, name, description, feature } = this.props;

    const featureNode = React.cloneElement(feature, {
      demoStyling: this.state.showStyling
    });

    // TODO：Make the feature title clickable so that it opens a toggle
    return (
      <FeatureController>
        <HeadingControl>
          <AnchorHook>
            <label>
              <input
                type="checkbox"
                value="toggle"
                onChange={this.toggleDefinitionDisplay}
                checked={this.state.showDefinition}
                name={name}
              />
              <div>
                <H3 id={name}>
                  {title}
                  <HelpIcon />
                </H3>
              </div>
            </label>
          </AnchorHook>
          <Toggle onChange={this.toggleFeatureDisplay} name={name} />
          {this.state.showDefinition === true > 0 && (
            <DescriptionPanel>
              <P>{description}</P>
            </DescriptionPanel>
          )}
        </HeadingControl>
        {featureNode}
      </FeatureController>
    );
  }
}

FontFeature.propTypes = {
  description: PropTypes.string.isRequired,
  feature: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};
