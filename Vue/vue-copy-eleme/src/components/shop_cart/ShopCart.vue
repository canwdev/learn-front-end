<template>
  <div class="shopcart">
    <div class="icon-wrap">
      <div class="icon-content" :class="totalCount?'highlight':''">
        <span class="icon-shopping_cart"></span>
      </div>
      <div class="num" v-show="totalCount">{{totalCount}}</div>
    </div>
    <div class="main-wrap">
      <div class="price-wrap">
        <div class="price" :class="totalPrice?'highlight':''">￥{{totalPrice}}</div>
        <div class="price-etc">另需配送费￥{{deliveryPrice}}元</div>
      </div>
      <div class="btn-wrap" :class="payDesc.green?'green':''">
        {{payDesc.msg}}
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      selectedFoods: {
        type: Array,
        default() {
          return [
            // {price: 10, count:20}
          ]
        }
      },
      deliveryPrice: {
        type: Number,
        default: 0
      },
      minPrice: {
        type: Number,
        default: 0
      }
    },
    computed: {
      totalPrice () {
        // 总价
        let total = 0
        this.selectedFoods.forEach((food)=>{
          total += food.price * food.count
        })
        return total
      },
      totalCount () {
        // 总个数
        let total = 0
        this.selectedFoods.forEach((food)=>{
          total += food.count
        })
        return total
      },
      payDesc () {
        // 结算按钮
        let ret = {
          msg: '',
          green: false
        }

        if (this.totalPrice === 0) {
          ret.msg = `￥${this.minPrice}元起送`
        } else if (this.totalPrice < this.minPrice) {
          let diff = this.minPrice - this.totalPrice
          ret.msg = `还差${diff}元起送`
        } else {
          ret.msg = '去结算'
          ret.green = true
        }

        return ret
      }
    }
  }
</script>

<style lang="stylus" scoped>
.shopcart
  display flex
  justify-content space-between
  align-items center
  height 46px
  background #131D26
  color: #fff
  .icon-wrap
    width 58px
    height 58px
    position absolute
    left 10px
    bottom 0px
    background #141d27
    border-radius 50%
    display flex
    justify-content center
    align-items center
    .num
      position absolute
      top 0
      right 0
      min-width 24px
      border-radius 50px
      background #F01414
      padding 4px 0
      font-size 9px
      box-shadow 0 4px 8px rgba(0,0,0, 0.4)
      text-align: center
    .icon-content
      width 44px
      height 44px
      border-radius 50%
      display flex
      align-items center
      justify-content center
      font-size 20px
      background #2B343C
      color: #80858A
      &.highlight
        background #00A0DC
        color #fff
  .main-wrap
    flex 1
    display flex
    justify-content space-between
    align-items stretch
    margin-left 62px
    .price-wrap
      flex 1
      display flex
      align-items center
      color: #919396
      font-size 12px
      .price
        font-size 16px
        font-weight bold
        padding 0 8px
        margin-right 8px
        border-right 1px solid #29313A
        &.highlight
          color: #fff
    .btn-wrap
      display flex
      align-items center
      justify-content center
      width 105px
      height 46px
      background #2B333B
      font-size 12px
      color: #96999B
      font-weight: bold
      &.green
        background #4CAF50
        color #fff
</style>
