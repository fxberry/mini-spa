define('utils',
	[],
	function () {

		var hasProperties = function (obj) {
			for (var prop in obj) {
				if (obj.hasOwnProperty(prop)) {
					return true;
				}
			}
			return false;
		},
		mapToArray = function(items) {
			var underlyingArray = [];
			for (var prop in items) {
				if (items.hasOwnProperty(prop)) {
					underlyingArray.push(items[prop]);
				}
			}
			return underlyingArray;
		};

		return {
			hasProperties: hasProperties,
			mapToArray: mapToArray
		};
});