import React from "react";
import styled from "styled-components";
import Toggle from "../Toggle";
import { H3, P } from "../Headings";
import Link from "../Link";
import CodeSnippet, { Line } from "../CodeSnippet";

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

/* TODO: Just get the feature toggle to console log it's value on press 
 * using the parent FontFeature component. (this one)
 * 
 * After you get that done, you should get the <SuperiorFigure /> component
 * to dynamically update it's styles based off props and styled components. 
 * 
 * React's docs on Forms are pretty good, so if you get lost just look at those.
 * 
 * PS: Don't commit your code until it's in a working state. 
 *     Right now the app is broken.
 */
export default class FontFeature extends React.Component {
  constructor() {
    super();

    this.state = {
      isOpenType: true
    };
  }

  toggleFeatureDisplay(value) {
    this.setState({
      isOpenType: !this.state.isOpenType
    });

    console.log(`The toggle value was ${value}`);
  }

  render() {

    return (
      <FeatureController>
        <HeadingControl>
          <H3>Kerning</H3> <Toggle onChange={this.toggleFeatureDisplay} />
        </HeadingControl>

        <P>
          Dijkstra’s algorithm is an algorithm for finding the shortest paths
          between nodes in a graph, which may represent, for example, road
          networks.
          <sup>
            <Link href="#">1</Link>
          </sup>{" "}
          It was conceived by computer scientist Edsger W. Dijkstra in 1956 and
          published three years later.<sup>
            <Link href="#">2</Link>
          </sup>
        </P>
        <CodeSnippet>
          <Line>{`blockquote {`}</Line>
          <Line indent>hanging-puntuation: first allow-end;</Line>
          <Line>{`}`}</Line>
        </CodeSnippet>
      </FeatureController>
    );
  }
}
