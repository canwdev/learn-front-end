<template>
  <div>
    <div class="banner">
      <img class="banner-img" src="//img1.qunarzz.com/sight/p0/1508/a5/4003f9dd7bebf61eccbf64046e26d487.water.jpg_600x330_a80ff353.jpg">
      <div class="banner-info">
        <div class="title">北京欢乐谷(AAAA景区)</div>
        <div class="image-count"><span class="iconfont">&#xe796;</span><span>39</span></div>
      </div>
    </div>
    <common-gallery></common-gallery>
  </div>
</template>

<script>
import CommonGallery from '@common/gallery/Gallery'
export default {
  name: 'Detail',
  components: {
    CommonGallery
  }
}
</script>

<style lang="stylus" scoped>
  .banner
    overflow hidden
    height 0
    padding-bottom 55%
    position relative
    img
      width 100%
    .banner-info
      position absolute
      bottom 0
      left 0
      width 100%
      display flex
      justify-content space-between
      align-items center
      padding .35rem
      box-sizing border-box
      .title
        position relative
        z-index 1
        line-height .4rem
        color #fff
        font-size .36rem
        text-shadow 0 1px 2px rgba(0,0,0,0.70)
      .image-count
        display flex
        justify-content space-evenly
        align-items center
        width 1.2rem
        height .4rem
        background rgba(0,0,0,.5)
        border-radius .2rem
        color #ffffff
        line-height .4rem
        text-align center
        .iconfont
          font-size .36rem
</style>
