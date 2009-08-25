/*
	==============================================================
	Inventory - by Joshua R Jones
	The General Metrics Web Development Company
	http://general-metrics.com
	Copyright (c) 2009 The General Metrics Web Development Company
	==============================================================
	*/
console.log('Dependencies loaded!');
jQuery.noConflict();

//
// Starting Up...
// ------------------------------------------------
var htmlFiles = [];

jQuery.getJSON('/Inventory.php?json_callback=?', loader);

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
	jQuery('body').prepend('<ul id="inv_files" style="display: none;"></ul>');
	jQuery('ul#inv_files').css({
		'position': 'absolute',
		'top': 0,
		'right': 50
	});
	loadList(window.htmlFiles);
}

function addListItem(item)
{
	jQuery('ul#inv_files').append('<li><a href="' + item + '">' + item + '</a></li>');
}

function loadList(filenames)
{
	console.log("Found -- " + filenames.length + " -- files: \n " +filenames);
	for(i = 0; i < filenames.length; i++)
	{
		addListItem(filenames[i]);
	}
}


jQuery(function()
{	
	// Write the button
	jQuery('body').prepend('<div id="inv_file">+</div>');
	
	jQuery('#inv_file').css({
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
	
	jQuery('#inv_file').click(function()
	{
		if(jQuery('ul#inv_files').is(':hidden'))
		{
			jQuery('ul#inv_files').fadeIn('fast');
		} else {
			jQuery('ul#inv_files').fadeOut('fast');
		}
		
	});
});