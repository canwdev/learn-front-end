<template>
  <div :class="touchStatus?'list active':'list'">
    <div v-for="(item, key) of cities" :key="key" :ref="key"
         @click="letterClick"
         @touchstart="handleTouchStart"
         @touchmove="handleTouchMove"
         @touchend="handleTouchEnd"
         >
         {{key}}</div>
  </div>
</template>

<script>
export default {
  name: 'CityAlpabet',
  props: {
    cities: Object
  },
  data () {
    return {
      touchStatus: false
    }
  },
  methods: {
    letterClick (ev) {
      this.$emit('letterChange', ev.target.innerText)
    },
    handleTouchStart () {
      this.touchStatus = true
    },
    handleTouchMove (ev) {
      // !!
      // if (this.touchStatus) {
      //   const startY = this.$refs['A'][0].offsetHeight 
      //   const touchY = ev.touches[0].clientY - 79
      //   console.log(startY, touchY)
      // }
    },
    handleTouchEnd () {
      this.touchStatus = false
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~@css/variables.styl'
.list
  position absolute
  top 50%
  right .1rem
  width .4rem
  text-align center
  transform translateY(-42%)
  line-height .45rem
  color $themeColor
.list.active
  background: rgba(0, 0, 0, 0.5);
  border-radius: 1rem;
  padding: .1rem 0;
</style>
