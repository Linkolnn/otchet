<script setup>
import main_page from './pages/main.vue';
</script>

<template>
  <div class="page-main">
    <main_page />
  </div>
</template>

<style lang="sass">
@import "@color"
@import "@mixin"
@import "@global"
@import "@fonts"

.page-main
  background: $white
  padding: 20px 40px 0px 40px
  > :not(:first-child, :last-child)
    margin-bottom: 80px

body, html
  margin: 0
  padding: 0 
</style>