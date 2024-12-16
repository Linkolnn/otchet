<script setup>
const props = defineProps(['url', 'type', 'title', 'text']);

// BEM
// fonts
// span -> p
// p in p
// gui
// type cards
// hover
</script>

<template>
    <NuxtLink :to="url" class="services-card" :class="type">
        <div class="services-card__icon-block">
            <IconArrowCard filled class="services-card__icon icon-top"/>
            <p class="font-span_title-card title-top">
                {{ title }}
            </p>
        </div>
        <div class="services-card__text-block">
            <p class="font-span_title-card title-bottom">
                {{ title }}
            </p>
            <p class="font-text_large services-card__text">{{ text }}</p>
            <IconArrowCard filled class="services-card__icon icon-bottom"/>
        </div>
    </NuxtLink>
</template>

<style lang="sass">
@import "@color"
@import "@mixin"
.services-card
    flex-shrink: 0
    text-decoration: none
    box-sizing: border-box
    padding: 30px
    height: 488px
    width: 394px
    border-radius: 30px
    display: flex
    flex-direction: column
    justify-content: space-between
    @include transition
    *
        font-family: 'Source-Sans-3', sans-serif
        text-decoration: none
        color: $white
        path[fill]
            fill: $white
        path[stroke]
            stroke: $white
        @include transition

.services-card.grey
    background: $grey-dark
    .icon-top
        display: block
    .title-top
        display: none
    .title-bottom
        display: block
    .icon-bottom
        display: none
    .services-card__text
        display: none


.services-card.orange
        background: $orange-bright
        .icon-top
            display: block
        .title-top
            display: none
        .title-bottom
            display: block
        .icon-bottom
            display: none

.services-card.yellow
        background: $orange-pastel
        .icon-top
            display: block
        .title-top
            display: none
        .title-bottom
            display: block
        .icon-bottom
            display: none
        *
            color: $black
            path[fill]
                fill: $black
            path[stroke]
                stroke: $black

.services-card.light-grey
        background: $grey-light
        .icon-top
            display: none
        .title-top
            display: block
        .title-bottom
            display: none
        .icon-bottom
            display: block
        *
            color: $black
            path[fill]
                fill: $black
            path[stroke]
                stroke: $black
                
        .services-card__icon-block
            justify-content: start

        .services-card__text-block
            flex-direction: row
            padding-right: 0px

.services-card.red
        background: $red
        .icon-top
            display: none
        .title-top
            display: block
        .title-bottom
            display: none
        .icon-bottom
            display: block

        .services-card__icon-block
            justify-content: start

        .services-card__text-block
            flex-direction: row
            padding-right: 0px


//direction
.services-card__icon-block
    display: flex
    flex-direction: row
    justify-content: flex-end
//width
.services-card__icon
    flex-shrink: 0
    width: 84px
    height: 84px
    svg
        width: 84px
        height: 84px

.services-card__text-block
    display: flex
    padding-right: 40px
    justify-content: start
    flex-direction: column
    gap: 40px
    //???
.services-card__text
    width: 100%

//duplicate styles > *



// hover transform
@include hover
    .services-card:hover
        transform: scale(1.05)
        *
            color: $black
            path[fill]
                fill: $black
            path[stroke]
                stroke: $black

    .services-card.grey:hover
        *
            color: $orange-pastel
            path[fill]
                fill: $orange-pastel
            path[stroke]
                stroke: $orange-pastel

    .services-card.light-grey:hover
        *
            color: $red
            path[fill]
                fill: $red
            path[stroke]
                stroke: $red

@include laptop
    .services-card
        height: 468px
        width: 368px

@include tablet 
    .services-card
        width: 375px
        height: 325px

    .services-card.grey
        .icon-top
            display: block
        .title-top
            display: none
        .title-bottom
            display: block
        .icon-bottom
            display: none


    .services-card.orange
            .icon-top
                display: block
            .title-top
                display: none
            .title-bottom
                display: block
            .icon-bottom
                display: none

    .services-card.yellow
            .icon-top
                display: block
            .title-top
                display: none
            .title-bottom
                display: block
            .icon-bottom
                display: none

    .services-card.light-grey
            .icon-top
                display: block
            .title-top
                display: none
            .title-bottom
                display: block
            .icon-bottom
                display: none
                    
            .services-card__icon-block
                justify-content: end

            .services-card__text-block
                flex-direction: column

    .services-card.red
            .icon-top
                display: block
            .title-top
                display: none
            .title-bottom
                display: block
            .icon-bottom
                display: none

            .services-card__icon-block
                justify-content: end

            .services-card__text-block
                flex-direction: column

    .services-card__text-block
        padding-right: 0px
        gap: 20px

    .services-card:active
        *
            color: $black
            path[fill]
                fill: $black
            path[stroke]
                stroke: $black
    
    .services-card.grey:active
        *
            color: $orange-pastel
            path[fill]
                fill: $orange-pastel
            path[stroke]
                stroke: $orange-pastel

    .services-card.light-grey:active
        *
            color: $red
            path[fill]
                fill: $red
            path[stroke]
                stroke: $red

@include mobile
    .services-card
        border-radius: 20px
        padding: 20px
        width: 325px
        height: auto
        gap: 20px

    .services-card.grey
            .icon-top
                display: block
            .title-top
                display: block
            .title-bottom
                display: none
            .icon-bottom
                display: none
            .services-card__text-block
                display: none


    .services-card.orange
            .icon-top
                display: block
            .title-top
                display: block
            .title-bottom
                display: none
            .icon-bottom
                display: none

    .services-card.yellow
            .icon-top
                display: block
            .title-top
                display: block
            .title-bottom
                display: none
            .icon-bottom
                display: none

    .services-card.light-grey
            .icon-top
                display: block
            .title-top
                display: block
            .title-bottom
                display: none
            .icon-bottom
                display: none
            .services-card__icon-block
                justify-content: space-between

    .services-card.red
            .icon-top
                display: block
            .title-top
                display: block
            .title-bottom
                display: none
            .icon-bottom
                display: none
            .services-card__icon-block
                justify-content: space-between


    .services-card__text-block
        gap: 20px
        flex-direction: column

    .services-card__icon-block
        justify-content: space-between
        align-items: flex-end
        flex-direction: row-reverse

    .services-card__icon
        width: 56px
        height: 56px

    .services-card__text-block
        flex-direction: column
</style>
