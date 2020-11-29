<template>
  <div class="list">
    <ListElem :route="'home'" :content="'Home'"/>
    <ListElem :route="'faq'" :content="'FAQ'"/>
    <ListElem :route="'login'" :content="'Log in'"/>
    <ListElem :route="'signup'" :content="'Sign up'"/>
    <ListElem :route="'guest'" :content="'Guest'"/>
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
