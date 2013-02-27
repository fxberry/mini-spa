define(function (require, qUnit) {


	// Import depdendencies.
	var sut = require('config');
	var vmSearch = require('vm.search');

	// Define the QUnit module and lifecycle.
	QUnit.module("VM Search Tests", {
		setup: function () {
		},
		teardown: function () {
		}
	});

	QUnit.test("check startupUrl is correct", function () {
		
		QUnit.equal(sut.startupUrl, "#/list");
		
	});
	
	QUnit.test("Viewmodel is not undefined", function () {

		QUnit.ok(vmSearch != undefined);

	});

	QUnit.asyncTest("contains data", function () {
		expect(1);

		//vmSearch.init();

		//setTimeout(function () {
			//ok(true, "Passed and ready to resume!");
			
			ok(vmSearch.messages().length > 0);
			start();
		//}, 1000);

	});

	
	QUnit.test("dummy test true=true", function () {
		QUnit.equal(true, true);
	});

});