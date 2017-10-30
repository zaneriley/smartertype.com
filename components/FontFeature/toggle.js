import React from "react";
import styled from "styled-components";
import { H4 } from "../Headings.js";

const ToggleItem = props => (
  <label>
    <input type="radio" />
    <span>
      <H4>{props.children}</H4>
    </span>
  </label>
);

const Toggle = () => (
  <fieldset>
    <legend>Display Options</legend>
    <ToggleItem>OpenType</ToggleItem>
    <ToggleItem>Browser</ToggleItem>
    <ToggleItem>Reset</ToggleItem>
  </fieldset>
);

export default Toggle;
