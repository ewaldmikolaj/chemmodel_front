<template>
  <div class="home">
    <List/>
    <WelcomeInput/>
    <WelcomeMsg/>
  </div>
</template>

<script>
import WelcomeMsg from './../components/WelcomeMsg.vue'
import List from './../components/List.vue'
import WelcomeInput from './../components/WelcomeInput.vue'

export default {
  name: 'Home',
  components: {
    WelcomeMsg,
    List,
    WelcomeInput
  }
}
</script>

<style lang="scss">
.home {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background-color: #131514;
  color: white;
  padding: 150px 100px 100px 100px;
  box-sizing: border-box;
}
</style>
