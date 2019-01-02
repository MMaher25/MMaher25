// 0. Variables
// To hold things in memory during the life-cycle of a program, we can use variables.  Variables
// are named identifiers that can point to values of a particular type, like a Number, String,
// Boolean, Array, Object or another data-type.  Variables are called so because once created, we
// can CHANGE the value (and type of value) to which they point.
// To create a variable we use the keyword, var, followed by a name (id or alias) for our
// variable.
// There are 2 phases of using variables: declaration and initialization (or assignment).
//
// 1. Declaration
var myName;
// At the declaration phase, the variable myName is undefined because we have NOT initialized
// it to anything
console.log(myName);        // prints undefined
//
// 2. initialization or assignment
myName = 'john';
console.log(myName);        // prints => "john"
//
// 3. re-assignment
myName = 'bob';
console.log(myName);        // prints => "bob"
// We can assign and re-assign anything to a variable - we cannot do this with constants
var myVariable = 1;
var myVariable = true;
myVariable = "someString";
// 4. var, let, and const
// Variables can be declared with one of 3 keywords. The var keyword is the default way to
// declare a variable. Variables declared with var are globally available.
var example = "Stuff";
// The let keyword declares variable in mush the same way, however, let variables are defined
// in block scope, meaning they are inaccessible to their parent scope. Additionally, let
// variables are not hoisted (more on this later).
let newExample = "More stuff";
function newFunc () {           // Create a new function
    let localVar = 5;           // Declare a block-scoped variable with let
    console.log(localVar);      // Prints localVar to the console when the function is run
}
//console.log(localVar);        // Creates reference error, localVar is not declared
// The const keyword is similar to the let keyword in that it declares a block-scoped variable
// which will not be hoisted. However, const variables are constant and can not be changed.
// Primitives assigned with const are immutable and can't be changed. Complex data assigned 
// with const can not be changed to other datatypes, but the contents of the array or object
// and still be manipulated.
const constVar = 13;            // Declare a new const variable
// constVar = 9;                // Returns error. Variable is read only.
const constArray = ["red", "blue", "green"];
constArray.push("black");       // Pushes a new element to the array
// 5. Hoisting
// When a variable is accessed before it is declared with the var keyword, the variable 
// declaration is hoisted to where it is first called. This means that var variable can be
// used before they are declared. However, only declarations are hoisted, not assignments.
newVar = 5;                     // Assigning a value to an undeclared variable
if (newVar === 5) {             // Using undeclared variable
    console.log("Hoisted");
}
var newVar;                     // Declaring the variable. This will be hoisted.