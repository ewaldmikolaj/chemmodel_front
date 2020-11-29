<template>
  <router-link :to="{ name: route }" class="list__elem">{{ content }}</router-link>
</template>

<script>
export default {
  name: 'ListElem',
  props: {
    content: {
      type: String,
      default: ''
    },
    route: {
      type: String,
      default: '/'
    }
  }
}
</script>

<style lang="scss" scoped>
.list__elem {
  margin-bottom: 10px;
  width: 100%;
  font-size: 1.7rem;
  text-decoration: none;
  color: white;
}
</style>
