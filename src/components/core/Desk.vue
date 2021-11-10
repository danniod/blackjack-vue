<template>
  <div id="desk" >
    <div id="card" v-for="(card, index) in cards" :key="index">
      <img :src="require(`../../assets/cards/${card}.bmp`)" alt="card">
    </div>

 </div>
</template>


<script>
export default {
  name: "Desk",
  props: {
    cards: Array
  }
}
</script>


<style scoped>
#card {
  display: inline-block;
}
#card img {
  margin: 24px 2px 0;
  width: 100px;
}
</style>