if(! jQuery){
	alert('Ackbar! jQuery not loaded!');
} else {

console.log('Dependencies loaded!');

// Double check for Console debugging support.
if (typeof console == 'undefined') 
{
	var console = {};
	console.log = function(msg) {
		return;
	};
}

var htmlFiles = [];
var div = '<div>Hello</div>';

console.log("To start I have: " + htmlFiles.length + " HTML files.");

$.getJSON('Inventory.php?json_callback=?', null, caller);

function caller(data)
{
	for(i = 0; i < data.length; i++)
	{
		htmlFiles.push(data[i].filename);
	}
}

function addListItem(item)
{
	$('ul#hi').append('<li><a href="' + item + '">' + item + '</a></li>');
}

function loadList(filenames)
{
	console.log("there is " + filenames.length);
	for(i = 0; i < filenames.length; i++)
	{
		addListItem(filenames[i]);
	}
}

// And here we go
$(function()
{	
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
	
	$('#inv_file').click(function()
	{
		// Load the JSON
		$('body').append('<ul id="hi"></ul>');
		loadList(window.htmlFiles);
		console.log('Click got: ' + window.htmlFiles);
	});
});

}