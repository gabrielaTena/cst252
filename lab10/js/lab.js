/**
 * Author:    Gabriela Tena
 * Created:   03.06.2022
 *
 * (c) Copyright by Blub Corp.
 **/

 //Thanks to Wes' website: https:wmodes.github.io/cst252/lab10/index.html

//sortUserName - a function that takes users input and sorts the letters
function shuffleArray(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    // Shuffle elements
    while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}

function reorderUserName(word) {
  var wordArray = word.toUpperCase().split('');
  var newArray = shuffleArray(wordArray);
  return newArray.join('');
}
// given a string, return string in Title Case //
function toTitleCase(str) {
    return str.replace(
        /\w\S*/g,
        function(txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }
    );
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
  var newName = toTitleCase(reorderUserName(userName));
  //put user name in element
  outputEl.innerHTML = "<p id=name-results>" + newName + "</p>";
});
