
var config = function() {

	var startupUrl = '#/list';

	var allRoutes =
	[
		{
			title: 'list',
			routePath: '#/list',
			view: '#content-list',
		},
		{
			title: 'detail',
			routePath: '#/detail',
			view: '#content-detail'
		}
	];

	return {
		startupUrl: startupUrl,
		routes: allRoutes,
	};

}();