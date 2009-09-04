/*
	==============================================================
	Inventory - by Joshua R Jones
	The General Metrics Web Development Company
	http://general-metrics.com
	Copyright (c) 2009 The General Metrics Web Development Company
	==============================================================
	Bootstrap file
	*/
// ------------------------------------------------
	document.write('<link href="/Inventory/inventory.css" rel="stylesheet" media="screen" charset="utf-8"/>');
	document.write('<script type="text/javascript" src="/Inventory/inventory.js"></script>');

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
// End of inventory-boot.js