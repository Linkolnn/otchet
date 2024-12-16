<script setup>
const props = defineProps([
    "url",
    "img",
    "text",
    "date",
    "type",
])
// ???
// alt
// svg
// sizes in adaptive
// NuxtLink
// span to p
</script>
<template>
    <NuxtLink :to="url" class="news-card">
        <img class="news-card__img" :src="img" :alt="text">
        <div class="news-card__text-block" :class="type">
            <p class="news-card__text font-text_extra-large">{{ text }}</p>
            <div class="news-card__date-btn-block">
                <div class="news-card__date-block">
                    <IconCalendar class="news-card__date-icon" filled/>
                    <p class="news-card__date font-text_caps">{{ date }}</p>
                </div>
                <ElementsButton class="news-card__btn" type="arrow">
                  <IconArrowCard filled class="arrow-card"/>
                </ElementsButton>
            </div>
        </div>
    </NuxtLink>
</template>
<style lang="sass">
@import "@mixin"
@import "@color"

.news-card
    
    text-decoration: none
    border-radius: 30px
    display: flex
    flex-direction: column
    width: 394px
    height: 478px

// size
.news-card__img
    width: 394px
    height: 220px
    object-fit: cover
    object-position: center
    border-radius: 30px 30px 0px 0px 

.news-card__text-block
    border: 2px solid #821bff
    // border-left: none
    display: flex
    flex-direction: column
    color: $white
    gap: 20px
    margin-top: -20px 
    border-radius: 0px 30px 30px 30px
    position: relative
    z-index: 1

.news-card__text-block.white 
        padding: 20px
        background: #000
// 0px
.news-card__text-block.grey
        padding: 40px 40px 20px 0px
        background: $grey-light

.news-card__text-block::before
    position: absolute
    top: -30px
    left: -2px
    width: 30px
    height: 30px
    z-index: 1 
    content: ""
    border-left: 2px solid #821bff
    filter: drop-shadow(1px -2px 0px #821bff)
    background: no-repeat url("/assets/icons/MainRoundedCornerForPictures.svg")

.news-card__text
    white-space: normal
    overflow-wrap: break-word 
    word-wrap: break-word     
    text-overflow: ellipsis
    display: -webkit-box
    -webkit-line-clamp: 4
    -webkit-box-orient: vertical
    overflow: hidden  
    color: $white
    height: auto
    @include transition

.news-card__btn
    @include transition

.news-card__date-btn-block
    display: flex
    flex-direction: row
    justify-content: space-between
    align-items: center
// flex
.news-card__date-block
    display: flex
    flex-direction: row
    color: $grey-medium
    align-items: center
    gap: 10px

.news-card__date-icon
    width: 24px
    height: 24px
    path[fill]
        fill: $grey-medium

@include hover
    .news-card:hover
        .news-card__btn
            border: 2px solid #821bff
            background: #821bff
            svg
              transform: rotate(45deg)
              path[fill]
                fill: $white
              path[stroke]
                stroke: $white
        .news-card__text
            color: #821bff

@include laptop
    .news-card
        width: 333px
        height: 444px

    .news-card__img
        width: 333px
        height: 210px

@include tablet
    .news-card
        width: 375px
        height: 410px

    .news-card__img
        width: 375px
        height: 210px
        
    .news-card__text-block.white
        padding: 40px 20px 20px 20px

    .news-card__text-block.grey
        padding: 40px 20px 20px 0px    

    .news-card__text
        height: 100px
    

@include mobile
    .news-card
        width: 280px
        height: 326px

    .news-card__img
        width: 280px
        height: 157px
        
    .news-card__text-block.white
        padding: 20px

    .news-card__date-btn-block
        width: 240px     
        
    .news-card__text-block.grey
        padding: 20px 20px 20px 0

    .news-card__date-btn-block
        width: 240px

    .news-card__text
        height: 88px

    
</style>