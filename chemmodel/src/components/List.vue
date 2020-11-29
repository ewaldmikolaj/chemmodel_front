<template>
  <div class="list">
    <ListElem :content="'Home'"/>
    <ListElem :content="'FAQ'"/>
    <ListElem :content="'Log in'"/>
    <ListElem :content="'Sign up'"/>
    <ListElem :content="'Guest'"/>
  </div>
</template>

<script>
import ListElem from './ListElem.vue'

export default {
  name: 'List',
  components: {
    ListElem
  }
}
</script>

<style lang="scss" scoped>
.list {
  display: flex;
  flex-direction: column;
  width: 18%;
  height: 100vh;
  box-sizing: border-box;
  padding-left: 20px;
  color: white;
  background-color: #1d201f;
}
</style>
