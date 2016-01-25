# Better switch statement

[![Travis](https://img.shields.io/travis/lgraubner/better-switch.svg)](https://travis-ci.org/lgraubner/better-switch) [![David](https://img.shields.io/david/lgraubner/better-switch.svg)](https://david-dm.org/lgraubner/better-switch) [![David Dev](https://img.shields.io/david/dev/lgraubner/better-switch.svg)](https://david-dm.org/lgraubner/better-switch#info=devDependencies) [![npm](https://img.shields.io/npm/v/better-switch.svg)](https://www.npmjs.com/package/better-switch)

The native Javascript switch statement doesn't really fit into the common coding style of Javascript code. Therefore this module aims to handle such use cases in a more intuitive way. **This module does not offer the "fall-throgh" mechanism of a native switch statement.**

## Usage

```Bash
npm install --save better-switch
```

Pass an object of cases as first argument. The `default` part will be executed in case nothing else matches.

```JavaScript
var betterSwitch = require('better-switch');

var cases = {
  foo: function () {
    return 'bar';
  },
  default: function () {
    return 'default';
  }
};

console.log(betterSwitch(cases, 'foo')); // => bar
```

Optionally you can pass a context as third argument, to call functions in a specific context.