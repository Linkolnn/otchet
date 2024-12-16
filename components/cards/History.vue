<script setup>
const props = defineProps([
    "url",
    "avg",
    "raiting",
    "impact",
    "img",
    "title",
    "dignity",
    "date",
]);
</script>

<template>
    <NuxtLink :to="url" class="history-card">
        <div class="history-card__statistic-block">
            <p class="history-card__text-price font-text_accent">{{ avg }}</p>
            <p class="history-card__text-price font-text_accent">{{ raiting }}</p>
            <p class="history-card__text-price font-text_accent">{{ impact }}</p>
        </div>
        <img class="history-card__img" :src="img" :alt="title">
        <div class="history-card__content">
            <h4 class="history-card__title font-h4">{{ title }}</h4>
        </div>
        <p class="history-card__text-date font-text_large">{{ date }}</p>
        <div class="history-card__text-icon-block">
            <p class="history-card__text-dignity font-text_large">{{ dignity }}</p>
            <IconArrowCard class="history-card__icon" filled />
        </div>
    </NuxtLink>
</template>
<style lang="sass">
@import "@color"
@import "@mixin"

.history-card
    text-decoration: none
    box-sizing: border-box
    position: relative
    width: 395px
    height: 425px
    padding: 10px
    border-bottom: 2px solid $purple
    background: $black
    display: flex
    flex-direction: column
    gap: 20px
    
    cursor: pointer
    @include transition
    *
        color: $white

.history-card__statistic-block
    box-sizing: border-box
    width: 100%
    display: flex
    align-content: flex-start
    justify-content: space-between
    position: absolute
    z-index: 1
    bottom: 180px
    left: 0

.history-card__text-price
    position: relative
    box-sizing: border-box 
    z-index: 1
    left: 0
    background: $black
    padding: 10px     
    border-radius: 15px
    @include transition

.history-card__img
    object-fit: cover
    object-position: center
    width: 100%
    height: 221px
    border-radius: 20px

.history-card__content
    display: flex
    flex-direction: row
    gap: 20px
    @include transition

.history-card__title
    // width?
    display: -webkit-box
    -webkit-line-clamp: 2
    overflow: hidden
    -webkit-box-orient: vertical
    text-overflow: ellipsis 

.history-card__text-icon-block
    display: flex 
    align-items: center
    justify-content: space-between

.history-card__icon
    flex-shrink: 0
    width: 60px
    height: 60px
    path[fill]
        fill: $purple
    path[stroke]
        stroke: $purple
    @include transition

.history-card__text-date
    color: $white

// transition
@include hover
    .history-card:hover 
        .history-card__title
            color: $purple
        .history-card__icon
            transform: rotate(45deg)
//transition & rotate
// adaptive
@include laptop
    .history-card 
        height: 425px
        width: 368px

@include tablet
    .history-card 
        height: 425px
        width: 375px
        .history-card__icon
            display: none

    .history-card:active
        .history-card__title
            color: $purple

@include mobile
    .history-card 
        height: 400px
        width: 280px
        padding: 20px
    
    .history-card__text-price
        padding: 15px

    .history-card__text-price:before
        top: 20px
        width: 16px
        height: 16px

    .history-card__text-price:after
        top: 54px
        left: 20px
        width: 16px
        height: 16px

    .history-card__img
        height: 200px

</style>