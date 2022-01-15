
function sum(fromN, toN) {
  // Sum all the values from fromN up to toN
  // base case
  if (fromN === toN) {
    return fromN
  }

  // recursive case checking number order
  // add
  return fromN < toN
    ? fromN + sum(fromN + 1, toN)
    : fromN + sum(fromN - 1, toN)
}

module.exports = sum;
