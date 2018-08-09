<template>
  <div class="icons">
    <swiper ref="mySwiper" :options="swiperOption">
      <swiper-slide v-for="(page, index) in pages" :key="index">
        <div class="icon" v-for="item in page" :key="item.id">
          <div class="icon-img">
            <img :src="item.imgUrl">
          </div>
          <p>{{item.text}}</p>
        </div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        }
      },
      iconList: [
        {id: '0001', imgUrl: require('@/assets/img/icons/icon1.png'), text: '景点门票'},
        {id: '0002', imgUrl: require('@/assets/img/icons/icon2.png'), text: '水上乐园'},
        {id: '0003', imgUrl: require('@/assets/img/icons/icon3.png'), text: '游乐场'},
        {id: '0004', imgUrl: require('@/assets/img/icons/icon4.png'), text: '海洋馆'},
        {id: '0005', imgUrl: require('@/assets/img/icons/icon1.png'), text: '动植物园动植物园动植物园'},
        {id: '0006', imgUrl: require('@/assets/img/icons/icon2.png'), text: '玩转深圳'},
        {id: '0007', imgUrl: require('@/assets/img/icons/icon3.png'), text: '城市风光'},
        {id: '0008', imgUrl: require('@/assets/img/icons/icon4.png'), text: '海滨沙滩'},
        {id: '0009', imgUrl: require('@/assets/img/icons/icon0.png'), text: '全部玩乐'}
      ]
    }
  },
  computed: {
    pages () {
      // 通过计算属性来分页
      const pages = []
      this.iconList.forEach((item, index) => {
        // 判断当前icon是否是8的整数倍，是几倍，就是第几页
        const page = Math.floor(index / 8)
        if (pages[page] === undefined) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~@css/variables.styl'
.icons >>> .swiper-container
  overflow hidden
  height 0
  width 100%
  padding-bottom 55%
.icons >>> .swiper-pagination-bullet-active
  background $themeColor
.icons
  // overflow hidden
  height 0
  width 100%
  padding-bottom 50%
  // background-color #fafafa
  .icon
    float left
    width 25%
    padding-bottom 25%
    position relative
    .icon-img
      position absolute
      top 0
      left 0
      right 0
      bottom .44rem
      padding .1rem
      img
        height 100%
        display block
        margin 0 auto
    p
      position absolute
      left 0
      right 0
      bottom 0
      text-align center
      margin .15rem auto
      color $darkTextColor
      ellipsis()
</style>
