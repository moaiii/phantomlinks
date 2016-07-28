var LinksApp=angular.module("LinksApp",[]);
LinksApp.controller("LinksController",function(b){function e(a){for(var c=0;c<b.linksList.length;c++)if(b.linksList[c].url===a)return c}angular.element(window).ready(function(){console.log("pulling library data from local browser store....");for(var a=0;a<localStorage.length;a++){var c=JSON.parse(localStorage.getItem(localStorage.key(a)));console.log(c);b.linksList.push(c)}console.log("done!");$("#linksTable").DataTable({pageLength:20,searching:!1,select:!1,dom:'<"top">rt<"bottom"p><"clear">'})});
b.linksList=[{title:"Google",url:"http://google.com",time:"27-7-16"},{title:"Angular",url:"http://angularjs.org",time:"21-7-16"},{title:"Phantom",url:"http://phantom.land",time:"21-7-16"},{title:"Chris Melville",url:"http://christophermelville.com",time:"21-7-16"},{title:"Stack Overflow",url:"http://stackoverflow.com",time:"21-7-16"},{title:"Pintrest",url:"http://pintrest.com",time:"22-7-16"},{title:"Instagram",url:"http://instagram.com",time:"22-7-16"},{title:"Facebook",url:"http://facebook.com",
time:"22-7-16"},{title:"Twitter",url:"http://twitter.com",time:"22-7-16"},{title:"Black Dotwork",url:"http://tattooblend.com",time:"22-7-16"},{title:"Ableton",url:"http://ableton.com",time:"23-7-16"},{title:"SoundOnSound",url:"http://soundonsound.com",time:"23-7-16"},{title:"Jitter",url:"http://cycling74.com",time:"23-7-16"},{title:"Tuts+",url:"http://design.tutsplus.com",time:"19-7-16"},{title:"BBC iPlayer",url:"http://www.bbc.co.uk/iplayer",time:"19-7-16"},{title:"BBC Football",url:"http://bbc.co.uk/football",
time:"19-7-16"},{title:"Github",url:"http://github.com",time:"19-7-16"},{title:"mojo",url:"http://mojo4music.com/",time:"26-7-16"},{title:"Q magazine",url:"http://qthemusic.com",time:"26-7-16"},{title:"FlyingLotus",url:"http://flying-lotus.com/",time:"26-7-16"},{title:"Apple",url:"http://apple.com",time:"27-7-16"},{title:"p5.js",url:"http://p5js.org",time:"21-7-16"},{title:"Ol Scroll",url:"http://samt.xyz/images/scroll/one.html",time:"21-7-16"},{title:"Prism Pusher",url:"http://leslieruckman.tumblr.com",
time:"21-7-16"},{title:"Face Sound",url:"http://nithi-p.github.io/finalproject/",time:"21-7-16"},{title:"Social Tension",url:"http://cjdecarteret.com/Shape-Intersect-p5js/",time:"22-7-16"},{title:"Plank Creatures",url:"http://otoro.net/planks/",time:"22-7-16"},{title:"NeoBrush",url:"http://the816.com/neobrush/",time:"22-7-16"},{title:"Chrome Experiments",url:"http://chromeexperiments.com",time:"22-7-16"},{title:"Devine Canvas",url:"http://divine-canvas.com/",time:"22-7-16"},{title:"Soundcloud",url:"http://soundcloud.com",
time:"23-7-16"},{title:"Red Hot & Blue",url:"http://redhotandbluetattoo.com/",time:"23-7-16"},{title:"Dub FX",url:"http://dubfx.com/",time:"23-7-16"},{title:"YouTube",url:"http://youtube.com",time:"19-7-16"},{title:"Udemy",url:"http://udemy.com",time:"19-7-16"},{title:"Angular2",url:"http://angular.io",time:"19-7-16"},{title:"jQuery",url:"http://jquery.com/",time:"19-7-16"},{title:"Tool the band",url:"http://toolband.com",time:"26-7-16"},{title:"Dangers of Fracking",url:"http://dangersoffracking.com",
time:"26-7-16"},{title:"Heroku",url:"http://heroku.com",time:"26-7-16"}];b.addLink=function(a,c){var d=new Date,d=d.getDate()+"-"+(d.getMonth()+1)+"-"+d.getFullYear().toString().slice(2,4);localStorage.setItem(a,JSON.stringify({title:c,url:a,time:d}));b.linksList.unshift(JSON.parse(localStorage.getItem(localStorage.key(a))))};b.deleteLink=function(a){var c=e(a);b.linksList.splice(c,1);console.log("Deleting..... "+localStorage.getItem(a));localStorage.removeItem(a)};b.editLink=function(a){a=e(a);b.editing=
b.linksList[a]}});