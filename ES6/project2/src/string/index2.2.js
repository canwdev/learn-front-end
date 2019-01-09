let str = 'return `hello ${name}`';
let fun = new Function('name', str);

console.log(fun('world'));