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
```