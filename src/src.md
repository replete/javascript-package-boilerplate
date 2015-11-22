> ###Using this boilerplate:
> * Update `package.json` _correctly_
> * Write your awesome package
> * `npm start` to build
> * Commit, Publish, Repeat

[![npm version](https://badge.fury.io/js/${p.name}.svg)](https://badge.fury.io/js/${p.name})
# ${p.name} - ${p.version}
${p.description}

## Environment Support
* AMD, Node (or similar non-strict CommonJS), Browsers

## Demo
[${p.name} (${p.version}) demo](http://${p.author.github}.github.com/${p.name})

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
${p.license}

${license}