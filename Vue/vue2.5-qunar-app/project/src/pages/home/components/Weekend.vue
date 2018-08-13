<template>
  <div class="weekend">
    <div class="weekend-title">周末去哪儿</div>
    <ul>
      <li class="weekend-item" v-for="item in weekendList" :key="item.id">
        <div class="img-wrapper">
          <img class="item-img" :src="item.imgUrl" :alt="item.title">
        </div>
        <div class="item-info">
          <p class="title">{{item.title}}</p>
          <p class="desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  props: {
    weekendList: Array
  },
  data () {
    return {
      weekendListStatic: [{
        id: '0001',
        imgUrl: require('@/assets/img/weekend/1.jpg'),
        title: '当地人游深圳',
        desc: '当地人带你发现不一样的深圳'
      }, {
        id: '0002',
        imgUrl: require('@/assets/img/weekend/1.jpg'),
        title: '当地人游深圳',
        desc: '当地人带你发现不一样的深圳'
      }, {
        id: '0003',
        imgUrl: require('@/assets/img/weekend/1.jpg'),
        title: '当地人游深圳',
        desc: '当地人带你发现不一样的深圳'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~@css/variables.styl'
.weekend-title
  line-height .8rem
  background #eee
  text-indent .2rem
ul
  padding-left 0
  margin 0
.weekend-item
  .img-wrapper
    overflow hidden
    height 0
    width 100%
    padding-bottom 37%
  .item-img
    width 100%
  .item-info
    padding .2rem
    padding-bottom .3rem
    min-width 0
    position relative
    .title
      font-size .32rem
      line-height .54rem
      margin 0
      ellipsis()
    .desc
      margin 0
      line-height .4rem
      color: #ccc
      ellipsis()
</style>
