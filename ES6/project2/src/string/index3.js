// bad example

let tmpl = `
<ul>
  <% for(let i=0; i < data.supplies.length; i++) { %>
  <li><%= data.supplies[i] %></li>
  <% } %>
</ul>
`;

let evalExpr = /<%=(.+?)%>/g; // 直接eval的正则表达式
let expr = /<%([\s\S]+?)%>/g; // ???

console.log(tmpl);