define('bootstrap',
	['jquery', 'config', 'binder', 'datacontext', 'router'],
	function ($, config, binder, datacontext, router) {

		var run = function() {
			$.when(datacontext.fetch())
				.done(function () {
					binder.bind();
				});

			router.registerRouter(config.routes);
			router.setStartupRouteAndRun(config.startupUrl);
		};

		return {
			run: run
		};

	});
