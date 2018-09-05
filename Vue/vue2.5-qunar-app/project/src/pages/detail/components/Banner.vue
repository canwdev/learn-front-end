<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img" :src="bannerImg">
      <div class="banner-info">
        <div class="title">{{title}}</div>
        <div class="image-count"><span class="iconfont">&#xe796;</span><span>{{bannerImgs.length}}</span></div>
      </div>
    </div>
    <fade>
      <common-gallery :imgs="bannerImgs" v-show="showGallary" @close="handleGallaryClose"></common-gallery>
    </fade>
  </div>
</template>

<script>
import CommonGallery from '@common/gallery/Gallery'
import Fade from '@common/animation/Fade'
export default {
  name: 'Detail',
  props: {
    title: String,
    bannerImg: String,
    bannerImgs: Array
  },
  data () {
    return {
      showGallary: false
    }
  },
  components: {
    CommonGallery,
    Fade
  },
  methods: {
    handleBannerClick () {
      this.showGallary = true
    },
    handleGallaryClose () {
      this.showGallary = false
    }
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
