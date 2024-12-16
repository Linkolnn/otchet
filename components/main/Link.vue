<script setup>
const props = defineProps(['text', 'url']);
// url in props
// transition
</script>
<template>
    <NuxtLink class="main-link__nuxt-link" :to="url">
        <span class="font-span_center">{{ text }}</span>
        <div class="main-link__btn-block">
            <ElementsButton class="main-link__btn" type="border">
                <IconArrowCard filled class="arrow-card"/>
            </ElementsButton>
        </div>
    </NuxtLink>
</template>
<style lang="sass">
@import "@color"
@import "@mixin"

.main-link__nuxt-link
    display: flex
    align-items: center
    gap: 20px
    text-decoration: none
    color: $black
    @include transition

.main-link__btn-block
    display: flex
    align-items: center
    width: 60px
    height: 60px

@include hover    
    .main-link__nuxt-link:hover
        .font-span_center
            color: $orange-bright
        .main-link__btn
            &.btn_border
                width: 60px
                height: 60px
                svg
                  transform: rotate(0)
                  height: 32px
                  width: 32px

@include mobile
    .main-link__nuxt-link
        gap: 10px
        flex-direction: row-reverse

    .main-link__btn-block
        width: auto
        height: auto

</style>
