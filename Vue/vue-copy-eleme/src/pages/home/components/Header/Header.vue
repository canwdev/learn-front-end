<template>
  <div class="header">
    <div class="info-wrap">
      <div class="logo">
        <img :src="seller.avatar">
      </div>
      <div class="info-main">
        <div class="brand"><span class="brand-img"></span>{{seller.name}}</div>
        <div class="description">蜂鸟专送/{{seller.deliveryTime}}分钟送达</div>
        <div v-if="seller.supports" class="supports">
          <div class="text">
            <span class="icon" :class="classMap[seller.supports[0].type]"></span>
            <span class="text">{{seller.supports[0].description}}</span>
          </div>
          <div class="count">{{seller.supports.length}}个<i class="icon-keyboard_arrow_right"></i></div>
        </div>
      </div>
    </div>
    <div class="tips">

    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    seller: Object
  },
  created () {
    this.classMap = ['decrease', 'discount', 'guarantee', 'invoice', 'special']
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/common/stylus/base.styl';
.header
  background #ccc
  color #fff
  padding 24px
  .info-wrap
    display flex
    flex-direction row
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
</style>
