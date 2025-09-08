'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extend = require('extend');

var _extend2 = _interopRequireDefault(_extend);

var _sounds = require('./sounds');

var _sounds2 = _interopRequireDefault(_sounds);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Extend the default sounds with new properties.
 * @param  {Object} overwrite
 * @return {Object}
 */
exports.default = function (overwrite) {
  return (0, _extend2.default)(true, {}, _sounds2.default, overwrite);
};