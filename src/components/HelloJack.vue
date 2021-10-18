<template>
  <div>
    <desk v-bind:cards="cards"/>
    <div id="rule">
      <p>21点游戏：A在总分不超过21时作11，总分超过21则作1；J、Q、K作为10。</p>
      <p>在总分不超过21点的情况尽量大吧</p>
    </div>
    <div id="player">
      <button>开牌</button>
    </div>
  </div>
</template>


<script>
import Desk from "./Desk";

export default {
  name: 'HelloJack',
  components: {Desk},
  data() {
    return {
      cards: ['B1', 'AB'],
    }
  },
  methods() {

  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
