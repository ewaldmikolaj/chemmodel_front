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
  padding: 0px 10px 0px 10px;
  box-sizing: border-box;
}

@media screen and (min-device-width: 768px) {
  .faq {
    padding: 0px 30px 0px 30px;
  }
}
</style>
