import React from "react";

const A = ({ isMuted, href, rel, target, onClick, children }) => (
  <a
    className={`g-link${isMuted ? " g-link--muted" : ""}`}
    href={href}
    rel={rel}
    target={target}
    onClick={onClick}
  >
    {children !== undefined ? (
      children
    ) : (
      <React.Fragment>Example text</React.Fragment>
    )}
  </a>
);

export default A;