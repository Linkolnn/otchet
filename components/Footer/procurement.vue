<script setup>

</script>

<template>
  <div class="footer__procurement">
    <p class=" font-text_medium white">Коммерческие предложения <br/>  для закупок и договоров</p>
    <NuxtLinkLocale :to="'mailto:zakupki@fondugra.ru'" class="font-text_extra-large bg-dark text-link">zakupki@fondugra.ru</NuxtLinkLocale>
  </div>
</template>

<style lang="sass">
@import "@color"
@import "@mixin"
.footer__procurement
  display: flex
  flex-direction: column
  align-items: flex-start
  gap: 20px
  height: 95px

@include laptop
  .footer__procurement
    width: 266px

@include tablet
  .footer__procurement
    width: auto
    grid-area: 2 / 1 / 2 / 1
@include mobile
  .footer__procurement
    grid-area: 4 / 1 / 4 / 1
    align-items: center
    height: fit-content
    gap: 10px
</style>