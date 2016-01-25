/* eslint-env: node,mocha */
/* globals describe:false, it:false */
/* eslint prefer-arrow-callback:0, no-unused-expressions:0 */

var expect = require('chai').expect;
var betterSwitch = require('../better-switch.js');

describe('Module', function () {
  var cases = {
    foo: function () {
      return 'func1';
    },
    bar: function () {
      return {
        foo: 2,
      };
    },
    baz: null,
    default: function () {
      return 'default';
    },
  };

  it('should be a function', function () {
    expect(betterSwitch).to.be.a('function');
  });

  it('should resolve correct function', function () {
    var result = betterSwitch(cases, 'foo');
    expect(result).to.be.a('string');
    expect(result).to.equal('func1');
  });

  it('should return default for non matching keys', function () {
    var result = betterSwitch(cases, 'test');
    expect(result).to.equal('default');
  });

  it('should do nothing if no callback matches', function () {
    var result = betterSwitch({
      foo: function () {
        return 'baz';
      },
    }, 'testcase');
    expect(result).to.be.empty;
  });
});
