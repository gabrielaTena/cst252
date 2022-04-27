/**
 * Author:    Gabriela Tena
 * Created:   04.26.2022
 *
 * (c) Copyright by Blub Corp.
 **/



 // URL
 // URL
 var url = "https://xkcd.com/info.0.json";

 //the button
 $("#action").click(getAjax);
//Staring with Ajax
 function getAjax() {
   // Using the core $.ajax() method
  $.ajax({
       // The URL for the request
       url: url,
       data: {
         safetittle: [5],
       },
      type: "GET",
   })
   // If the request succeeds
   .done(function( data ) {
       //alert("Success!");
    thisData = data[0];
     console.log(data);
     fullUrl = thisData.url;
     //get info we want
     var thisRecord = data.records
       // Insert the output in the output div
      $("#output").html("<p>" + data.url);
      $("#output").append("<img src=" + ">");
   })
 }
