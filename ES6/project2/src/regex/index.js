var str = 'abcdeXyZfg'; // 被测试的字符串

{
  // 测试字符串中是包含（g）有 xyz，不区分大小写（i）
  let regex = /xyz/ig;  // 正则表达式
  console.log(regex.test(str));

  console.log(regex.flags)
}

{
  // es6 的正则式构造函数
  let regex = new RegExp('xyz', 'ig');
  console.log(regex.test(str));

  // 字符串的正则方法（并不是es6新增的）
  console.log(str.match(regex));
  console.log(str.replace(regex, '1'));
  console.log(str.search(regex));
  console.log(str.split(regex));
}
