<template>
  <div id="app">
    <List/>
    <WelcomeMsg/>
  </div>
</template>

<script>
import WelcomeMsg from './components/WelcomeMsg.vue'
import List from './components/List.vue'

export default {
  components: {
    WelcomeMsg,
    List
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: row;
}
</style>
