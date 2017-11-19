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

  sup {
    all: unset;
    font-variant-position: super;
    font-feature-settings: "sups";
    line-height: 1;
    font-weight: var(--font-weight-bold);

    a::before,
    a::after {
      display: inline;
    }

    a::before {
      content: "(";
    }

    a::after {
      content: ")";
    }
  }
`;

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

    const option = event.target.value;
 
    if (option === "opentype") {
      console.log("opentype");
    }
  }

  render() {
    const { title, name, example, code } = this.props;

    return (
      <FeatureController>
        <HeadingControl>
          <H3>{title}</H3>
          <Toggle onChange={this.toggleFeatureDisplay} name={name} />
        </HeadingControl>

        {example}

        <CodeSnippet>{code}</CodeSnippet>
      </FeatureController>
    );
  }
}
