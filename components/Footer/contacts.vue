<script setup>

</script>

<template>
  <div class="footer__contacts">
    <p class=" font-text_medium white">г. Ханты-Мансийск <br/> ул. Спортивная, д. 24/9</p>
    <a href="tel:+73467388616" target="_blank" class="font-h4">+7 3467 388-616</a>
  </div>
</template>

<style lang="sass">
@import "@color"
@import "@mixin"
.footer__contacts
  display: flex
  flex-direction: column
  align-items: flex-start
  gap: 20px
  height: 95px
  .font-h4
    color: $white
    text-decoration: none

@include laptop
  .footer__contacts
    width: 266px

@include tablet
  .footer__contacts
    width: auto
    grid-area: 1 / 2 / 1 / 2
    gap: 7px

@include mobile
  .footer__contacts
    grid-area: 2 / 1 / 2 / 1
    align-items: center
    height: fit-content
</style>