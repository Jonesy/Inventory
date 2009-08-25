// Inventory
// Bootstrap

// ------------------------------------------------

// TODO
// * Remove dependency on jQuery
// ------------------------------------------------
if (!window.jQuery) {
	document.write('<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.3.2/jquery.min.js"></script>');
	document.write('<script type="text/javascript" src="/inventory.js"></script>');
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
