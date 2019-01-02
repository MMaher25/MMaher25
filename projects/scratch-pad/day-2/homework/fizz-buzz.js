// #!/usr/bin/env node

'use strict';

/**
 * 2: Fizz Buzz
 *
 *  a. Write a Function called fizzBuzz that prints the numbers from 1 to 100.
 *  b. BUT, for multiples of three print “Fizz” instead of the number.
 *  c. AND for the multiples of five print “Buzz”.
 *  d. FINALLY, for numbers which are multiples of both three and five print “FizzBuzz”.
*/
function fizzBuzz() {
    // YOUR CODE GOES BELOW HERE //
    //print 1-100
    for (let x = 1; x <= 100; x++)
    //if divisible by 3 and 5, print fizzbuzz
    if (x%5 == 0 && x%3==0) {
        console.log('FizzBuzz');
    }
    //if divisible by 3, print fizz
    else if (x%3 == 0) {
        console.log('Fizz');
    }
    //if divisible by 5 print buzz
    else if (x%5 == 0) {
        console.log('Buzz');
    }
    //else print number
    else {
        console.log(x);
    }


    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.fizzBuzz = fizzBuzz
}