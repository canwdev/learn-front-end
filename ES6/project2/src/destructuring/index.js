// 数组的解构赋值
{

  {
    let [a, b, c] = [1, 2, 3]
    // 声明了3个变量a、b、c，并分别赋值为1、2、3
  }

  // 数组嵌套数组
  {
    let [foo, [[bar], baz]] = [1, [[2], 3]];
    // foo // 1
    // bar // 2
    // baz // 3

    let [, , third] = ["foo", "bar", "baz"];
    // third // "baz"

    let [x, , y] = [1, 2, 3];
    // x // 1
    // y // 3

    let [head, ...tail] = [1, 2, 3, 4];
    // head // 1
    // tail // [2, 3, 4]

    {
      let [x, y, ...z] = ['a'];
      // x // "a"
      // y // undefined
      // z // []
    }
  }

}

// 对象的解构赋值
{
  {
    let { foo, bar } = { foo: "aaa", bar: "bbb" };
    // foo // "aaa"
    // bar // "bbb"
  }

  {
    // 下面这条语句实际上是对上面的简写
    let { foo: foo, bar: bar } = { foo: "aaa", bar: "bbb" };

    // 对象的解构赋值的内部机制，是先找到同名属性，然后再赋给对应的变量。真正被赋值的是后者，而不是前者。
    let {foo:abc, bar:def} = {foo: "aaa", bar: "bbb"}
    // abc -> 'aaa'
    // def -> 'bbb'

    // 对象的嵌套解构
    {
      const node = {
        loc: {
          start: {
            line: 1,
            column: 5
          }
        }
      };

      let { loc, loc: { start }, loc: { start: { line }} } = node;
      // line // 1
      // loc  // Object {start: Object}
      // start // Object {line: 1, column: 5}
    }

    // 解构时设置默认值
    {
      // 当y，没有值时，就使用默认值5
      let {x, y = 5} = {x: 1};
      // x // 1
      // y // 5

      {
        // 当x有值时，y的值就成为x解构的值5
        let {x: y = 3} = {x: 5};
        // y // 5
      }
    }

  }
}