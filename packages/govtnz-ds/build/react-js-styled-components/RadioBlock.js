"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  font-family: Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-weight: 500;\n  font-size: 1.25rem;\n  line-height: 1.25;\n  color: #2a2a2a;\n  display: block;\n  margin-bottom: 5px;\n  @media print {\n    font-family: sans-serif;\n  }\n  @media (min-width: 40.0625em) {\n    font-size: 1.1875rem;\n    line-height: 1.31579;\n  }\n  @media print {\n    font-size: 14pt;\n    line-height: 1.15;\n  }\n  @media print {\n    color: #000000;\n  }\n  display: inline-block;\n  margin-bottom: 0;\n  padding: 8px 15px 5px;\n  cursor: pointer;\n  -ms-touch-action: manipulation;\n  touch-action: manipulation;\n  ::before {\n    content: \"\";\n    box-sizing: border-box;\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 40px;\n    height: 40px;\n    border: 2px solid currentColor;\n    border-radius: 50%;\n    background: transparent;\n  }\n  ::after {\n    content: \"\";\n    position: absolute;\n    top: 10px;\n    left: 10px;\n    width: 0;\n    height: 0;\n    border: 10px solid currentColor;\n    border-radius: 50%;\n    opacity: 0;\n    background: currentColor;\n  }\n  :focus + .g-radios__label::before,\n  :focus + .g-radios__label::before {\n    outline: 3px solid transparent;\n    outline-offset: 3px;\n    box-shadow: 0 0 0 4px #ffbf47;\n  }\n  :checked + .g-radios__label::after,\n  :checked + .g-radios__label::after {\n    opacity: 1;\n  }\n  :disabled + .g-radios__label,\n  :disabled + .g-radios__label {\n    cursor: default;\n  }\n  :disabled + .g-radios__label,\n  :disabled + .g-radios__label {\n    opacity: 0.5;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  position: absolute;\n  z-index: 1;\n  top: 0;\n  left: 0;\n  width: 40px;\n  height: 40px;\n  cursor: pointer;\n  margin: 0;\n  opacity: 0;\n  :disabled {\n    cursor: default;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  font-family: Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-weight: 400;\n  font-size: 1rem;\n  line-height: 1.25;\n  display: block;\n  position: relative;\n  min-height: 40px;\n  margin-bottom: 10px;\n  padding: 0 0 0 40px;\n  clear: left;\n  @media print {\n    font-family: sans-serif;\n  }\n  @media (min-width: 40.0625em) {\n    font-size: 1.1875rem;\n    line-height: 1.31579;\n  }\n  @media print {\n    font-size: 14pt;\n    line-height: 1.15;\n  }\n  :last-child,\n  :last-of-type {\n    margin-bottom: 0;\n  }\n  @media (min-width: 40.0625em) {\n    margin-right: 20px;\n    float: left;\n    clear: none;\n  }\n  margin-right: 0;\n  float: none;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var StyledDiv = _styledComponents["default"].div(_templateObject());

var StyledInput = _styledComponents["default"].input(_templateObject2());

var StyledLabel = _styledComponents["default"].label(_templateObject3());

var RadioBlock = function RadioBlock(_ref) {
  var fakeFocus = _ref.fakeFocus,
      radioId = _ref.radioId,
      hintId = _ref.hintId,
      name = _ref.name,
      disabled = _ref.disabled,
      readOnly = _ref.readOnly,
      autoFocus = _ref.autoFocus,
      value = _ref.value,
      checked = _ref.checked,
      onChange = _ref.onChange,
      label = _ref.label;
  return _react["default"].createElement(StyledDiv, null, _react["default"].createElement(StyledInput, {
    fakeFocus: fakeFocus,
    "aria-describedby": hintId,
    id: radioId,
    name: name,
    type: "radio",
    disabled: disabled,
    readOnly: readOnly,
    autoFocus: autoFocus,
    value: value,
    checked: checked,
    onChange: onChange
  }), _react["default"].createElement(StyledLabel, {
    htmlFor: radioId
  }, label !== undefined ? label : _react["default"].createElement(_react["default"].Fragment, null, "Label text")));
};

var _default = RadioBlock;
exports["default"] = _default;