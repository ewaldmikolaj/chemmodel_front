<template>
  <div class="home">
    <List/>
    <div class="home__right">
      <WelcomeInput/>
      <WelcomeMsg/>
    </div>
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
  display: flex;
  flex-direction: row;
  width: 100vw;
  height: 100vh;
  background-color: #131514;
  color: white;
  &__right {
    display: inline-block;
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 100px 50px 70px 40px;
  }
}
</style>
