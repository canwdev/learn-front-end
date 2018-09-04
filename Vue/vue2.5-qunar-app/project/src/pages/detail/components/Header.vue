<template>
  <div>
    <router-link tag="div" to="/" class="header-abs" v-show="showAbs">
      <div class="iconfont">&#xe7f1;</div>
    </router-link>
    <div class="header-fixed" v-show="!showAbs" :style="opacityStyle">
      <router-link to="/">
        <div class="left">
          <span class="iconfont">&#xe7f1;</span>
        </div>
      </router-link>
      城市选择
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  data () {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScroll (ev) {
      const top = document.documentElement.scrollTop
      if (top > 30) {
        this.showAbs = false
        let opacity = top / 100
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = { opacity }
      } else {
        this.showAbs = true
      }
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  unmounted () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="stylus" scoped>
@import '~@css/variables.styl';
.header-abs
  position absolute
  top .3rem
  left .3rem
  .iconfont
    color #fff
    font-size: 0.45rem
.header-fixed
  position fixed
  z-index 2
  top 0
  left 0
  right 0
  height .86rem
  line-height .86rem
  overflow hidden
  text-align center
  columns #fff
  background $themeColor
  color #fff
  font-size .32rem
  box-shadow 0 2px 6px rgba(0, 0, 0, 0.15)
  .left
    position absolute
    top 0
    left 0
    width .64rem
    color #fff
    font-size .04rem
</style>
