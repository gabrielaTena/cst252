/**
 * Author:    Gabriela Tena
 * Created:   02.21.2022
 *
 * (c) Copyright by Blub Corp.
 **/


 //sortUserName - a function that takes user input and sorts the letters
 // of their name
 function randomizeName(userName) {
   //convert userName string to array
   var nameArray = userName.toLowerCase().split("");
   console.log("nameArray =", nameArray);
   //shuffle array with our shuffle functions
   var shuffledArray = shuffledArray(nameArray);
   console.log("shuffledArray =", shuffledArray);
   var shuffledString = shuffledArray.join("");
   //shift to Tittle Case (like a name)
   var newName = toTittleCase(shuffledString);
   //return array to a string
   return newName;
 }

 function getName() {
   var name = window.prompt("Hola. Please write down your name so I can fix it.");
   //var name = document.getElementById("inputField").val
   return name;
 }

function main() {
  var userName = getName();
  document.writeln("<style>:root {--textlen: " + userName.length + ";}</style>");
  var sortedName = sortUserName(userName);
  document.writeln("Here is your sorted name: " + sortedName + "</br></br>");
  var randomName = randomizeName(userName);
  document.writeln("Hey! I fixed your name.<br>Your new one is above.");
  document.writeln("<div class='name'>" + randomName + "</div>")
}
main();

//output
document.writeln("Hey! I fixed your name: ",
  sortUserName(), "</br>");
