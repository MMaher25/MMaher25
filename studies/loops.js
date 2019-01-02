// 0. Loops
// Loops are statements which execute a block of code repeatedly until a condition is met.
//
// 1. While loops
// While loops take only one argument, a stop condition. A while loop will continue to run until
// the stop condition evaluates to false. 
var ex1 = 0;
while (ex1 < 10) {                  // Conditional statement
    console.log("Counter: " + ex1); // Code to be executed
    ex1++;                          // Incrementing the counter
}
// It is important to include code which will increment your conditional variable toward the stop
// condition or the loop will continue to run forever, crashing your browser. This is called an
// infinite loop.
//
// 2. Do / while loops
// A variation of the while loop uses the do keyword and puts the stop condition at the end.
// This functions largely like any other while loop, except that the code within the loop 
// will be executed at least once, even if the stop condition is false.
var ex2 = 10;
do {                                // The loop will run once, even if the condition is false
    console.log("Counter: " + ex2); // This will print
    ex2++;                          // ex2 will be 11
} while (ex2 < 5);
//
// 3. For loops
// For loops repeat code like while loops, but require 3 arguments. The first argument will
// run one time before the loop is executed. It is usually used to define a counter value. 
// The second argument is a stop condition. Similar to a while loop, the loop will continue
// to execute until the stop condition returns false. The third argument will run once after
// each successful loop. This is usually used to increment (or decrement) the counter. These
// arguments are separated by a semicolon.
for (var i = 0; i <= 100; i++) {
    console.log(i);                 // Prints numbers from 0 to 100 ascending
}
for (var j = 100; j >= 0; j--) {
    console.log(j);                 // Prints numbers from 100 to 0 descending
}
// For loops are particularly useful when looping through arrays, which have numbered indices
// and a finite length.
let ex3 = [1, 1, 2, 3, 5, 8, 13, 21]        // A new array
for (var k = 0; k < ex3.length; k++) {      // Looping over the array from 0 to the last index
    console.log("Fibonacci: " + ex3[k]);    // Accesses the array at index k
}
for (var m = ex3.length-1; m >= 0; m--) {   // Looping backwards over the same array
    console.log("Fibonacci: " + ex3[m]);
}
//
// 4. For / in loops
// Normal for loops do not work on objects because they are unordered and do not have indices
// to access like arrays do. In order to loop over an object, we need to use the in keyword.
// For in loops take only one argument, which declares a variable representing the key in each
// key/value pair and enumerating which object to loop over.
var ex4 = {
    name: "Mark",
    height: "188 cm",
    weight: "a lot",
    age: 31
}
for (var key in ex4) {      // Looping over each property in object ex4
    console.log(key);       // Prints the key of each property
    console.log(ex4[key]);  // Prints the value of each property
}
