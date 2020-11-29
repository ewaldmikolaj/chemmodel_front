<template>
  <div class="welcome-input">
    <h2>Enter your formula</h2>
    <div>
      <input type="text" v-model="formula">
      <button @onclik="send()"></button>
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
}
</style>
