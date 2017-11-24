import React from "react";
import styled from "styled-components";
import Toggle from "../Toggle";
import { H3 } from "../Headings";
import CodeSnippet from "../CodeSnippet";

const HeadingControl = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: calc(var(--spacing-small) * -1);

  > * {
    margin: 0;
  }

  .baselineAlignment {
    padding-bottom: 0 0 var(--spacing-smaller) 0;
  }

  h3 {
    padding-bottom: var(--spacing-smaller);
  }

  fieldset {
    flex-shrink: 0;
  }
`;

const FeatureController = styled.div`
  > * {
    margin-top: var(--spacing-base);
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
          <H3>{title}</H3>
          <Toggle onChange={this.toggleFeatureDisplay} name={name} />
        </HeadingControl>

        {featureNode}
      </FeatureController>
    );
  }
}
