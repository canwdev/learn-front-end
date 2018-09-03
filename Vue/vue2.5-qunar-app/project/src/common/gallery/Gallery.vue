<template>
  <div class="container">
    <div class="wrapper">
      <swiper :options="swiperOptions">
        <swiper-slide class="gallery-img">
          <img src="http://img1.qunarzz.com/sight/p0/1508/a5/4003f9dd7bebf61eccbf64046e26d487.water.jpg_r_800x800_4701d58f.jpg">
        </swiper-slide>
        <swiper-slide class="gallery-img">
          <img src="http://img1.qunarzz.com/sight/p0/1508/89/895a1b7add84f23faca053ce9e3153db.water.jpg_r_800x800_087730c7.jpg">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommonGallery',
  data () {
    return {
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction'
        }
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  .wrapper >>> .swiper-container
    overflow inherit
  .container
    position fixed
    left 0
    top 0
    right 0
    bottom 0
    background-color #000
    z-index 99
    display flex
    align-items center
    .wrapper
      color #fff
      width 100%
      height 0
      padding-bottom 80%
      .gallery-img
        img
          width 100%
      .swiper-pagination
        position absolute
        bottom -1rem      
</style>
