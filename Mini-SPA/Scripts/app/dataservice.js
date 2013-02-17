
var dataservice = function () {


	var messagesUrl = 'api/Messages';

	var getMessages = function(successCallback, errorCallback) {

		$.ajax({
			dataType: "json",
			url: messagesUrl,
			success: successCallback,
			error: errorCallback,
		});

	};


	return {
		getMessages: getMessages
	};


}();