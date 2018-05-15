"use strict";

var a = "Global";
{
    var _a = "Block";
}
console.log(a);

var b = "notchangeable";
// b = "change";    // Uncaught TypeError: Assignment to constant variable.
console.log(b);
