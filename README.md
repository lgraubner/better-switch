# Better switch statement

[![Travis](https://img.shields.io/travis/lgraubner/better-switch.svg)](https://travis-ci.org/lgraubner/better-switch) [![David](https://img.shields.io/david/lgraubner/better-switch.svg)](https://david-dm.org/lgraubner/better-switch) [![David Dev](https://img.shields.io/david/dev/lgraubner/better-switch.svg)](https://david-dm.org/lgraubner/better-switch#info=devDependencies) [![npm](https://img.shields.io/npm/v/better-switch.svg)](https://www.npmjs.com/package/better-switch)

The native Javascript switch statement doesn't really fit into the common coding style of Javascript code. Therefore this module aims to handle such use cases in a more intuitive way. **This module does not offer the "fall-through" mechanism of a native switch statement.**

## Usage

```Bash
npm install -S better-switch
```

Pass an object as first argument. The `default` part will be executed in case nothing else matches. If `default` is not specified and nothing matches it will return `undefined`.

```JavaScript
var betterSwitch = require('better-switch');

var map = {
  foo: function () {
    return 'bar';
  },
  baz: 42,
  default: 'default'
};

var result = betterSwitch('foo', map); // => bar
```

The associated value can be of any type. If it is a function it will be executed and the result returned. With ES2015 you can make it even clearer:

```JavaScript
const baz = 42,
const map = {
  foo: () => 'bar',
  baz,
  default: 'default'
};
const result = betterSwitch('baz', map); // => 42
```

If you want to return a function you have to wrap it in a function. This is required, because otherwise the function will be executed.

```JavaScript
const map = {
  func: function() {
    return function() {
      // do stuff
    }
  }
}
```
