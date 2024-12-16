<script setup>

</script>

<template>
  <div class="footer__suggestions">
    <p class=" font-text_medium white">Официальная почта для <br/> вопросов и предложений</p>
    <NuxtLinkLocale :to="'mailto:office@fondugra.ru'" class="font-text_extra-large bg-dark text-link">office@fondugra.ru</NuxtLinkLocale>
  </div>
</template>

<style lang="sass">
@import "@color"
@import "@mixin"
.footer__suggestions
  display: flex
  flex-direction: column
  align-items: flex-start
  gap: 20px
  height: 95px

@include laptop
  .footer__suggestions
    width: 266px

@include tablet
  .footer__suggestions
    width: auto
@include mobile
  .footer__suggestions
    align-items: center
    height: fit-content
    gap: 10px
</style>