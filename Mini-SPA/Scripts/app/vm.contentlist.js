var vmContentList = function() {

	var messages = ko.observableArray();
	
	var init = function() {
		datacontext.messages.getData({ results: messages });
	};

	return {
		init: init,
		messages: messages
	};

}();