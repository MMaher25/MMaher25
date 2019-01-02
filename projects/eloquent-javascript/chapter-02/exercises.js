
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function triangles(height) {
    let triLine = "#"
    // Prints 7 lines to the console beginning with a single # and adding one # to each line
    for (let x = 1; x <= height; x++) {
      console.log(triLine);
      triLine += "#";
    }
}
////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function fizzBuzz() {
  // Create a for loop to loop through all the numbers between 1 and 15
  for (let x = 1; x <= 15; x++){
  // Print "FizzBuzz" if divisible by 15
  if (x % 15 === 0) {
    console.log("fizzbuzz");
  }
  // Print "Fizz" if divisible by 3
  else if (x % 3 === 0) {
    console.log("fizz");
  }
  // Print "Buzz" if divisible by 5
  else if (x % 5 === 0) {
    console.log("buzz");
  }
  // Print number otherwise
  else {
    console.log(x);
  }
  }
}

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function drawChessboard(size) {
// Define the size of the chessboard

var board = "";//this is the empty string we're going to add either ' ' , '#' or newline

for (var y = 0; y < size; y++) {   /*in the outer loop we add newline to seperate rows*/
  for (var x = 0; x < size; x++) {/*every inner loop represents a line, and alternatively it's adding either ' ' or '#' to the string that's being populated*/
    if ((x + y) % 2 == 0)
      board += " ";
    else
      board += "#";
  }
  board += "\n";
}

console.log(board);
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}
