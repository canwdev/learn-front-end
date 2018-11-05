<template>
  <div class="goods">
    <div class="menu-wrap">
      <div class="items-list" v-for="(item, index) in goods" :key="index">
        <div class="type-title">
          <span><spec-icon :typeId="item.type"></spec-icon>{{item.name}}</span>
        </div>
      </div>
    </div>
    <div class="main-wrap">
      <div class="items-list" v-for="(item, index) in goods" :key="index">
        <div class="type-title">{{item.name}}</div>
        <div class="foods-list" v-for="(food, index2) in item.foods" :key="index2">
          <div class="food-title">
            {{food.name}}
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
</style>
