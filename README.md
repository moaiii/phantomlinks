<h1>PHANTOM-LINKS</h1>
<h2>DESIGN DOCUMENTATION</h2>



<p>by Christopher Melville<br>
christopher.melville@me.com<br>
for Matt Booy @ Phantom</p>



<h2>~ Overview ~</h2>


<ul>
<li>Angular + HTML = dynamic D.O.M markup</li>
<li>Angular Controller + main.js = calculation & logic
	>> app module = 'LinksApp' ---> (location: top html tag)
	>> module controller = LinksController ---> (location: body)
</li>
<li>CSS + SASS = Styling</li>
<li>HTML5 storage = link data persistence against page reloading</li>
</ul>



<h2>~ Submitting a link ~</h2>



The submit button will only show if the url is valid, conditional using the ng-show attribute. (html - 38)<br>
URL validation done using Angular - more robust extensions checking I felt (html- 38 & 40). <br>
Though, example of self-written validation is shown below:<br>

function checkStringStart (formURL) {
	// check start of string starts with http://
	var start = 'http://';
	if (formURL.slice(0,6).toLowerCase() === start) {
		return true;
		break;
	}
	return false;
} 

function checkStringEnd (formURL) {
	// check end of string has valid extension
	var tmp = formURL.split(“.”)
	var extensions = [‘com’,’co.uk’,’org’,’net’,’io’];
	for(var i=0; i<extensions.length; i++){
		if(temp[temp.length-1] === extensions[i]){
			return true;
		}
	}
	return false;
}



<h2>~ Storing Links ~</h2>



40 links are hardcoded into the angular linksList []<br>
Each object has a Title, URL & Date created (app.js - 42)<br>
Links added are stored in the localStorage of the browser using HTML5 for Persistence against reloads (app.js - 19)<br>
When the browser is re-loaded the init method in LinksController will add form datastore to the display array. See console log.<br>

*** TODO *** The ng-repeat function populates the DOM before persistence data can be added from storage. Although data-bound to the display a user click/action must take place to add the persistence data. 



<h2>~ Displaying the links ~</h2>



The list is held in an array [] with link objects {} (app.js - 42)<br>
ng-repeat loop executed over this array to dynamically build the table. Filter the list using the angular filter:searchText in ng-repeat. (html - 64).<br>

'delete' executes the deleteLink function in the LinksController (app.js - 101)<br>
'edit' brings up new modal window - Data binding displayed using ng-show condition (html - 97)<br>



<h2>~ Pagination ~</h2>



Pagination via jQuery plugin DataTables (https://datatables.net/).<br>
*** TODO *** The table performs strangely when dynamically increasing or deleting items from the list. Expands when dynamically altering data content. Works fine with out DataTables plugin.
Comment out lines 32-37 in app.js controller to see the deletion operations properly display in the linksList[]



<h2>~ Google Closures ~</h2>



The app.js (angular - not node) file has been compiled and included. Uncompiled with comments is next to it (public > javascripts)<br>
Due to the folder-layout of files in node I felt I could not compile all library .js files into one. I.e. the bootstrap.js, jquery.js etc.<br>

Google HTML/CSS/JS style guide lines followed as best as possible.
