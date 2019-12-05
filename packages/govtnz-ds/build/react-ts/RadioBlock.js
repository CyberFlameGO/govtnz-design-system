"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var RadioBlock = function (_a) {
    var id = _a.id, hintId = _a.hintId, disabled = _a.disabled, readOnly = _a.readOnly, autoFocus = _a.autoFocus, name = _a.name, value = _a.value, checked = _a.checked, onChange = _a.onChange, label = _a.label, hint = _a.hint;
    return (React.createElement("div", { className: "g-radios__item" },
        React.createElement("input", { "aria-describedby": hintId, className: "g-radios__input", id: id, name: name, type: "radio", disabled: disabled, readOnly: readOnly, autoFocus: autoFocus, value: value, checked: checked, onChange: onChange }),
        React.createElement("label", { className: "g-radioBlock-label g-radios__label", htmlFor: id }, label !== undefined ? (label) : (React.createElement(React.Fragment, null, "Label text"))),
        hintId !== undefined ? (React.createElement(React.Fragment, null,
            React.createElement("div", { className: "g-radioBlock-hint g-checkboxes__hint", id: hintId }, hint !== undefined ? (hint) : (React.createElement(React.Fragment, null, "Hint text"))))) : ("")));
};
exports.default = RadioBlock;
//# sourceMappingURL=RadioBlock.js.map