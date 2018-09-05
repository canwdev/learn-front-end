<template>
  <div>
    <detail-banner :title="title" :bannerImg="bannerImg" :bannerImgs="bannerImgs"></detail-banner>
    <detail-header></detail-header>
    <detail-list :list='list'></detail-list>
    <div class='content'></div>
  </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
import axios from 'axios'
export default {
  name: 'Detail',
  data () {
    return {
      title: '',
      bannerImg: '',
      bannerImgs: [],
      list: []
    }
  },
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  methods: {
    getDetailInfo () {
      axios.get('api/detail.json', {
        params: {
          id: this.$route.params.id
        }
      }).then(this.handleGetDataSucc)
    },
    handleGetDataSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.title = data.sightName
        this.bannerImg = data.bannerImg
        this.bannerImgs = data.gallaryImgs
        this.list = data.categoryList
      }
    }
  },
  mounted () {
    this.getDetailInfo()
  }
}
</script>

<style lang='stylus' scoped>
.content
  height 30rem
</style>
