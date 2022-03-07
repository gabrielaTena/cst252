/**
 * Author:    Gabriela Tena
 * Created:   03.06.2022
 *
 * (c) Copyright by Blub Corp.
 **/

 //Thanks for Wes' website

//sortUserName - a function that takes users input and sorts the letters
function reorderUserName(word) {
  var wordArray = word.toUpperCase().split('');
  var newArray = shuffleArray(wordArray);
  return newArray.join('');
}

//find the button element
buttonEl = document.getElementById("my-button");
console.log("button element:", buttonEl);
//find the form element
inputEl = document.getElementById("user-name");
console.log("input element:", inputEl);
//find output element
outputEl = document.getElementById("output");
console.log("output element:", outputEl);

//add an event listener to button
buttonEl.addEventListener("click", function(){
  //get user name
  var userName = inputEl.value;
  //modify value
  var newName = toTittleCase(reorderUserName(userName));
  //put user name in element
  outputEl.innerHTML = "<p id=name-results>" + newName + "</p>";
});

//defining toTittleCase
function toTittleCase(str){
  return str.replace(
    /\w\S*/g,
    function(txt){
      return txt.chartAt(0).toUpperCase() + yxy.substr(1).toLowerCase();
    }
  );
}
