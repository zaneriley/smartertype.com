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

  /* TODO: Figure out how to get rid of the linting error on this. */
  for (let feature of featureList) {
    console.log(feature);
  }
};

@DragDropContext(HTML5Backend)
export default class Container extends Component {
  constructor(props) {
    super(props);

    this.handleFileDrop = this.handleFileDrop.bind(this);
    this.handleFileUpload = this.handleFileUpload.bind(this);

    this.state = { droppedFiles: [] };
  }

  handleFileDrop(item, monitor) {
    if (monitor) {
      if (monitor.getItem().filetype === "demofont") {
        return console.log(monitor.getItem().files);
      }

      const droppedFiles = monitor.getItem().files;
      this.setState({ droppedFiles });

      const file = droppedFiles[0];

      let font = null;
      const reader = new FileReader();

      reader.onload = function(droppedFiles) {
        try {
          font = opentype.parse(droppedFiles.target.result);
          getFeatureList(font);
        } catch (err) {
          console.log(err);
        }
      };

      reader.onerror = function(err) {
        console.log(err);
      };

      reader.readAsArrayBuffer(file);
    }
  }

  handleFileUpload(e) {
    const file = e.target.files[0];

    let font = null;
    const reader = new FileReader();

    /* eslint-disable func-names, no-shadow */
    reader.onload = function(e) {
      /* eslint-enable */
      try {
        font = opentype.parse(e.target.result);
        getFeatureList(font);
      } catch (err) {
        console.log(err);
      }
    };

    reader.onerror = function(err) {
      console.log(err);
    };

    reader.readAsArrayBuffer(file);
  }

  render() {
    const { FILE } = NativeTypes;
    const { droppedFiles } = this.state;

    return (
      <div>
        <TargetBox
          accepts={[FILE, ItemTypes.DEMOFONT]}
          onDrop={this.handleFileDrop}
          onChange={this.handleFileUpload}
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
