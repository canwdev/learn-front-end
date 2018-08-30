<template>
  <div>
    <city-header></city-header>
    <city-search :cities="cities"></city-search>
    <city-list :cities="cities" :hot="hotCities" :letter="letter"></city-list>
    <city-alpabet :cities="cities" @letterChange="letterChange" :letter="letter"></city-alpabet>
  </div>
</template>

<script>
import axios from 'axios'
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
import CityAlpabet from './components/Alpabet'
export default {
  name: 'City',
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlpabet
  },
  data () {
    return {
      cities: {},
      hotCities: [],
      letter: ''
    }
  },
  methods: {
    getCityInfo () {
      axios.get('/api/city.json').then(
        this.handleGetCityInfoSucc
      )
    },
    handleGetCityInfoSucc (r) {
      r = r.data

      if (r.ret && r.data) {
        const ret = r.data
        this.cities = ret.cities
        this.hotCities = ret.hotCities
      }
    },
    letterChange (letter) {
      this.letter = letter
    }
  },
  mounted () {
    this.getCityInfo()
  }
}
</script>

<style lang="stylus" scoped>

</style>
