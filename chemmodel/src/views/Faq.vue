<template>
  <div class="faq">
    <List/>
    <FaqAnserws/>
  </div>
</template>

<script>
import FaqAnserws from './../components/FaqAnswers.vue'
import List from './../components/List.vue'

export default {
  name: 'Faq',
  components: {
    FaqAnserws,
    List
  }
}
</script>

<style lang="scss" scoped>
.faq {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #131514;
  color: white;
  padding: 150px 100px 100px 100px;
  box-sizing: border-box;
}
</style>
