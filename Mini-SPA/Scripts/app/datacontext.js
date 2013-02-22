var datacontext = function () {

	var mapToItems = function (dtoList, items) {
		$.each(dtoList, function (index, value) {
			items[index] = value;
		});
	};

	var entitySet = function (getFunction) {

		var items = [],

			getData = function (options) {
				return $.Deferred(function (def) {

					var results = options && options.results;
					if (!items || !utils.hasProperties(items)) {
					getFunction({
						success: function (dtoList) {
							mapToItems(dtoList, items);
							if (results) {
								results(items);
							}
							def.resolve(items);
						},
						error: function (response) {
							def.reject();
						}
					});
					} else {
						if (results) {
							results(items);
						}
					    def.resolve(items);
					}

				}).promise();
			};

		return {
			getData: getData,
			items: items
		};
	};

	var messages = new entitySet(dataservice.getMessages);

	var fetch = function () {

		return $.Deferred(function(def) {

			$.when(messages.getData())
				.done(
					function () {
						console.log('in fetch before resolve');
						def.resolve();
					})
				.fail(
					function () {
						console.log('in fetch before reject');
						def.reject();
					});

		}).promise();

	};

	return {
		fetch: fetch,
		messages: messages
	};


}();