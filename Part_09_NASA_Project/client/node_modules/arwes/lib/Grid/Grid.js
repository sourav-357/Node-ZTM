'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = Grid;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function Grid(props) {
  var _colClasses;

  var theme = props.theme,
      classes = props.classes,
      row = props.row,
      nested = props.nested,
      noGutter = props.noGutter,
      noMargin = props.noMargin,
      col = props.col,
      s = props.s,
      m = props.m,
      l = props.l,
      xl = props.xl,
      offset = props.offset,
      className = props.className,
      children = props.children,
      etc = _objectWithoutProperties(props, ['theme', 'classes', 'row', 'nested', 'noGutter', 'noMargin', 'col', 's', 'm', 'l', 'xl', 'offset', 'className', 'children']);

  var isCol = !row && col;
  var isRowCol = row && col;

  // Grid is either row or col. If both are provided the row is taken
  // so the child is a col.
  var baseClass = row ? classes.row : classes.col;

  var colClasses = (_colClasses = {}, _defineProperty(_colClasses, classes.noGutter, noGutter), _defineProperty(_colClasses, classes['s' + s], s), _defineProperty(_colClasses, classes['m' + m], m), _defineProperty(_colClasses, classes['l' + l], l), _defineProperty(_colClasses, classes['xl' + xl], xl), _colClasses);

  offset.forEach(function (rule) {
    colClasses[classes['offset-' + rule]] = true;
  });

  var cls = (0, _classnames2.default)(baseClass, noMargin && [classes.noMargin], nested && [classes.nested], isCol && colClasses, className);

  return _react2.default.createElement(
    'div',
    _extends({ className: cls }, etc),
    isRowCol ? _react2.default.createElement(
      'div',
      { className: (0, _classnames2.default)(classes.col, colClasses) },
      children
    ) : children
  );
}

Grid.propTypes = {
  theme: _propTypes2.default.any.isRequired,
  classes: _propTypes2.default.any.isRequired,

  /**
   * If component is a row.
   */
  row: _propTypes2.default.bool,

  /**
   * If row is nested inside another one.
   */
  nested: _propTypes2.default.bool,

  /**
   * Don't add margin bottom to the row.
   */
  noMargin: _propTypes2.default.bool,

  /**
   * If component is a column.
   */
  col: _propTypes2.default.bool,

  /**
   * Don't add lateral paddings to column.
   */
  noGutter: _propTypes2.default.bool,

  /**
   * The number of columns in small breakpoint.
   */
  s: _propTypes2.default.number,

  /**
   * The number of columns in medium breakpoint.
   */
  m: _propTypes2.default.number,

  /**
   * The number of columns in large breakpoint.
   */
  l: _propTypes2.default.number,

  /**
   * The number of columns in extra large breakpoint.
   */
  xl: _propTypes2.default.number,

  /**
   * A list of offset definitions for each breakpoint.
   * Example: `['m4', 'l2']` creates an offset of 4 columns
   * on medium breakpoint and an offset of 2 columns on large breakpoint.
   */
  offset: _propTypes2.default.arrayOf(_propTypes2.default.string)
};

Grid.defaultProps = {
  offset: []
};