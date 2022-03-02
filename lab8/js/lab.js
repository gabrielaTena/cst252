/*
 * Author: Gabriela Tena
 * Created: 27 February 2022
 * License: Public Domain
 */

 function labEight(x){
   return(x * 2);
 }

 //test function
 array = [50, 22, 100, 150, 40, 12, 3];
 console.log("My array", array);

 var result = array.map(labEight);
 //
 console.log("Test of correcness of array:", result);

 var result = array.map(function(x){
   return x + 5;
 })
 //should return [55, 27, 105, 155, 45, 17, 8]
 console.log("Results of array plus 5:", results);
