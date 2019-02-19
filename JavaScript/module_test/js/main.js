require.config({
  paths: {
    'jquery': 'https://cdn.bootcss.com/jquery/3.3.1/jquery.min'
  }
})

// AMD，异步模块加载
require(['module1','jquery'], function(module1, $){
  console.log(module1.add(1,1));
  console.log($.fn);
  
})