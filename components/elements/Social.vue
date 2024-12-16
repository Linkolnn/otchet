<script setup>

</script>

<template>
  <NuxtLinkLocale :to="'/'" class="social">
    <slot/>
  </NuxtLinkLocale>
</template>

<style lang="sass">
@import "@color"
@import "@mixin"
.social
  background: $white
  width: 50px
  height: 50px
  border-radius: 100%
  display: flex
  justify-content: center
  align-items: center
  cursor: pointer
  svg
    width: 24px
    height: 24px
    path
      @include transition
@include hover


@include tablet
  .social
    width: 40px
    height: 40px
    svg
      width: 18px
      height: 18px
</style>