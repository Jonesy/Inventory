/*
	==============================================================
	Inventory - by Joshua R Jones
	The General Metrics Web Development Company
	http://general-metrics.com
	Copyright (c) 2009 The General Metrics Web Development Company
	==============================================================
	*/
console.log('Dependencies loaded!');

//
// Starting Up...
// ------------------------------------------------
var htmlFiles = [];

//jQuery.getJSON('/Inventory.php?json_callback=?', loader);

function loadJSON(url) {
  var headID = document.getElementsByTagName("head")[0];         
  var newScript = document.createElement('script');
      newScript.type = 'text/javascript';
      newScript.src = url;
  headID.appendChild(newScript);
}

function processJSON(feed){
	for(i = 0; i < feed.length; i++)
	{
		console.log(feed[i].filename);
	}
}

loadJSON('/Inventory.php?format=JSON&callback=loader');

//
// Gathering basic functions
// ------------------------------------------------
// Grab the JSON
function loader(data, status)
{
	console.log('Succesfully loaded JSON!');
		for(i = 0; i < data.length; i++)
		{
			htmlFiles.push(data[i].filename);
		}
		
		loadList(window.htmlFiles);
	
	
}

function addListItem(item)
{
	var list = document.getElementById('inv_files_holder');
	var li = document.createElement("li");
	var link = document.createElement("a");
	link.innerText = item;
	li.innerHTML = '<a href="' + item + '">' + item + '</a>';
	list.appendChild(li);
}

function loadList(filenames)
{
	console.log("Found -- " + filenames.length + " -- files: \n " +filenames);
	for(i = 0; i < filenames.length; i++)
	{
		addListItem(filenames[i]);
	}
}

window.onload = function()
{
	// Write the button
	document.body.innerHTML = '<div id="inv_files" style="display: none;"><ul id="inv_files_holder"></ul></div><div id="inv_anchor"><div id="inv_holder"><div id="inv_button">+</div></div></div>';
	
	document.getElementById('inv_button').onclick = function()
	{
		if(document.getElementById('inv_files').style.display == 'none')
		{
			document.getElementById('inv_files').style.display = 'block';
		} else {
			document.getElementById('inv_files').style.display = 'none';
		}
	};
};

// End of inventory.js