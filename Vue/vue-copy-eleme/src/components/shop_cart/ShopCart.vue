<template>
  <div class="shopcart">
    <div class="icon-wrap" @click="toggleCartList">
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
    <div class="ball-container">
      <div v-for="(ball, index) in balls" :key="index">
        <!-- 小球掉落动画 -->
        <transition name="drop" @before-enter="beforeDrop" @enter="dropping" @after-enter="afterDrop">
          <div class="ball" v-show="ball.show">
            <div class="inner js-inner"></div>
          </div>
        </transition>
      </div>
    </div>

    <transition name="fade">
    <div class="shopchart-list-mask" v-show="showList" @click="toggleCartList"></div>
    </transition>

    <transition name="fold">
    <div class="shopchart-list-wrap" v-show="showList">
      <div class="list-header">
        <h1>购物车</h1>
        <a href="javascript:void(0)" @click="clearList">清空</a>
      </div>
      <div class="list-content">
        <ul>
          <li class="food-item" v-for="(item, index) in selectedFoods" :key="index">
            <div class="title">{{item.name}}</div>
            <div class="action-box">
              <div class="money">￥{{item.price * item.count}}</div>
              <cart-control @eventAdd="addFood" :food="item"></cart-control>
            </div>
          </li>
        </ul>
      </div>
    </div>
    </transition>
  </div>
</template>

<script>
  import CartControl from '@/components/cart_control/CartControl'

  export default {
    components: {
      CartControl
    },
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
    data () {
      return {
        balls: [
          {show:false},
          {show:false},
          {show:false},
          {show:false},
          {show:false}
        ],
        // 掉落中的小球，引用balls
        dropBalls: [],
        listFold: true
      }
    },
    computed: {
      // 总价
      totalPrice () {
        let total = 0
        this.selectedFoods.forEach((food)=>{
          total += food.price * food.count
        })
        return total
      },
      // 总个数
      totalCount () {
        let total = 0
        this.selectedFoods.forEach((food)=>{
          total += food.count
        })
        return total
      },
      // 结算按钮
      payDesc () {
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
      },
      showList () {
        if (this.totalCount <= 0) {
          this.listFold = true
          return false
        }

        let show = !this.listFold;
        return show;
      }
    },
    methods: {
      // 小球掉落动画
      drop (el) {
        for (let i=0; i< this.balls.length; i++) {
          let ball = this.balls[i]
          if (!ball.show) {
            ball.show = true
            ball.el = el
            this.dropBalls.push(ball)
            return
          }
        }
      },
      // 动画执行前
      beforeDrop (el) {
        let count = this.balls.length
        // 动画每一个小球
        while (count--) {
          let ball = this.balls[count];
          if (ball.show) {
            // 获取该元素相对于视口的坐标
            let rect = ball.el.getBoundingClientRect()
            let x = rect.left - 48  // 减去偏移值
            let y = -(window.innerHeight - rect.top - 50)
            
            el.style.display = ''
            // 动画初始坐标y轴
            el.style.transform = `translate3d(0,${y}px,0)`

            let inner = el.getElementsByClassName('js-inner')[0]
            // 动画初始坐标x轴
            inner.style.transform = `translate3d(${x}px,0,0)`
          }
        }
      },
      // 动画执行
      dropping (el, done) {
        // 触发浏览器重绘
        let rf = el.offsetHeight

        this.$nextTick(()=>{
          el.style.transform = `translate3d(0,0,0)`
          let inner = el.getElementsByClassName('js-inner')[0]
          inner.style.transform = `translate3d(0,0,0)`

          // 动画完成回调调用
          el.addEventListener('transitionend', done)
        })
      },
      // 动画执行结束
      afterDrop (el) {
        console.log('ok')
        // 获取执行结束的那个ball引用，并将其推出dropBalls
        let ball = this.dropBalls.shift()
        if (ball) {
          // 隐藏
          ball.show = false
          el.style.display = 'none'
        }
      },
      addFood (target) {
        // 体验优化,异步执行下落动画
        this.$nextTick(()=>{
          this.drop(target)
        })
      },
      toggleCartList () {
        if (this.totalCount <= 0) {
          return
        }
        this.listFold = !this.listFold
      },
      clearList () {
        this.selectedFoods.forEach((i)=>{
          i.count = 0;
        })
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
    padding-left 62px
    background #131D26
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
  .ball-container
    .ball
      position fixed
      left 48px
      bottom 40px
      z-index 200
      transition: transform 0.4s cubic-bezier(0.49, -0.29, 0.75, 0.41)
      .inner
        width 16px
        height 16px
        border-radius 50%
        background: rgb(0, 160, 220)
        transition: transform 0.4s linear
  .shopchart-list-mask
    position fixed
    top 0
    left 0
    right 0
    bottom 46px
    background black
    z-index -1
    -webkit-backdrop-filter: blur(10px)
    opacity: 1
    background: rgba(7,17,27,0.6)
  .shopchart-list-wrap
    position absolute
    bottom 46px
    left 0
    width 100%
    z-index -1
    background #fff
    color #000
    .list-header
      background #F4F5F7
      display flex
      justify-content space-between
      padding 15px
      box-sizing border-box
      border-bottom 1px solid #E3E5E8
      a
        color #00a0dc
    .list-content
      padding 0px 15px 20px
      max-height 217px
      overflow auto
      ul>li
        position: relative
        padding 15px 0
        .title
          flex 1
        .action-box
          position: absolute
          right 0
          top: 15px
          line-height: 22px
          display flex
          .money
            line-height 24px
            font-size 14px
            color #f01414
            margin-right 10px
      ul>li+li
        border-top 1px solid rgba(7, 17, 27, 0.1)
  .fade-enter-active, .fade-leave-active
    transition all .5s
  .fade-enter, .fade-leave-active
    opacity 0
  .fold-enter-active, .fold-leave-active
    transition all .5s
  .fold-enter, .fold-leave-active
    transform translate3d(0,100%,0)
</style>
