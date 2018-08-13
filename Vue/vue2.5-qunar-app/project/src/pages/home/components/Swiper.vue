<template>
<div class="wrapper">
  <swiper :options="swiperOption" ref="mySwiper" v-if="showSwiper">
    <swiper-slide v-for="item in swiperList" :key="item.index">
      <img class="swiper-img" :src="item.imgUrl" alt="">
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    swiperList: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        },
        loop: true
      },
      swiperListStatic: [
        {
          id: '0001',
          imgUrl: require('@/assets/img/slide1.jpg')
        }, {
          id: '0002',
          imgUrl: require('@/assets/img/slide2.jpg')
        }
      ]
    }
  },
  computed: {
    showSwiper () {
      return this.swiperList.length
    }
  }
}
</script>

<style lang="stylus" scoped>
  .wrapper >>> .swiper-pagination-bullet-active
    background #fff
  .wrapper
    overflow hidden
    height 0
    width 100%
    // padding-bottom 45.03%
    padding-bottom 31.25%
    .swiper-img
      width 100%
</style>
