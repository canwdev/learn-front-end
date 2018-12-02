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
        dropBalls: []
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
        // let rf = el.offsetHeight

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
  .ball-container
    
    .ball
      position fixed
      left 48px
      bottom 40px
      z-index 200
      transition: transform 0.8s cubic-bezier(0.49, -0.29, 0.75, 0.41)
      .inner
        width 16px
        height 16px
        border-radius 50%
        background: rgb(0, 160, 220)
        transition: transform 0.8s linear
    // .drop-enter, .drop-leave-to
    //   background red
    // .drop-enter-active, .drop-leave-active
    //   color red
</style>
