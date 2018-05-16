let model = `canwdev`;
let a=5,b=1;

let str = `欢迎来到${model}的ES6测试网站，</br>
这段话是使用ES${a+b}字符串拼接显示出来的，</br>
支持<span style="color:red">HTML</span>标签。`

document.write(str);

document.write(`-`.repeat(30));

document.write(str.includes(model));
console.log(str.startsWith(`欢迎`));
console.log(str.endsWith("标签。"));

