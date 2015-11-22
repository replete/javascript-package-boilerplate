> ###Using this boilerplate:
> 1. Download and extract ([zip](https://github.com/replete/javascript-package-boilerplate/archive/v1.0.1.zip) or [tar.gz](https://github.com/replete/javascript-package-boilerplate/archive/v1.0.1.tar.gz))
> 2. Update `package.json` with your new package details
> 3. Write your awesome package
> 4. `npm start` to build
> 5. Commit and pubish your package
>
> ###Features:
> * `npm start` builds your JS, documentation, and demos with templated strings
> * AMD, Node/CommonJS, and browser global module pattern
> * A minimal and tidy approach to repo structure

[![npm version](https://badge.fury.io/js/javascript-package-boilerplate.svg)](https://badge.fury.io/js/javascript-package-boilerplate)
# javascript-package-boilerplate - 1.0.1
Boilerplate for Javascript packages. Includes ES6 template compilation for src code/docs/demo/license.

## Environment Support
* AMD, Node (or similar non-strict CommonJS), Browsers

## Demo
[javascript-package-boilerplate (1.0.1) demo](http://replete.github.com/javascript-package-boilerplate)

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

Copyright (c) 2015 Phil Ricketts<br/><br/>Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:<br/><br/>The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.<br/><br/>THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.