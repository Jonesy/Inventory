$(function(){
	console.log('loaded!');
	
	$.getJSON('Inventory.php', function(data){
		$.each(data, function(i, item){
			console.log("JSON: " + item.filename);
		});
		
	})
});