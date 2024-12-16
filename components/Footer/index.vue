<script setup>
</script>

<template>
  <footer class="footer">
    <div class="footer__container">
      <div class="footer__grid">
        <FooterLogo/>
        <FooterSocials/>
      </div>
    </div>
  </footer>
</template>

<style lang="sass">
@import "@color"
@import "@mixin"
.footer
  display: flex
  width: 100%
  box-sizing: border-box
  padding: 0 40px

.footer__container
  padding: 40px 40px 20px 40px
  align-self: stretch
  border-radius: 60px 60px 0 0
  background: #000
  width: 100%
  box-sizing: border-box
  gap: 80px
  display: flex
  flex-direction: column

.footer__grid
  display: flex
  justify-content: space-between
  gap: 90px

@include laptop

  .footer__grid

    justify-content: space-between

@include tablet
  .footer
    padding-top: 120px
  .footer__grid
    align-items: flex-start
    column-gap: 79px
    row-gap: 40px
    grid-template-columns: repeat(3, max-content)

@include mobile
  .footer
    padding-top: 60px
  .footer__container
    padding: 40px 20px
    gap: 20px
    border-radius: 40px 40px 0 0
  .footer__grid
    grid-template-columns: repeat(1, 100%)
    grid-template-rows: repeat(7, auto)
    row-gap: 20px
    text-align: center
</style>