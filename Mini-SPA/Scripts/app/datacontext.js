var datacontext = function() {


	var fetch = function() {

		return $.Deferred(function(def) {

			$.when(
				dataservice.getMessages()).done(def.resolve()).fail(console.log('asdf'));

			//	success: function (dtoList) {
			//		items = mapToContext(dtoList, items, results, mapper, filter, sortFunction);
			//		def.resolve(results);
			//	},
			//error: function (response) {
			//	logger.error(config.toasts.errorGettingData);
			//	def.reject();
			//}
			//)
			//.fail(function() { def.reject(); });
			//.done(function() { def.resolve(); });

		}).promise();

	};

	return {
		fetch: fetch
	};


}();