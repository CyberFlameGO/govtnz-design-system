import React from "react";
import styled from "styled-components";

type Props = {
  width?: "30" | "20" | "10" | "5" | "4" | "3" | "2";
  error?: boolean;
  id?: string;
  describedBy?: string;
  required?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  autoFocus?: boolean;
  name: string;
  value?: string;
  spellCheck?: boolean;
  maxLength?: number;
  autoComplete: React.InputHTMLAttributes<HTMLInputElement>["autoComplete"];
  onChange?: React.InputHTMLAttributes<HTMLInputElement>["onChange"];
  ref?: React.RefObject<HTMLInputElement>;
};

const StyledInput = styled.input<
  Pick<Props, "error" | "width">
>`font-family: g-theme-font-family;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
font-weight: 400;
font-size: 1rem;
line-height: 1.25;
box-sizing: border-box;
width: 100%;
height: 40px;
margin-top: 0;
padding: 0.5rem;
border: 1px solid g-theme-form-border-color;
border-radius: 0;
-webkit-appearance: none;
-moz-appearance: none;
appearance: none;
background-color: g-theme-form-background-color;
:-webkit-autofill,:-webkit-autofill:hover,:-webkit-autofill:focus,:valid,:invalid{
-webkit-text-fill-color: g-theme-color !important;
background-color: g-theme-form-background-color;
color: g-theme-color;
border: 1px solid g-theme-form-border-color;
box-shadow: 0 0 0px 1000px g-theme-form-background-color inset;
-webkit-box-shadow: 0 0 0px 1000px g-theme-form-background-color inset;
}
@media print{
font-family: sans-serif;;
}
@media (min-width: 40.0625em){
font-size: 1.1875rem;
line-height: 1.31579;;
}
@media print{
font-size: 14pt;
line-height: 1.15;;
}
:focus{
outline: 3px solid g-theme-focus-ring-color;
outline-offset: 0;
}
::-webkit-outer-spin-button,::-webkit-inner-spin-button{
margin: 0;
-webkit-appearance: none;
}
${props =>
  props.error &&
  styled.css`
    border: 1px solid g-theme-error-border-color;
  `}
${props =>
  props.width === "30" &&
  styled.css`
    max-width: 59ex;
  `}
${props =>
  props.width === "20" &&
  styled.css`
    max-width: 41ex;
  `}
${props =>
  props.width === "10" &&
  styled.css`
    max-width: 23ex;
  `}
${props =>
  props.width === "5" &&
  styled.css`
    max-width: 10.8ex;
  `}
${props =>
  props.width === "4" &&
  styled.css`
    max-width: 9ex;
  `}
${props =>
  props.width === "3" &&
  styled.css`
    max-width: 7.2ex;
  `}
${props =>
  props.width === "2" &&
  styled.css`
    max-width: 5.4ex;
  `}
margin-top: 0px;`;

const Input = ({
  width,
  error,
  id,
  describedBy,
  required,
  disabled,
  readOnly,
  autoFocus,
  name,
  value,
  spellCheck,
  maxLength,
  autoComplete,
  onChange,
  ref
}: Props) => (
  <StyledInput
    width={width}
    error={error}
    aria-describedby={describedBy}
    id={id}
    name={name}
    type="text"
    required={required}
    disabled={
      disabled !== undefined ? disabled.toString() === "true" : undefined
    }
    readOnly={readOnly}
    autoFocus={autoFocus}
    value={value}
    spellCheck={spellCheck}
    maxLength={maxLength}
    autoComplete={autoComplete}
    onChange={onChange}
    ref={ref}
  />
);

export default Input;
