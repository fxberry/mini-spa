
var dataservice = function () {


	var messagesUrl = 'api/Messages';

	var getMessages = function(callbacks) {

		return $.ajax({
			dataType: "json",
			url: messagesUrl,
			success: callbacks.success,
			error: callbacks.error
		});

	};


	return {
		getMessages: getMessages
	};


}();