/** [ツ] ${p.name}
	@version	${p.version}
	@url		${p.homepage}
	@author		${p.author.name} [${p.author.email}] @${p.author.twitter}
	@license	${p.license}
	@see		https://github.com/replete/javascript-module-patterns
*/
/*	globals		define */
(function (root, factory) {

	var modules = ['dependency1', 'dependency2', 'underscore'];
	var globals = ['dep1', 'd2', '_'];

	if (typeof define === 'function' && define.amd) {
		/* AMD Module */
		define(modules, factory);
	} else if (typeof module === 'object' && module.exports) {
		/* CommonJS (Non-strict, like Node) Module */
		module.exports = factory.apply(root, modules.map(require));
	} else {
		/* Browser Global */
		root.awesomeModule = factory.apply(root, globals.map(eval));
	}
} (this, function (dep1, d2, _) {

	function awesomeModule(callback) {
		// Do stuff requiring dep1, d2, _
		var response = Math.random() + Date.now();

		return callback(response);
	}
	return awesomeModule;

}));