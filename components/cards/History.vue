<script setup>
const props = defineProps([
    "url",
    "price",
    "img",
    "title",
    "date",
]);
// span -> p
// history-card in name of classes
// alt
// fonts import and usage
// NuxtLink
</script>

<template>
    <NuxtLink :to="url" class="history-card">
        <p class="history-card__text-price font-text_accent">{{ price }}</p>
        <img class="history-card__img" :src="img" :alt="title">
        <div class="history-card__content">
            <h4 class="history-card__title font-h4">{{ title }}</h4>
            <IconArrowCard class="history-card__icon" filled />
        </div>
        <p class="history-card__text-date font-text_large">{{ date }}</p>
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
    
    border-bottom: 2px solid #821bff
    background: #000
    display: flex
    flex-direction: column
    gap: 20px
    padding: 30px
    cursor: pointer
    @include transition
    *
        color: $white

.history-card__text-price
    box-sizing: border-box 
    position: absolute
    //z-index
    z-index: 1
    top: 0
    left: 0
    background: #000
    padding: 20px     
    border-radius: 15px
    @include transition

.history-card__img
    object-fit: cover
    object-position: center
    // position?
    width: 100%
    height: 221px
    border-radius: 20px

.history-card__text-price:before
    position: absolute
    top: 30px
    right: -16px
    width: 16px
    height: 16px
    z-index: 1
    content: ""
    background: no-repeat url("/assets/icons/RoundedCornerForPictures.svg")

.history-card__text-price:after
    position: absolute
    top: 64px
    left: 30px
    width: 16px
    height: 16px
    z-index: 1
    content: ""
    background: no-repeat url("/assets/icons/RoundedCornerForPictures.svg")

.history-card__content
    //flex
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

.history-card__icon
    width: 40px
    height: 40px
    path[fill]
        fill: #821bff
    path[stroke]
        stroke: #821bff
    @include transition

.history-card__text-date
    color: $white

// transition
@include hover
    .history-card:hover 
        .history-card__title
            color: #821bff
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
            color: #821bff

@include mobile
    .history-card 
        height: 400px
        width: 280px
        padding: 20px

    .history-card:active
        .history-card__text-price 
            color: $red
    
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