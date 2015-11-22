> [![npm version](https://badge.fury.io/js/${p.name}.svg)](https://badge.fury.io/js/${p.name})
> __Using this boilerplate:__
> * Just run `npm start` after your first `npm install`.
> * More features in the works...
> * You can now delete this bit.

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
	function awesomeCallback(str) {
		document.getElementById('value').textContent = str + Math.random();
	}
```
As an AMD module:
```js
	var awesomeModule = require('awesomeModule');
	awesomeModule(awesomeCallback);
	function awesomeCallback(str) {
		document.getElementById('value').textContent = str + Math.random();
	}
```

## License
${p.license}

${license}