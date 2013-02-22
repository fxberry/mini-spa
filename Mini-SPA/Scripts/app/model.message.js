var MessageModel = function () {

	//var message = function () {
		var self = this;
		self.id = ko.observable();
		self.subject = ko.observable();
		self.body = ko.observable();
		self.isRead = ko.observable();
		
		return self;
	//};

	//return message;
}