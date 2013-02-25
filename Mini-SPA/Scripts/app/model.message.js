define('model.message',
	['ko'],
	function(ko) {

		var Message = function() {
			var self = this;
			self.id = ko.observable();
			self.subject = ko.observable();
			self.body = ko.observable();
			self.isRead = ko.observable();

			return self;
		};

		return Message;
	});