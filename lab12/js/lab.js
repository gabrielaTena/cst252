/**
 * Author:    Gabriela Tena
 * Created:   03.12.2022
 *
 * (c) Copyright by Blub Corp.
 **/



//Adding event to subject-button

//changing the subject-button style
$("#subject-button").click(function(){
  //Changing the color and font-size of p
  $(".subject p").css("color", "#7f0095");
  $(".subject").css("font-size", "40px");
  //changing the color of h2
  $(".subject h2").css("color", "#f87f77");
})
//changing the challenge-button style
$("#challenge-button").click(function(){
  //changing the color of p
  $(".challenges p").css("color", "#7f0095");
  //changing the backgrounf-color
  $(".challenges").css("background-color", "#f87f77");
})
//changing the results-button style
$("#results-button").click(function(){
  //changing the color of p
  $(".results p").css("color", "#f87f77");
  //changing the background-color and font-size
  $(".results").css("font-size", "40px");
  $(".results").css("background-color", "#7f0095");
})
