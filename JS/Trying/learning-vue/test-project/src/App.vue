<template>
  <div id="app">
    <h1>Let's go somewhere!</h1>
    <hr>
    <router-link to='/'>Home</router-link>
    <router-link to='/users'>Users</router-link>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style>
</style>