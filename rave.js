/** @license MIT License (c) copyright 2014 original authors */
/** @author Brian Cavalier */
/** @author John Hann */

var json = require('curl/plugin/json');

exports.create = create;

function create (context) {
	var info = {
		name: 'curl/plugin/json',
		module: json
	};
	if (!context.amdPluginMap) context.amdPluginMap = {};
	context.amdPluginMap['json']
		= context.amdPluginMap['curl/plugin/json']
		= info;
}
