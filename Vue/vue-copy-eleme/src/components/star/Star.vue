<template>
  <div class="star" :class="star_type">
    <span v-for="(item_class, index) in star_classes" class="star-item" :class="item_class" :key="index">
    </span>
  </div>
</template>

<script>
/* eslint-disable */
const LENGTH = 5
const CLS_ON = 'on'
const CLS_HALF = 'half'
const CLS_OFF = 'off'

export default {
  name: 'Star',
  props: {
    size: Number,
    score: Number
  },
  computed: {
    // 星星尺寸计算属性
    star_type () {
      return 'star-' + this.size
    },
    star_classes () {
      let result = []
      // 得出包括整数或0.5的数字
      // let score = Math.floor(this.score * 2) / 2
      let score = this.score
      let has_decimal = score % 1 != 0
      let int_score = Math.floor(score)
      for (let i=0; i<int_score; i++) {
        result.push(CLS_ON)
      }
      if (has_decimal) {
        result.push(CLS_HALF)
      }
      while (result.length < LENGTH) {
        result.push(CLS_OFF)
      }
      return result
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/common/stylus/base.styl'

.star
  .star-item
    display inline-block
  &.star-48
    .star-item
      width 20px
      height 20px
      margin-right 22px
      &:last-child
        margin-right 0
      &.on
        bg-img('star48_on')
      &.half
        bg-img('star48_half')
      &.off
        bg-img('star48_off')
  &.star-36
    .star-item
      width 15px
      height 15px
      margin-right 16px
      &:last-child
        margin-right 0
      &.on
        bg-img('star36_on')
      &.half
        bg-img('star36_half')
      &.off
        bg-img('star36_off')
  &.star-24
    .star-item
      width 10px
      height 10px
      margin-right 22px
      &:last-child
        margin-right 0
      &.on
        bg-img('star24_on')
      &.half
        bg-img('star24_half')
      &.off
        bg-img('star24_off')
</style>
