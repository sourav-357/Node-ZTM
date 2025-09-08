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

var _Animation = require('../Animation');

var _Animation2 = _interopRequireDefault(_Animation);

var _Frame = require('../Frame');

var _Frame2 = _interopRequireDefault(_Frame);

var _Loading = require('../Loading');

var _Loading2 = _interopRequireDefault(_Loading);

var _utils = require('../tools/utils');

var _createLoader = require('../tools/createLoader');

var _createLoader2 = _interopRequireDefault(_createLoader);

var _createResponsive = require('../tools/createResponsive');

var _createResponsive2 = _interopRequireDefault(_createResponsive);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Image = function (_Component) {
  _inherits(Image, _Component);

  _createClass(Image, [{
    key: 'getDefaultState',
    value: function getDefaultState() {
      return {
        ready: false, // if active resource is loaded
        error: false, // if resource had an error
        resource: null // the active resource
      };
    }
  }]);

  function Image() {
    _classCallCheck(this, Image);

    var _this = _possibleConstructorReturn(this, (Image.__proto__ || Object.getPrototypeOf(Image)).apply(this, arguments));

    _this.state = _this.getDefaultState();

    _this.loader = _this.props.createLoader();
    _this.responsive = _this.props.createResponsive({
      getTheme: function getTheme() {
        return _this.props.theme;
      }
    });
    return _this;
  }

  _createClass(Image, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.loadResource();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      if (this.props.resources !== prevProps.resources) {
        this.loadResource();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          Animation = _props.Animation,
          Frame = _props.Frame,
          Loading = _props.Loading,
          createLoader = _props.createLoader,
          createResponsive = _props.createResponsive,
          animation = _props.animation,
          theme = _props.theme,
          classes = _props.classes,
          animate = _props.animate,
          show = _props.show,
          layer = _props.layer,
          loadResources = _props.loadResources,
          resources = _props.resources,
          imgProps = _props.imgProps,
          i18n = _props.i18n,
          className = _props.className,
          children = _props.children,
          etc = _objectWithoutProperties(_props, ['Animation', 'Frame', 'Loading', 'createLoader', 'createResponsive', 'animation', 'theme', 'classes', 'animate', 'show', 'layer', 'loadResources', 'resources', 'imgProps', 'i18n', 'className', 'children']);

      var _state = this.state,
          ready = _state.ready,
          error = _state.error,
          resource = _state.resource;


      var cls = (0, _classnames2.default)(classes.root, _defineProperty({}, classes.ready, ready), className);

      return _react2.default.createElement(
        Animation,
        _extends({
          animate: animate,
          show: show,
          timeout: theme.animTime
        }, animation),
        function (anim) {
          return _react2.default.createElement(
            'figure',
            _extends({ className: (0, _classnames2.default)(cls, classes[anim.status]) }, etc),
            _react2.default.createElement(
              Frame,
              { animate: animate, show: show, layer: layer },
              _react2.default.createElement(
                'div',
                { className: classes.holder },
                _react2.default.createElement('img', _extends({}, imgProps, {
                  className: (0, _classnames2.default)(classes.img, imgProps.className),
                  src: resource
                })),
                error && _react2.default.createElement(
                  'div',
                  { className: classes.error },
                  i18n.error
                ),
                !ready && !error && _react2.default.createElement(Loading, {
                  full: true,
                  animate: animate,
                  show: show,
                  layer: layer
                })
              ),
              !!children && _react2.default.createElement('div', { className: classes.separator }),
              !!children && _react2.default.createElement(
                'figcaption',
                { className: classes.children },
                _react2.default.createElement(
                  'small',
                  null,
                  typeof children === 'function' ? children(anim) : children
                )
              )
            )
          );
        }
      );
    }

    /**
     * If enabled, load the resources provided.
     * It doesn't return the state of the loading, it will update the state.
     */

  }, {
    key: 'loadResource',
    value: function loadResource() {
      var _this2 = this;

      var _props2 = this.props,
          resources = _props2.resources,
          loadResources = _props2.loadResources;


      if (!loadResources) {
        return;
      }

      var responsive = this.responsive.get();
      var resource = (0, _utils.getResponsiveResource)(resources, responsive);

      this.setState(this.getDefaultState());

      this.loader.load({ images: [resource] }).then(function () {
        _this2.setState({ ready: true, resource: resource });
      }, function () {
        _this2.setState({ error: true });
      });
    }
  }]);

  return Image;
}(_react.Component);

Image.propTypes = {
  Animation: _propTypes2.default.any.isRequired,
  Frame: _propTypes2.default.any.isRequired,
  Loading: _propTypes2.default.any.isRequired,
  createLoader: _propTypes2.default.any.isRequired,
  createResponsive: _propTypes2.default.any.isRequired,

  theme: _propTypes2.default.any.isRequired,
  classes: _propTypes2.default.any.isRequired,

  animate: _propTypes2.default.bool,
  show: _propTypes2.default.bool,
  animation: _propTypes2.default.object,

  layer: _propTypes2.default.oneOf(['primary', 'secondary', 'header', 'control', 'success', 'alert', 'disabled']),

  /**
   * If the resources should be loaded.
   */
  loadResources: _propTypes2.default.bool,

  /**
   * The image resource or the images resources according to device viewport.
   */
  resources: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.shape({
    small: _propTypes2.default.string.isRequired,
    medium: _propTypes2.default.string.isRequired,
    large: _propTypes2.default.string.isRequired,
    xlarge: _propTypes2.default.string.isRequired
  })]).isRequired,

  /**
   * i18n messages.
   */
  i18n: _propTypes2.default.shape({
    error: _propTypes2.default.string
  }),

  /**
   * Props to pass down to the `<img />` element.
   */
  imgProps: _propTypes2.default.object,

  /**
   * If function, receives the animation status object.
   */
  children: _propTypes2.default.any
};
Image.defaultProps = {
  Animation: _Animation2.default,
  Frame: _Frame2.default,
  Loading: _Loading2.default,
  createLoader: _createLoader2.default,
  createResponsive: _createResponsive2.default,
  show: true,
  layer: 'primary',
  loadResources: true,
  i18n: {
    error: 'Image error'
  },
  imgProps: {}
};
exports.default = Image;