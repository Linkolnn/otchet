<script setup>
const props = defineProps({
    url: {
        type: String,
        default: ''
    },
    img: {
        type: String,
        default: ''
    },
    title: {
        type: String,
        default: ''
    },
    hashtag: {
        type: Array,
        default: ''
    },
    date: {
        type: Array,
        default: ''   
    },
});
// transition, hover
// h3 in h3
// p in p
// NuxtLink
// hashtag always array
// no-main
</script>
<template>
    <NuxtLink :to="url" :class="{'no-main': img}" class="event-card">
        <img class="event-card__img" v-if="img" :src="img" :alt="title">
        <div class="event-card__content" :class="{'no-main': img}">
            <h3 class="font-h3 event-card__title">
                {{ title }}
            </h3>
            <div class="event-card__date-icon-block" :class="{'no-main': img}">
                <div class="event-card__date-block">
                    <p class="font-text_caps event-card__date"
                        v-for="(dateLine, index) 
                        in date" 
                        :key="index">
                        {{ dateLine }}
                    </p>
                </div>
            </div>
            <div class="event-card__text-block" :class="{'no-main': img}">
                <div class="event-card__hashtag-block">
                    <p class="event-card__hashtag"
                        v-for="(hashtagLine, index) 
                        in hashtag" 
                        :key="index">
                        {{ hashtagLine }}
                    </p>
                </div>
                <NuxtLink class="event-card__icon-link" to="https://calendar.google.com/calendar/u/0/r?pli=1">
                    <IconCalendarPlus class="event-card__icon" />
                </NuxtLink>
            </div>
        </div>
    </NuxtLink>
</template>
<style lang="sass">
@import "@mixin"
@import "@color"

.event-card
    justify-content: center
    text-decoration: none
    border-bottom: 2px solid $purple
    display: flex
    flex-direction: row
    gap: 60px
    padding: 20px
    background: $black
    @include transition

.event-card__img
    border-radius: 10px
    width: 300px
    height: 163px

.event-card__content
    display: flex
    flex-direction: column
    justify-content: space-between
    align-items: flex-start
    gap: 60px

.event-card__title
    width: auto
    color: $white
    @include transition

.event-card__text-block
    width: 100%
    display: flex
    flex-direction: row
    justify-content: space-between
    gap: 60px

.event-card__hashtag-block
    display: flex
    justify-content: center
    flex-direction: row
    gap: 10px

.event-card__hashtag
    width: 280px
    color: $white

.event-card__date-icon-block
    width: 100%
    display: flex
    flex-direction: row
    justify-content: center
    align-items: center
    gap: 60px

.event-card__date-block
    display: flex
    justify-content: center
    align-items: center
    flex-direction: column-reverse
    gap: 10px

.event-card__date
    text-align: center
    color: $white
    width: 130px

.event-card__icon-link
    svg
        path[fill]
          fill: $white

.event-card__icon
    width: 32px
    height: 32px

.no-main
    gap: 20px
    .event-card__hashtag
        width: auto
    .event-card__date
        width: 100px
    .event-card__title
        width: auto

@include hover
    .event-card:hover 
        background: #281341
        .event-card__title
            color: $purple



@include tablet
    .event-card
        padding: 10px 0px
        gap: 20px

    .event-card:activer 
        .event-card__title
            color: $purple

    .event-card__img
        width: 214px
        height: 152px
    .event-card__content
        gap: 30px
    .event-card__title
        width: 474px
    .event-card__text-block
        gap: 30px
    .event-card__hashtag
        width: 122px
    .event-card__date-icon-block
        gap: 30px
    .event-card__date
        width: 62px

    .no-main
        gap: 20px
        .event-card__content
            flex-direction: column
            gap: 20px
        .event-card__title
            width: 494px
        .event-card__text-block
            flex-direction: row
            gap: 20px
        .event-card__hashtag
            width: 191px
        .event-card__date-icon-block
            flex-direction: row
            gap: 20px
            padding-right: 40px
        .event-card__date
            width: 191px

@include mobile
    .event-card
        padding: 10px 0px
        flex-direction: column
        width: 325px

    .event-card__img
        width: 100%
        height: 182px
    .event-card__content
        align-items: baseline
        flex-direction: column
        gap: 15px
    .event-card__title
        width: 325px
    .event-card__text-block
        width: 100%
        flex-direction: column
        gap: 15px
    .event-card__hashtag-block
        flex-direction: row
        width: auto
        justify-content: start
    .event-card__date-icon-block
        gap: 15px
        padding: 0px
        justify-content: space-between
    .event-card__date-block
        flex-direction: row
        width: auto
        justify-content: start

    .no-main
        gap: 10px
        flex-direction: column
        .event-card__content
            gap: 10px
        .event-card__title
            width: 325px
        .event-card__text-block
            flex-direction: column
            gap: 10px
        .event-card__hashtag
            width: 122px
        .event-card__date-icon-block
            padding: 0
            gap: 10px
        .event-card__date
            width: 62px
</style>