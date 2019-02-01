// 函数的默认值

var x = 1;
function foo(x, y = function () { x=2 }) {
  console.log(x)
  var x = 3;
  y();
  console.log(x)
}
foo()
console.log(x)