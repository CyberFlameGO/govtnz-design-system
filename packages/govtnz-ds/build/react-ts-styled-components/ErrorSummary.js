"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var styled = __importStar(require("styled-components"));
var StyledDiv = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  margin-top: 0px;\n"], ["\n  margin-top: 0px;\n"])));
var StyledH2 = styled.h2(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  margin-top: 0px;\n"], ["\n  margin-top: 0px;\n"])));
var StyledDiv2 = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  margin-top: 0px;\n"], ["\n  margin-top: 0px;\n"])));
var StyledP = styled.p(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  margin-bottom: 10px;\n  margin-top: 0;\n  margin-bottom: 20px;\n  margin-top: 0;\n  margin-bottom: 15px;\n  @media (min-width: 40.0625em) {\n    margin-bottom: 20px;\n  }\n  margin-top: 0px;\n"], ["\n  margin-bottom: 10px;\n  margin-top: 0;\n  margin-bottom: 20px;\n  margin-top: 0;\n  margin-bottom: 15px;\n  @media (min-width: 40.0625em) {\n    margin-bottom: 20px;\n  }\n  margin-top: 0px;\n"])));
var StyledUl = styled.ul(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  font-family: Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-weight: 400;\n  font-size: 1.25rem;\n  line-height: 1.625;\n  color: #2a2a2a;\n  margin-top: 0;\n  margin-bottom: 1rem;\n  padding-left: 0;\n  list-style-type: none;\n  @media print {\n    font-family: sans-serif;\n  }\n  @media (min-width: 40.0625em) {\n    font-size: 1.1875rem;\n    line-height: 1.31579;\n  }\n  @media print {\n    font-size: 14pt;\n    line-height: 1.15;\n  }\n  @media print {\n    color: #000000;\n  }\n  @media (min-width: 40.0625em) {\n    margin-bottom: 1rem;\n  }\n  margin-top: 10px;\n  margin-top: 0px;\n  margin-top: 0.5rem;\n"], ["\n  font-family: Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-weight: 400;\n  font-size: 1.25rem;\n  line-height: 1.625;\n  color: #2a2a2a;\n  margin-top: 0;\n  margin-bottom: 1rem;\n  padding-left: 0;\n  list-style-type: none;\n  @media print {\n    font-family: sans-serif;\n  }\n  @media (min-width: 40.0625em) {\n    font-size: 1.1875rem;\n    line-height: 1.31579;\n  }\n  @media print {\n    font-size: 14pt;\n    line-height: 1.15;\n  }\n  @media print {\n    color: #000000;\n  }\n  @media (min-width: 40.0625em) {\n    margin-bottom: 1rem;\n  }\n  margin-top: 10px;\n  margin-top: 0px;\n  margin-top: 0.5rem;\n"])));
var StyledLi = styled.li(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  margin-bottom: 0.25rem;\n  margin-bottom: 0;\n  @media (min-width: 40.0625em) {\n    margin-bottom: 5px;\n  }\n  margin-top: 0px;\n"], ["\n  margin-bottom: 0.25rem;\n  margin-bottom: 0;\n  @media (min-width: 40.0625em) {\n    margin-bottom: 5px;\n  }\n  margin-top: 0px;\n"])));
var StyledA = styled.a(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  font-weight: 700;\n  :focus {\n    outline: 3px solid #ffbf47;\n    outline-offset: 0;\n  }\n  :link,\n  :visited,\n  :hover,\n  :active {\n    color: #b10e1e;\n  }\n  :focus {\n    color: #0b0c0c;\n  }\n  font-family: Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-weight: 700;\n  font-size: 0.875rem;\n  line-height: 1.14286;\n  white-space: nowrap;\n  @media print {\n    font-family: sans-serif;\n  }\n  @media (min-width: 40.0625em) {\n    font-size: 1rem;\n    line-height: 1.25;\n  }\n  @media print {\n    font-size: 14pt;\n    line-height: 1.2;\n  }\n  :link,\n  :hover,\n  :visited {\n    color: #1d8feb;\n  }\n  :focus {\n    color: #0b0c0c;\n  }\n  margin-top: 0px;\n"], ["\n  font-weight: 700;\n  :focus {\n    outline: 3px solid #ffbf47;\n    outline-offset: 0;\n  }\n  :link,\n  :visited,\n  :hover,\n  :active {\n    color: #b10e1e;\n  }\n  :focus {\n    color: #0b0c0c;\n  }\n  font-family: Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-weight: 700;\n  font-size: 0.875rem;\n  line-height: 1.14286;\n  white-space: nowrap;\n  @media print {\n    font-family: sans-serif;\n  }\n  @media (min-width: 40.0625em) {\n    font-size: 1rem;\n    line-height: 1.25;\n  }\n  @media print {\n    font-size: 14pt;\n    line-height: 1.2;\n  }\n  :link,\n  :hover,\n  :visited {\n    color: #1d8feb;\n  }\n  :focus {\n    color: #0b0c0c;\n  }\n  margin-top: 0px;\n"])));
var StyledLi2 = styled.li(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  margin-bottom: 0.25rem;\n  margin-bottom: 0;\n  @media (min-width: 40.0625em) {\n    margin-bottom: 5px;\n  }\n  margin-top: 0px;\n"], ["\n  margin-bottom: 0.25rem;\n  margin-bottom: 0;\n  @media (min-width: 40.0625em) {\n    margin-bottom: 5px;\n  }\n  margin-top: 0px;\n"])));
var StyledA2 = styled.a(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  font-weight: 700;\n  :focus {\n    outline: 3px solid #ffbf47;\n    outline-offset: 0;\n  }\n  :link,\n  :visited,\n  :hover,\n  :active {\n    color: #b10e1e;\n  }\n  :focus {\n    color: #0b0c0c;\n  }\n  font-family: Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-weight: 700;\n  font-size: 0.875rem;\n  line-height: 1.14286;\n  white-space: nowrap;\n  @media print {\n    font-family: sans-serif;\n  }\n  @media (min-width: 40.0625em) {\n    font-size: 1rem;\n    line-height: 1.25;\n  }\n  @media print {\n    font-size: 14pt;\n    line-height: 1.2;\n  }\n  :link,\n  :hover,\n  :visited {\n    color: #1d8feb;\n  }\n  :focus {\n    color: #0b0c0c;\n  }\n  margin-top: 0px;\n"], ["\n  font-weight: 700;\n  :focus {\n    outline: 3px solid #ffbf47;\n    outline-offset: 0;\n  }\n  :link,\n  :visited,\n  :hover,\n  :active {\n    color: #b10e1e;\n  }\n  :focus {\n    color: #0b0c0c;\n  }\n  font-family: Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-weight: 700;\n  font-size: 0.875rem;\n  line-height: 1.14286;\n  white-space: nowrap;\n  @media print {\n    font-family: sans-serif;\n  }\n  @media (min-width: 40.0625em) {\n    font-size: 1rem;\n    line-height: 1.25;\n  }\n  @media print {\n    font-size: 14pt;\n    line-height: 1.2;\n  }\n  :link,\n  :hover,\n  :visited {\n    color: #1d8feb;\n  }\n  :focus {\n    color: #0b0c0c;\n  }\n  margin-top: 0px;\n"])));
var constants = {
    target: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
    target2: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" }
};
var ErrorSummary = function (_a) {
    var errorSummaryTitle = _a.errorSummaryTitle, href = _a.href, rel = _a.rel, target = _a.target, href2 = _a.href2, rel2 = _a.rel2, target2 = _a.target2;
    return (React.createElement(StyledDiv, { "aria-labelledby": errorSummaryTitle, "data-module": "error-summary", role: "alert", tabIndex: -1 },
        React.createElement(StyledH2, { id: errorSummaryTitle }, "Message to alert the user to a problem goes here"),
        React.createElement(StyledDiv2, null,
            React.createElement(StyledP, null, "Optional description of the errors and how to correct them"),
            React.createElement(StyledUl, null,
                React.createElement(StyledLi, null,
                    React.createElement(StyledA, { href: href, rel: rel, target: constants.target[target] }, "Descriptive link to the question with an error")),
                React.createElement(StyledLi2, null,
                    React.createElement(StyledA2, { href: href2, rel: rel2, target: constants.target2[target2] }, "Descriptive link to the question with an error"))))));
};
exports.default = ErrorSummary;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9;
//# sourceMappingURL=ErrorSummary.js.map