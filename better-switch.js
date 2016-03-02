var _ = {
  isUndefined: require('lodash/isUndefined'),
  isFunction: require('lodash/isFunction'),
};

module.exports = function (value, map) {
  var action = map[value];
  var def = map.default;

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
