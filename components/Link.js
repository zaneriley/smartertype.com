import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const A = styled.a`
  color: ${props =>
    !props.color && !props.unstyled ? "var(--color-primary-base)" : "inherit"};
  text-decoration: none;
  outline: none;
`;

const Link = ({ className, children, href, rel, target, unstyled }) => (
  <A
    href={href}
    rel={rel ? "noopener" : null}
    target={target}
    className={className}
    unstyled={unstyled}
  >
    {children}
  </A>
);

Link.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  href: PropTypes.any,
  rel: PropTypes.bool,
  target: PropTypes.string,
  unstyled: PropTypes.bool
};

export default Link;
