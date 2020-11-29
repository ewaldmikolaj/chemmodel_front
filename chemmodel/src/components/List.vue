<template>
  <div>
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
