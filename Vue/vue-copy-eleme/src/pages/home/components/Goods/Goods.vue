<template>
  <div class="goods-wrap">
    <div class="goods">
      <div class="menu-wrap" ref="menu_wrap">
        <div class="items-list">
          <div class="type-title" v-for="(item, index) in goods" :key="index" :class="currentIndex===index?'active':''" @click.stop="selectMenu(index, $event)">
            <span><spec-icon :typeId="item.type"></spec-icon>{{item.name}}</span>
          </div>
        </div>
      </div>
      <div class="main-wrap" ref="main_wrap">
        <div class="croll-list">
          <div class="items-list foods-item-hook" v-for="(item, index) in goods" :key="index">
            <div class="type-title">{{item.name}}</div>
            <div class="foods-list">
              <div class="food-item" v-for="(food, index2) in item.foods" :key="index2">
                <div class="img-box">
                  <img :src="food.icon">
                </div>
                <div class="main-box">
                  <div class="name">{{food.name}}</div>
                  <div class="description">{{food.description}}</div>
                  <div class="sell">月售{{food.sellCount}}份  好评率{{food.rating}}%</div>
                  <div class="price-box">
                    <div class="price">￥<span class="bigger">{{food.price}}</span></div>
                    <div class="price del" v-show="food.oldPrice">￥<span class="bigger">{{food.oldPrice}}</span></div>
                  </div>
                  <div class="action-box">

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <shop-cart></shop-cart>
  </div>
</template>

<script>
import SpecIcon from '@/components/spec_icon/SpecIcon'
import ShopCart from '@/components/shop_cart/ShopCart'
import Bscroll from 'better-scroll'

export default {
  components: {
    SpecIcon,
    ShopCart
  },
  props: {
    seller: {
      type: Object
    }
  },
  data () {
    return {
      goods: [],
      listHeights: [],
      scrollY: 0
    }
  },
  computed: {
    currentIndex () {
      // 左侧菜单当前选中index
      for (let i=0; i<this.listHeights.length; i++) {
        let height1 = this.listHeights[i]
        let height2 =  this.listHeights[i+1]
        if (!height2 || (this.scrollY >= height1 && this.scrollY < height2)) {
          return i
        }
      }
      return 0
    }
  },
  created () {
    this.$http.get('/api/goods').then((res) => {
      console.log('goods', res.body)
      this.goods = res.body
      // vue DOM更新回调
      this.$nextTick(() => {
        this._initScroll()
        this._calcHeight()
      })
    }, (err) => {
      console.log('GetError!', err)
    })
  },
  methods: {
    _initScroll () {
      this.menuScroll = new Bscroll(this.$refs.menu_wrap, {
        click: true
      })
      this.foodScroll = new Bscroll(this.$refs.main_wrap, {
        probeType: 3 // 滚动时实时返回滚动位置
      })
      // 滚动监听
      this.foodScroll.on('scroll', (pos) => {
        this.scrollY = Math.abs(Math.round(pos.y))
      })
    },
    _calcHeight () {
      let foodList = this.$refs.main_wrap.getElementsByClassName('foods-item-hook')

      // 获取Goods列表每个类别的高度值（递增），存入数组
      let height = 0
      this.listHeights.push(height)
      for (let i=0; i<foodList.length; i++) {
        let item = foodList[i]
        height += item.clientHeight
        this.listHeights.push(height)
      }
      console.log('listHeights', this.listHeights)
    },
    selectMenu (index, event) {
      if (!event._constructed) {
        return; // 防止pc重复点击
      }
      let foodList = this.$refs.main_wrap.getElementsByClassName('foods-item-hook')

      this.foodScroll.scrollToElement(foodList[index], 300)
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/common/stylus/base.styl'
.goods
  width 100%
  position absolute
  top 179px
  bottom 46px
  display flex
  flex-direction row
  overflow hidden
  .menu-wrap
    background #f3f5f7
    width 25%
    .items-list
      .type-title
        display flex
        align-items center
        position relative
        height 54px
        line-height 16px
        padding 12px
        font-size 12px
        box-sizing border-box
        &.active
          color #000
          font-weight bold
          background #fff
          box-shadow 0 0 0 1px #f00 inset
          &:after
            opacity 0
        &:after
          content: ''
          position absolute
          top 0
          left 15%
          margin 0 auto
          width 70%
          height 1px
          background #dbdee1
          transform: scaleY(0.5);
  .main-wrap
    flex 1
    .type-title
      height 26px
      line-height 26px
      background #f3f5f7
      color #93999f
      border-left 2px solid #d9dde1
      padding-left 10px
    .food-item
      padding 18px
      padding-left 0
      margin-left 18px
      box-sizing border-box
      display flex
      flex-direction row
      .img-box
        height 57px
        width 57px
        background #eeeeee
        border-radius 2px
        margin-right 10px
        img
          width 100%
          height 100%
          boject-fit contain
      .main-box
        flex 1
        .name
          font-size 14px
          color #07111b
          margin-top 2px
          margin-bottom 8px
        .description, .sell
          font-size 10px
          color #93999f
          margin-top 4px
          margin-bottom 4px
        .price-box
          display flex
          align-items center
          flex-direction row
          .price
            color #f01414
            font-szie 10px
            .bigger
              font-size 14px
              font-weight 700
            &.del
              color #93999f
              text-decoration line-through
              transform scale(0.8)
    .food-item+.food-item
      border-top 1px solid #d9dde1
.shopcart
  position absolute
  bottom 0
  left 0
  right 0
  height 46px
</style>
