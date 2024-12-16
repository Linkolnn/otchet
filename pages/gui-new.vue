<script setup>

</script>
<template>
  <div class="gui-wrapper">
    <ul class="bulleted-list">
      <li class="bulleted-list__item"><p class="font-text_medium">Участие в проектной деятельности Фонда в роли эксперта/консультанта ИБ.</p></li>
      <li class="bulleted-list__item"><p class="font-text_medium">Участие в проектной деятельности Фонда в роли эксперта/консультанта ИБ.</p></li>
      <li class="bulleted-list__item"><p class="font-text_medium">Участие в проектной деятельности Фонда в роли эксперта/консультанта ИБ.</p></li>
      <li class="bulleted-list__item"><p class="font-text_medium">Участие в проектной деятельности Фонда в роли эксперта/консультанта ИБ.</p></li>
      <li class="bulleted-list__item"><p class="font-text_medium">Участие в проектной деятельности Фонда в роли эксперта/консультанта ИБ.</p></li>
    </ul>
    <ol class="numbered-list">
      <li class="numbered-list__item"><p class="font-text_medium">Демонстрация достижений агропромышленного комплекса регионов Уральского федерального округа (УрФО)</p></li>
      <li class="numbered-list__item"><p class="font-text_medium">Демонстрация достижений агропромышленного комплекса регионов Уральского федерального округа (УрФО)</p></li>
      <li class="numbered-list__item"><p class="font-text_medium">Демонстрация достижений агропромышленного комплекса регионов Уральского федерального округа (УрФО)</p></li>
      <li class="numbered-list__item"><p class="font-text_medium">Демонстрация достижений агропромышленного комплекса регионов Уральского федерального округа (УрФО)</p></li>
      <li class="numbered-list__item"><p class="font-text_medium">Демонстрация достижений агропромышленного комплекса регионов Уральского федерального округа (УрФО)</p></li>
    </ol>
    <a class="text-link font-text_medium" href="#">Ссылка</a>
    <div class="dark-bg" style="background-color: #27282A; height: 35px; margin-top: 5px" >
      <a class="bg-dark text-link font-text_medium" href="#">Ссылка</a>
    </div>
    <ElementsButton type="primary" text="Default"/>
    <ElementsButton type="primary" text="Default" :disabled="true"/>
    <ElementsButton type="border">
      <IconArrowCard filled class="arrow-card"/>
    </ElementsButton>
    <ElementsButton type="arrow">
      <IconArrowCard filled class="arrow-card"/>
    </ElementsButton>
    <ElementsButton type="arrow_dark">
      <IconArrowCard filled class="arrow-card"/>
    </ElementsButton>
    <ElementsButton type="play">
      <IconPlay filled class="play-icon"/>
    </ElementsButton>
    <ElementsButton type="play" :disabled="true">
      <IconPlay filled class="play-icon"/>
    </ElementsButton>
    <ElementsButton type="section">
      <IconArrowCaret filled class="arrow-caret"/>
    </ElementsButton>
    <ElementsButton type="back" text="Назад">
      <IconArrowChevron filled class="arrow-chevron"/>
    </ElementsButton>
    <ElementsButton type="secondary" text="Default">
      <IconArrow filled class="icon-arrow"/>
    </ElementsButton>
    <ElementsButton type="secondary" text="Default" icon-left="true">
      <IconArrow filled class="icon-arrow"/>
    </ElementsButton>
    <ElementsButton type="menu" text="Default"/>
    <ElementsButton type="menu" text="Default" disabled="true"/>
    <ElementsPagination :total-items="21" :items-per-page="5" :current-page="3"/>
    <ElementsButton type="slider">
      <IconArrowCaret filled class="arrow-caret"/>
    </ElementsButton>
    <ElementsButton rotate-icon="true" type="slider">
      <IconArrowCaret filled class="arrow-caret"/>
    </ElementsButton>
  </div>
  <Footer/>
</template>
<style lang="sass">
@import "@color"
@import "@mixin"
.gui-wrapper
  max-width: 1240px
  margin: 0 auto

.bulleted-list
  display: flex
  width: 695px
  padding: 4px 0 20px
  flex-direction: column
  align-items: flex-start
  gap: 20px

.bulleted-list__item
  list-style-type: none
  align-items: flex-start
  align-self: stretch
  display: flex
  gap: 10px

.bulleted-list__item::before
  content: ''
  background-color: $red
  border-radius: 100%
  min-height: 2px
  min-width: 20px
  font-size: 16px
  margin-top: 15px


.numbered-list
  display: flex
  flex-direction: column
  width: 670px
  padding: 10px
  box-sizing: border-box
  align-items: flex-start
  gap: 10px
  list-style-position: inside
  counter-reset: newCounter

.numbered-list__item
  display: flex
  gap: 10px

.numbered-list__item::before
  content: counter(newCounter) "."
  counter-increment: newCounter
  display: block
  color: $red
  font-family: 'Source-Sans-3' , sans-serif
  font-size: 20px
  font-style: normal
  font-weight: 400
  line-height: 160%
  min-width: 15px
  text-align: center

.text-link
  text-decoration: none
  color: $red
  @include transition

.text-link:hover
  color: $red !important
  border-bottom: 1px solid $red
  margin-bottom: -1px

.text-link:visited
  border-bottom: none
  color: $grey

.bg-dark.text-link
  text-decoration: none
  color: $white
  @include transition
  transition-property: color

.bg-dark.text-link:hover
  color: $white !important
  border-bottom: 1px solid $white
  margin-bottom: -1px

.bg-dark.text-link:visited
  border-bottom: none
  color: $grey

@include mobile
  .numbered-list, .bulleted-list
    width: 100%
</style>