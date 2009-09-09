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

// Test Array
var json = { "filelist":
	[
		{
			"dir": "",
			"files": [
					"index.html",
					"test.html"
				]
		},
		{
			"dir": "dir1",
			"files": [
					"inside1.html",
					"inside2.html"
				]
		},
		{
			"dir": "dir4",
			"files": [
					"inside1.html",
					"inside1.html",
					"inside1.html",
					"inside1.html",
					"inside1.html",
					"inside2.html"
				]
		}
	]
};

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
	console.log(data);
	if(data.filelist.length == 0)
	{
		var list_holder = document.getElementById('inv_files_holder');
		var nofiles = document.createElement('li');
			nofiles.className = 'nofiles';
			nofiles.innerText = 'Weird! No files found!';
		
		list_holder.appendChild(nofiles);
		console.log('-- But no JSON items found!');
		
	} else {
		for(i = 0; i < data.filelist.length; i++)
		{
			if(!data.filelist[i].dir)
			{
				for (var f = 0; f < data.filelist[i].files.length; f++)
				{
					htmlFiles.push(data.filelist[i].files[f]);
				}	
			} else {
				var dir_root = new Array(data.filelist[i].dir);
				var dir_files = new Array();
				dir_root.push(dir_files);
				
				console.log('-----------------\nFULL DIR ARRAY:');
				for (j = 0; j < data.filelist[i].files.length; j++)
				{
					console.log('/' + data.filelist[i].dir + '/' + data.filelist[i].files[j]);
					dir_files.push(data.filelist[i].files[j]);
				}
				htmlFiles.push(dir_root);
			}
		}
		loadList(window.htmlFiles);
	}
}

function loadList(filenames)
{
	//console.log("Found -- " + filenames.length + " -- files: \n " +filenames);
	console.log('-----------------\nLIST ARRAY:');
	console.log(filenames);
	for(i = 0; i < filenames.length; i++)
	{
		addListItem(filenames[i]);
	}
}

function addListItem(item)
{
	var list = document.getElementById('inv_files_holder');
	var li = document.createElement('li');
	var link = document.createElement('a');
	if(!isArray(item))
	{
		li.setAttribute('id', item);
		li.innerHTML = '<a href="/' + item + '">' + item + '</a>';
		list.appendChild(li);
	} else {
		li.innerHTML = '<a href="/' + item[0] + '" onclick="return false;">' + item[0] + '<canvas id="' + item[0] + '_arrow" height="15" width="15" class="arrow"/></a>';
		
		var sublist_container = document.createElement('div');
			sublist_container.setAttribute('class', 'sub');
		var sublist = document.createElement('ul');
			sublist.setAttribute('id', item[0]);
		
		sublist_container.appendChild(sublist);
		
		li.appendChild(sublist_container);
		list.appendChild(li);
		
		drawTriangle(item[0] + '_arrow');
		
		for(k = 0; k < item[1].length; k++)
		{
			console.log(item[1][k]);
			var subdirLink = document.createElement('li');
				subdirLink.innerHTML = '<a href="/'+ item[0] + '/' + item[1][k] + '">' + item[1][k] + '</a>';
			sublist.appendChild(subdirLink);
		}
	}
	
	
}

// Uses Canvas to draw directory triangles
function drawTriangle(cid){
	var myCanvas = document.getElementById(cid);
	console.log('Canvas: ' + myCanvas);
	var context = myCanvas.getContext("2d");
    
	context.beginPath();
	context.moveTo(0, 0);
	context.lineTo(0, 10);
	context.lineTo(10, 5);
	context.closePath();
	context.fillStyle = "#999";
	context.fill();
}

// If only this was default in JS...
function isArray(obj) {
    return obj.constructor == Array;
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
	
	loadJSON('/Inventory.php?format=JSON&callback=filelist');
	//filelist(json);
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

document.onkeyup = getNavKeys;

// End of inventory.js