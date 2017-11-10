import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import CopyToClipboard from "react-copy-to-clipboard";
import { COLORS } from "../../utils/css-variables";
import { H4 } from "../Headings";
import CopyIcon from "./Icon";

const Code = styled.div`
  position: relative;
  border-radius: var(--border-radius-base);
  width: 100%;

  & * {
    margin-top: 0;
  }
`;

const Pre = styled.pre`
  display: block;
  width: 100%;
  font-family: var(--font-family-mono);
  background-color: ${COLORS.neutral.lighter};
  border-radius: var(--border-radius-base);
  white-space: pre-wrap;
  -webkit-overflow-scrolling: touch;
  overflow-x: scroll;
  counter-reset: line;

  > span {
    display: table-row;
    margin-top: 0;

    &:before {
      counter-increment: line;
      content: counter(line);
      display: table-cell;
      padding: var(--spacing-smaller);
      border-right: var(--spacing-smaller) solid ${COLORS.neutral.lighter};
      background: ${COLORS.neutral.light};
      color: ${COLORS.neutral.darker};
      text-align: right;
      user-select: none;
    }
  }
`;

export const Line = props => (
  <span>
    <span>{props.children}</span>
  </span>
);

const CopyButton = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  padding: var(--spacing-small);

  & * {
    cursor: inherit;
  }

  & button {
    color: var(--color-primary-base);
    border: 0;
    background-color: transparent;
    user-select: none;
    cursor: pointer;
    -webkit-apperance: none;
    appearance: none;
  }
`;

class CodeSnippet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      copied: false
    };
  }

  render() {
    const { children } = this.props;

    function getText(rootChild) {
      let res = "";
      const rr = child => {
        if (typeof child === "string" || typeof child === "number") {
          res += child;
        } else if (Array.isArray(child)) {
          child.forEach(c => rr(c));
        } else if (child && child.props) {
          const { children } = child.props;

          if (Array.isArray(children)) {
            children.forEach(c => rr(c));
          } else {
            rr(children);
          }
        }
      };

      rr(rootChild);

      return res;
    }

    const text = getText(children);

    return (
      <Code>
        <Pre>{children}</Pre>
        <CopyButton>
          <CopyToClipboard
            text={text}
            onCopy={() => this.setState({ copied: true })}
          >
            <button>
              <H4>
                <CopyIcon /> {this.state.copied ? "Copied!" : "Copy"}
              </H4>
            </button>
          </CopyToClipboard>
        </CopyButton>
      </Code>
    );
  }
}

// For StoryBook
Object.assign(Code, {
  displayName: "CodeSnippet"
});

CodeSnippet.propTypes = {
  children: PropTypes.node
};

export default CodeSnippet;
