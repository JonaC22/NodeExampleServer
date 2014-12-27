$(function() {
	$('#loginInput').click(function(e){

		e.preventDefault();
		console.log('input clicked');

		var data = {};
		data.title = "POST";
		data.message = "login OK";

		$.ajax({
			type: 'POST',
			data: JSON.stringify(data),
			contentType: 'application/json',
			url: '/',						
			success: function(data) {
				console.log('success');
				console.log(JSON.stringify(data));
			}
		});
	})
});