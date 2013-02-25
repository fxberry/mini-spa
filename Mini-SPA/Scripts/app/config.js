define('config',
	[],
	function () {

		var startupUrl = '#/list';

		var allRoutes =
		[
			{
				title: 'list',
				routePath: '#/list',
				view: '#content-list',
			},
			{
				title: 'search',
				routePath: '#/search',
				view: '#content-search'
			}
		];

		return {
			startupUrl: startupUrl,
			routes: allRoutes,
		};

	});