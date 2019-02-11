<template>
  <div>
    <h2>{{this.$store.state.count}}</h2>
  <button @click="$store.dispatch('delayIncreasement')">+(慢)</button>
  <button @click="$store.commit('increment')">+</button>
  <button @click="$store.commit('increment',10)">+10</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

