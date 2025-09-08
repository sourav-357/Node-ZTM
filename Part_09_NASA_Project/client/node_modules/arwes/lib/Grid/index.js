'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Col = exports.Row = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _withStyles = require('../tools/withStyles');

var _withStyles2 = _interopRequireDefault(_withStyles);

var _Grid = require('./Grid');

var _Grid2 = _interopRequireDefault(_Grid);

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GridWithStyles = (0, _withStyles2.default)(_styles2.default)(_Grid2.default);

var Row = exports.Row = function Row(props) {
  return _react2.default.createElement(GridWithStyles, _extends({ row: true }, props));
};
var Col = exports.Col = function Col(props) {
  return _react2.default.createElement(GridWithStyles, _extends({ col: true }, props));
};

exports.default = GridWithStyles;