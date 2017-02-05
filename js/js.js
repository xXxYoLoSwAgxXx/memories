var firstFlip = 0;
var secondFlip = 0;
var flipCounter = 0;

function changea(){
  document.getElementById("a").style.transform = "rotateY(0deg)";
  document.getElementById("aa").style.transform= "rotateY(-180deg)";
  firstFlip = 1;
  flipCounter++;
}

function changeb(){
  document.getElementById("b").style.transform = "rotateY(0)";
  document.getElementById("bb").style.transform= "rotateY(-180deg)";
  firstFlip = 2;
  flipCounter++;
}

function changec(){
  document.getElementById("c").style.transform = "rotateY(0deg)";
  document.getElementById("cc").style.transform= "rotateY(-180deg)";
  firstFlip = 3;
  flipCounter++;
}

function changed(){
  document.getElementById("d").style.transform = "rotateY(0deg)";
  document.getElementById("dd").style.transform= "rotateY(-180deg)";
  firstFlip = 4;
  flipCounter++;
}

function changee(){
  document.getElementById("e").style.transform = "rotateY(0deg)";
  document.getElementById("ee").style.transform= "rotateY(-180deg)";
  secondFlip = 1;
  flipCounter++;
}

function changef(){
  document.getElementById("f").style.transform = "rotateY(0deg)";
  document.getElementById("ff").style.transform= "rotateY(-180deg)";
  secondFlip = 2;
  flipCounter++;
}

function changeg(){
  document.getElementById("g").style.transform = "rotateY(0deg)";
  document.getElementById("gg").style.transform= "rotateY(-180deg)";
  secondFlip = 3;
  flipCounter++;
}

function changeh(){
  document.getElementById("h").style.transform = "rotateY(0deg)";
  document.getElementById("hh").style.transform= "rotateY(-180deg)";
  secondFlip = 4;
  flipCounter++;

}

function checkDat(){
  console.log(firstFlip);
  console.log(secondFlip);
  console.log(flipCounter);
  console.log("------------");

  setTimeout(function(){
    if(firstFlip == secondFlip){
      if(firstFlip == 1){
        document.getElementById("first").style.display = "none";
        document.getElementById("fifth").style.display = "none";
      }
      if(firstFlip == 2){
        document.getElementById("second").style.display = "none";
        document.getElementById("sixth").style.display = "none";
      }
      if(firstFlip == 3){
        document.getElementById("third").style.display = "none";
        document.getElementById("seventh").style.display = "none";
      }
      if(firstFlip == 4){
        document.getElementById("fourth").style.display = "none";
        document.getElementById("eighth").style.display = "none";
      }

        flipCounter = 0;
        firstFlip = 0;
        secondFlip = 0; 
    }
  }, 1500);

  setTimeout(
    function delay(){
      if(flipCounter == 2 && firstFlip != secondFlip){
        //console.log("no match");
        flipCounter = 0;
        firstFlip = 0;
        secondFlip = 0;
        
        var idFrontNames = ["a", "b", "c", "d", "e", "f", "g", "h"];
        var idBackNames = ["aa", "bb", "cc", "dd", "ee", "ff", "gg", "hh"];
        for(var z = idFrontNames.length; z > 0; z--){
          frontId = idFrontNames.splice(0, 1)[0];
          backId = idBackNames.splice(0, 1)[0];
          
          document.getElementById(frontId).style.transform = "rotateY(-180deg)";
          document.getElementById(backId).style.transform = "rotateY(0deg)";    
        }
      }
  },1000);
}
