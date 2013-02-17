$(document).ready(function() {

	function hideAllContent() {
		$.each(allRoutes, function (index, value) {
			$(value.view).hide();
		});
	}
	
	var sammy = new Sammy.Application(function() {});
	
	$.each(allRoutes, function (index, value) {
		sammy.get(value.routePath, function (context) {
			hideAllContent();
			$(value.view).show();

			context.log('Routed to: ' + value.routePath);

			//toastr.info('Routed to: ' + value.routePath, 'Route');
		});
	});

	// startuproute
	sammy.get('', function () {
		this.app.runRoute('get', startupUrl);
	});

	sammy.run();


});