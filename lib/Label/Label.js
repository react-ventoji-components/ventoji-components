"use strict";

var _interopRequireDefault = require("C:/Users/wheat/Dropbox/TAREAS-ACTIVAS/PLURALSIGHT/react-courses/REUSABLE-REACT-COMP/REUSABLE-REACT-COMP/ventoji-components/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

/** Label with required field display, htmlFor, and block styling */
function Label(_ref) {
  var htmlFor = _ref.htmlFor,
      label = _ref.label,
      required = _ref.required;
  return /*#__PURE__*/_react.default.createElement("label", {
    style: {
      display: 'block'
    },
    htmlFor: htmlFor
  }, label, " ", required && /*#__PURE__*/_react.default.createElement("span", {
    style: {
      color: 'red'
    }
  }, " *"));
}

var _default = Label;
exports.default = _default;