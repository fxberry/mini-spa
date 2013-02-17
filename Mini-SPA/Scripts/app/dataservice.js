
var dataservice = function () {


	var messagesUrl = 'api/Messages';

	var getMessages = function() {

		return $.ajax({
			dataType: "json",
			url: messagesUrl,
		});

	};


	return {
		getMessages: getMessages
	};


}();