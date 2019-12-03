import React from "react";

const RadioBlock = ({
  radioId,
  hintId,
  name,
  disabled,
  readOnly,
  autoFocus,
  value,
  checked,
  onChange,
  label,
  hint
}) => (
  <div className="g-radios__item">
    <input
      aria-describedby={hintId}
      className="g-radios__input"
      id={radioId}
      name={name}
      type="radio"
      disabled={disabled}
      readOnly={readOnly}
      autoFocus={autoFocus}
      value={value}
      checked={checked}
      onChange={onChange}
    />
    <label className="g-radioBlock-label g-radios__label" htmlFor={radioId}>
      {label !== undefined ? (
        label
      ) : (
        <React.Fragment>Label text</React.Fragment>
      )}
    </label>
    {hintId !== undefined ? (
      <React.Fragment>
        <div className="g-radioBlock-hint g-checkboxes__hint" id={hintId}>
          {hint !== undefined ? (
            hint
          ) : (
            <React.Fragment>Hint text</React.Fragment>
          )}
        </div>
      </React.Fragment>
    ) : (
      ""
    )}
  </div>
);

export default RadioBlock;
