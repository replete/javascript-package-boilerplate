/**[ツ] javascript-package-boilerplate
	Boilerplate for Javascript packages. Includes ES6 template compilation for src code/docs/demo/license.
	@version	1.0.4
	@url		https://github.com/replete/javascript-package-boilerplate#readme
	@author		Phil Ricketts <phil@replete.nu> @replete
	@license	MIT
	@module		javascript-package-boilerplate
*/
/*	globals		define */
(function (root, factory) {

	/** 
	 * Global Class name
	 * @example ['underscore','backbone','utils']
	 */
	var name = 'awesomeModule';	
	/** 
	 * Module dependencies 
	 * @example ['underscore','backbone','utils']
	 */
	var modules = [];
	/** 
	 * Global property names for module dependencies
	 * @example ['_','$','utils']
	 */
	var globals = [];

	if (typeof define === 'function' && define.amd) {
		/** AMD Module */
		define(modules, factory);
	} else if (typeof module === 'object' && module.exports) {
		/** CommonJS (Non-strict, like Node) Module */
		module.exports = factory.apply(root, modules.map(require));
	} else {
		/** Browser Global */
		root[name] = factory.apply(root, globals.map(eval));
	}

} (this, function() {

	/** 
	 * @class 
	 * @alias module:javascript-package-boilerplate
	 */
	function constructor(callback) {
		// Do stuff requiring dependencies
		var response = Math.random() + Date.now();

		return callback(response);
	}

	return constructor;
}));