var router = function () {

	var sammy;

	var init = function () {
		sammy = new Sammy.Application(function () { });
	};

	function hideAllContent() {
		$.each(config.routes, function (index, value) {
			$(value.view).hide();
		});
	}

	var registerRoutes = function (routes) {
		$.each(routes, function (index, value) {
			sammy.get(value.routePath, function (context) {
				hideAllContent();
				$(value.view).show();

				context.log('Routed to: ' + value.routePath);
			});
		});

	};

	var setStartupRouteAndRun = function (startupRoute) {
		// startuproute
		sammy.get('', function () {
			this.app.runRoute('get', startupRoute);
		});

		sammy.run();
	};

	init();

	return {
		registerRouter: registerRoutes,
		setStartupRouteAndRun: setStartupRouteAndRun
	};

}();