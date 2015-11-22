> ###Using this boilerplate:
> * Update `package.json` _correctly_
> * Write your awesome package
> * `npm start` to build
> * Commit, Publish, Repeat

[![npm version](https://badge.fury.io/js/javascript-package-boilerplate.svg)](https://badge.fury.io/js/javascript-package-boilerplate)
# javascript-package-boilerplate - 1.0.0
Boilerplate for Javascript packages. Includes ES6 template compilation for src code/docs/demo/license.

## Environment Support
* AMD, Node (or similar non-strict CommonJS), Browsers

## Demo
[javascript-package-boilerplate (1.0.0) demo](http://replete.github.com/javascript-package-boilerplate)

## Usage
Exposed as the global `awesomeModule`:
```js
awesomeModule(awesomeCallback);
function awesomeCallback(result) {
	document.getElementById('value').textContent = result;
}
```
As an AMD module:
```js
var awesomeModule = require('awesomeModule');

awesomeModule(awesomeCallback);
function awesomeCallback(result) {
	document.getElementById('value').textContent = result;
}
```

## License
MIT

Copyright (c) 2015 Phil Ricketts