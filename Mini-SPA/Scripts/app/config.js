
var config = function() {

	var startupUrl = '#/list';

	var allRoutes =
	[
		{
			routePath: '#/list',
			view: '#content-list',
		},
		{
			routePath: '#/detail',
			view: '#content-detail'
		}
	];

	return {
		startupUrl: startupUrl,
		routes: allRoutes,
	};

}