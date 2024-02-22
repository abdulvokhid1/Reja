// F-TASK:

function findDoublers(str) {
  let collect = [];
  for (let letter of str) {
    if (collect.includes(letter)) {
      return true;
    } else {
      collect.push(letter);
    }
  }
  return false;
}

console.log(findDoublers("hello"));
