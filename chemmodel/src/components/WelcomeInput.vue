<template>
  <div>
    <h2>Enter your formula</h2>
    <div>
      <input type="text" v-model="formula">
      <button></button>
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
  }
}
</script>
