// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '@css/global.css'
import '@css/normalize.css'
// 解决不同尺寸移动设备边框显示的问题
import '@css/border.css'
// 解决某些移动设备点击事件有300毫秒延迟的问题
import fastClick from 'fastclick'
// 字体图标iconfont
import '@css/iconfont/iconfont.css'
// 轮播组件
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false
fastClick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
