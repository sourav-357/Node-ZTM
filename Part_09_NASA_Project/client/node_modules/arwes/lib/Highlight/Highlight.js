'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// HTMLElement animation end event names.
var ON_ANIMATION_END = ['webkitAnimationEnd', 'mozAnimationEnd', 'MSAnimationEnd', 'oanimationend', 'animationend'];

var Highlight = function (_Component) {
  _inherits(Highlight, _Component);

  function Highlight() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Highlight);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Highlight.__proto__ || Object.getPrototypeOf(Highlight)).call.apply(_ref, [this].concat(args))), _this), _this.element = null, _this.clickElement = null, _this.onClick = function () {
      var _this$props = _this.props,
          animate = _this$props.animate,
          classes = _this$props.classes;


      if (animate) {

        if (_this.clickElement) {
          _this.clickElement.remove();
        }

        _this.clickElement = document.createElement('div');
        _this.clickElement.setAttribute('class', classes.click);
        _this.element.appendChild(_this.clickElement);

        ON_ANIMATION_END.forEach(function (event) {
          _this.clickElement.addEventListener(event, function () {
            return _this.clickElement.remove();
          });
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  // The root element.


  // Last click element created.


  _createClass(Highlight, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          theme = _props.theme,
          classes = _props.classes,
          layer = _props.layer,
          animate = _props.animate,
          className = _props.className,
          children = _props.children,
          etc = _objectWithoutProperties(_props, ['theme', 'classes', 'layer', 'animate', 'className', 'children']);

      var cls = (0, _classnames2.default)(classes.root, classes[layer], className);

      return _react2.default.createElement(
        'div',
        _extends({ className: cls, ref: function ref(el) {
            return _this2.element = el;
          } }, etc),
        _react2.default.createElement(
          'div',
          { className: classes.children, onClick: this.onClick },
          children
        )
      );
    }

    /**
     * Click event on element. Reproduces the animation.
     */

  }]);

  return Highlight;
}(_react.Component);

Highlight.propTypes = {
  animate: _propTypes2.default.bool,
  layer: _propTypes2.default.oneOf(['primary', 'secondary', 'header', 'control', 'success', 'alert', 'disabled'])
};
Highlight.defaultProps = {
  animate: true,
  layer: 'primary'
};
exports.default = Highlight;