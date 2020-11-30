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
  justify-content: center;
  width: 100vw;
  background-color: #131514;
  color: white;
  padding: 0px 20px 0px 20px;
  box-sizing: border-box;
}

@media screen and (min-device-width: 768px) {
  .home {
    padding: 0px 40px 0px 40px;
  }
}
</style>
