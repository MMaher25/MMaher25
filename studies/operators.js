// 0. Operators
// Operators are used is expressions to assign new values to variables, compare values,
// and perform arithmetic.
//
// 1. Assignment operators
// Assignment operators assign new values to variables.
var ex1 = 7;            // Assigns the value 7 to the variable ex1
// The assignment operator = assigns the value of the expression on the right to the 
// variable on the left. This is the basic assignment operator.
// The += operator assigns the sum of the variable on the left and the value on the right
// to the variable.
var ex2 = 9;            // ex2 will be 9
ex2 += 2;               // ex2 will be 11
// The -= operator assigns the difference of the variable on the left and the value on the right
// to the variable.
var ex3 = 10;           // ex3 will be 10
ex3 -= 3;               // ex3 will be 7
// The *= operator assigns the product of the variable on the left and the value on the right
// to the variable.
var ex4 = 11;           // ex4 will be 11
ex4 *= 3;               // ex4 will be 33
// The /= operator assigns the quotient of the variable on the left and the value on the right
// to the variable.
var ex5 = 15;           // ex5 will be 15
ex5 /= 5;               // ex5 will be 3
// The %= operator assigns the remainder of dividing the variable on the left by the value on 
// the right to the variable.
var ex6 = 17;           // ex6 will be 17
ex6 %= 4;               // ex6 will be 1
// 2. Arithmetic operators
// Arithmetic operators perform basic arithmetic functions on numbers.
// The + operator returns the sum of two values.
var ex7 = 2 + 3;        // ex7 will be 5
// The - operator returns the difference of two values.
var ex8 = 10 - 9;       // ex8 will be 1
// The * operator returns the product of two values.
var ex9 = 4 * 5;        // ex9 will be 20
// The / operator returns the quotient of two values.
var ex10 = 6 / 2;       // ex10 will be 3
// The % operator returns the remainder of dividing the two values.
var ex11 = 10 % 3;      // ex11 will be 1
//
// 3. Comparison operators
// Comparison operators are used in logical statements to compare two values and 
// evaluate to a boolean.
// The == operator evaluates to true if both values are equal, regardless of data type.
7 == "7";               // Evaluates to true
12 == 0;                // Evaluates to false
// The === operator evaluates to true if both values are equal and the same data type.
1 === 1;                // Evaluates to true
2 === "2";              // Evaluates to false
// The != operator evaluates to true if both values are not equal, regardless of data type.
4 != 9;                 // Evaluates to true
21 != "21";             // Evaluates to false
// The !== operator evaluates to true if both values are not equal or not the same data type.
2 !== "2";              // Evaluates to true
5 !== 5;                // Evaluates to false
// The > operator evaluates to true if the first value is greater than the second.
10 > 7;                 // Evaluates to true
7 > 10;                 // Evaluates to false
// The >= operator evaluates to true if the first value is greater than or equal to the second.
10 >= 10;               // Evaluates to true
4 >= 9;                 // Evaluates to false
// The < operator evaluates to true if the first value is less than the second.
6 < 7;                  // Evaluates to true
14 < 9;                 // Evaluates to false
// The <= operator evaluates to true if the first value is less than or equal to the second.
16 <= 16;               // Evaluates to true
6 <= 3;                 // Evaluates to false
//
// 4. Logical operators
// Logical operators are used to determine the logic between values.
// The && operator evaluates to true if both expressions return true.
17 > 19 && 8 < 10;      // Evaluates to true
1 < 2 && 2 < 1;         // Evaluates to false
// The || operator evaluates to true if either expression returns true.
10 === 10 || 9 === 10;  // Evaluates to true
7 >= 8 || 0 > 1;        // Evaluates to false
//
// 5. Unary operators
// Unary operators take only one argument.
// The ! operator returns the opposite of the evaluated expression.
!(5 < 4);               // Evaluates to true
!(6 === 6);             // Evaluates to false
// The + operator attempts to convert the value to a number.
+"3"                    // Evaluates to 3
+"-17"                  // Evaluates to -17
// The - operator attempts to convert the value to a number, then negates it.
-"12"                   // Evaluates to -12
-"-10"                  // Evaluates to 10
// The typeof operator returns the datatype of the argument as a string.
typeof 7;               // Evaluates to "number"
typeof "6";             // Evaluates to "string"
typeof (6 > 7);         // Evaluates to "boolean"
//
// 6. Ternary operator (a ? b : c)
// The ternary operator ? is the only operator in JavaScript that takes 3 arguments.
// It is often used in place of an if statement. If the conditional returns truthy, the operator
// executes the first expression. If the statement returns falsy (false, 0, "", NaN, null), the
// operator executes the second expression.
(4 < 5) ? console.log("less") : console.log("greater");     // Prints "less"