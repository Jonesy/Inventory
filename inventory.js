//
// Test to see if jQuery loaded.
// TODO
// * Remove dependency on jQuery
// ------------------------------------------------
console.log('Dependencies loaded!');

//
// Double check for Console debugging support.
// ------------------------------------------------
if (typeof console == 'undefined') 
{
	var console = {};
	console.log = function(msg) {
		return;
	};
}

//
// Starting Up...
// ------------------------------------------------
var htmlFiles = [];

$.getJSON('Inventory.php?json_callback=?', loader);

//
// Gathering basic functions
// ------------------------------------------------
// Grab the JSON
function loader(data)
{
	for(i = 0; i < data.length; i++)
	{
		htmlFiles.push(data[i].filename);
	}
	$('body').append('<ul id="inv_files" style="display: none;"></ul>');
	loadList(window.htmlFiles);
}

function addListItem(item)
{
	$('ul#inv_files').append('<li><a href="' + item + '">' + item + '</a></li>');
}

function loadList(filenames)
{
	console.log("Found -- " + filenames.length + " -- files: \n " +filenames);
	for(i = 0; i < filenames.length; i++)
	{
		addListItem(filenames[i]);
	}
}

// 
// ------------------------------------------------
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
		if($('ul#inv_files').is(':hidden'))
		{
			$('ul#inv_files').show();
		} else {
			$('ul#inv_files').hide();
		}
		
	});
});