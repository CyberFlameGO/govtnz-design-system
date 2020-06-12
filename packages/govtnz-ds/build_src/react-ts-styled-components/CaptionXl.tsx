import React from "react";
import styled from "styled-components";

type Props = {
  children?: React.ReactNode;
};

const StyledSpan = styled.span`
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 400;
  font-size: 1.125rem;
  line-height: 1.11111;
  display: block;
  margin-bottom: 5px;
  color: #6f777b;
  @media print {
    font-family: sans-serif;
  }
  @media (min-width: 40.0625em) {
    font-size: 1.6875rem;
    line-height: 1.11111;
  }
  @media print {
    font-size: 18pt;
    line-height: 1.15;
  }
  margin-top: 0px;
`;

const CaptionXl = ({ children }: Props) => (
  <StyledSpan>
    {children !== undefined ? (
      children
    ) : (
      <React.Fragment>Example text</React.Fragment>
    )}
  </StyledSpan>
);

export default CaptionXl;
