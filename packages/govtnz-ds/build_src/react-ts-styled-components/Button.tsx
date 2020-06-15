import React from "react";
import styled from "styled-components";

type Props = {
  disabled?: boolean;
  level: "secondary" | "warning";
  name?: string;
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>["type"];
  onClick?: React.ButtonHTMLAttributes<HTMLButtonElement>["onClick"];
  children?: React.ReactNode;
};

const StyledButton = styled.button<Pick<Props, "level">>`
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.2;
  box-sizing: border-box;
  display: inline-block;
  position: relative;
  width: 100%;
  margin-top: 0;
  margin-bottom: 22px;
  padding: 16px;
  border: 2px solid transparent;
  border-radius: 4px;
  color: #ffffff;
  background-color: #00823b;
  box-shadow: 0 2px 0 0 #2a2a2a;
  text-align: center;
  vertical-align: top;
  cursor: pointer;
  -webkit-appearance: none;
  @media print {
    font-family: sans-serif;
  }
  @media (min-width: 40.0625em) {
    font-size: 1.1875rem;
    line-height: 1;
  }
  @media print {
    font-size: 14pt;
    line-height: 19px;
  }
  :focus {
    outline: 3px solid #b53cde;
    outline-offset: 0;
  }
  @media (min-width: 40.0625em) {
    margin-bottom: 32px;
  }
  @media (min-width: 40.0625em) {
    width: auto;
  }
  :link,
  :visited,
  :active,
  :hover {
    color: #ffffff;
    text-decoration: none;
  }
  ::-moz-focus-inner {
    padding: 0;
    border: 0;
  }
  :hover,
  :focus {
    background-color: #00692f;
  }
  :active {
    top: 2px;
    box-shadow: none;
  }
  ::before {
    content: "";
    display: block;
    position: absolute;
    top: -2px;
    right: -2px;
    bottom: -4px;
    left: -2px;
    background: transparent;
  }
  :active::before {
    top: -4px;
  }
  opacity: 0.5;
  background: #00823b;
  :hover,
  :hover {
    background-color: #00823b;
    cursor: default;
  }
  :focus,
  :focus {
    outline: none;
  }
  :active,
  :active {
    top: 0;
    box-shadow: 0 2px 0 #003618;
  }
  padding-top: 16px;
  padding-bottom: 16px;
  margin-top: 0px;
  opacity: 0.5;
  background: #078766;
  :hover,
  :hover {
    background-color: #078766;
    cursor: default;
  }
  :focus,
  :focus {
    outline: none;
  }
  :active,
  :active {
    top: 0;
    box-shadow: 0 2px 0 #003418;
  }
  ${props =>
    props.level === "secondary" &&
    styled.css`
      background-color: #d3d3d3;
      box-shadow: 0 2px 0 #2a2a2a;
    `}
  :link,:visited,:active,:hover {
    ${props =>
      props.level === "secondary" &&
      styled.css`
        color: #0b0c0c;
      `}
  }
  :hover,
  :focus {
    background-color: #b2b2b2;
  }
  ${props =>
    props.level === "warning" &&
    styled.css`
      background-color: #b10e1e;
      box-shadow: 0 2px 0 #2a2a2a;
    `}
  :link,:visited,:active,:hover {
    ${props =>
      props.level === "warning" &&
      styled.css`
        color: #ffffff;
      `}
  }
  :hover,
  :focus {
    background-color: #900815;
  }
`;

const Button = ({ disabled, level, name, type, onClick, children }: Props) => (
  <StyledButton
    disabled={disabled}
    level={level}
    type={type}
    name={name}
    onClick={onClick}
  >
    {" "}
    {children !== undefined ? (
      children
    ) : (
      <React.Fragment> Example text </React.Fragment>
    )}{" "}
  </StyledButton>
);

export default Button;