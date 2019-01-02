// 0. If
// If statements are used to execute blocks of code only if a conditional statement 
// evaluates to true
if (1 > 0) {                                    // This condition is true
    console.log("One is greater than zero");    // This code will run
};  
if (10 === 9) {                                 // This condition is false
    console.log("Ten is nine")                  // This code will never run.
}
//
// 1. Else-if
// Additional conditions can be used to run other blocks of code using else if statements.
// This allows for different outcomes based on the state of variables in the code.
var ex1;
if (ex1 < 10) {                     // If the variable is less than 10
    console.log("Less than 10");    // Print "Less than 10"
} else if (ex1 > 10) {              // If the variable is greater than 10
    console.log("Greater than 10"); // Print "greater than 10"
}
// It is important to note that code is executed from the top down and only the first statement
// which evaluates to true will run. If more than one conditional statement evaluates to true
// some code may ever run.
var ex2 = 10;
if (ex2 > 5) {
    console.log("This will run");
} else if (ex2 < 20) {
    console.log("This code will not run");
}
//
// 2. Else
// If all conditional statements in an if statement or if/else if statement evaluate to false 
// a default condition can be established using the else statement.
var ex3 = 5;
if (ex3 < 0) {                                  // This statement is false
    console.log("This code will not run");      // This code will not run
} else if (ex3 > 10) {                          // This statement is also false
    console.log("This code will also not run"); // This also will not run
} else {                                        // This is the default statement
    console.log("This code will run");          // This will run since all preceding statements
}                                               // evaluated to false
//
// 3. Switch
// The switch statement allows you to compare an expression to multiple values and execute a 
// block of code only if they are equal. Switch statements do not accept conditional operators 
// and can only be used to test strict equality. The case keyword is used to enumerate values 
// which are to be tested against the initial expression. The default keyword defines what 
// code should run if no match exists.
// It is important to include the break keyword after each block of code as without it, all code
// in the switch expression after the first match will be executed.
var ex4 = 7;
switch (ex4) {
    case 1: 
        console.log("One");
        break;
    case 2: 
        console.log("Two");
        break;
    case 3: 
        console.log("Three");
        break;
    default:
        console.log("None of the above");
}