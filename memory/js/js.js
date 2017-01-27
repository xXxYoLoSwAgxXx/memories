var under = ["isaiah", "isaiah", "zak", "zak", "tan", "tan", "gang", "gang", "21", "21", "yolo", "yolo", "swag", "swag", "braden", "braden"];
var values = [];
var card_ids = [];
var cardsflipped = 0;
Array.prototype.card_shuffle = function(){
    var i = this.length, g, tang;
    while(--i > 0){
        g = Math.floor(Math.random() * (i+1));
        temp = this[g];
        this[g] = this[i];
        this[i] = tang;
    }
}
function newShite(){
  cardsflipped = 0;
  var output = '';
    under.card_shuffle();
  for(var i = 0; i < under.length; i++){
    output += '<div id="wrap_'+i+'" onclick="FlipCard(this,\''+under[i]+'\')"></div>';
  }
  document.getElementById('wrap').innerHTML = output;
}
function FlipCard(card,val){
  if(card.innerHTML == "" && values.length < 2){
    card.style.background = '#FFF';
    card.innerHTML = val;
    if(values.length == 0){
      values.push(val);
      card_ids.push(card.id);
    } else if(values.length == 1){
      values.push(val);
      card_ids.push(card.id);
      if(values[0] == values[1]){
        cardflipped += 2;
        values = [];
              card_ids = [];       
        }
      }       
      }
    }
function change(ga){
  document.getElementById(ga).style.backgroundColor="red";
}

function changeb(ga){
  document.getElementById(ga).style.backgroundColor="blue";
}

function changec(wrap){
  document.getElementById(wrap).style.backgroundColor="red";
}