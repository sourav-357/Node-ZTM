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

var Puffs = function (_Component) {
  _inherits(Puffs, _Component);

  function Puffs() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Puffs);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Puffs.__proto__ || Object.getPrototypeOf(Puffs)).call.apply(_ref, [this].concat(args))), _this), _this.element = null, _this.puffTimeout = null, _this.puffElementsTimeout = null, _this.onPuffs = function () {

      var puffs = [];
      for (var i = 0; i < _this.props.quantity; i++) {
        puffs.push(_this.createPuff());
      }

      puffs.forEach(function (puff) {
        return _this.element.appendChild(puff);
      });

      _this.puffElementsTimeout = setTimeout(function () {
        puffs.forEach(function (puff) {
          return puff.remove();
        });
      }, _this.props.puffInterval - 100);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  // Root element.


  // Timeout to start next puff animations.


  // Timeout to remove current puff animations.


  _createClass(Puffs, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.animate) {
        this.startAnimations();
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      if (prevProps.animate !== this.props.animate) {
        if (this.props.animate) {
          this.startAnimations();
        } else {
          this.stopAnimations();
        }
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.stopAnimations();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          theme = _props.theme,
          classes = _props.classes,
          animate = _props.animate,
          puffInterval = _props.puffInterval,
          quantity = _props.quantity,
          className = _props.className,
          children = _props.children,
          etc = _objectWithoutProperties(_props, ['theme', 'classes', 'animate', 'puffInterval', 'quantity', 'className', 'children']);

      var cls = (0, _classnames2.default)(classes.root, className);

      return _react2.default.createElement(
        'div',
        _extends({ className: cls, ref: function ref(el) {
            return _this2.element = el;
          } }, etc),
        _react2.default.createElement(
          'div',
          { className: classes.children },
          children
        )
      );
    }
  }, {
    key: 'stopAnimations',
    value: function stopAnimations() {
      clearInterval(this.puffTimeout);
      clearTimeout(this.puffElementsTimeout);
    }
  }, {
    key: 'startAnimations',
    value: function startAnimations() {
      this.onPuffs();
      this.puffTimeout = setInterval(this.onPuffs, this.props.puffInterval);
    }

    /**
     * Create a random set of puffs on the back of the container.
     */

  }, {
    key: 'createPuff',


    /**
     * Create a puff with random valid properties.
     * @return {HTMLElement}
     */
    value: function createPuff() {
      var classes = this.props.classes;


      var puff = document.createElement('div');

      var isLong = Math.round(Math.random());
      var cls = classes.puff + (isLong ? ' ' + classes.puffLong : '');
      puff.setAttribute('class', cls);

      var duration = 1000 + Math.round(Math.random() * 3000);
      puff.style.animationDuration = duration + 'ms';

      var width = this.element.offsetWidth;
      var height = this.element.offsetHeight;
      puff.style.left = 50 + Math.round(Math.random() * (width - 100)) + 'px';
      puff.style.top = 100 + Math.round(Math.random() * (height - 200)) + 'px';

      return puff;
    }
  }]);

  return Puffs;
}(_react.Component);

Puffs.propTypes = {
  theme: _propTypes2.default.any.isRequired,
  classes: _propTypes2.default.any.isRequired,

  animate: _propTypes2.default.bool,

  /**
   * How often to create new puffs. Should be greater than 4000ms.
   */
  puffInterval: _propTypes2.default.number,

  /**
   * Total number of puffs to create.
   */
  quantity: _propTypes2.default.number
};
Puffs.defaultProps = {
  animate: true,
  puffInterval: 5000,
  quantity: 8
};
exports.default = Puffs;