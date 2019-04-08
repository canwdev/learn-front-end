let mName = 'window'

let foo = {
  mName: 'Foo'
}

function bar(msg = '') {
  return this.mName + msg
}

let bindBar = bar.bind(foo)
// 相当于 foo::bar

let applyBar = bar.apply(foo, ['apply123'])
// 相当于 foo::bar(['apply123'])

console.log(bindBar())

console.log(applyBar)