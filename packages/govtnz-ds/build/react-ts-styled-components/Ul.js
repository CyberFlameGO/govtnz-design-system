"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var StyledUl = styled_components_1.default.ul(templateObject_4 || (templateObject_4 = __makeTemplateObject(["font-family: g-theme-font-family;\n-webkit-font-smoothing: antialiased;\n-moz-osx-font-smoothing: grayscale;\nfont-weight: 400;\nfont-size: 1.25rem;\nline-height: 1.625;\ncolor: g-theme-color;\nmargin-top: 0;\nmargin-bottom: 1rem;\npadding-left: 20px;\nlist-style-type: disc;\n@media print{\nfont-family: sans-serif;;\n}\n@media (min-width: 40.0625em){\nfont-size: 1.1875rem;\nline-height: 1.31579;\nmargin-bottom: 1rem;;\n}\n@media print{\nfont-size: 14pt;\nline-height: 1.15;\ncolor: g-theme-print-color;;\n}\nmargin-top: 10px;\nmargin-top: 0.5rem;\n", "\n", "\n", ""], ["font-family: g-theme-font-family;\n-webkit-font-smoothing: antialiased;\n-moz-osx-font-smoothing: grayscale;\nfont-weight: 400;\nfont-size: 1.25rem;\nline-height: 1.625;\ncolor: g-theme-color;\nmargin-top: 0;\nmargin-bottom: 1rem;\npadding-left: 20px;\nlist-style-type: disc;\n@media print{\nfont-family: sans-serif;;\n}\n@media (min-width: 40.0625em){\nfont-size: 1.1875rem;\nline-height: 1.31579;\nmargin-bottom: 1rem;;\n}\n@media print{\nfont-size: 14pt;\nline-height: 1.15;\ncolor: g-theme-print-color;;\n}\nmargin-top: 10px;\nmargin-top: 0.5rem;\n",
    "\n",
    "\n",
    ""])), function (props) {
    return props.marginBottom0 && styled_components_1.default.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    margin-bottom: 0px !important;\n  "], ["\n    margin-bottom: 0px !important;\n  "])));
}, function (props) {
    return props.spacing && styled_components_1.default.css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    margin-bottom: 0;\n    line-height: 32px;\n  "], ["\n    margin-bottom: 0;\n    line-height: 32px;\n  "])));
}, function (props) {
    return props.noBullet && styled_components_1.default.css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    list-style: none;\n    padding-left: 0px;\n    margin-left: 0px;\n  "], ["\n    list-style: none;\n    padding-left: 0px;\n    margin-left: 0px;\n  "])));
});
var Ul = function (_a) {
    var spacing = _a.spacing, marginBottom0 = _a.marginBottom0, noBullet = _a.noBullet, children = _a.children;
    return (react_1.default.createElement(StyledUl, { spacing: spacing, marginBottom0: marginBottom0, noBullet: noBullet }, children !== undefined ? (children) : (react_1.default.createElement(react_1.default.Fragment, null, "Example text"))));
};
exports.default = Ul;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
//# sourceMappingURL=Ul.js.map