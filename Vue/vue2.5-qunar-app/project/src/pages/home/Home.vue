<template>
  <div>
    <h1 class="red">Home</h1>
    <router-link to="/list">List</router-link>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style>
  .red {
    background-color: #f44336;
    color: #fff;
  }
</style>
