'use strict';

var json = {
    '0': 'zero',
    '1': 'one',
    '2': 'two',
    '3': 'three',
    length: '4'
};
console.log(json);

var arr = Array.from(json);
console.log(arr);

var data = '[1,2,3,4]';
var dataArr = Array.of(data);
console.log(dataArr);
