
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
			title: 'unread',
			routePath: '#/unread',
			view: '#content-unread-list'
		}
	];

	return {
		startupUrl: startupUrl,
		routes: allRoutes,
	};

}();