var binder = function() {

	var bind = function() {
		ko.applyBindings(vmContentList.messages, $("#content-list").get(0));
		ko.applyBindings(vmSearch, $("#content-search").get(0));
		ko.applyBindings(config, $("#navigation").get(0));
	};	

	return {
		bind: bind
	};

}();