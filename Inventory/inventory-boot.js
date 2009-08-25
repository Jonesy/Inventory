/*
	==============================================================
	Inventory - by Joshua R Jones
	The General Metrics Web Development Company
	http://general-metrics.com
	Copyright (c) 2009 The General Metrics Web Development Company
	==============================================================
	*/
// Bootstrap
// TODO
// * Remove dependency on jQuery
// ------------------------------------------------
if (!window.jQuery) {
	document.write('<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.3.2/jquery.min.js"></script>');
	document.write('<script type="text/javascript" src="/Inventory/inventory.js"></script>');
}

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