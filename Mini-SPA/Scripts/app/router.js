$(document).ready(function() {

	var startupUrl = '#/list';


	var sammy = new Sammy.Application(function() {

		this.get('#/list', function (context) {
			context.log('list');
		});
		

		this.get('#/detail', function (context) {
			context.log('detail');
		});

		this.get('', function () {
			this.app.runRoute('get', startupUrl);
		});
		
	});
	
	sammy.run();


});