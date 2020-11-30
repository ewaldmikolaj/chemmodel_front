<template>
  <div class="welcome-input">
    <div class="welcome-input__wrapper">
    <h2 class="welcome-input__text">Enter your formula</h2>
      <input class="welcome-input__input" type="text" v-model="formula">
      <button class="welcome-input__button" @onclik="send()">CALCULATE</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WelcomeInput',
  data () {
    return {
      formula: null
    }
  },
  methods: {
    send () {
      return this.formula
    }
  }
}
</script>

<style lang="scss" scoped>
.welcome-input {
  height: 50%;
  widows: 100%;
  box-sizing: border-box;
  &__wrapper {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 70%;
  }
  &__text {
    width: 100%;
    margin: 0px 0px 10px 10px;
  }
  &__input {
    border: 0px;
    padding: 5px;
    height: 40px;
    width: 60%;
  }
  &__button {
    background-color: #f0052c;
    padding: 5px;
    border: 0px;
    color: white;
  }
}
</style>
