$(document).ready(function () {

	var alertMessages = function(result) {
		console.log(result);
	};


	dataservice.getMessages(alertMessages, function() { console.log('fail getMessages') });

	router.registerRouter(config.routes);
	router.setStartupRouteAndRun(config.startupUrl);

});
