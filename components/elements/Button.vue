<script setup>
const props = defineProps([
  "type", // Определяет тип кнопки, возможные значения: text_grey, text_green,text_white, primary, secondary, goBack
  "text",
  "disabled",
  "iconLeft", // Размещает иконку слева от кнопки, True/False
  "rotateIcon" // отзеркаливание иконки
]);

const buttonTypes = {
  primary: "btn_primary",
  secondary: "btn_secondary",
  border: "btn_border",
  back: "btn_back",
  arrow: "btn_arrow",
  play: "btn_play",
  arrow_dark: "btn_arrow-dark",
  section: "btn_section",
  menu: "btn_menu",
  slider: "btn_slider"
};

</script>

<template>
  <button
      :class="[buttonTypes[props.type], { disabled: disabled, 'icons-left': iconLeft, 'icon-rotate': rotateIcon}]"
      class="btn">
    <p :class="type === 'back' ? 'font-button-back' : 'font-button'">{{ text }}</p>
    <slot></slot>
  </button>
</template>

<style lang="sass">
@import "@color"
@import "@mixin"
.icon-rotate
  svg
    transform: rotate(180deg)

.icons-left
  flex-direction: row-reverse

.btn
  cursor: pointer
  display: flex
  height: fit-content
  @include transition
.btn.disabled
  cursor: auto
.btn_primary
  color: $white
  height: 60px
  padding: 20px
  align-items: center
  gap: 10px
  flex-shrink: 0
  box-sizing: border-box
  border-radius: 10px
  background: $white

.btn_primary:active
  background: $white !important

.btn_primary.disabled
  background: $white !important

.btn_menu
  height: 40px
  padding: 10px 15px
  align-items: center
  gap: 10px
  box-sizing: border-box
  border-radius: 20px
  background: $white
.btn_menu:active
  color: $white !important
  background: $white !important
.btn_menu.disabled
  color: $white !important
  background: $white !important
.btn_secondary
  height: 40px
  padding: 0 15px 0 10px
  justify-content: center
  align-items: center
  gap: 10px
  box-sizing: border-box
  background: transparent
  color: $black
  border-radius: 5px
  svg
    width: 20px
    height: 20px
    path
      @include transition
.btn_secondary:active
  background: $white
  color: $white !important
  path[fill]
    fill: $white !important
  path[stroke]
    stroke: $white !important

.btn_border
  width: 20px
  height: 20px
  border-radius: 100%
  border: 3px solid $white
  background: $white
  justify-content: center
  align-items: center
  svg
    height: 0
    width: 0
    transform: rotate(45deg)
    path[fill]
      fill: $white
    path[stroke]
      stroke: $white
.btn_arrow
  border-radius: 100%
  width: 50px
  height: 50px
  align-items: center
  justify-content: center
  border: 2px solid $white
  background: transparent
  svg
    width: 32px
    height: 32px
    transform: rotate(0)
    path[fill]
      fill: $white
    path[stroke]
      stroke: $white

.btn_arrow-dark
  border-radius: 100%
  width: 50px
  height: 50px
  align-items: center
  justify-content: center
  background: $white
  svg
    width: 32px
    height: 32px
    transform: rotate(45deg)
    path[fill]
      fill: $white
    path[stroke]
      stroke: $white

.btn_play
  border-radius: 100%
  width: 60px
  height: 60px
  background: $white
  svg
    width: 60px
    height: 60px
    path
      @include transition
.btn_play.disabled
  background: $white
  path
    fill: $white !important

.btn_section
  border-radius: 100%
  width: 40px
  height: 40px
  background-color: $white
  justify-content: center
  align-items: center
  svg
    width: 24px
    height: 24px
    path
      @include transition

.btn_back
  gap: 10px
  align-items: center
  flex-direction: row-reverse
  color: $white
  background: transparent
  svg
    @include transition
    min-width: 40px
    height: 40px
    padding: 12px
    box-sizing: border-box
    background-color: $white
    border-radius: 100%
    path
      @include transition
      width: 16px
      height: 16px

.btn_back:active
  color: $white !important
  svg
    background: $white
    outline: none !important
    path
      stroke: $white

.btn_slider
  border-radius: 100%
  width: 60px
  height: 60px
  align-items: center
  justify-content: center
  border: 2px solid $white
  background: transparent
  svg
    width: 24px
    height: 24px
    path
      stroke: $white

@include hover
  .btn_primary:hover
    background: $white
  .btn_menu:hover
    background: $white
    color: $white
  .btn_secondary:hover
    color: $white
    svg
      path[stroke]
        stroke: $white
      path[fill]
        fill: $white
  .btn_border:hover
    width: 60px
    height: 60px
    svg
      transform: rotate(0)
      height: 32px
      width: 32px
  .btn_arrow:hover
    border: 2px solid $white
    background: $white
    svg
      transform: rotate(45deg)
      path[fill]
        fill: $white
      path[stroke]
        stroke: $white

  .btn_arrow-dark:hover
    svg
      transform: rotate(0)
  .btn_play:hover
    svg
      path
        fill: $white
  .btn_section:hover
    background-color: $white
    svg
      path
        stroke: $white
  .btn_back:hover
    background: $white
    color: $black
    svg
      outline: 1px solid $white
  .btn_slider:hover
    background: #821bff
    border: 2px solid #821bff
    path
      stroke: $white
@include mobile
  .btn_border
    width: 20px
    height: 20px
    border: 2px solid $white
    svg
      width: 15px
      height: 15px
      transform: rotate(0)
  .btn_section
    width: 24px
    height: 24px
    svg
      width: 14px
      height: 14px
</style>