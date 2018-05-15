let [n1,n2,n3] = [101,102,103];

console.log(n1);
console.log(n2);
console.log(n3);

console.log("------");
let [an1=213,an2=523,an3=654] = [888];

console.log(an1);
console.log(an2);
console.log(an3);

console.log("------");
let {str1, str2} = {str1:'hello', str2: 'world'}

console.log(str1);
console.log(str2);

console.log("------");
let foo;
({foo} = {foo:'foostring'});
console.log(foo)


console.log("------");
let [a,b,c,d,e,f] = "hello";
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(f);