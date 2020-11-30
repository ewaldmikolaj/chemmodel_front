<template>
  <div class="welcome-input">
    <h1 class="welcome-input__header">Chem Model</h1>
    <div class="welcome-input__wrapper">
    <h2 class="welcome-input__text">Enter your formula</h2>
      <input placeholder="E.g. C2H5OH" class="welcome-input__input" type="text" v-model="formula">
      <button class="welcome-input__button" @click="send()">CALCULATE</button>
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
      console.log('dupa')
    }
  }
}
</script>

<style lang="scss" scoped>
.welcome-input {
  box-sizing: border-box;
  margin-bottom: 30px;
  &__wrapper {
    display: flex;
    flex-wrap: wrap;
  }
  &__header {
    margin-bottom: 40px;
  }
  &__text {
    width: 100%;
    font-size: 0.8rem;
    margin: 0px 0px 10px 10px;
  }
  &__input {
    font-size: 1rem;
    border: 0px;
    padding: 2px;
    width: 60%;
  }
  &__input:focus, &__button:focus {
    outline: none;
  }
  &__button {
    background-color: #f0052c;
    padding: 7px;
    border: 0px;
    color: white;
    transition: .4s;
    font-weight: bold;
    font-size: 0.8rem;
  }
  &__button:hover {
    background-color: #770317;
  }
}
</style>
