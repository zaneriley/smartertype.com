import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const A = styled.a`
  color: ${props =>
    props.color ? "var(--color-primary-base)" : "var(--color-primary-base)"};
  text-decoration: none;
`;

const Link = ({ className, children, href }) => (
  <A href={href} className={className}>
    {children}
  </A>
);

Link.PropTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  href: PropTypes.any
};

export default Link;
