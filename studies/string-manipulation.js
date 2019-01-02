// 0. Manipulating strings
// 
// 1. Operators
// The addition operator can be used to concatenate strings.
var ex1 = "Mark" + " " + "Maher";   // ex1 will be "Mark Maher"
// Caution should be exercised, however, because using the addition operator on strings
// and numbers can produce unexpected results.
var ex2 = "10" + 10;                // Adding the string of "10" and number 10
console.log(ex2);                   // Prints the string "1010"
// Using other arithmetic operators with combinations of numbers and strings will produce
// NaN - A reserved special datatype meaning "not a number". Using further operators
// on NaN will also return NaN.
var ex3 = "string" / 10;            // Evaluates to NaN
//
// 2. String methods
// While the string datatype is a primitive, JavaScript treats primitives like objects when
// evaluating expressions, which allows strings to have properties and allows methods to be
// called on strings.
// .concat - This method concatenates multiple strings into one, returning the new string
var ex4 = "Str1".concat("Str2", "Str3");    // ex4 will be "Str1Str2Str3"
// .slice - Extracts part of a sting, returning it as a new string. Takes 2 arguments,
// numbers representing the index of the first and last index of the sliced string
var ex5 = "This is a string".slice(10, 15); // ex5 will be "string"
// If a positive number is passed as the only argument, a string beginning at that index and
// continuing through the end of the string is returned. If a negative number is passed, it
// works similarly, but counting from the end.
var ex6 = "Another string".slice(6);        // ex6 will be "er string"
var ex7 = "Yet another string".slice(-3);   // ex7 will be "ing"
// .substring - Works exactly like slice, but does not work with negative numbers
var ex8 = "Example string".substring(7,9);  // ex8 will be "e s"
var ex9 = "Another example".substring(8);   // ex9 will be "example" 
// .substr - Works similarly to slice, except instead of passing an end index, the second
// argument is the length of the returned string.
var ex10 = "substr example".substr(2,4);     // ex10 will be "bstr"
// .replace - Finds and replaces the first instance of a string within another string,
// returning a new string with the replacement made.
var ex11 = "String to replace".replace("to", "2");  // ex11 will be "String 2 replace"
// The replace method is case sensitive and only finds the first instance of a given string.
// The replace method can be combined with regular expressions for powerful results.
var ex12 = "Replacement".replace(/e/ig, "3");       // ex12 will be "R3plac3m3nt"
// .toUpperCase - Replaces all lowercase (miniscule) letters with uppercase (majuscule)
var ex13 = "FourWordsAllLowercase".toUpperCase();   // ex13 will be "FOURWORDSALLLOWERCASE"
// .toLowerCase - Replaces all uppercase (majuscule) letters with lowercase (miniscule)
var ex14 = "UpperCase EXAMPLE".toLowerCase();       // ex14 will be "uppercase example"
// .trim - Removes all whitespace from the beginning and end of a string.
var ex15 = "   Whitespace Example     ".trim();     // ex15 will be "Whitespace Example"