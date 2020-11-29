<template>
  <div class="list__elem">{{ content }}</div>
</template>

<script>
export default {
  name: 'ListElem',
  props: {
    content: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.list__elem {
  margin-bottom: 10px;
  width: 100%;
  font-size: 1.7rem;
}
</style>
