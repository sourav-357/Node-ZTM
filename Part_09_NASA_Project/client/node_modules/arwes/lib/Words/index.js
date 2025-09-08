'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _withStyles = require('../tools/withStyles');

var _withStyles2 = _interopRequireDefault(_withStyles);

var _withSounds = require('../tools/withSounds');

var _withSounds2 = _interopRequireDefault(_withSounds);

var _Words = require('./Words');

var _Words2 = _interopRequireDefault(_Words);

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _withStyles2.default)(_styles2.default)((0, _withSounds2.default)()(_Words2.default));