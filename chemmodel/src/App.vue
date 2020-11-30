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
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,600;1,600&display=swap');

* {
  margin: 0;
  padding: 0;
}
.app {
  font-family: 'Montserrat', sans-serif;
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
