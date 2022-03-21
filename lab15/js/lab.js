/**
 * Author:    Gabriela Tena
 * Created:   03.18.2022
 *
 * (c) Copyright by Blub Corp.
 **/

outputEl = document.getElementById("output");

//Print all numbers from 1 to 200
for (let i = 0; i <=200; i++){
  if (i % 3 == 0 && i % 5 == 0){
    console.log("FizzBuzz");
  }
  if(i % 5 == 0 && i % 7 == 0){
    console.log("BuzzBoom");
  }
  if(i % 3 == 0 && i % 7 == 0){
    console.log("FizzBoom");
  }
  if (i % 3 == 0){
    console.log("Fizz!!");
  }
  if (i % 5 == 0){
    console.log("Buzz!!");
  }
  if (i % 7 == 0){
    console.log("Boom!!");
  }
  else{
    console.log(i);}
  }


function FizzBuzz(maxNum, factorTxt){
  for (var num=0; num<maxNum; num++){
    var outputStr = "";
    for (var factor in factorTxt) {
      if (num % factor == 0){
        outputStr += factorTxt;
      }
    }
  }
}
function outputToPage(str) {
    newEl = document.createElement("p");
    newEl.innerHTML = str;
    outputEl.appendChild(newEl);
  }
