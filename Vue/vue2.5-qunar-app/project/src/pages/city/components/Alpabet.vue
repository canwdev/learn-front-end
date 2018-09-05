<template>
  <div :class="touchStatus?'list active':'list'" ref="listBody">
    <div v-for="(item, key) of cities" :key="key" class="item" :class="{active: item.isActive}"
         @click="letterClick"
         @touchstart.prevent="handleTouchStart"
         @touchmove="handleTouchMove"
         @touchend="handleTouchEnd"
         >
         {{key}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'CityAlpabet',
  props: {
    cities: Object,
    letter: String
  },
  data () {
    return {
      touchStatus: false,
      startY: 0,
      timer: null
    }
  },
  watch: {
    letter () {
      if (this.letter) {
        for (let i in this.cities) {
          this.cities[i].isActive = false
        }
        this.cities[this.letter].isActive = true
      }
    }
  },
  updated () {
    // 获取列表元素到搜索框下面的高度 ???
    this.startY = this.$refs['listBody'].offsetTop - 278
  },
  computed: {
    letters () {
      const letters = []
      for (let i in this.cities) {
        letters.push(i)
      }
      return letters
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
      if (this.touchStatus) {
        // 函数节流阀
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          // 获取当前触摸到搜索框下面的高度
          const touchY = ev.touches[0].clientY - 79
          const index = Math.floor((touchY - this.startY) / 22)
          if (index >= 0 && index < this.letters.length) {
            var letter = this.letters[index]
            this.$emit('letterChange', letter)
          }
        }, 16)
      }
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
  transform translateY(-42%)
  // top: 2.58rem
  right .1rem
  width .45rem
  text-align center
  line-height .45rem
  color $themeColor
  .item.active
    background: $themeColor
    color: #fff
    border-radius 50%
.list.active
  background: $themeColor
  color: #fff
  border-radius: 1rem
  padding: .1rem 0
</style>
