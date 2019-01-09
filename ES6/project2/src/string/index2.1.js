const data = [
  {first:'aFirst', last:'aLast'},
  {first:'bFirst', last:'bLast'},
];

var amap = data.map(item => `${item.first}, ${item.last}`).join('');

console.log(amap);