const data = [
  {name: 'Ken', job: 'frontend'},
  {name: 'Sagiri', job: 'artist'}
]

// 模板字符串甚至还能嵌套。
const tmpl = data => `
<ul>
  ${data.map(
    item => `<li>${item.name}, ${item.job}</li>`
  ).join('')}
</ul>
`
console.log(tmpl(data))
