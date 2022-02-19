/**
 * Author: Gabriela Tena
 * Created:   02.18.2022
 *
 * (c) Copyright by Blub Corp.
 **/

 // Define Variables
 myTransport = ["Monterey-Salinas Transit", "rides from friends", "Volais"
];

myMainRide = {
  make: "Monterey-Salinas Transit",
  model: "Bus",
  color: "blue",
  year: 2010,
  age: function() {
    return 2022 - this.year;
  }
}
// Output
document.writeln("Kinds of transportation I use: ", myTransport, "</br>");
document.writeln("My Main Ride: <pre>",
    JSON.stringify(myMainRide, null, '\t'), "</pre");
