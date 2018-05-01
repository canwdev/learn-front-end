# 第一章 JavaScript简介

JavaScript 诞生于1995年，最初是用于浏览器端的表单验证。

JavaScript由Netscape公司开发。

微软在早期IE浏览器的JavaScript实现称为JScript。

JavaScript与JScript的语法和特性产生了分歧。

ECMA为了规范JavaScript世界标准，努力完成了ECMAScript作为世界JavaScript标准，此标准定义的只是这门语言的基础，不包括浏览器输入输出标准。

一个完整的JavaScript实现，由这3部分组成：ECMAScript（核心）、DOM（文档对象模型）、BOM（浏览器对象模型）。

ECMAScript规定了以下标准：语法、类型、 语句、关键字、保留字、操作符、对象。可以说JavaScript是一种ECMAScript的实现。

目前大量生产中使用的JS标准是ES5，目前最新（2018.4）的流行标准是ES6。

DOM，文档对象模型，Netscape和微软在开发DHTML时各持己见，如果不加以标准化限制，那么将会出现浏览器网页互不兼容的局面。因此W3C开始着手规划DOM，最新的标准为HTML5。

# 第二章 在HTML中使用JavaScript

1. 在页面中内嵌JS代码

```
<script type="text/javascript"> 
    function sayHi(){  
        alert("Hi!"); 
    } 
</script> 
```
记住不要在`<script></script>`标签内再嵌套`</script>`

2. 在页面外部调用JS代码

```
<script type="text/javascript" src="example.js"></script> 
```

标签的位置：传统的script标签是放在head内部，但这样影响页面加载速度，所以我们一般把标签放在`</body>`元素内容的后面。

在页面完全加载后执行js代码

```
// 原生js
window.onload=function(){};
// jQuery
$(window).load(function(){});
$(document).ready(function{});
```

HTML5 文档模式

```
<!DOCTYPE html> 
```

`<noscript>`元素:在不支持JS的浏览器中显示内容

```
 <noscript> 
      <p>本页面需要浏览器支持（启用）JavaScript。 
</noscript> 
```

# 第3章 基本概念

## 语法

JS变量区分大小写，其第一个字符必须是一个字母、下划线（_）、或美元符号（$）

严格模式：在函数内部的上方包含这条编译指示，也可以指定函数在严格模式下执行： 
```
function doSomething(){ 
    "use strict";  
    //函数体 
}
```
推荐在语句结尾加上分号`;`
推荐在变量前面加上`var`标识符

## 数据类型

JS包含了5种简单数据类型：`Undefined`、`Null`、`Boolean`、`Number`、`String`；还有一种复杂数据类型`Object`。

`Object`类型本质上是由一组无序的键值对组成的。
JS不支持创建自定义数据类型，因此只有6种数据类型。

JS是松散类型的，需要有一种能检测变量数据类型手段，他就是`typeof`。使用typeof可以返回一些字符串：

- "undefined" 这个值未定义
- "boolean" 是布尔值
- "string" 是字符串
- "number" 是数值
- "object" 是对象或null
- "function" 是函数


```
var message = "some string"; 
alert(typeof message);     // "string" 
alert(typeof(message));    // "string" 
alert(typeof 95);          // "number" 
```

### Undefined 类型
Undefined类型只有一个值：undefined。在使用var声明变量但未对其初始化时，就是undefined类型。

对未初始化的变量执行 typeof 操作符会返回 undefined 值，而对未声明的变量执行 typeof 操作符同样也会返回 undefined 值。

```
alert(typeof message);     // "undefined" 
alert(typeof age);         // "undefined" 
```
显式地初始化变量依然是明智的选择。如果能够做到这一点，那么当 typeof 操作符返回"undefined"值时，我们就知道被检测的变量还没有被声明，而不是尚未初始化。 


### Null类型
Null类型是第二个只有一个值的数据类型，null。null表示一个空对象指针，所以`typeof null`返回的值是`"object"`。

如果定义的变量准备在将来用于保存对象，那么最好将该变量初始化为 null 而不是其他值。这样一来，只要直接检查 null值就可以知道相应的变量是否已经保存了一个对象的引用。

```
if (car != null) {
    // 操作
}
```

实际上，undefined 值是派生自 null 值的，因此 ECMA-262 规定对它们的相等性测试要返回 true。

```
undefined == null     // true
```
![image](http://0.rc.xiniu.com/g2/M00/73/2F/CgAGe1rMqRSAIdXZAAAKCBlGPrU502.png)


### Boolean类型

Boolean类型只有两个类型，`true`和`false`，这两个值与0和1无关。

Boolean()方法，用于转换参数为Boolean值。

数据类型 | 转换为true的值 | 转换为false的值 
---|---|---
Boolean | true | false 
String | 任何非空字符串 | ""（空字符串） 
Number | 任何非零数字（包括无穷大） | 0和NaN
Object | 任何对象 | null
Undefined | n/a* | undefined

*n/a（或 N/A），是 not applicable的缩写，意思是“不适用”。 


### Number类型

Number类型用于表示整数和浮点数。
```
var intNum = 5;     // 十进制
var octalNum = 070; // 八进制（56）
var hexNum = 0x1f;  // 十六进制（31）
```

Number类型可以保存`0`和`-0`，正零和负零被认为相等。

最大值、最小值与负无穷、正无穷
```
Number.MIN_VALUE
// 5e-324
Number.MAX_VALUE
// 1.7976931348623157e+308
Number.NEGATIVE_INFINITY
// -Infinity
Number.POSITIVE_INFINITY
// Infinity
```

NaN（非数值）是一个特殊的数值。NaN与任何值都不相等
```
0/0
// NaN
1/0
// Infinity
-1/0
// -Infinity
NaN == NaN
// false
```

```
alert(isNaN(NaN));         //true 
alert(isNaN(10));          //false（10 是一个数值） 
alert(isNaN("10"));        //false（可以被转换成数值 10） 
alert(isNaN("blue"));      //true（不能转换成数值） 
alert(isNaN(true));        //false（可以被转换成数值 1） 
```

#### 数值转换
有 3 个函数可以把非数值转换为数值：Number()、parseInt()和 parseFloat()。
```
var num1 = Number("Hello world!");      //NaN 
var num2 = Number("");                  //0 
var num3 = Number("000011");           //11 
var num4 = Number(true);               //1 
```

不指定基数意味着让 parseInt()决定如何解析输入的字符串，因此为了避免错误的解析，我们建
议无论在什么情况下都明确指定基数。
```
var num1 = parseInt("10", 2);      //2  （按二进制解析） 
var num2 = parseInt("10", 8);       //8  （按八进制解析） 
var num3 = parseInt("10", 10);      //10 （按十进制解析） 
var num4 = parseInt("10", 16);      //16 （按十六进制解析）
```

parseFloat()也是从第一个字符（位置 0）开始解析每个字符。而且
也是一直解析到字符串末尾，或者解析到遇见一个无效的浮点数字字符为止。
```
var num1 = parseFloat("1234blue");         //1234 （整数） 
var num2 = parseFloat("0xA");               //0 
var num3 = parseFloat("22.5");              //22.5 
var num4 = parseFloat("22.34.5");           //22.34 
var num5 = parseFloat("0908.5");           //908.5 
var num6 = parseFloat("3.125e7");           //31250000 
```


### String 类型

String 类型用于表示由零或多个 16 位 Unicode 字符组成的字符序列，即字符串。字符串可以由双
引号（"）或单引号（'）表示。

ECMAScript 中的字符串是不可变的，也就是说，字符串一旦创建，它们的值就不能改变。要改变
某个变量保存的字符串，首先要销毁原来的字符串，然后再用另一个包含新值的字符串填充该变量。

转换成字符串
```
var age = 11; 
var ageAsString = age.toString();         // 字符串"11" 
var found = true; 
var foundAsString = found.toString();     // 字符串"true"
```

toString()可以输出以二进制、八进制、十六进制，乃至其他任意有效进制格
式表示的字符串值。
```
var num = 10; 
alert(num.toString());         // "10" 
alert(num.toString(2));        // "1010" 
alert(num.toString(8));        // "12" 
alert(num.toString(10));       // "10" 
alert(num.toString(16));       // "a" 
```

String()方法将任何类型的值转换成字符串
```
String(true)
// "true"
String(123)
// "123"
String(null)
// "null"
String(undefined)
// "undefined"
String(NaN)
// "NaN"
```



### Object类型

ECMAScript 中的对象其实就是一组数据和功能的集合。

创建一个对象：`var o = new Object();`。Object 类型是它所有实例的基础

Object的每个实例都有以下属性和方法

- constructor
- hasOwnProperty(propertyName)
- isPrototypeOf(object)
- propertyIsEnumerable(propertyName)
- toLocaleString()
- toString()
- valueOf()

宿主对象：DOM和BOM中的对象。

### 操作符

#### 一元操作符：`++` , `--`

#### 位操作符：暂略

#### 布尔操作符:`!` , `&&` , `||`

我们可以利用逻辑或的这一行为来避免为变量赋 null 或 undefined 值。例如：
```
var myObject = preferredObject || backupObject; 
```

#### 乘性操作符：`*` , `/` , `%`

#### 加性操作符：`+`, `-`

#### 关系操作符：`<`, `>`, `<=`, `>=`

在比较字符串时，实际比较的是两个字符串中对应位置的每个字符的字符编码值。

任何操作数与`NaN`比较，结果都是false

#### 相等操作符：`==`, `!=`, `===`, `!===`

注意，`==`和`!=`操作符会强制转换操作数类型，然后再判断他们是否相等

在比较布尔值时，将其转换成数值。null和undefined是相等的。NaN不与任何值相等，也不与它本身相等。如果操作数都是对象则比较它们是否同一个对象。

全等/全不等操作符`===` / `!===`不会进行强制类型转换。推荐使用这种操作符。
```
'55' == 55  //true
'55' === 55 //false
```

#### 条件操作符

遵循与Java中相同的语法格式。
```
variable = boolean_expression ? true_value : false_value;
var max = (num1 > num2) ? num1 : num2; 
```

#### 赋值操作符：`=`, `+=`, `-=`...

#### 逗号操作符：`,`

逗号操作符可以在一条语句中执行多个操作。逗号操作符总会返回 表达式的最后一项。
```
var num1=1, num2=2, num3=3;
var num = (5, 1, 4, 8, 0); // num 的值为 0
```

### 语句

#### if语句
```
if (i > 25) { 
    alert("Greater than 25."); 
} else if (i < 0) { 
    alert("Less than 0."); 
} else { 
    alert("Between 0 and 25, inclusive."); 
}
```

#### do-while

循环语句，内容至少循环一次
```
var i = 0; 
do { 
   i += 2; 
} while (i < 10); 
 
alert(i); 
```

#### while

```
var i=0
while (i<10) {
    i += 2;
}
```

#### for

使用 while 循环做不到的，使用 for 循环同样也做不到。也就是说，for 循环只是把与循环有关
的代码集中在了一个位置。
```
var count = 10;
for (var i=0; i<count; i++) {
    console.log(i);
}
```

#### for-in

for-in 语句是一种精准的迭代语句，可以用来枚举对象的属性。
```
for (var propName in window) {
	console.log(propName);
}
```


#### label语句

这个例子中定义的 start 标签可以在将来由 break 或 continue 语句引用。
```
start: for (var i=0; i < count; i++) { 
    alert(i);  
} 
```

```
clear();
var num = 0;
test:
for (var i = 0; i < 10; i++) {
  console.log('i='+i);
  for (var j = 0; j < 10; j++) {
    console.log('     j='+j);
    if (i==5 && j==5) {
      break test;
    }
    num++;
  }
}
alert(num);
```

#### break和continue

break会立即退出循环执行循环后面的语句。continue也是立即退出循环，但退出循环后会从循环顶部继续执行。
```
var num = 0; 
for (var i=1; i < 10; i++) { 
    if (i % 5 == 0) { 
       break; 
    } 
    num++; 
} 
 
alert(num);    //4 
```

```
var num = 0;
for (var i=1; i < 10; i++) { 
    if (i % 5 == 0) { 
        continue; 
    } 
    num++; 
} 
 
alert(num);    //8 
```


### with语句

定义 with 语句的目的主要是为了简化多次编写同一个对象的工作。
```
var qs = location.search.substring(1); 
var hostName = location.hostname; 
var url = location.href;
```
简化成
```
with(location){ 
    var qs = search.substring(1); 
    var hostName = hostname; 
    var url = href; 
} 
```
由于大量使用 with 语句会导致性能下降，同时也会给调试代码造成困难，因此
在开发大型应用程序时，不建议使用 with 语句。

