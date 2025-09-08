'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _detectNode = require('detect-node');

var _detectNode2 = _interopRequireDefault(_detectNode);

var _getDimensions = require('../get-dimensions');

var _getDimensions2 = _interopRequireDefault(_getDimensions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Create a handler for responsive functionalities.
 * @param  {Object} depencencies - Depencencies.
 * @param  {Function} depencencies.getTheme - Inject the theme settings.
 * @param  {Function} depencencies.getDimensions - Inject the get dimensions tool.
 * @return {Object} - Handler.
 */
exports.default = function (depencencies) {
  var deps = _extends({
    getTheme: function getTheme() {
      return {};
    },
    getDimensions: _getDimensions2.default
  }, depencencies);
  return {

    /**
     * Get the current responsive stats.
     * @return {Object} { small: Boolean, medium: Boolean, large: Boolean }
     */
    get: function get() {

      var theme = deps.getTheme();

      var _deps$getDimensions = deps.getDimensions(),
          width = _deps$getDimensions.width;

      var _theme$responsive = theme.responsive,
          small = _theme$responsive.small,
          medium = _theme$responsive.medium,
          large = _theme$responsive.large;


      if (width <= small) {
        return { small: true, status: 'small' };
      } else if (width <= medium) {
        return { medium: true, status: 'medium' };
      } else if (width <= large) {
        return { large: true, status: 'large' };
      }

      return { xlarge: true, status: 'xlarge' };
    },


    /**
     * Register a on resize window callback to know when the current browser viewport
     * dimentions make the breakpoint change.
     * @param  {Function} callback - It's called on every change on the breakpoint
     * and receives and object defining the current viewport size.
     * @return {Function} The event listener.
     */
    on: function on(callback) {
      var _this = this;

      var current = this.get();
      var state = current.status;

      var onChange = function onChange() {
        var stats = _this.get();
        if (stats.status !== state) {
          callback(stats);
          state = stats.status;
        }
      };

      if (!_detectNode2.default) {
        window.addEventListener('resize', onChange, false);
      }

      return onChange;
    },


    /**
     * Turns off a window on resize callback previously created.
     * @param  {Function} - The event callback.
     */
    off: function off(onChange) {
      if (!_detectNode2.default) {
        window.removeEventListener('resize', onChange, false);
      }
    }
  };
};