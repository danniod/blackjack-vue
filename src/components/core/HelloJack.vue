<template>
  <div>
    <desk v-bind:cards="cards"/>
    <div id="rule">
      <p>21点游戏：A在可作为11或1；J、Q、K作为10。</p>
      <p>拼尽运气抽出21点吧！爆牌可是会输的哟</p>
    </div>
    <div id="player">
      <button>开牌</button>
    </div>
  </div>
</template>


<script>

export default {
  name: 'HelloJack',
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
