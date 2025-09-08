'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = Table;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Animation = require('../Animation');

var _Animation2 = _interopRequireDefault(_Animation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function Table(props) {
  var theme = props.theme,
      classes = props.classes,
      Animation = props.Animation,
      animation = props.animation,
      animate = props.animate,
      show = props.show,
      headers = props.headers,
      dataset = props.dataset,
      minWidth = props.minWidth,
      className = props.className,
      children = props.children,
      etc = _objectWithoutProperties(props, ['theme', 'classes', 'Animation', 'animation', 'animate', 'show', 'headers', 'dataset', 'minWidth', 'className', 'children']);

  var cls = (0, _classnames2.default)(classes.root, className);

  return _react2.default.createElement(
    Animation,
    _extends({
      animate: animate,
      show: show,
      timeout: theme.animTime
    }, animation),
    function (anim) {
      return _react2.default.createElement(
        'div',
        _extends({ className: (0, _classnames2.default)(cls, classes[anim.status]) }, etc),
        _react2.default.createElement(
          'div',
          { style: { minWidth: minWidth } },
          !children && _react2.default.createElement(
            'table',
            null,
            _react2.default.createElement(
              'thead',
              null,
              _react2.default.createElement(
                'tr',
                null,
                headers.map(function (header, index) {
                  return _react2.default.createElement(
                    'th',
                    { key: index },
                    header
                  );
                })
              )
            ),
            _react2.default.createElement(
              'tbody',
              null,
              dataset.filter(function (item) {
                return !!item;
              }).map(function (item, index) {
                return _react2.default.createElement(
                  'tr',
                  { key: index },
                  item.map(function (value, index2) {
                    return _react2.default.createElement(
                      'td',
                      { key: index2 },
                      value
                    );
                  })
                );
              })
            )
          ),
          children
        )
      );
    }
  );
}

Table.propTypes = {
  Animation: _propTypes2.default.any.isRequired,

  theme: _propTypes2.default.any.isRequired,
  classes: _propTypes2.default.any.isRequired,

  animate: _propTypes2.default.bool,
  show: _propTypes2.default.bool,
  animation: _propTypes2.default.object,

  /**
   * List of heading titles.
   */
  headers: _propTypes2.default.array,

  /**
   * List of rows with their lists of columns.
   */
  dataset: _propTypes2.default.arrayOf(_propTypes2.default.array),

  /**
   * The table component can be the 100% width container.
   * Configure the min width of the content, if case the container width is less
   * than this minWidth, a horizontal scroll will appear.
   */
  minWidth: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),

  /**
   * If the actual HTML `<table />` is provided, the `headers` and `dataset`
   * are ignored.
   */
  children: _propTypes2.default.any
};

Table.defaultProps = {
  Animation: _Animation2.default,
  show: true,
  headers: [],
  dataset: []
};