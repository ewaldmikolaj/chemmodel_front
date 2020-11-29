<template>
  <div>{{ content }}</div>
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
</style>
