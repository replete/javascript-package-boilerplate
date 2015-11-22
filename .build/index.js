/** [ツ] javascript-package-boilerplate
	@url		http://github.com/replet/javascript-package-boierplate
	@author		Phil Ricketts [phil@replete.nu] @twitter
	@license	MIT
*/
var fs = require('fs');
var minify = js => require('uglify-js').minify(js,{
		fromString: true,
		output: { comments: /^(\*)/ }
	}).code;

var p = require('../package');
var license, prismjs, prismcss;


function build() {

	// Javascript:
	fs.readFile('src/src.js', 'utf8', function (err, data) {
		data = data.toTemplate();
		fs.writeFile(p.main + '.js', data);
		data = minify(data);

		fs.writeFile(p.main + '.min.js', data);
	});

	// Documentation:
	fs.readFile('src/src.md', 'utf8', function (err, data) {
		license = fs.readFileSync('src/src.license','utf8');
		license = license.toTemplate();
		fs.writeFileSync('LICENSE', license);
		license = license.replace(/\n/g,'<br/>');
		demo(); //TODO: Not the tidiest way of dealing with async

		fs.writeFile('README.md', data.toTemplate());
	});

	// Demo:
	var demo = function(){
		fs.readFile('src/src.html', 'utf8', function (err, data) {
			prismjs = minify(fs.readFileSync('node_modules/prismjs/prism.js','utf8'), false);
			prismcss = fs.readFileSync('node_modules/prismjs/themes/prism.css','utf8');
			
			fs.writeFile('index.html', data.toTemplate());
		});
	}
}

//TOOD: Incomplete
function release(version) {
	var exec = require('child_process').execFileSync;

	version = version || 'minor';
	console.log('version bump type:', version);
	console.log('current package.json version:', p.version);

	try {
		exec('npm', ['version', version]);
	} catch (err) {
		return false;
	}

	console.log('new package.json version:', require('./package.json').version);

	// TODO:
	// bump npm version
	// confirm version (y/n)
	// make
	// commit automatically - description of changes since last release
	// tag
	// wait?
	// npm publish

}

// TODO: Messy
// Method for rendering normal strings as if they were ES6 `template strings like ${this}`
String.prototype.toTemplate = function() { return this.replace(/(\$\{.*?\})/g, m => eval('`'+m+'`')) };

build();

switch (process.argv[2]) {
	case 'release': release(process.argv[3]); break;
}