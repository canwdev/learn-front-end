"use strict";

var a = "Global";
{
    var _a = "Block"; // 用let声明的变量支持块级作用域
}
console.log(a);

var b = "notchangeable"; // 用const声明的变量是常量

// b = "change";    
// SyntaxError: src/index.js: "b" is read-only
// Uncaught TypeError: Assignment to constant variable.

console.log(b);
