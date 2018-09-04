<template>
  <div class="container" @click="handleGallaryClick">
    <div class="wrapper">
      <swiper :options="swiperOptions">
        <swiper-slide class="gallery-img" v-for="(item, index) of imgs" :key="index ">
          <img :src="item">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommonGallery',
  props: {
    imgs: Array,
    default () {
      return []
    }
  },
  data () {
    return {
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction'
        },
        observeParents: true,
        observer: true,
        loop: true,
        effect: 'coverflow'
      }
    }
  },
  methods: {
    handleGallaryClick () {
      this.$emit('close')
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
