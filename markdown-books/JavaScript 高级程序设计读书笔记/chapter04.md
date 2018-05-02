# 第四章 变量、作用域和内存问题

## 基本类型和引用类型的值

- 基本类型指的是简单的数据段（即5种基本数据类型：Number,String,Boolean,Null,Undefined）。
- 引用类型值指的是那些可能由多个值构成的对象（Object）。
- JavaScript不允许直接访问内存中的位置，因此在操作对象时，实际上在操作对象的引用。
- 不能给基本类型的值添加属性，否则这个添加的属性值是undefined。只能给引用类型的值动态的添加属性。

## 复制变量值

下面的例子可以说明，如果从一个变量向另一个变量复制基本类型的值，会在变量对象上创建一个新值，然后把该值复制
到为新变量分配的位置上。

```js
var num1 = 5;
var num2 = num1;

console.log('num1='+num1+', num2='+num2);   // num1=5, num2=5

num1 = 6;
console.log('num1='+num1+', num2='+num2);   // num1=6, num2=5
```

复制对象时，其实复制的是对象的引用，修改原来的对象值会改变复制后的对象值。

![image](./res/img4-2.png)

```js
var obj1 = {name:'原始的字符串'};
var obj2 = obj1;

console.log(obj2.name);     // 原始的字符串

obj1.name = '修改一下';

console.log(obj2.name);     // 修改一下
```

## 传递参数

- ECMAScript 中所有函数的参数都是按值传递的。但对于对象就没那么简单了：
    - 在向参数传递**基本类型**的值时，被传递的**值**会被复制给一个局部变量。
    - 在向参数传递**引用类型**的值时，会把这个值在内存中的**地址**复制给一个局部变量，因此这个局部变量的变化会反映在函数的外部。

```js
var obj1 = {name:'name1'};
function setName(obj) {
  obj.name = 'name2';
    // obj 和 obj1 引用的是同一个对象。换句话说，即使这个变量是按值传递的，obj 也会按引用来访问同一个对象。
}
console.log(obj1);  // name1
setName(obj1);
console.log(obj1);  // name2, 这种情况下原来对象的内容会被更改
```

很多人错误的认为：在局部作用域中修改的对象会在全局作用域中反映出来，就说明
参数是按引用传递的。为了证明对象是按值传递的，看一看下面这个例子：

```js
var obj1 = {name:'name1'};
function setName(obj) {
  obj.name = 'name2'
  obj = {name:'new name 2333'};
}
console.log(obj1);
setName(obj1);
console.log(obj1);  // 仍然是name2，而不是在函数内部新建的对象2333。

// 这说明即使在函数内部修改了参数的值，但原始的引用仍然保持未变。
// 实际上，当在函数内部重写 obj 时，这个变量引用的就是一个局部对象了。
// 而这个局部对象会在函数执行完毕后立即被销毁。
```

## 检测类型

typeof 操作符是确定一个变量是`string`、`number`、`boolean`，还是 `undefined` 的最佳工具。

```js
var num = 10;
var str = 'helloworld';
var bol = true;
var nul = null;
var und = undefined;
var obj = new Object();
var reg = /0-9/;            // 正则表达式。

console.log(typeof num);    // 'number'
console.log(typeof str);    // 'string'
console.log(typeof bol);    // 'boolean'
console.log(typeof nul);    // 'object'
console.log(typeof und);    // 'undefined'
console.log(typeof obj);    // 'object'
console.log(typeof reg);    // 'object'
```

`typeof` 在检测引用值时用处不大，这时候你需要使用 `instanceof` 操作符。（所有引用类型值都是Object）

语法：`result = variable instanceof constructor`

```js
var persion = new Object();
var arr = [1,2,3,4];
var reg = /0-9/;

console.log(persion instanceof Object);     // true
console.log(arr instanceof Array);          // true
console.log(reg instanceof RegExp);         // true
```