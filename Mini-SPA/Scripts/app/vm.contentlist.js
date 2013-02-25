define('vm.contentlist',
	['ko', 'datacontext'],
	function (ko, datacontext) {

		var messages = ko.observableArray();

		var init = function () {
			datacontext.messages.getData({ results: messages });
		};

		init();

		return {
			init: init,
			messages: messages
		};

	});