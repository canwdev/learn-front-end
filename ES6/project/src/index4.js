// 数组类型的json对象，需要有length属性
let json = {
    '0': 'zero',
    '1': 'one',
    '2': 'two',
    '3': 'three',
    length: '4'
}
console.log(json);

// 将json对象转换成数组
let arr = Array.from(json);
console.log(arr);

// 如果后端发过来的是一个个数字。。
let numbersArr = Array.of(1, 2, 3, 4, 5, 6, 7);
console.log(numbersArr);


// 某后端发过来的数组，但他是字符串字符串
let data = '[1,2,3,4]';
let dataArr = eval(data);   // eval比较消耗性能，不推荐
console.log(dataArr);

// find实例方法
let finder = dataArr.find(function (value, index, arr) {
    return value > 3;
});

console.log(finder);