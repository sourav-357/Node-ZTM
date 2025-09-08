'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Map the name and the properties in an object.
 * This is used to map CSS rules as plain objects.
 * @param  {Object} obj - The props.
 * @param  {Function} map - The mapper.
 * @return {Object}
 */
var mapProps = exports.mapProps = function mapProps(obj) {
  var map = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};


  var newObj = {};
  var props = Object.keys(obj || {});

  if (!props.length) return {};

  var current = props.map(function (name) {
    return {
      name: name,
      value: obj[name]
    };
  });

  var updated = current.map(function (prop) {
    return map(prop.name, prop.value);
  });

  updated.forEach(function (prop) {
    newObj[prop.name] = prop.value;
  });

  return newObj;
};

/**
 * Get active resource from responsive list.
 * @param  {String|Object} resources - The path to the resource or the resources
 * by responsiveness.
 * @param  {Object} responsive - The current responsive status.
 * @return {String} - The selected resource.
 */
var getResponsiveResource = exports.getResponsiveResource = function getResponsiveResource(resources) {
  var responsive = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};


  var resource = null;

  if (typeof resources === 'string') {
    resource = resources;
  } else if (resources) {
    var small = responsive.small,
        medium = responsive.medium,
        large = responsive.large;

    resource = small ? resources.small : medium ? resources.medium : large ? resources.large : resources.xlarge;
  }

  return resource;
};