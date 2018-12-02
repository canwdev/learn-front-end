<template>
  <div class="cart-control">
    <transition name="animate">
      <div class="btn minus" @click="btnMinus" v-show="food.count>0"><span class="icon-remove_circle_outline"></span></div>
    </transition>
      <div class="count" v-show="food.count>0">{{food.count}}</div>
    <div class="btn add" @click="btnAdd"><span class="icon-add_circle"></span></div>
  </div>
</template>

<script>
import Vue from 'vue'

export default {
  props: {
    food: {
      type: Object
    }
  },
  data () {
    return {
      count: 0
    }
  },
  methods: {
    btnAdd (event) {
      if (!this.food.count) {
        Vue.set(this.food, 'count', 1)
      } else {
        this.food.count++
      }
      this.$emit('eventAdd', event.target)
    },
    btnMinus () {
      if (this.food.count>0) {
        this.food.count--
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.cart-control
  display flex
  line-height 24px
  .animate-enter, .animate-leave-to
    opacity 0
    transform translate3d(24px, 0, 0) rotate(180deg)
  .animate-enter-active, .animate-leave-active
    transition all .4s
  .count
    font-size 14px
    min-width 24px
    text-align center
    color #969CA2
  .btn
    font-size 20px
    color #00A0DC
</style>

