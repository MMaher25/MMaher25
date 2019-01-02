////////////////////////////////////////////////////////////////////////////////
// range ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function range(start, end, step) {
  if (step === undefined) {
    step = 1;
  }
  let result = [];
  if (step > 0){
    if (start === end) {
        return [];
    } else if (start < end){
      for (let x = start; x <= end; x += step){
        result.push(x);
      }
      return result;
    } else if (end < start){
      for (let x = start; x >= end; x -= step){
        result.push(x);
      }
      return result;
    }
  } else if (step < 0){
    if (start === end) {
        return [];
    } else if (start < end){
      for (let x = start; x >= end; x += step){
        result.push(x);
      }
      return result;
    } else if (end < start){
      for (let x = start; x <= end; x -= step){
        result.push(x);
      }
      return result;
    }
  }
}

////////////////////////////////////////////////////////////////////////////////
// sum /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function sum(array) {
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    total += array[i];
  }
  return total;
}

////////////////////////////////////////////////////////////////////////////////
// reverseArray ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArray(array) {
  let result = [];
  for (let i = 0; i < array.length; i++){
    result.unshift(array[i]);
  }
  return result;
}

////////////////////////////////////////////////////////////////////////////////
// reverseArrayInPlace /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArrayInPlace(array) {
  let placeholder = null;
  for (let i = 0; i < array.length/2; i++){
    placeholder = array[i];
    array[i] = array[array.length-i-1];
    array[array.length-i-1] = placeholder;
  }
}

////////////////////////////////////////////////////////////////////////////////
// arrayToList /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function arrayToList(array) {
  let list = null; // First value of list will be null
  for (let i = array.length-1; i >= 0; i--){ // loop through the array backwards
    list = {
      value: array[i],
      rest: list  // Set the value of rest to the previous value of list
    }
  }
  return list;
}

////////////////////////////////////////////////////////////////////////////////
// listToArray /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function listToArray(list) {
  let result = [];
  for (let x = list; x; x = x.rest) {
    result.push(x.value);
  }
  return result;
}

////////////////////////////////////////////////////////////////////////////////
// prepend /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function prepend(element, list) {
  return {
    value: element,
    rest: list
  }
}

////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function nth(list, num) {
  if (num == 0) {
    return list.value;
  } else if (list.rest === null) {
    return undefined;
  } else {
    return nth(list.rest, num-1);
  }
}

////////////////////////////////////////////////////////////////////////////////
// deepEqual ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function deepEqual(val1, val2) {
  if (val1 === val2) {
    return true;    // If === works, use it, otherwise, move on
  } else if (typeof val1 === "object" && val1 != null && typeof val2 === "object" && val2 != null) {
    if (Object.keys(val1).length != Object.keys(val2).length) {
      return false;                               // If objects have different number of keys, return false
    } else if (Object.keys(val1).length == 0) {
      return true;
    }
    for (let key in val1) {                       // Loop over each key in val1
      if (val2.hasOwnProperty(key)) {             // check to see if val2 has that key
        if (!deepEqual(val1[key], val2[key]))     // use recursive function to see if the values are not equal
          return false;                           // return false if same keys, but different values
      } else {
        return false;                             // return false if different keys
      }
      return true;                                // otherwise return true
    }
  } else {
    return false;
  }
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    range,
    sum,
    reverseArray,
    reverseArrayInPlace,
    arrayToList,
    listToArray,
    prepend,
    nth,
    deepEqual,
  };
};
