/**
 *	Angular Controller Document
 *	Phantom - Developer project
 *	For: Matt Booy @ Phantom- london;
 *	Created by: Christopher Melville
 *	Date: July 2016
 *	christopher.melville@me.com
 */

var LinksApp = angular.module('LinksApp', []);

LinksApp.controller('LinksController', function($scope){

	/**
	 * HTML5 local storage (no database)
	 */

	// on load of document run population function....
	angular.element(window).ready(function(){
		console.log('pulling library data from local browser store....');
		// get items from browser local storage and push to the linksList[]
		for(var i=0; i<localStorage.length; i++){
			// pull and parse k/v pairs from local storage
			var item = JSON.parse(localStorage.getItem(localStorage.key(i)));
			console.log(item); //for development reference
			// push to linksList for display
			$scope.linksList.push(item);
		}
		console.log('done!');

		// Data Table Pagination Initialisation
		$('#linksTable').DataTable({
		  	pageLength: 20,	
			searching: false,
    		select: false,
    		dom: '<"top">rt<"bottom"p><"clear">'
		});
	});


	/**
	 *	Links storage
	 */
	$scope.linksList = [
		{'title': 'Google', 'url': 'http://google.com', 'time': '27-7-16'},
		{'title': 'Angular', 'url': 'http://angularjs.org', 'time': '21-7-16'},
		{'title': 'Phantom', 'url': 'http://phantom.land', 'time': '21-7-16'},
		{'title': 'Chris Melville', 'url': 'http://christophermelville.com', 'time': '21-7-16'},
		{'title': 'Stack Overflow', 'url': 'http://stackoverflow.com', 'time': '21-7-16'},
		{'title': 'Pintrest', 'url': 'http://pintrest.com', 'time': '22-7-16'},
		{'title': 'Instagram', 'url': 'http://instagram.com', 'time': '22-7-16'},
		{'title': 'Facebook', 'url': 'http://facebook.com', 'time': '22-7-16'},
		{'title': 'Twitter', 'url': 'http://twitter.com', 'time': '22-7-16'},
		{'title': 'Black Dotwork', 'url': 'http://tattooblend.com', 'time': '22-7-16'},
		{'title': 'Ableton', 'url': 'http://ableton.com', 'time': '23-7-16'},
		{'title': 'SoundOnSound', 'url': 'http://soundonsound.com', 'time': '23-7-16'},
		{'title': 'Jitter', 'url': 'http://cycling74.com', 'time': '23-7-16'},
		{'title': 'Tuts+', 'url': 'http://design.tutsplus.com', 'time': '19-7-16'},
		{'title': 'BBC iPlayer', 'url': 'http://www.bbc.co.uk/iplayer', 'time': '19-7-16'},
		{'title': 'BBC Football', 'url': 'http://bbc.co.uk/football', 'time': '19-7-16'},
		{'title': 'Github', 'url': 'http://github.com', 'time': '19-7-16'},
		{'title': 'mojo', 'url': 'http://mojo4music.com/', 'time': '26-7-16'},
		{'title': 'Q magazine', 'url': 'http://qthemusic.com', 'time': '26-7-16'},
		{'title': 'FlyingLotus', 'url': 'http://flying-lotus.com/', 'time': '26-7-16'},
		{'title': 'Apple', 'url': 'http://apple.com', 'time': '27-7-16'},
		{'title': 'p5.js', 'url': 'http://p5js.org', 'time': '21-7-16'},
		{'title': 'Ol Scroll', 'url': 'http://samt.xyz/images/scroll/one.html', 'time': '21-7-16'},
		{'title': 'Prism Pusher', 'url': 'http://leslieruckman.tumblr.com', 'time': '21-7-16'},
		{'title': 'Face Sound', 'url': 'http://nithi-p.github.io/finalproject/', 'time': '21-7-16'},
		{'title': 'Social Tension', 'url': 'http://cjdecarteret.com/Shape-Intersect-p5js/', 'time': '22-7-16'},
		{'title': 'Plank Creatures', 'url': 'http://otoro.net/planks/', 'time': '22-7-16'},
		{'title': 'NeoBrush', 'url': 'http://the816.com/neobrush/', 'time': '22-7-16'},
		{'title': 'Chrome Experiments', 'url': 'http://chromeexperiments.com', 'time': '22-7-16'},
		{'title': 'Devine Canvas', 'url': 'http://divine-canvas.com/', 'time': '22-7-16'},
		{'title': 'Soundcloud', 'url': 'http://soundcloud.com', 'time': '23-7-16'},
		{'title': 'Red Hot & Blue', 'url': 'http://redhotandbluetattoo.com/', 'time': '23-7-16'},
		{'title': 'Dub FX', 'url': 'http://dubfx.com/', 'time': '23-7-16'},
		{'title': 'YouTube', 'url': 'http://youtube.com', 'time': '19-7-16'},
		{'title': 'Udemy', 'url': 'http://udemy.com', 'time': '19-7-16'},
		{'title': 'Angular2', 'url': 'http://angular.io', 'time': '19-7-16'},
		{'title': 'jQuery', 'url': 'http://jquery.com/', 'time': '19-7-16'},
		{'title': 'Tool the band', 'url': 'http://toolband.com', 'time': '26-7-16'},
		{'title': 'Dangers of Fracking', 'url': 'http://dangersoffracking.com', 'time': '26-7-16'},
		{'title': 'Heroku', 'url': 'http://heroku.com', 'time': '26-7-16'},
	];

	/**
	 *	Array operations 
	 */

	$scope.addLink = function (url, title) {
		// create new object
		var newLinkObj = {
			'title': title, 'url': url, 'time': timeStamp()
		};
		// STORE IN 2 PHASES - in browser (persistent), in controller (session)
		// store new object locally on the browser (K/V pair)
		localStorage.setItem(url, JSON.stringify(newLinkObj));
		// store in linksList [] in angular controller above
		$scope.linksList.unshift(JSON.parse(localStorage.getItem(localStorage.key(url))));
	}

	$scope.deleteLink = function (linkUrl) {
		// DELETE IN 2 PLACES - in browser (persistent), in controller (session)
		// 1 - get index of link in [], splice entry out 
		var index = findLink(linkUrl);	 
		$scope.linksList.splice(index, 1);
		// 2 - Finally remove from local store 
		console.log("Deleting..... "+localStorage.getItem(linkUrl));
		localStorage.removeItem(linkUrl);
	}

	$scope.editLink = function (linkUrl) {
		// get index of link in the array 
		var index = findLink(linkUrl);
		// set editing variable in the scope
		$scope.editing = $scope.linksList[index];
	}


	/**
	 *	Utility functions
	 */

	function timeStamp () {
		var time = new Date();
		var dateStamp = time.getDate() + "-" 
						+ (time.getMonth()+1) + "-" 
						+ time.getFullYear().toString().slice(2,4);
		return dateStamp;
	}

	function findLink(linkUrl) {
		for(var i=0; i<$scope.linksList.length; i++){
			if($scope.linksList[i].url === linkUrl){
				return i;
			}
		}
	}

});