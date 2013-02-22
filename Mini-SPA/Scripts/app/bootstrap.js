$(document).ready(function () {

	$.when(datacontext.fetch())
		.done(function () {

			//var data = {
			//	messages: ko.observableArray(datacontext.messages.items)
			//};

			//datacontext.messages.getData({ results: data.messages });
			//console.log('messages: ' + data.messages.length);
			ko.applyBindings({ messages: datacontext.messages.items }, $("#content-list").get(0));
		}
	);
	

	ko.applyBindings(config, $("#navigation").get(0));

	router.registerRouter(config.routes);
	router.setStartupRouteAndRun(config.startupUrl);

});
