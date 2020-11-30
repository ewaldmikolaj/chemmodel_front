<template>
  <div class="faq-answers">
    <h2 class="faq-answers__header">FAQ</h2>
    <h4 class="faq-answers__question">Short manual</h4>
    <p class="faq-answers__text">In field on the main page you can write your formula, following rules above the field.</p>
    <p class="faq-answers__text">Do not click any other on page when You press "Calculate", this will stop calculating results.</p>
    <p class="faq-answers__text">will stop trying to reload when algorithm finishes calculating.</p>
    <p class="faq-answers__text">Results will be presented to you.</p>
    <h4 class="faq-answers__question">1. For which elements does the platform works?</h4>
    <p class="faq-answers__text">For now application works for: H, C, N, O, P, Na, K, Br, I, F, Cl, S, Li</p>
    <h4 class="faq-answers__question">2. Does the solution work for both organic and inorganic substances?</h4>
    <p class="faq-answers__text">No, for now solution works only for organic substances.</p>
    <h4 class="faq-answers__question">3. Does the solution return all possible results?</h4>
    <p class="faq-answers__text">No, solutions follows some rules when calculating results.</p>
    <h4 class="faq-answers__question">4. Which rules?</h4>
    <p class="faq-answers__text">Atom doesn't bond with nitrogens atom by oxygen atom</p>
    <p class="faq-answers__text">Sulfur atom doesn't bond with nitrogen atom</p>
    <p class="faq-answers__text">Oxygen, nitrogen and sulfur atoms don't bond with halogens</p>
  </div>
</template>

<script>
export default {
  name: 'FaqAnswers'
}
</script>

<style lang="scss" scoped>
.faq-answers {
  box-sizing: border-box;
  width: 70%;
  padding: 20px;
  background-color: #1d201f;
  &__header {
    color:#f0052c;
    margin: 20px 0px 30px 10px;
  }
  &__question {
    margin: 10px 0px 15px 0px;
  }
  &__text {
    margin-left: 5px;
  }
}
</style>
