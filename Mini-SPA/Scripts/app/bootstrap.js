$(document).ready(function () {

	//var alertMessages = function(result) {
	//	console.log(result);

	//	ko.applyBindings({ messages: result }, $("#content-list").get(0));
	//};

	$.when(datacontext.fetch())
		.done(function(result) {
			ko.applyBindings({ messages: result }, $("#content-list").get(0));
		}
	);

	//$.when(dataservice.getMessages(alertMessages, function() { console.log('fail getMessages'); }));

	ko.applyBindings(config, $("#navigation").get(0));

	router.registerRouter(config.routes);
	router.setStartupRouteAndRun(config.startupUrl);

});
