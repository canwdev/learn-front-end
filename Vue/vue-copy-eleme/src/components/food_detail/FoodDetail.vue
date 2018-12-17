<template>
  <transition name="flyin">
    <div v-show="showFlag" class="food-detail">
      <div class="food-content">
        <div class="header-img">
          <img :src="food.image">
          <div class="back" @click="hide">
            <i class="icon-arrow_lift"></i>
          </div>
        </div>
        <div class="food-main card">
          <h1>{{food.name}}</h1>
          <p class="desc">月售{{food.sellCount}}份 &nbsp;&nbsp; 好评率{{food.rating}}%</p>
          <div class="action-box">
            <div class="money-box">
              <p class="money">￥{{food.price}}</p>
              <p class="money-old" v-show="food.oldPrice">￥{{food.oldPrice}}</p>
            </div>
            <div class="btn-action">
              <a href="javascript:void(0)" class="addcart" @click="addFirst(food)" v-show="food.count == 0">加入购物车</a>
              <cart-control @eventAdd="addFood" :food="food" v-show="food.count != 0"></cart-control>
            </div>
          </div>
        </div>
        <div class="food-intro card" v-show="food.info">
          <h1>商品介绍</h1>
          <p>{{food.info}}</p>
        </div>
        <div class="food-comment card">
          <comment :comments="food.ratings" ref="comment"></comment>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  import CartControl from '@/components/cart_control/CartControl'
  import Comment from '@/components/comment/Comment'

  export default {
    components: {
      CartControl,
      Comment
    },
    props: {
      food: {
        type: Object
      }
    },
    data () {
      return {
        showFlag: false
      }
    },
    methods: {
      show () {
        this.showFlag = true
        this.$refs.comment.init()
      },
      hide () {
        this.showFlag = false
      },
      addFirst (food) {
        this.$emit('eventAdd', event.target)
        food.count = 1
      },
      addFood () {
        this.$emit('eventAdd', event.target)
      }
    }
  }
</script>

<style lang="stylus" scoped>
.flyin-enter-active, .flyin-leave-active
  transition all .5s
.flyin-enter, .flyin-leave-active
  transform translate3d(100%, 0, 0) scale(0.5)
  opacity 0
.card
  background #fff
  border-bottom 1px solid #E7E8E9
  border-top 1px solid #E7E8E9
  padding 18px
  margin-bottom 16px
.food-detail
  position: fixed
  top 0
  left 0
  right 0
  bottom 46px
  overflow: auto
  background #F3F5F7
  .food-content
    .header-img
      position: relative
      width 100%
      height 0
      padding-top 100%
      img
        position absolute
        top 0
        left 0
        width 100%
        height 100%
        object-fit cover
      .back
        position: absolute
        top 10px
        left 10px
        background #fff
        border-radius 50%
        padding 8px
    .food-main
      padding-bottom 10px
      box-sizing border-box
      h1
        font-size:14px
        font-weight:bold
        color:rgba(7,17,27,1)
        line-height:14px
        margin-bottom:8px
      .desc
        font-size:10px
        font-weight:400
        color:rgba(147,153,159,1)
        line-height:14px
      .action-box
        display flex
        justify-content space-between
        align-items center
        height 45px
        .money-box
          display flex
          justify-content space-between
          .money
            font-size:12px
            font-weight:400
            color:rgba(240,20,20,1)
            line-height:14px
          .money-old
            font-size:10px
            font-weight:400
            text-decoration:line-through
            color:rgba(147,153,159,1)
            line-height:14px
            margin-left 8px
        .btn-action
          .addcart
            background:rgba(0,160,220,1);
            border-radius: 50px;
            padding 7px 12px
            font-size:10px;
            color:rgba(255,255,255,1);
    .food-intro
      h1
        font-size:14px;
        font-weight:400;
        color:rgba(7,17,27,1);
        line-height:14px;
        margin-bottom: 12px
      p
        font-size:12px;
        font-weight:300;
        color:rgba(77,85,93,1);
        line-height:24px;
</style>
