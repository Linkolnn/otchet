<script setup>

</script>

<template>
  <div class="footer__logo">
    <div class="footer__logo_wrap">
      <img class="footer__logo-img" src="/assets/LOGO.png" alt="">
    </div>
  </div>
</template>

<style lang="sass">
@import "@color"
@import "@mixin"

.footer__logo
  display: flex
  flex-direction: column
  align-items: flex-start
  gap: 30px

  .white
    color: $white

.footer__logo-img
  width: 112px

.footer__logo_wrap
  display: flex
  flex-direction: column
  gap: 12px
  p
    
    text-transform: uppercase
    font-family: 'Source-Sans-3' , sans-serif
    @include font-styles(17px, 400, 100%)
.footer__logo-icon
  width: 240px
  height: 36px

@include laptop
  .footer__logo
    grid-row: 1 / 3
    align-self: flex-start
    margin-right: 122px
@include tablet
  .footer__logo-icon
    width: 219px
    height: 33px
  .footer__logo_wrap
    p
      font-size: 16px
  .footer__logo
    grid-row: auto
    margin-right: 5px
    gap: 7px

@include mobile
  .footer__logo_wrap
    gap: 6px
    p
      font-size: 13px
  .footer__logo-icon
    width: 176px
    height: 27px
  .footer__logo
    gap: 10px
    text-align: left
    width: fit-content
    margin: 0 auto
    p
      margin-left: 4px
</style>