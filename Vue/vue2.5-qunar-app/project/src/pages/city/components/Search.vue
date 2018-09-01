<template>
  <div>
    <div class="search">
      <input v-model="keyword" type="text" placeholder="输入城市名或拼音" class="search-input">
    </div>
    <div class="search-content" ref="search" v-show="keyword">
      <ul>
        <li class="search-item border-bottom" v-for="item of list" :key="item.id"
            @click="handleCityClick(item.name)">{{item.name}}
        </li>
        <li v-show="!list.length" class="no-data">没有找到匹配数据</li>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'CitySearch',
  props: {
    cities: Object
  },
  data () {
    return {
      keyword: '',
      list: [],
      timer: null
    }
  },
  methods: {
    handleCityClick (name) {
      this.$store.commit('changeCity', name)
      this.$router.push('/')
    }
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.search, {click: true})
  },
  watch: {
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyword) {
        this.list = []
        return
      }
      this.timer = setTimeout(() => {
        const result = []
        for (let i in this.cities) {
          this.cities[i].forEach((value) => {
            if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
              result.push(value)
            }
          })
          this.list = result
        }
      }, 100)
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~@css/variables.styl';
.search
  background $themeColor
  height .72rem
  padding 0 .1rem
  .search-input
    width 100%
    line-height .62rem
    height .62rem
    text-align center
    border 0
    color #666
    padding 0 .1rem
    box-sizing border-box
    border-radius .06rem
    &:focus
      outline $themeColor
.search-content
  position absolute
  top 1.58rem
  left 0
  right 0
  bottom 0
  overflow hidden
  background #fff
  z-index 1
  ul
    padding 0
    list-style none
    margin 0
  .search-item
    line-height .76rem
    padding-left .2rem
.no-data
  position absolute
  top 2rem
  left 50%
  transform translateX(-50%)
</style>
