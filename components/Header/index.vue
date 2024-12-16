<script setup lang="ts">

</script>

<template>
  <header class="header">
    <NuxtLink to="/" class="header__link-logo">
      <img class="header__logo" src="/assets/LOGO.png" alt="">
    </NuxtLink>
    <nav class="header__menu">
      <IconMainRoundedCornerForPictures class="header__icon"/>
      <ul class="header__list">
        <li class="header__items">
          <NuxtLink class="header__items-link font-text_medium" to="/">Список матчей</NuxtLink>
        </li>
        <li class="header__items">
          <NuxtLink class="header__items-link font-text_medium" to="/">Топ игроков турнира</NuxtLink>
        </li>
        <li class="header__items">
          <NuxtLink class="header__items-link font-text_medium" to="/">Новости</NuxtLink>
        </li>
        <li class="header__items">
          <NuxtLink class="header__items-link font-text_medium" to="/">Спонсоры</NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped lang="sass">
@import "@color"
@import "@mixin"
.header
  display: flex
  flex-direction: row
  justify-content: space-between

.header__link-logo
  position: relative
  padding: 20px 60px 0px 60px
  background: #000
  border-radius: 30px 30px 0px 0px

.header__link-logo::before
  position: absolute
  bottom: -5px
  right: -30px
  width: 30px
  height: 30px
  z-index: 1
  content: ""
  background: no-repeat url("/assets/icons/MainRoundedCornerHeader.svg")

.header__logo
  width: 112px

.header__menu
  display: flex
  flex-direction: row

.header__icon
  align-self: flex-end
  width: 30px
  height: 30px
  transform: rotate(270deg)
  svg
    path[fill]
      fill: $black
    path[stroke]
      stroke: $black 


.header__list
  display: flex
  flex-direction: row
  padding: 15px 25px
  align-items: center
  border-radius: 30px 30px 0px 0px 
  background: #000
  gap: 20px

.header__items
  padding: 5px 10px
  border-radius: 20px
  background: $white
  list-style: none
  @include transition

.header__items-link
  color: $black
  text-decoration: none

@include hover
  .header__items:hover
    background: #821bff
</style>