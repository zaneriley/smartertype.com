import React from "react";
import styled from "styled-components";
import Toggle from "../Toggle";
import { H3, H4, P } from "../Headings";
import Link from "../Link";
import HelpIcon from "./Icon";
import { BREAKPOINTS } from "../../utils/css-variables";

const HeadingControl = styled.div`
  display: flex;
  justify-content: space-between;
  grid-template-columns: auto-fit auto-fit;
  align-items: stretch;
  margin-top: calc(var(--spacing-small) * -1);
  flex-wrap: wrap;

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
  position: relative;
  background-color: var(--color-accent-lighter);
  padding: calc(var(--spacing-small) + var(--spacing-smaller))
    var(--spacing-small);
  margin: var(--spacing-smaller) calc(var(--spacing-small) * -1) 0;
  border-radius: 0 var(--border-radius-base) var(--border-radius-base)
    var(--border-radius-base);
`;
/* TODO: Figure out the right way to wire this component's state to 
 * the specific font feature's styling.
 * 
 * After that, loop through all the font features in a separate 
 * component so that we can check which features a font supports, 
 * and just display those.
 * 
 */
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

  toggleFeatureDisplay(event) {
    this.setState({ showStyling: event.target.value });
  }

  toggleDefinitionDisplay(event) {
    this.setState({ showDefinition: !this.state.showDefinition });
  }

  renderStyling() {
    if (this.state.showStyling === "opentype") {
      return "opentype";
    } else if (this.state.showStyling === "browser") {
      return "browser";
    }
    return "reset";
  }

  render() {
    const { title, name, description, feature, code } = this.props;

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
