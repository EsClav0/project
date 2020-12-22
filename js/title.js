﻿if(document.addEventListener){
	document.addEventListener("DOMContentLoaded", function(){
		loaded();
	});
} else if(document.attachEvent){
	document.attachEvent("onreadystatechange", function(){
		loaded();
	});
}

function loaded(){
	
	setInterval(loop, 300);

}

var x = 0;

var titleText = [ "|",
				"S",
				"S|",
				"S",
				"Sa|",
				"Sa",
				"Sad|",
				"Sad",
				"Sad|",
				"Sad",
				"Sad|",
				"Sa",
				"Sa|",
				"S",
				"S|"];

function loop(){

	document.getElementsByTagName("title")[0].innerHTML = titleText[x++%titleText.length];

}