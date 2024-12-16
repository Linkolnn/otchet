<script setup>

</script>

<template>
  <div class="footer__question">
    <NuxtLinkLocale to="/" class="bg-dark text-link font-text_medium">Задать вопрос</NuxtLinkLocale>
    <NuxtLinkLocale to="/" class="bg-dark text-link font-text_medium">Политика <br/> конфиденциальности</NuxtLinkLocale>
  </div>
</template>

<style lang="sass">
@import "@color"
@import "@mixin"
.footer__question
  display: flex
  height: 95px
  flex-direction: column
  align-items: flex-start
  gap: 20px
@include tablet
  .footer__question
    grid-area: 1 / 3 / 1 / 3
    padding-right: 40px

@include mobile
  .footer__question
    grid-area: auto
    align-items: center
    padding-right: 0
    gap: 10px
    height: fit-content
</style>