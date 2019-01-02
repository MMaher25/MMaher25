// /////////////////////////////////////////////////////////////////////////////
// flatten /////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function flatten(array) {
  return array.reduce( (x,y) => x.concat(y) );
}

// /////////////////////////////////////////////////////////////////////////////
// loop ////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function loop(val, test, update, body) {
  for (val; test(val); val = update(val)) {
    body(val);
  }
}

// /////////////////////////////////////////////////////////////////////////////
// every ///////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function every(array, func) {
  let result = true;
  for (let x = 0; x < array.length; x++) {
    if (!func(array[x])) {
      result = false;
    }
  }
  return result;
}

// /////////////////////////////////////////////////////////////////////////////
// dominantDirection ///////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

import {SCRIPTS} from '/scripts.js'; 

function characterScript(code) {
  for (let script of SCRIPTS) {
    if (script.ranges.some(([from, to]) => {
      return code >= from && code < to;
    })) {
      return script.description;
    }
  }
  return null;
}

function countBy(items, groupDirection) {
  let counts = [];
  for (let item of items) {
    let direction = groupDirection(item);
    let known = counts.findIndex(c => c.direction == direction);
    if (known == -1) {
      counts.push({direction, count: 1});
    } else {
      counts[known].count++;
    }
  }
  return counts;
}

function dominantDirection(string) {
  let scripts = countBy(string, char => {
    let script = characterScript(char.codePointAt(0));
    return script ? script.direction : "none";
  }).filter(({direction}) => direction != "none");
  if (scripts.length === 0) {
    return "No dominant direction";
  } else if (scripts.length === 1) {
    return scripts[0].direction;
  } else {
    if (scripts.reduce( (acc, cur) => acc.count === cur.count)) {
      return "No dominant direction";
    } else {
      return scripts.reduce( (acc, cur) => acc.count >= cur.count ? acc.direction : cur.dirction);
    }
  }
}

// /////////////////////////////////////////////////////////////////////////////
//  //////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    flatten,
    loop,
    every,
    dominantDirection,
  };
};
