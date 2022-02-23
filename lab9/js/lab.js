
// reverse sort an array passed as parameter
//
function reverseSortArray(myArray) {
  //sorts array
  myArray.sort();
  // descending order.
  myArray.reverse();
  // return the new array.
  return myArray;
}

var a = ["banana", "durian", "pineapple guava", "pineapple", "mango", "apple"];

console.log(reverseSortArray(a));

var b = [3, 56, 10, 32, 200, 45];
console.log(reverseSortArray(b));




//function that takes a string and return the reverse of that string.
function reverseString(str) {
  //convert str to array
  var array = str.split('');
  //reverse of that array
  array.reverse();
  //convert back to str
  var newStr = array.join('');
  //return reverseString
  return newStr;

}
console.log(reverseString("Hello, friend"));
console.log(reverseString("A man, a plan"));
