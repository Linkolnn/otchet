<script setup>
</script>

<!--<template>-->
<!--  <div class="page-main">-->
<!--    <main_page />-->
<!--  </div>-->
<!--</template>-->
<!--В апп нужно импортповать NuxtPage, чтобы был роутинг. Здесь также следует разместить шапку и подвал сайта -->
<template>
<!--  вот тут шапка-->
<!--  -->
  <Header/>
  <div class="page-main">
    <NuxtPage/>
  </div>
  <Footer/>
  <!--  вот тут подвал-->
</template>

<style lang="sass">
@import "@color"
@import "@mixin"
@import "@global"
@import "@fonts"

.page-main
  background: $white
  padding: 0 40px
  display: flex
  flex-direction: column
  gap: 50px
  margin-bottom: 50px
  //> :not(:first-child, :last-child)
  //  margin-bottom: 80px

body, html
  margin: 0
  padding: 0 
</style>