# 引用类型

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