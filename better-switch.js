var _ = {
  isUndefined: require('lodash/isUndefined'),
  isFunction: require('lodash/isFunction'),
  isString: require('lodash/isString'),
  isObject: require('lodash/isObject'),
};

module.exports = function (key, map) {
  var action = map[key];
  var def = map.default;

  if (!_.isString(key)) {
    throw new TypeError('`key` parameter should be a string.');
  }

  if (!_.isObject(map)) {
    throw new TypeError('`map` parameter should be an object.');
  }

  if (_.isFunction(action)) {
    return action.call(this);
  }

  if (!_.isUndefined(action)) {
    return action;
  }

  if (_.isFunction(def)) {
    return def.call(this);
  }
  return def;
};
