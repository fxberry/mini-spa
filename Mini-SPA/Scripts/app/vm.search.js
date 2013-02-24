var vmSearch = function () {
	var filter = ko.observable();
	var messages = ko.observableArray();

	var init = function() {
		datacontext.messages.getData({ results: messages });
	};

	this.filteredItems = ko.computed(function () {
		
		var filterText = filter();
		if (!filterText) {
			return messages();
		} else {
			return messages();
			//return ko.utils.arrayFilter(messages(), function (message) {
			//	return ko.utils.stringStartsWith(message.subject(), filterText);
			//});
		}
	});

	init();

	return {
		filter: filter,
		messages: filteredItems,
		init: init
	};

}();