"use strict";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var n1 = 101,
    n2 = 102,
    n3 = 103;


console.log(n1);
console.log(n2);
console.log(n3);

console.log("------");
var _ref = [888],
    _ref$ = _ref[0],
    an1 = _ref$ === undefined ? 213 : _ref$,
    _ref$2 = _ref[1],
    an2 = _ref$2 === undefined ? 523 : _ref$2,
    _ref$3 = _ref[2],
    an3 = _ref$3 === undefined ? 654 : _ref$3;


console.log(an1);
console.log(an2);
console.log(an3);

console.log("------");
var _str1$str = { str1: 'hello', str2: 'world' },
    str1 = _str1$str.str1,
    str2 = _str1$str.str2;


console.log(str1);
console.log(str2);

console.log("------");
var foo = void 0;
var _foo = { foo: 'foostring' };
foo = _foo.foo;

console.log(foo);

console.log("------");

var _hello = "hello",
    _hello2 = _slicedToArray(_hello, 6),
    a = _hello2[0],
    b = _hello2[1],
    c = _hello2[2],
    d = _hello2[3],
    e = _hello2[4],
    f = _hello2[5];

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(f);
