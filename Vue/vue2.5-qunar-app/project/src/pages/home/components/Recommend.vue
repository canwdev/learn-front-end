<template>
  <div class="recommend">
    <div class="recommend-title">热门推荐</div>
    <ul>
      <li class="recommend-item border-bottom" v-for="item in recommendList" :key="item.id">
        <img class="item-img" :src="item.imgUrl" :alt="item.title">
        <div class="item-info">
          <p class="title">{{item.title}}</p>
          <p class="desc">{{item.desc}}</p>
          <button>查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  data () {
    return {
      recommendList: [{
        id: '0001',
        imgUrl: require('@/assets/img/recommend/1.jpg'),
        title: '世界之窗',
        desc: '深圳的世界之窗要比长沙的世界之窗更具规模也更有名，花上半天或者一天游玩在各大洲各国家的微缩建筑之间，看看暂时还看不到的国外风景，也只能先这样一饱眼福啦。'
      }, {
        id: '0002',
        imgUrl: require('@/assets/img/recommend/1.jpg'),
        title: '世界之窗',
        desc: '深圳的世界之窗要比长沙的世界之窗更具规模也更有名，花上半天或者一天游玩在各大洲各国家的微缩建筑之间，看看暂时还看不到的国外风景，也只能先这样一饱眼福啦。'
      }, {
        id: '0003',
        imgUrl: require('@/assets/img/recommend/1.jpg'),
        title: '世界之窗',
        desc: '深圳的世界之窗要比长沙的世界之窗更具规模也更有名，花上半天或者一天游玩在各大洲各国家的微缩建筑之间，看看暂时还看不到的国外风景，也只能先这样一饱眼福啦。'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~@css/variables.styl'
.recommend-title
  line-height .8rem
  background #eee
  text-indent .2rem
ul
  padding-left 0
  margin 0
.recommend-item
  overflow hidden
  height 1.9rem
  display flex
  .item-img
    width 1.7rem
    height 1.7rem
    padding .1rem
    border-radius .2rem
    overflow hidden
  .item-info
    padding .1rem
    padding-left 0
    flex: 1
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
      // ellipsis()
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
    button
      border none
      background $themeColor
      color #fff
      position absolute
      bottom .1rem
      right .1rem
      border-radius .2rem
</style>
