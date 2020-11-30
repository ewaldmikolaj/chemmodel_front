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
  font-size: 1rem;
  height: 100%;
  line-height: 50px;
  padding: 0px 30px 0px 0px;
  text-decoration: none;
  color: white;
}

@media screen and (min-device-width: 768px) {
  .list__elem {
    line-height: 80px;
    font-size: 1.4rem;
  }
}
</style>
