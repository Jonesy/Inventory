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
function loader(data, status)
{
	if(status == 'success')
	{
		console.log('Succesfully loaded JSON!');
		for(i = 0; i < data.length; i++)
		{
			htmlFiles.push(data[i].filename);
		}
		jQuery('body').prepend('<div id="inv_files" style="display: none;"><ul id="inv_files_holder"></ul></div>');
		
		loadList(window.htmlFiles);
	}
	else
	{
		console.log('Error loading JSON');
	}
}

function addListItem(item)
{
	jQuery('ul#inv_files_holder').append('<li><a href="' + item + '">' + item + '</a></li>');
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
	jQuery('body').prepend('<div id="inv_anchor"><div id="inv_holder"><div id="inv_button">+</div></div></div>');
	
	jQuery('#inv_button').click(function()
	{
		console.log('click');
		if(jQuery('#inv_files').is(':hidden'))
		{
			jQuery('#inv_files').fadeIn('fast');
		} else {
			jQuery('#inv_files').fadeOut('fast');
		}
		
	});
});

// End of inventory.js