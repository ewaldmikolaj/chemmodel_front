<template>
  <div class="welcome-input">
    <h1 class="welcome-input__header">Chem Model</h1>
    <div class="welcome-input__wrapper">
    <h2 class="welcome-input__text">Enter your formula</h2>
      <input placeholder="E.g. C2H5OH" class="welcome-input__input" type="text" v-model="formula">
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
  &__header {
    margin-bottom: 70px;
  }
  &__text {
    width: 100%;
    margin: 0px 0px 10px 10px;
  }
  &__input {
    font-size: 1.2rem;
    border: 0px;
    padding: 10px;
    width: 60%;
  }
  &__input:focus, &__button:focus {
    outline: none;
  }
  &__button {
    background-color: #f0052c;
    padding: 10px;
    border: 0px;
    color: white;
    transition: .4s;
    font-weight: bold;
  }
  &__button:hover {
    background-color: #770317;
  }
}
</style>
