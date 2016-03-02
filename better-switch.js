var _ = {
  isUndefined: require('lodash/isUndefined'),
  isFunction: require('lodash/isFunction'),
};

module.exports = function (value, map) {
  var action = map[value];

  if (!_.isUndefined(action)) {
    if (_.isFunction(action)) {
      return map[value].call(this);
    }
    return map[value];
  } else if (!_.isUndefined(map.default)) {
    return map.default.call(this);
  }

  return undefined;
};
