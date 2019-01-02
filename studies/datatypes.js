// 0. What are datatypes?
// In JavaScript, all data is stored in discrete datatypes. These can be either
// simple (primitive) or complex.
//
// 1. Number
// Numbers in JavaScript represent decimal values. 
var ex1 = 17; // Assigning the number 17 to a variable 
var ex2 = 9.75;
// Numbers can be used with arithmetic operators to produce new numbers
var ex3 = 12 + 13; // ex3 will be 25
var ex4 = 1 / 3; // ex4 will be 0.3333333333333333
// All numbers in JavaScript are stored as floating point numbers.
// This can cause unexpected issues when using arithmetic operators on decimals
var ex5 = 0.6 + 0.7     // We would expect ex5 to be 1.3,
                        // but, actual value will be 1.2999999999999998
// Integers in JavaScript are accurate up to 15 digits
var ex6 = 999999999999999; // Functions as expected. ex6 will be 999999999999999
var ex7 = 19999999999999999; // ex7 will be 20000000000000000
// Very large and very small numbers can be represented with scientific notation
var ex8 = 999e8; // ex8 will be 99900000000
var ex9 = 999e-8; // ex9 will be 0.00000999
//
// 2. String
// In JavaScript, a string is a collection of 0 or more characters contained within
// quotation marks.
var ex10 = "This ia a string."; // ex10 will be "This is a string."
// Strings can be contained within either single quotes or double quotes/
var ex11 = 'also a string'; // ex11 will be "also a string"
// Using quotes within a string can be accomplished by using the backslash \ before
// a quotation mark 
// to turn the special character into a string character.
var ex12 = "This string has a \"quotation\" in it"; // ex12 will be 
                                                    // "This string has a "quotation" in it"
//
// 3. Boolean
// Boolean values represent either a true or a false value.
var ex13 = true; // ex13 will be true
// Comparison operators return a boolean value based on their truthiness
var ex14 = 6 > 7; // ex14 will be false
// Anything with a value is true. Anything without a value is false.
var ex15 = 7;
Boolean(ex15); // returns true
var ex16 = ""; // null assignment
Boolean(ex16); //returns false
//
// 4. Array
// JavaScript arrays are complex data used to store multiple values in a single variable.
// Arrays are contained in square brackets [] and elements are separated by commas.
var ex17 = ["element 1", "element 2", "element 3"];
// Arrays are zero-indexed ordered lists. This means that the first element is at index 0.
// Elements in an array can be accessed using bracket notation and the index of the element.
ex17[1]; // Resolves to "element 2", the element in the ex17 array with the index of 1
// Arrays can be infinitely large and can contain multiple datatypes, including other arrays.
var ex18 = ["string", true, 187, ["A", "B", "C"]];
//
// 5. Object
// JavaScript objects are complex data used to store multiple values in a single variable.
// Objects are contained in curly braces {} and elements are separated by commas.
// Unlike arrays, objects are unordered and properties in objects are
// stored with key/value pairs.
var ex19 = {firstName: "Mark", lastName: "Maher", age: 31, isWebDev: true};
// Properties contained within an object can be accessed by calling the key
// by either dot notation or bracket notation
ex19.age; // Evaluates to 31
ex19['firstName']; //evaluates to "Mark"
// Objects can be infinitely large and contain multiple datatypes, including other objects.
// When an object contains a function, that function is called a method
var ex20 = {
    carMake: "Volkswagen",
    carModel: "Passat",
    isDiesel: false,
    passengers: [{name: "Mark", seat: "driver"},        // The value of this property
                 {name: "Alex", seat: "passenger"}],    // is an array of objects
    engineStart: function () {          // Object method
        console.log("Vroooooooom");
    }
};
// Calling methods requires calling the object on which they are located.
ex20.engineStart(); // Prints "Vroooooooom" to the console
//
// 6. Function
// Functions are blocks of code saved to memory so they can be reused.
// Functions in JavaScript can be declared with the function keyword
// Immediately after naming a function, parameters, which are optional, can be declared
function add (a, b) {       // Function declaration and parameters
    return a + b;           // Code to be executed when the function is invoked.
}
// Functions are invoked by typing the name of the function and any arguments 
// being passed to it in parentheses.
// If no arguments are passed, empty parentheses should be used.
add(2, 4); // Returns 6
// In Javascript, all functions are first-class, which means that function names can be used
// like other variables. Functions can even be passed as arguments to other functions.
function doSomething (func, num1, num2) {
    return func(num1, num2);
}
doSomething(add, 3, 5); // Returns 8
// 
// 7. undefined
// In JavaScript, variables which have been declared, but not assigned a value are undefined
var ex21;           // Undefined variable
console.log(ex21);  // Prints "undefined"
typeof ex21;        // Returns "undefined"
// 
// 8. null
// In JavaScript, the null value represents nothing. Null only exists when a variable is
// assigned the value of null.
// Any variable assigned the value of null has the type of "object".
var ex22 = 10;          // ex22 will be 10
typeof ex22;            // Return "number"
ex22 = null;            // ex22 will be null
typeof ex22;            // Returns "object"
// 
// 9. NaN
// NaN is a reserved word indicating that the result is not a number.
// Using arithmetic operators (except +) on non-numbers will return NaN.
var ex23 = 1 / "test";  // ex23 will be NaN
// 
// 10. Infinity and -Infinity
// Infinity is the largest positive number in Javascript. -Infinity is the largest 
// negative number. Dividing any number by 0 will also evaluate to Infinity. 
// Dividing any number bt -0 will evaluate to -Infinity.
var ex24 = 1 / 0;       // ex24 will be Infinity
// Any number multiplied by Infinity will evaluate to Infinity.
// Any number divided by Infinity will evaluate to 0
var ex25 = 123 * Infinity;  // ex25 will be Infinity
// 
// 11. Primitive/simple and complex data types
// In JavaScript, all datatypes are either simple or complex. Simple data are sometimes called 
// primitives. Simple data are immutable values. They are not objects and have no methods which
// can be called upon them. They are finite in size.
// Complex data in JavaScriptare objects. They are infinitely large and have methods which can 
// be called upon them.
// 
// 12. Pass by copy vs. pass by reference.
// In JavaScript, variables are stored in memory one of two ways: Pass by copy and 
// pass by reference. primitives are passed by copy, which means that when assigning 
// a simple datatype to a variable, a new copy of that value is stored to memory.
var ex26 = 7;           // A new copy of the primitive number 7 is assigned to the variable ex26
var ex27 = ex26;        // A new copy of the primitive number 7 is assigned to the variable ex27
// This means that if we alter the original variable, the second variable remains unchanged.
ex26 = true;            // A new copy of the primitive boolean true is assigned to ex26
console.log (ex27);     // Prints 7.
// 
// Complex datatypes are passed by reference. This means that if 2 variables point to the same 
// complex value, they are actually pointing to the same location in memory.
var ex28 = ["one", "two", "three"];     // Assigning an array to the variable ex28
var ex29 = ex28;                        // Assigning a reference to the same array to ex29
// Modifying the original array will also change any variables which point to the same location 
// in memory.
ex28.push("four");                      // Pushes the string "four" to the end of the array
console.log(ex29);                      // Prints ["one", "two", "three", "four"]