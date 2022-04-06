/**
 * Author:    Gabriela Tena
 * Created:   04.05.2022
 *
 * (c) Copyright by Blub Corp.
 **/


//Find the element
function Vehicle(type, model, color){
  this.type = type;
  this.model = model;
  this.color = color;

  this.info = function(){
    return("This vehicle is a " + this.type + " " + this.model + " " + this.color + ".")
  }
}

var car = new Vehicle ("Toyota", "Corolla Hybrid", "Blue");
var bike = new Vehicle ("Bike", "Mountain Bike", "Purple");
var bus = new Vehicle ("Bus", "Public Transportation", "Blue and White");

//For each instantiated object, call your method info() and output the results to your output div.
console.log(car.info());
console.log(bike.info());
console.log(bus.info());

// we add text (including <p> tags to the end of our output div
outputEl = document.getElementById(output);
$("#output").append("<p>" + car.info() + "</p>");
$("#output").append("<p>" + bike.info() + "</p>");
$("#output").append("<p>" + bus.info() + "</p>");
