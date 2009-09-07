/*
==============================================================
Inventory - by Joshua R Jones
The General Metrics Web Development Company
http://general-metrics.com
Copyright (c) 2009 The General Metrics Web Development Company
==============================================================
*/

//
// Starting Up...
// ------------------------------------------------
console.log('Inventory loaded!');
// Array to hold all the file values
var htmlFiles	= [];
var dirs	 	= [];

//
// Gathering basic functions
// ------------------------------------------------
// Load the JSON via creating a Script tag in the head
function loadJSON(url) {
  var head_tag = document.getElementsByTagName('head')[0];
  var json_script = document.createElement('script');
      json_script.type = 'text/javascript';
      json_script.src = url;
  head_tag.appendChild(json_script);
}

function filelist(data)
{
	if(data.length <= 0)
	{
		var list_holder = document.getElementById('inv_files_holder');
		var nofiles = document.createElement('li');
			nofiles.className = 'nofiles';
			nofiles.innerText = 'Weird! No files found!';
		list_holder.appendChild(nofiles);
		console.log('-- But no JSON items found!')
	} else {
		for(i = 0; i < data.length; i++)
		{
			htmlFiles.push(data[i].filename);
			if(data[i].test <= 1)
			{
				console.log('hi');
			}
		}
		loadList(window.htmlFiles);
		console.log('Succesfully loaded JSON!');
	}
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


// Build the elements when the window loads. Yes, I am stuck on jQuery-mode.
window.onload = function()
{
	// Write the button and UL to look like this:
	//	<div id="inv_files" style="display: none;">
	//		<ul id="inv_files_holder">
	//		</ul>
	//	</div>
	//	<div id="inv_anchor">
	//		<div id="inv_holder">
	//			<div id="inv_button">+</div>
	//		</div>
	// 	</div>
	//
	var bodyel = document.getElementsByTagName("body").item(0);
	
	var files_box = document.createElement('div');
		files_box.setAttribute('id', 'inv_files');
		files_box.setAttribute('style', 'display:none');
	bodyel.appendChild(files_box);
	
	var files_ul = document.createElement('ul');
		files_ul.setAttribute('id', 'inv_files_holder');
	files_box.appendChild(files_ul);
	
	var btn_anchor = document.createElement('div');
		btn_anchor.setAttribute('id', 'inv_anchor');
	bodyel.appendChild(btn_anchor);
	
	var btn_holder = document.createElement('div');
		btn_holder.setAttribute('id', 'inv_holder');
	btn_anchor.appendChild(btn_holder);
	
	var btn = document.createElement('div');
		btn.setAttribute('id', 'inv_button');
		btn.innerHTML = '+';
	btn_holder.appendChild(btn);
	
	document.getElementById('inv_button').onclick = function()
	{
		if(document.getElementById('inv_files').style.display == 'none')
		{
			document.getElementById('inv_files').style.display = 'block';
		} else {
			document.getElementById('inv_files').style.display = 'none';
		}
	};
	
	//loadJSON('/Inventory.php?format=JSON&callback=filelist');
	loadJSON('/Inventory/fixtures.php?format=JSON&callback=filelist');
};

// Key-code
function getNavKeys(e){
	var code = e.keyCode;
	if(document.getElementById('inv_files').style.display == 'block')
	{
		switch(code)
		{
			case 38:
				break;
		
			case 40:
				break;
		}
	}
}

function tester()
{
	console.log('hi');
}

document.onkeyup = getNavKeys;

// End of inventory.js