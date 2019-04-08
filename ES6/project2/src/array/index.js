// 将一个数组转换成用逗号分隔的参数序列，console.log(1,2,3)
console.log(...[1,2,3])

// 主要用于函数调用
function push(arr, ...items) {
  array.push(...items)
}

// 复制数组（浅拷贝）
let a1 = [1,2,3]
let a2 = a1
let a3 = [...a1]

console.log(a1 === a2)
console.log(a1 === a3)

// 与结构赋值结合（扩展运算符只能放在参数的最后一位）
let [first, ...rest] = [1,2,3,4,5]

// 将字符串转换为真正的数组
let strArr = [...'x\uD83D\uDE80y']
console.log(strArr)

// 而且能够正确识别四个字节的 Unicode 字符
console.log(strArr.length)