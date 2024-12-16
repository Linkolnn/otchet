<script setup>
const props = defineProps(['img', 'url']);
// url & NuxtLink
</script>
<template>
    <NuxtLink :to="url" class="partners-card">
        <img class="partners-card__img" :src="img" alt="">
    </NuxtLink>
</template>
<style lang="sass">
@import "@color"
@import "@mixin"

.partners-card
    display: block
    box-sizing: border-box
    border-radius: 20px
    background: $white
    border: 1px solid $purple
    width: 224px
    height: 96px
    padding: 20px

.partners-card__img
    width: 184px
    height: 56px
    flex: 1 0 0
    object-fit: cover
    object-position: center

@include laptop
    .partners-card
        width: 210px
        height: 90px

    .partners-card__img
        width: 170px
        height: 50px

@include tablet
    .partners-card
        width: 160px
        height: 72px

    .partners-card__img
        width: 120px
        height: 32px

@include mobile
    .partners-card
        border-radius: 10px
        width: 138px
        height: 60px
        padding: 15px

    .partners-card__img
        width: 108px
        height: 30px
</style>