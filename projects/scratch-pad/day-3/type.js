// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: TYPE
 */

/** 
 * Given an input value, return true if the value is an Array, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Array? Can typeof
 * work?
 */
function isArray(value) {
    // YOUR CODE BELOW HERE //
    
    // Call Array method .isArray
    return Array.isArray(value);
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if the value is an Object intended as a 
 * collection, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Object, but not 
 * null, not an Array, not a Date - all of these will return 'object' if used 
 * with typeof.
 */
function isObject(value) {
    // YOUR CODE BELOW HERE //
    
    // rule out arrays, null, and dates, which all return as objects
    
    if (typeof value === "object" && !Array.isArray(value) && value !== null && value instanceof Date === false) {
        return true;
    } else {
        return false;
    }
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if is either an Array or an an Object 
 * intended as a collection, false if otherwise.
 * 
 * TIP: Similar to isObject, but we must return true if the value is an Array.
 */
function isCollection(value) {
    // YOUR CODE BELOW HERE //
    
    // check to see if the input is a date or null, returning false if so
    if (value instanceof Date === true || value === null) {
        return false;
    }
    // check to see if it's an object, returning true
    else if (typeof value === 'object') {
        return true;
    }
    // else return false
    else {
        return false;
    }
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input value, return the type of the value as a String
 * 
 * Types are one of: 
 *    - "string"
 *    - "array"
 *    - "object"
 *    - "undefined"
 *    - "number"
 *    - "boolean"
 *    - "null"
 *    - "function"
 *    - "date"
 * 
 * Examples:
 *    typeOf(134) -> "number"
 *    typeOf("javascript") -> "string"
 *    typeOf([1,2,3]) -> "array"
 */ 
function typeOf(value) {
    // YOUR CODE BELOW HERE //
    //determine if value is a date, if so, return 'date'
    if (value instanceof Date === true) {
        return 'date';
    }
    //determine if value is an array, if so, return 'array'
    else if (Array.isArray(value)) {
        return 'array';
    }
    //determine if value is null, if so, return 'null'
    else if (value === null){
        return 'null';
    }
    //determine if value is an object, if so, return 'object'
    //determine if value is a number, if so, return 'number'
    //determine if value is a boolean, if so, return 'boolean'
    //determine if value is a string, if so, return 'string'
    //determine if value is undefined, if so, return 'undefined'
    //determine if value is a function, if so, return 'function'
    else {
        return typeof value;
    }
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.isArray = isArray;
    module.exports.isObject = isObject;
    module.exports.isCollection = isCollection;
    module.exports.typeOf = typeOf;
}
