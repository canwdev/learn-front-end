# 面向对象的程序设计

## 对象·Object

ES中没有类的概念，因此它的对象也与基于类的语言中的对象有所不同。ES对于对象的定义为：“无序属性的集合，其属性可以包含基本值、对象或者函数”。

对象的每个属性或方法都有一个名字，而每个名字都映射到一个值。无非就是一组名值对，其中值可以是数据或函数。

### 附加：对象有哪些性质？

对象具有 继承、封装、多态 等特性。

* 继承：子类继承父类的属性和方法
* 封装：对象可以把基本属性值和方法封装起来
* 多态：对象存在多种形态，对象可以重载和重写
    * 重载：方法名相同，参数不同（备注：JavaScript语言没有重载）
    * 重写：子类重写父类的方法

```js
// 访问器属性
var obj = {
    _year: 2017,
    edition: 1
}
Object.defineProperty(obj, "year", {
    get: function () {
        return this._year
    },
    set: function (newValue) {
        if (newValue > 2018) {
            this._year = newValue;
            this.edition += newValue - 2018;
        }
    }
})

obj.year = 2019;
console.log(obj.year);  // 2019
```

## 创建对象

### 单例模式：

使用变量字面量、或Object构造函数方式创建的对象。

```js
var obj = {
    name: 'dirfting mirai',
    age: '20'
}
```

### 工厂模式：

```js
function createObj(name, age) {
    var obj = new Object();
    obj.name = name;
    obj.age = age;
    return obj;
}

var obj = createObj('dirfting mirai', 20);

console.log(obj)    // ​​​​​{ name: 'dirfting mirai', age: 20 }​​​​​
```

### 构造函数模式

```js
function People(name, age) {
    this.name = name;
    this.age = age;
}

var people1 = new People('dirfting mirai', 20);
console.log(people1.constructor == People)  // true
console.log(people1 instanceof People)  // true


// 任何函数，只要通过 new 操作符来调用，那它就可以作为构造函数，如果不通过 new 操作符来调用，那它跟普通函数也不会有什么两样。

People('Quokka JavaScript', 111);
var Global = function () {
    return this;
}();
console.log(Global.age);    // 111

var obj = {};

People.call(obj, 'Time Reverse', 0);

console.log(obj.name, obj.age); // Time Reverse 0
```

构造函数的问题：

```js
function Person(name, age, job){
    this.name = name;
    this.age = age;
    this.job = job;
    this.sayName = function(){  // 注意此行
        alert(this.name);
    };
}
```

以这种方式创建函数，会导致不同的作用域链和标识符解析，但创建 Function 新实例的机制仍然是相同的。因此，不同实例上的同名函数是不相等的

```js
alert(person1.sayName == person2.sayName);  //false
```

通过把函数定义转移到构造函数外部来解决这个问题。

```js
function Person(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
    this.sayName = sayName;
}
function sayName() {
    alert(this.name);
}
```

如果对象需要定义很多方法，那么就要定义很多个全局函数，于是我们这个自定义的引用类型就丝毫没有封装性可言了。好在，这些问题可以通过使用原型模式来解决。

### 原型模式

我们创建的每个函数都有一个 prototype（原型）属性，这个属性是一个指针，指向一个对象，
而这个对象的用途是包含可以由特定类型的所有实例共享的属性和方法。如果按照字面意思来理解，那
么 prototype 就是通过调用构造函数而创建的那个对象实例的原型对象。
使用原型对象的好处是可以让所有对象实例共享它所包含的属性和方法。

```js
function Person(){};

Person.prototype.name = 'Drifting Mirai';
Person.prototype.age = 20;
Person.prototype.sayName = function(){
    console.log(this.name);
}

var person1 = new Person();
var person2 = new Person();

person1.sayName();  // ​​​​​Drifting Mirai

console.log(person1.sayName == person2.sayName) // true
```