<template>
  <div class="header">
    <div class="info-wrap">
      <div class="logo">
        <img :src="seller.avatar">
      </div>
      <div class="info-main" @click="toggleDetail">
        <div class="brand"><span class="brand-img"></span>{{seller.name}}</div>
        <div class="description">{{seller.description}}/{{seller.deliveryTime}}分钟送达</div>
        <div v-if="seller.supports" class="supports">
          <div class="text">
            <span class="icon" :class="classMap[seller.supports[0].type]"></span>
            <span class="text">{{seller.supports[0].description}}</span>
          </div>
          <div class="count">{{seller.supports.length}}个<i class="icon-keyboard_arrow_right"></i></div>
        </div>
      </div>
    </div>
    <div class="tips-wrap" @click="toggleDetail">
      <span class="tips-img"></span>
      <span class="tips-text">{{seller.bulletin}}</span>
      <i class="icon-keyboard_arrow_right"></i>
    </div>
    <div class="background">
      <img :src="seller.avatar">
    </div>
    <div class="detail-wrap" v-show="detail_show">
      <div class="detail-main-outer clearfix">
        <div class="detail-main">
          <div class="title">{{seller.name}}</div>
          <div class="star">
            <v-star :size="48" :score="seller.score"></v-star>
          </div>
        </div>
      </div>
      <div class="detail-close" @click="toggleDetail">
        <i class="icon-close"></i>
      </div>
    </div>
  </div>
</template>

<script>
import vStar from '@/components/star/Star'
export default {
  name: 'Header',
  components: {
    vStar
  },
  props: {
    seller: Object
  },
  data () {
    return {
      detail_show: true
    }
  },
  created () {
    this.classMap = ['decrease', 'discount', 'guarantee', 'invoice', 'special']
  },
  methods: {
    toggleDetail () {
      this.detail_show = !this.detail_show
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/common/stylus/base.styl'
.header
  background: rgba(7,17,27,.2)
  color #fff
  padding-top 24px
  padding-bottom 1px
  position relative
  overflow hidden
  .info-wrap
    display flex
    flex-direction row
    padding 0 24px
    .logo
      img
        height 64px
        width 64px
        border-radius 2px
    .info-main
      flex 1
      font-weight 200px
      line-height 12px
      margin-left 16px
      .brand
        font-size 16px
        font-weight bold
        line-height 18px
        margin-top 2px
        display flex
        align-items center
        .brand-img
          display inline-block
          width 30px
          height 18px
          margin-right 5px
          bg-img('brand')
      .description
        font-size 12px
        margin-top 8px
      .supports
        display flex
        align-items center
        justify-content space-between
        font-size 10px
        margin-top 10px
        .text
          display flex
          align-items center
          .icon
            display inline-block
            height 12px
            width 12px
            margin-right 5px
            &.decrease
              bg-img('decrease_1')
            &.discount
              bg-img('discount_1')
            &.guarantee
              bg-img('guarantee_1')
            &.invoice
              bg-img('invoice_1')
            &.special
              bg-img('special_1')
        .count
          background rgba(0, 0, 0, .2)
          padding 5px 10px
          border-radius 50px
          display flex
          align-items center
          align-items center
          i
            margin-left 2px
            margin-top 2px
  .tips-wrap
    display flex
    align-items center
    margin-top 10px
    padding 5px 10px
    background rgba(0,0,0,0.3)
    .tips-img
      display inline-block
      width 22px
      height 12px
      margin-right 5px
      bg-img('bulletin')
    .tips-text
      display inline-block
      overflow hidden
      white-space nowrap
      text-overflow ellipsis
      flex 1
      font-size 12px
  .background
    position absolute
    top 0
    left 0
    right 0
    bottom 0
    z-index -1
    filter blur(5px)
    img
      width 100%
      height 100%
  .detail-wrap
    position fixed
    z-index 100
    width 100%
    height 100%
    top 0
    left 0
    overflow auto
    background rgba(7,17,27,.8)
    .detail-main-outer
      min-height 100%
      .detail-main
        margin-top 64px
        padding-bottom 64px
        text-align center
        .title
          font-size 24px
    .detail-close
      width 32px
      height 32px
      font-size 32px
      margin -64px auto 0
</style>
