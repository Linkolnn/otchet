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
                <IconArrowCard class="news-card__btn arrow-card" filled/>
            </div>
        </div>
    </NuxtLink>
</template>
<style lang="sass">
@import "@mixin"
@import "@color"

.news-card
    overflow: hidden
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
    @include transition

.news-card__text-block
    border: 2px solid $purple
    // border-left: none
    display: flex
    flex-direction: column
    color: $white
    gap: 15px
    margin-top: -20px 
    border-radius: 30px
    position: relative
    z-index: 1
    padding: 20px
    background: $black

// 0px


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
    width: 60px
    height: 60px
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
    color: $white
    align-items: center
    gap: 10px

.news-card__date-icon
    width: 24px
    height: 24px
    path[fill]
        fill: $white

@include hover
    .news-card:hover
        .news-card__img
            transform: scale(1.1)
        .news-card__btn           
            transform: rotate(45deg)
            path[fill]
              fill: $purple
            path[stroke]
              stroke: $purple
        .news-card__text
            color: $purple

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