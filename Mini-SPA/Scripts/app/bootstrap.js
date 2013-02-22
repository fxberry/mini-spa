$(document).ready(function () {

    $.when(datacontext.fetch())
    	.done(function () {

    		vmContentList.init();

    		binder.bind();

    		//var data = {
    		//	messages: ko.observableArray()
    		//};
			
    		//datacontext.messages.getData({ results: data.messages });

    		
    	}
    );
	
	//ko.applyBindings(config, $("#navigation").get(0));

	router.registerRouter(config.routes);
	router.setStartupRouteAndRun(config.startupUrl);

});
