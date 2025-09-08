'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require('prismjs');

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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Code = function (_Component) {
  _inherits(Code, _Component);

  function Code() {
    _classCallCheck(this, Code);

    return _possibleConstructorReturn(this, (Code.__proto__ || Object.getPrototypeOf(Code)).apply(this, arguments));
  }

  _createClass(Code, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.highlight();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.highlight();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          Animation = _props.Animation,
          animation = _props.animation,
          theme = _props.theme,
          classes = _props.classes,
          animate = _props.animate,
          show = _props.show,
          Wrapper = _props.type,
          language = _props.language,
          className = _props.className,
          children = _props.children,
          etc = _objectWithoutProperties(_props, ['Animation', 'animation', 'theme', 'classes', 'animate', 'show', 'type', 'language', 'className', 'children']);

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
            Wrapper,
            _extends({
              className: (0, _classnames2.default)(cls, classes[anim.status], 'language-' + language)
            }, etc, {
              ref: function ref(el) {
                return _this2.wrapper = el;
              }
            }),
            children
          );
        }
      );
    }
  }, {
    key: 'highlight',
    value: function highlight() {
      Prism.highlightElement(this.wrapper);
    }
  }]);

  return Code;
}(_react.Component);

Code.propTypes = {
  Animation: _propTypes2.default.any.isRequired,

  theme: _propTypes2.default.any.isRequired,
  classes: _propTypes2.default.any.isRequired,

  animate: _propTypes2.default.bool,
  show: _propTypes2.default.bool,
  animation: _propTypes2.default.object,

  /**
   * If the code snippet is inline or block type.
   */
  type: _propTypes2.default.oneOf(['code', 'pre']),

  /**
   * The programming language. Supported by [Prism](http://prismjs.com/).
   */
  language: _propTypes2.default.string
};
Code.defaultProps = {
  Animation: _Animation2.default,
  show: true,
  type: 'code',
  language: 'javascript'
};
exports.default = Code;