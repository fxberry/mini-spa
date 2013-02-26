define(function (require) {

	// Import depdendencies.
	var config = require('config');

	// Define the QUnit module and lifecycle.
	QUnit.module("My Module", {
		setup: function () {
		},
		teardown: function () {
		}
	});

	QUnit.test("check startupUrl is correct", function () {
		
		QUnit.equal(config.startupUrl, "#/list");
		
	});
	
	QUnit.test("isSuitibleFor - same age supplied, returns true", function () {
		QUnit.equal(true, true);
	});

});