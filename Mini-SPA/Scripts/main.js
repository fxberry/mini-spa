(function () {
	var root = this;

	function define3rdPartyModules() {
		define('jquery', [], function () { return root.jQuery; });
		define('ko', [], function () { return root.ko; });
		define('sammy', [], function () { return root.Sammy; });
	}

	function boot() {
		require(['bootstrap'], function (bs) { bs.run(); });
	}
	
	define3rdPartyModules();
	boot();
	
})();