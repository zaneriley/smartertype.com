import React from "react";
import { Line } from "../CodeSnippet";

export default function codeDisplayOptions(demoStyling, opentype, reset) {
  switch (demoStyling) {
    case "opentype":
      return opentype;
    case "browser":
      return [
        <Line indent>{`/* This is your browser's default styling */`}</Line>
      ];
    default:
      return reset;
  }
}
