define('binder',
	['jquery', 'ko', 'config', 'vm.contentlist', 'vm.search'],
	function ($, ko, config, vmContentList, vmSearch) {

	var bind = function() {
		ko.applyBindings(vmContentList, $("#content-list").get(0));
		ko.applyBindings(vmSearch, $("#content-search").get(0));
		ko.applyBindings(config, $("#navigation").get(0));
	};	

	return {
		bind: bind
	};

});