'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = Content;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function Content(props) {
  var theme = props.theme,
      classes = props.classes,
      className = props.className,
      children = props.children,
      etc = _objectWithoutProperties(props, ['theme', 'classes', 'className', 'children']);

  var cls = (0, _classnames2.default)(classes.root, className);
  return _react2.default.createElement(
    'div',
    _extends({ className: cls }, etc),
    children
  );
}

Content.propTypes = {
  theme: _propTypes2.default.any.isRequired,
  classes: _propTypes2.default.any.isRequired
};