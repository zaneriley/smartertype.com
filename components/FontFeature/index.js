import React from "react";
import styled from "styled-components";
import Toggle from "../Toggle";
import { H3 } from "../Headings";
import Link from "../Link";
import CodeSnippet from "../CodeSnippet";
import { BREAKPOINTS } from "../../utils/css-variables";

const HeadingControl = styled.div`
  display: flex;
  justify-content: space-between;
  grid-template-columns: auto-fit auto-fit;
  align-items: flex-end;
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
  }

  fieldset {
    flex-shrink: 0;
    white-space: nowrap;
  }

  * + fieldset {
    margin-top: var(--spacing-smaller);
  }

  @media screen and (min-width: ${BREAKPOINTS.large}px) {
    flex-wrap: nowrap;

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
  

  @media screen and (min-width: ${BREAKPOINTS.medium}px) and (pointer: fine) {


    a::before {
      position: absolute;
      display: block;
      left: calc(-1 * var(--column-gap-small));
      padding-right: calc(var(--column-gap-small) / 2);
      color: var(--color-neutral-dark);
      opacity: 0;
      margin: 0;
      transition: opacity 350ms linear;
      content: "#";
    }

    &:hover {
      a::before {
        opacity: 1;
        transition: opacity 200ms linear;
      }
    }

    &:active {
      a::before {
        color: var(--color-neutral-darker);
        transition: color 50ms linear;
      }
    }
  }
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
      showStyling: "opentype"
    };

    this.toggleFeatureDisplay = this.toggleFeatureDisplay.bind(this);
  }

  toggleFeatureDisplay(event) {
    this.setState({ showStyling: event.target.value });
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
    const { title, name, feature, code } = this.props;

    const featureNode = React.cloneElement(feature, {
      demoStyling: this.state.showStyling
    });

    return (
      <FeatureController>
        <HeadingControl>
          <AnchorHook>
            <H3 id={name}>
              <Link unstyled href={`#${name}`}>
                {title}
              </Link>
            </H3>
          </AnchorHook>
          <Toggle onChange={this.toggleFeatureDisplay} name={name} />
        </HeadingControl>

        {featureNode}
      </FeatureController>
    );
  }
}
