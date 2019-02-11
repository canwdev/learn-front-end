<template>
  <div id="app">
    <h1>{{$store.getters.countString('👍')}}</h1>
    <HelloWorld msg="👉"/>
    <Increasement/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Increasement from './components/Increasement.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    Increasement
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
