/**
 * Author:    Gabriela Tena
 * Created:   03.08.2022
 *
 * (c) Copyright by Blub Corp.
 **/


//Find the element
$(".main").append("<button id=my-button>Click here :)")

$("#my-button")
//Adding the alert function
$("#my-button").click(function(){
  alert("Aleeerrrtt");
})
//Adding tyle to the alert
$("#my-button").click(function(){
  $(".main").css("background-color", "#cb9e61");
})
//Styling the button
$("#my-button").css("background-color", "#68ab68");
$("#my-button").css("padding", "20px");
