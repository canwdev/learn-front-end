"use strict";

var model = "canwdev";
var a = 5,
    b = 1;

var str = "\u6B22\u8FCE\u6765\u5230" + model + "\u7684ES6\u6D4B\u8BD5\u7F51\u7AD9\uFF0C</br>\n\u8FD9\u6BB5\u8BDD\u662F\u4F7F\u7528ES" + (a + b) + "\u5B57\u7B26\u4E32\u62FC\u63A5\u663E\u793A\u51FA\u6765\u7684\uFF0C</br>\n\u652F\u6301<span style=\"color:red\">HTML</span>\u6807\u7B7E\u3002";

document.write(str);

document.write("-".repeat(30));

document.write(str.includes(model));
console.log(str.startsWith("\u6B22\u8FCE"));
console.log(str.endsWith("标签。"));
