$(document).ready(function () {

    $.when(datacontext.fetch())
    	.done(function () {

    		var data = {
    			messages: ko.observableArray()
    		};
			
			

    		datacontext.messages.getData({ results: data.messages });
			
    		var arrayed = utils.mapToArray(datacontext.messages.items);

    		//console.log('messages: ' + data.messages.length);
    		ko.applyBindings({ messages: arrayed }, $("#content-list").get(0));
    	}
    );

	//var valArr = [
	//	{ subject: "Bungle", body: "Bear", isRead: false },
	//	{ subject: "aa", body: "Beeear", isRead: false },
	//	{ subject: "dfd", body: "asd", isRead: false }
	//];

	//var mmessages = ko.observableArray(valArr);


	//datacontext.messages.getData({ results: data.messages });

	//utils.mapToArray(datacontext.messages.items);

	//console.log('messages: ' + data.messages.length);
	//ko.applyBindings({ messages: mmessages }, $("#content-detail").get(0));


	ko.applyBindings(config, $("#navigation").get(0));

	router.registerRouter(config.routes);
	router.setStartupRouteAndRun(config.startupUrl);

});
