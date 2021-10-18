<template>
  <div id="app">
    <div id="head">
      <img alt="Blackjack logo" src="./assets/logo.png">
      <h1>Blackjack</h1>
    </div>

    <hello-jack/>

  </div>
</template>

<script>

import HelloJack from "./components/HelloJack";
export default {
  name: 'App',
  components: {HelloJack},
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 5%;
}
</style>
<style scoped>
#head img {
  width: 128px;
  vertical-align: middle;
}
#head h1 {
  font-size: 2em;
  margin-left: 13px;
  display:inline-block;
}
</style>
