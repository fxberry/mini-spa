var datacontext = function () {

	var mapToItems = function (dtoList, items, mapper) {
		$.each(dtoList, function (index, value) {
			var id = mapper.getDtoId(value);
			//mapper.fromDto(value);
			items[id] = mapper.fromDto(value);
		});
	};

	var entitySet = function (getFunction, mapper) {

		var items = [],

			getData = function (options) {
				return $.Deferred(function (def) {

					var results = options && options.results;
					if (!items || !utils.hasProperties(items)) {
						getFunction({
							success: function (dtoList) {
								mapToItems(dtoList, items, mapper);
								if (results) {
									results(utils.mapToArray(items));
								}
								def.resolve(items);
							},
							error: function (response) {
								def.reject();
							}
						});
					} else {
						if (results) {
							var array = utils.mapToArray(items);
							results(array);
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

	var messages = new entitySet(dataservice.getMessages, modelmapper);

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