/**[ツ] ${p.name}
	${p.description}
	@version	${p.version}
	@url		${p.homepage}
	@author		${p.author.name} <${p.author.email}> @${p.author.twitter}
	@license	${p.license}
	@module		${p.name}
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
	 * @alias module:${p.name}
	 */
	function constructor(callback) {
		// Do stuff requiring dependencies
		var response = Math.random() + Date.now();

		return callback(response);
	}

	return constructor;
}));