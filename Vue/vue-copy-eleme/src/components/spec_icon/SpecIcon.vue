<template>
  <span class="icon" :class="classMap[typeId]" v-show="typeId!=-1"></span>
</template>

<script>
export default {
  props: {
    typeId: Number
  },
  data () {
    return {
      classMap: ['decrease', 'discount', 'guarantee', 'invoice', 'special']
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/common/stylus/base.styl'
.icon
  display inline-block
  height 12px
  width 12px
  margin-right 5px
  &.decrease
    bg-img('./res/decrease_1')
  &.discount
    bg-img('./res/discount_1')
  &.guarantee
    bg-img('./res/guarantee_1')
  &.invoice
    bg-img('./res/invoice_1')
  &.special
    bg-img('./res/special_1')
</style>
