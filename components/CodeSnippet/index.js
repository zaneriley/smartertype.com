import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import CopyToClipboard from "react-copy-to-clipboard";
import getFontSize from "../../utils/typography/font-size";
import { COLORS, TYPEFACES } from "../../utils/css-variables";
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
  ${getFontSize(0, TYPEFACES.sourceCodePro)};
  background-color: ${COLORS.neutral.lighter};
  border-radius: var(--border-radius-base);
  white-space: pre-wrap;
  -webkit-overflow-scrolling: touch;
  counter-reset: line;
  overflow: hidden;

  > span {
    display: table-row;
    margin-top: 0;

    &:before {
      counter-increment: line;
      content: counter(line);
      display: table-cell;
      padding: var(--spacing-smaller) var(--spacing-smaller) 0
        var(--spacing-smaller);
      border-right: var(--spacing-small) solid ${COLORS.neutral.lighter};
      background: ${COLORS.neutral.light};
      color: ${COLORS.neutral.darker};
      text-align: right;
      user-select: none;
    }

    > span {
      padding-right: var(--spacing-small);
    }
  }

  > span:last-child:before {
    padding-bottom: var(--spacing-smaller);
  }
`;

const StyledLine = styled.span`
  ${props =>
    props.indent
      ? `
    display: block;
    text-indent: 0;
    margin-left: 2ch;
    color: var(--color-primary-base);
  `
      : ``};
`;

export const Line = ({ indent, className, children }) => (
  <span>
    <StyledLine indent={indent} className={className}>
      {children}
    </StyledLine>
  </span>
);

const CopyButton = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  margin: var(--spacing-smallest);
  user-select: none;
  cursor: pointer;
  color: var(--color-primary-base);
  background-color: transparent;

  > button {
    padding: var(--spacing-small) var(--spacing-small);
    border: 0;
    color: inherit;
    background-color: transparent;
    -webkit-appearance: none;
    appearance: none;
  }

  * {
    cursor: inherit;
  }

  span {
    display: flex;
  }

  svg {
    margin-right: 1ch;
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
