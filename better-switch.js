var _ = {
  isUndefined: require('lodash/isUndefined'),
  isFunction: require('lodash/isFunction'),
};

module.exports = function (cases, value, context) {
  var func = cases[value];
  var root = context || this;
  if (!_.isUndefined(func)) {
    if (!_.isFunction(func)) {
      throw new Error('Callback is not a function!');
    }
    return cases[value].call(root);
  } else if (!_.isUndefined(cases.default)) {
    return cases.default.call(root);
  }
};
