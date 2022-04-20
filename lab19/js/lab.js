/**
 * Author:    Gabriela Tena
 * Created:   04.06.2022
 *
 * (c) Copyright by Blub Corp.
 **/



 // URL
 // URL
 var url = "https://opentdb.com/api.php?amount=10";

 //the button
 $("#action").click(getAjax);
//Staring with Ajax
 function getAjax() {
   // Using the core $.ajax() method
   $.ajax({
       // The URL for the request
       url: url,
       type: "GET",
   })
   // If the request succeeds
   .done(function( data ) {
       //alert("Success!");
       console.log(data);
       // Insert the output in the output div
       $("#output").prepend("<p>" + data.url);
   })
 }
