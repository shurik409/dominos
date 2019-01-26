<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'BabasNeue', Helvetica, Arial, sans-serif;
  src: url('fonts/BebasNeue Regular.ttf');
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
    min-height: 100vh;
  }
  body{
    margin: 0;
    min-height: 100vh;
  }
</style>
