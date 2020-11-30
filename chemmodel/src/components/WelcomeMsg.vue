<template>
  <div class="welcome-block">
      <h2 class="welcome-block__header">Welcome to the Chem Model Project!</h2>
      <p class="welcome-block__text">Our site allows converting chemical formula to its structural shape. We strongly advise to look up our FAQ page before first use. However if u want to use our page now, there are some rules:</p>
      <ul class="welcome-block__list">
        <li class="welcome-block__rule">Formula field is case sensitive, eg CH4 is not equal to cH4 or ch4</li>
        <li class="welcome-block__rule">After pressing Calculate page will try to reload, which is normal, This is an indicator thet algorithm is working.</li>
        <li class="welcome-block__rule">Our solution use only some elements, look up FAQ to learn more.</li>
        <li class="welcome-block__rule">Login to save results for later.</li>
      </ul>
  </div>
</template>

<script>
export default {
  name: 'WelcomeMsg'
}
</script>

<style lang="scss" scoped>
.welcome-block {
  background-color: #1d201f;
  padding: 5px;
  line-height: 20px;
  box-sizing: border-box;
  font-size: 0.75rem;
  &__header {
    color: #f0052c;
    margin-bottom: 10px;
  }
  &__list {
    margin: 5px 0px 0px 10px;
    list-style: none;
  }
}

@media screen and (min-device-width: 768px) {
  .welcome-block {
    font-size: 1.3rem;
    line-height: 50px;
  }
}
</style>
