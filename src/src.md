> ###Using this boilerplate:
> 1. Download and extract ([zip](https://github.com/${p.author.github}/${p.name}/archive/v${p.version}.zip) or [tar.gz](https://github.com/${p.author.github}/${p.name}/archive/v${p.version}.tar.gz))
> 2. Update `package.json` with your new package details
> 3. Write your awesome package
> 4. `npm start` to build
> 5. Commit and pubish your package
>
> ###Features:
> * `npm start` builds your JS, documentation, and demos with templated strings
> * AMD, Node/CommonJS, and browser global module pattern
> * A minimal and tidy approach to repo structure

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