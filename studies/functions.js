// 0. Functions
// Functions are blocks of code which are saved to memory so they can be reused.
//
// 1. Definition
// Function are defined in JavaScript using either the function keyword or by using a function
// expression. Generally, these two are interchangeable with one major exception: Hoisting.
// Function declared using the function keyword can be invoked before they are defined. Function
// statements are not hoisted.
function add (a, b) {
    return a + b;
}
const alsoAdd = function (a, b) {
    return a + b;
}
const arrowAdd = (a, b) => {
    return a + b;
}
//
// 2. Invocation
// Once a function has been defined, we can call a function by typing its name followed by 
// parentheses. If the function takes one or more arguments, they will be within the 
// parentheses, separated by commas.
add(2,4);                   // Returns 6
//
// 3. Parameters and arguments
// Functions can accept additional data which can be incorporated into the code within the
// function. When defining a function, the temporary placeholders we use within the definition
// are called parameters. When we call a function, the data we pass into the function are 
// called arguments.
function newFunc1 (param1, param2) {	// Declaring a new function with 2 parameters
	return param1 * param2;
}
newFunc1 (10, 5);   // Calling newFunc1 with arguments 10 and 5
//
// 4. Function scope
// Functions are code blocks and as such, any variable defined within them is only available 
// to the function and its children. A function will have access to any globally-declared 
// variable, but variables declared within a function are not available globally.
function newFunc2 (param) {
	let funcVar = param * 8;		// Declares a locally-scoped variable
	return funcVar;
}
// console.log(funcVar);			// funcVar is undefined in the global scope
//
// 5. Closures
// In JavaScript, locally-scoped variables are created when their codeblock is run and deleted 
// when they are no longer needed. This can be a problem if you are trying to preserve a 
// variable across multiple invocations of a single function. One solution to this is to declare
// the variable globally, however, this runs the risk of another aspect of the program changing 
// the variable in unexpected ways. Because JavaScript does not allow for the public / private 
// variable declarations, a different solution is to use function closures.
// Closures use nested functions to keep a variable alive in the global scope while maintaining 
// the privacy of that variable, i.e. allowing it only to be changed by calling the function.
function newFunc3 () {
	var counter = 0;			// Declares a variable we want kept alive
	return function () {			// Returns an anonymous function which
counter += 1; 		// increments the counter variable
return counter};
}
newFunc3();					// Returns 1
newFunc3();					// Returns 2
newFunc3();					// Returns 3