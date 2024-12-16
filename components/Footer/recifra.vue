<script setup>

</script>

<template>
  <NuxtLinkLocale :to="'/'" class="footer__recifra">
    <IconRecifraLogo class="footer__recifra-logo" filled/>
  </NuxtLinkLocale>
</template>

<style lang="sass">
@import "@color"
@import "@mixin"
.footer__recifra.mobile
  display: none
.footer__recifra
  align-self: center

.footer__recifra-logo
  width: 135px
  height: 43px

@include tablet
  .footer__recifra
    align-self: center
    grid-row: 2 / 2
    grid-column: 3 / 3
    margin-top: auto
  .footer__recifra-logo
    width: 115px
    height: 36px

@include mobile
  .footer__recifra
    grid-area: auto
    justify-content: center
    display: flex
  .footer__recifra.desk
    display: none
  .footer__recifra.mobile
    display: block
</style>