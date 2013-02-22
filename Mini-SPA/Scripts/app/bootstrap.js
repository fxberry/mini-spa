$(document).ready(function () {

    $.when(datacontext.fetch())
    	.done(function () {

    		var data = {
    			messages: ko.observableArray()
    		};
			
    		datacontext.messages.getData({ results: data.messages });
			
    		ko.applyBindings(data.messages , $("#content-list").get(0));
    	}
    );
	
	ko.applyBindings(config, $("#navigation").get(0));

	router.registerRouter(config.routes);
	router.setStartupRouteAndRun(config.startupUrl);

});
