<template>
  <div class="list">
    <ListElem :route="'home'" :content="'Home'"/>
    <ListElem :route="'faq'" :content="'FAQ'"/>
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
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 100%;
  height: 50px;
  box-sizing: border-box;
  padding-left: 20px;
  color: white;
  background-color: #1d201f;
}

@media screen and (min-device-width: 768px) {
  .list {
    height: 80px
  }
}
</style>
