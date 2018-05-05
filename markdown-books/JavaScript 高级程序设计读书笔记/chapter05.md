# 引用类型

## Object类型

引用类型的值（**对象**）是引用类型的一个实例。

尽管 ECMAScript从技术上讲是一门面向对象的语言，但它不具备传统的面向对象语言所支持的**类**和**接口**等基本结构。

创建Object实例的方式有两种：new操作符后跟Object构造函数、**对象字面量**表示法。

```js
var person = new Object();
person.name = "千歳";
person.age = null;

var person1 = {
    name: "千歳",
    age: null
}

// 如果在最后一个属性后面添加逗号，会在 IE7 及更早版本和Opera 中导致错误

var person2 = {}; //与 new Object()相同
```

- 在通过对象字面量定义对象时，实际上不会调用 Object 构造函数。
- 开发人员更青睐对象字面量语法。
- 对象字面量也是向函数传递大量可选参数的首选方式

```js
function displayInfo(args) {
    var output = "";
    if (typeof args.name == "string") {
        output += "Name: " + args.name + "\n";
    }
    if (typeof args.age == "number") {
        output += "Age: " + args.age + "\n";
    }
    alert(output);
}
// 对象字面量也是向函数传递大量可选参数的首选方式
displayInfo({
    name: "Nicholas",
    age: 29
});

displayInfo({
    name: "Greg"
});
```

放问对象属性可以用**点表示法**，亦可以用**方括号表示法**，在使用方括号语法时，应该将要访问的属性
以字符串的形式放在方括号中。

```js
person["name"]
person.name
```

这两种访问对象属性的方法没有什么区别，但方括号访问法的主要优点是可以通过变量来访问属性。

如果属性名中包含会导致语法错误的字符（如`person["first name"]`），或者属性名使用的是关键字或保留字，也可以使用方括
号表示法。

除非必须使用变量来访问属性，否则我们建议使用点表示法。

## Array类型

ECMAScript数组的每一项可以保存任何类型的数据，数组的大小是可以动态调整的。

创建数组的方式：使用Array构造函数、数组字面量表示法。

```js
var arr1 = new Array();
var arr2 = new Array(3);
var arr3 = new Array('aaa','bbb');
var arr4 = Array();

var arr5 = [];
var arr6 = [1,2,3];
```

在使用数组字面量表示法时，也不会调用Array构造函数。

数组的读取和设置数组值，使用例如`arr[0]`，0是第一个数组的索引。

length 属性很有特点——它不是只读的。因此，通过设置这个属性，可以从数组的末尾移
除项或向数组中添加新项。

### 检测数组

检测数组有两种方式：`instanceof`和`Array.isArray()`，IE8不支持后一种方法。

```js
var arr = [];
arr instanceof Array;   // true
Array.isArray(arr);     // true
```

### 转换方法

所有对象都有`toLocaleString()`、`toString()`、`valueOf`方法。

```js
var arr = ['red', 'green', 'blue'];
arr.toString()  // "red,green,blue"
arr.valueOf()
```

使用`join()`方法，可以使用不同的分隔符来构建这个字符串。

```js
arr.join('|')   // "red|green|blue"
arr.join('/')   // "red/green/blue"
arr.join(' ')   // "red green blue"
```

### 栈方法

栈是一种后进先出（LIFO）的数据结构。

push()方法可以接收任意数量的参数，把它们逐个添加到数组末尾，并返回修改后数组的长度。

pop()方法不接收参数，从数组末尾移除最后一项，减少数组的 length 值，然后返回移除的项。

```js
var arr = ['red', 'green', 'blue'];
arr.push('yellow');  // 返回 4， 数组内容：[ "red", "green", "blue", "yellow" ]
arr.pop();           // 返回 "yellow"，数组内容：[ "red", "green", "blue" ]
```

### 队列方法

队列是一种先进先出（FIFO）的数据结构。

shift() 能够移除数组中的第一个项并返回该项，同时将数组长度减 1。

结合push()方法使用。

```js
var arr = ['red', 'green', 'blue'];
arr.push('umi');    // 4
arr.shift();        // "red"
```

unshift()与 shift()的用途相反：它能在数组前端添加任意个项并返回新数组的长度。

### 重排序方法

`reverse()`方法翻转数组项的顺序。
`sort()`方法按升序排列数组项，即由小到大排列，会改变原来的值。

sort()方法会调用每个数组项的 toString()转型方法，然后比较得到的**字符串**，以确定如何排序。

```js
var val = [0, 1, 5, 10, 15];
val.sort();  // [ 0, 1, 10, 15, 5 ]

// 这种排序是有问题的，因此 sort()方法可以接收一个比较函数作为参数，
// 以便我们指定哪个值位于哪个值的前面。

function compare(n1, n2) {
    if (n1>n2) {
      return 1;
    } else if (n1<n2) {
      return -1;
    } else {
      return 0;
    }
}
val.sort(compare);  // [ 0, 1, 5, 10, 15 ]
```

compare函数一种更简单的写法

```js
function compare(n1, n2) {
    return n1-n2;
}
```

### 操作方法

### 位置方法

### 迭代方法

### 