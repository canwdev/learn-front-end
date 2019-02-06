// rest 参数之后不能再有其他参数（即只能是最后一个参数），否则会报错。

/**
 * 入栈器
 * @param array
 * @param items
 * @returns {*}
 */
function push(array, ...items) {
  items.forEach(function (item) {
    array.push(item);
    console.log(item);
  });
  return array
}

var a = [];
push(a, 2,3,4)