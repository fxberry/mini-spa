define('modelmapper',
	['ko', 'model.message'],
	function (ko, MessageModel) {

		var message = {
			getDtoId: function (dto) { return dto.id; },
			fromDto: function (dto) {
				//item = item || new messageModel().id(dto.id);
				var item = new MessageModel();
				item.id(dto.id)
					.subject(dto.subject)
					.body(dto.body)
					.isRead(dto.isRead);
				return item;
			}
		};

		return message;
	});