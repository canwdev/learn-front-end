<template>
  <div class="goods">
    <div class="menu-wrap">
      <div class="items-list">
        <div class="type-title" v-for="(item, index) in goods" :key="index">
          <span><spec-icon :typeId="item.type"></spec-icon>{{item.name}}</span>
        </div>
      </div>
    </div>
    <div class="main-wrap">
      <div class="items-list" v-for="(item, index) in goods" :key="index">
        <div class="type-title">{{item.name}}</div>
        <div class="foods-list">
          <div class="food-item" v-for="(food, index2) in item.foods" :key="index2">
            <div class="img-box">
              <img src="">
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
</template>

<script>
import SpecIcon from '@/components/spec_icon/SpecIcon'
export default {
  components: {
    SpecIcon
  },
  props: {
    seller: {
      type: Object
    }
  },
  data () {
    return {
      goods: []
    }
  },
  created () {
    this.$http.get('/api/goods').then((res) => {
      console.log('goods', res.body)
      this.goods = res.body
    }, (res) => {
      console.log('GetError!', res)
    })
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
    overflow auto
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
        &:after
          content: ''
          position absolute
          bottom 0
          left 15%
          margin 0 auto
          width 70%
          height 1px
          background #dbdee1
  .main-wrap
    flex 1
    overflow auto
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
</style>
