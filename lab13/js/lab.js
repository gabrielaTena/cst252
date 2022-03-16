/**
 * Author:    Gabriela Tena
 * Created:   03.12.2022
 *
 * (c) Copyright by Blub Corp.
 **/


//
colorsArray = [
  {
    tittle: "Purple",
    text: "Your a creative person."
  },
  {
    tittle: "White",
    text: "A peacefull and honest person."
  },
  {
    tittle: "Blue",
    text: "A melancholic person."
  },
  {
    tittle: "Red",
    text: "A romantic and passionate person."
  }
]

//Return purple, white, blue, red
//depending on length mod 4
function sortingHat(str) {
  len = str.length;
  mod = len % 4;
  if (mod == 0){
    return "Purple"
  }
  else if (mod == 1){
    return "Red"
  }
  else if (mod == 2){
    return "Blue"
  }
  else if (mod == 3){
    return "White"
  }
}

//Ceaating the button 
$("#my-button").click(function(){
  var name = $("#input").val()
  var color = sortingHat(name);
  console.log(color);
  $("#output").html("The Sorting Hat has sorted you into: " + color);
});
