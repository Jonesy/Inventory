if(! jQuery){
	alert('Ackbar! jQuery not loaded!');
} else {

// Double check for Console debugging support.
if (typeof console == 'undefined') 
{
	var console = {};
	console.log = function(msg) {
		return;
	};
}

// And here we go
$(function(){
	var htmlfiles = [1, 3];
	console.log('Dependencies loaded!');
	
	// Write the button
	$('body').prepend('<div id="inv_file">+</div>');
	$('#inv_file').css({
		'padding': 10,
		'position': 'absolute',
		'top': 10,
		'right': 10,
		'background': 'rgba(0,0,0,.5)',
		'border-bottom': '1px solid #000',
		'font-family': 'Helvetica',
		'font-size': '21px',
		'font-weight': 'bold',
		'color': '#000',
		'text-shadow': '0px 1px 1px #fff',
		'-webkit-border-radius': 5
	});
	$('#inv_file').click(function(){
		// Load the JSON
		$.getJSON('Inventory.php?json_callback=?', function(data)
		{
			$.each(data, function(i, item){
				var htmlfiles = '<a href="' + item.filename + '">'
				+ item.filename
				+ '</a>';
				$('body').append(htmlfiles);
				console.log("JSON: " + htmlfiles);
				
			});
		});
	});
});

}