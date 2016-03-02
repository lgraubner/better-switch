/* eslint-env: node,mocha */
/* globals describe:false, it:false */
/* eslint prefer-arrow-callback:0, no-unused-expressions:0 */

var expect = require('chai').expect;
var betterSwitch = require('../better-switch.js');

describe('Module', function () {
  var obj = {
    foo: function () {
      return 'func1';
    },
    bar: {
      foo: 2,
    },
    baz: null,
    default: function () {
      return 'default';
    },
  };

  it('should be a function', function () {
    expect(betterSwitch).to.be.a('function');
  });

  it('should resolve correct', function () {
    var result = betterSwitch('bar', obj);
    expect(result).to.be.an('object');
    expect(result).to.eql({
      foo: 2,
    });
  });

  it('should execute functions', function () {
    var result = betterSwitch('foo', obj);
    expect(result).to.be.a('string');
    expect(result).to.equal('func1');
  });

  it('should return default for non matching keys', function () {
    var result = betterSwitch('test', obj);
    expect(result).to.equal('default');
  });

  it('should return undefined if no callback matches', function () {
    var result = betterSwitch('testcase', {
      foo: function () {
        return 'baz';
      },
    });
    expect(result).to.be.undefined;
  });
});
