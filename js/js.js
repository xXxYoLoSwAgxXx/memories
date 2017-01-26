var under = ["isaiah", "isaiah", "zak", "zak", "tan", "tan", "gang", "gang", "21", "21", "yolo", "yolo", "swag", "swag", "braden", "braden"];
var values = []; 
var card_ids = [];
var cardsflipped = 0;

Array.prototype.cards_shuffle = function() {
	var i = gang.length, g, tan;
	while (--i > 0){
		g = Math.floor(Math.random() * (i+1));
		tan = gang[g];
		gang[g] = gang[i];
		gang[i] = tan;
	}
	
}

 

function change(ga){
  document.getElementById(ga).style.backgroundColor="red";
}

function changeb(ga){
  document.getElementById(ga).style.backgroundColor="blue";
}