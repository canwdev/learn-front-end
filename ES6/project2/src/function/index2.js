// rest（剩余的）参数

function add(...values) {
  console.log('arguments', Array.prototype.slice.call(arguments))
  console.log('values', values)
  let sum = 0;

  // The for...of statement creates a loop iterating over iterable objects
  for (var val of values) {
    sum += val
  }

  return sum
}

console.log(add(1,2,3))