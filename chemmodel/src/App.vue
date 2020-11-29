<template>
  <div class="app">
    <router-view/>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
.app {
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
