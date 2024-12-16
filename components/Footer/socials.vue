<script setup lang="ts">

</script>

<template>
  <div class="footer-socials">
    <div class="footer__menu">
      <ul class="footer__list">
        <li class="footer__items">
          <NuxtLink class="footer__items-link font-text_medium" to="/">Список матчей</NuxtLink>
        </li>
        <li class="footer__items">
          <NuxtLink class="footer__items-link font-text_medium" to="/">Топ игроков турнира</NuxtLink>
        </li>
        <li class="footer__items">
          <NuxtLink class="footer__items-link font-text_medium" to="/">Новости</NuxtLink>
        </li>
        <li class="footer__items">
          <NuxtLink class="footer__items-link font-text_medium" to="/">Спонсоры</NuxtLink>
        </li>
      </ul>
    </div>
    <div class="footer__socials-block">
      <ElementsSocial>
        <IconVK filled/>
      </ElementsSocial>
      <ElementsSocial>
        <IconTg filled/>
      </ElementsSocial>
    </div>
  </div>
</template>

<style lang="sass">
@import "@color"
@import "@mixin"

.footer__menu
  display: flex
  flex-direction: row
  justify-content: space-between


.footer__list
  display: flex
  flex-direction: row
  align-items: center
  border-radius: 30px 30px 0px 0px 
  background: #000
  gap: 20px

.footer__items
  padding: 5px 10px
  border-radius: 20px
  background: $white
  list-style: none
  @include transition

.footer__items-link
  color: $black
  text-decoration: none

@include hover
  .footer__items:hover
    background: #821bff

.footer-socials
  display: flex
  flex-direction: column
  gap: 40px
  align-self: center

.footer__socials-block
  display: flex
  gap: 20px
  flex-direction: row
  justify-content: end

@include tablet
  .footer-socials
    align-self: center
    grid-row: 2 / 2
    grid-column: 3 / 3
    margin-bottom: auto
    gap: 16px
@include mobile
  .footer-socials
    justify-content: center
    grid-area: 3 / 1 / 3 / 1
</style>