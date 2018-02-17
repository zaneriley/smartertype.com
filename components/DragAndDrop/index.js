/**
 *
 * DragAndDrop
 *
 */

import React, { Component } from "react";
import styled from "styled-components";
import { DragDropContext, DropTarget } from "react-dnd";
import HTML5Backend, { NativeTypes } from "react-dnd-html5-backend";
var opentype = require("opentype.js");
import ItemTypes from "./Constants";
import TargetBox from "./TargetBox";
import FileList from "./FileList";
import DemoFont from "./DemoFont";
import { H4 } from "../Headings";

const DemoWrapper = styled.div`
  margin-top: var(--spacing-smaller);

  > * {
    margin: 0;
  }

  > *:first-child {
    margin-right: var(--spacing-smaller);
  }
`;

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
        return console.log("im smart mom");
      }
      const droppedFiles = monitor.getItem().files;
      this.setState({ droppedFiles });
    }
  }

  handleFileUpload(e) {
    let file = e.target.files[0];
    console.log(file);
    let font = null;
    let reader = new FileReader();
    let fontFileName = null;

    reader.onload = function(e) {
      try {
        font = opentype.parse(e.target.result);

        const tags = new Set();
        const response = font.tables.gsub.features;

        response.forEach(item => {
          tags.add(item.tag);
        });

        for (let item of tags.values()) {
          console.log(item);
        }
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
            hideSourceOnDrag={true}
            file="http://localhost:3000/static/fonts/source-sans-pro-regular.woff"
            filename="Source Serif Pro Bold"
            filetype="demofont"
          />
          <DemoFont
            hideSourceOnDrag={true}
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
