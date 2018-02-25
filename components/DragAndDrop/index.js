/**
 *
 * DragAndDrop
 *
 */

import React, { Component } from "react";
import styled from "styled-components";
import { DragDropContext, DropTarget } from "react-dnd";
import HTML5Backend, { NativeTypes } from "react-dnd-html5-backend";
import ItemTypes from "./Constants";
import TargetBox from "./TargetBox";
import FileList from "./FileList";
import DemoFont from "./DemoFont";
import { H4 } from "../Headings";

const opentype = require("opentype.js");

const DemoWrapper = styled.div`
  margin-top: var(--spacing-smaller);

  > * {
    margin: 0;
  }

  > *:first-child {
    margin-right: var(--spacing-smaller);
  }
`;

const getFeatureList = font => {
  const tags = new Set();
  const response = font.tables.gsub.features;

  response.map(feature => {
    tags.add(feature.tag);
  });

  const featureList = tags.values();

  console.log(font);
  /* TODO: Figure out how to get rid of the linting error on this. */
  for (let feature of featureList) {
    console.log(feature);
  }
};

@DragDropContext(HTML5Backend)
export default class Container extends Component {
  constructor(props) {
    super(props);
    this.state = { droppedFiles: [] };
  }

  render() {
    const { onChange } = this.props;
    const { FILE } = NativeTypes;
    const { droppedFiles } = this.state;

    return (
      <div>
        <TargetBox
          accepts={[FILE, ItemTypes.DEMOFONT]}
          onDrop={onChange}
          onChange={onChange}
        />
        <FileList files={droppedFiles} />
        <H4 color="var(--color-neutral-dark)">Try these fonts out</H4>
        <DemoWrapper>
          <DemoFont
            hideSourceOnDrag
            file="http://localhost:3000/static/fonts/source-sans-pro-regular.woff"
            filename="Source Serif Pro Bold"
            filetype="demofont"
          />
          <DemoFont
            hideSourceOnDrag
            file="http://localhost:3000/static/fonts/source-sans-pro-regular.woff"
            filename="Fira Mono Regular"
            filetype="demofont"
          />
        </DemoWrapper>
      </div>
    );
  }
}

Container.defaultProps = {
  hideSourceOnDrag: true
};
