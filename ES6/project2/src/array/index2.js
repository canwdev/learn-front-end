// 这种数据接口常见于document.querySelectorAll（DOM 操作返回的 NodeList 集合）
let arrayLike = {
  '0': 'a',
  '1': 'b',
  '2': 'c',
  length: 3
}

// 转换成数组，等同于 [].slice.call(arrayLike)
let arr = Array.from(arrayLike)

console.log(arr)

// 只要是部署了 Iterator 接口的数据结构，Array.from都能将其转为数组。