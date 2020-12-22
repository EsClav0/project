document.addEventListener){
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
				"E|",
				"E",
				"E|",
				"Es",
				"Es|",
				"Es",
          			"Es|",					
				"EsC",
				"EsC|",
				"EsC",
				"EsC|",
				"EsCl",
				"EsCl|",
				"EsCl",
				"EsCl|",
				"EsCla",
				"EsCla|",
				"EsCla",
				"EsCla|",
				"EsClav",
				"EsClav|",
				"EsClav",
				"EsClav|",
				"EsClavo",
				"EsClavo|",
				"EsClavo",
				"EsClavo|",
				"EsClav ",				
				"EsClav|",
				"EsCla",
				"EsCla|",
				"EsCl",
				"EsCl|",
				"EsC",
				"EsC|",
				"Es",
				"Es|",
				"E",
				"E|"];

function loop(){

	document.getElementsByTagName("title")[0].innerHTML = titleText[x++%titleText.length];

}
