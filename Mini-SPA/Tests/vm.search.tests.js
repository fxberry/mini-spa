define('dataservice', [], function () {
	var messages =
	[
		{ id: 1, subject: 'first message', body: 'testbody', isRead: false },
		{ id: 2, subject: 'second message', body: 'testbody', isRead: false }
	];

	var getMessages = function(callbacks) {
		callbacks.success(messages);
	};
	return { getMessages: getMessages };

});


define(function (require, qUnit) {

	// Import depdendencies.
	var config = require('config');
	var vmSearch = require('vm.search');
	
	// Define the QUnit module and lifecycle.
	QUnit.module("VM Search Tests", {
		setup: function () {
		},
		teardown: function () {
		}
	});

	QUnit.test("sanity test true=true", function () {
		equal(true, true);
	});

	QUnit.test("check correct startupUrl is correct", function () {
		deepEqual(config.startupUrl, "#/list");
	});
	
	QUnit.test("Viewmodel is not undefined", function () {
		ok(vmSearch != undefined);
	});

	QUnit.asyncTest("Viewmodel messages contains two messages", function () {
		expect(1);
		
		ok(vmSearch.messages().length == 2);
	});
	
	QUnit.test("First subject contains hello", function () {
		expect(1);

		equal('first message', vmSearch.messages()[0].subject());
	});

	QUnit.test("filter startswith test", function () {
		vmSearch.filter('first');

		equal(1, vmSearch.messages().length);
	});

});