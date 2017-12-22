$('.delete-link').click(function(e){
	e.preventDefault();
	console.log('gfkhgk');
	$.ajax({
		url: $(this).attr('href'),
		method: 'DELETE'
	}).done(function(data){
		console.log('ccccccccc');
		window.location.href = '/teams';
	});
});
