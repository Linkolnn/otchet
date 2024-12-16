<script setup>
defineProps({
    secondary: {
        type: Boolean,
        default: false,
    },
    state: {
        type: String,
        default: 'default',
    },
    iconPosition: {
        type: String,
        default: '',
    },
});
</script>

<template>
    <button :class="['btn-primary', {'btn-secondary': secondary}, state]">
        <span class="icon" v-if="iconPosition === 'left'">
            <slot class="icon" name="icon"></slot>
        </span>
        <p class="font-button font-text_medium">
            <slot name="text"></slot>
        </p>
        <span class="icon" v-if="iconPosition === 'right'">
            <slot class="icon" name="icon"></slot>
        </span>
    </button>
</template>

<style lang="sass">
@import "@fonts"
@import "@color"

.btn-primary
    max-width: 129px 
    
    cursor: pointer
    border-radius: 10px
    background-color: $orange-bright
    display: flex
    align-items: center
    gap: 10px
    padding: 20px
    color: $white
    transition: 0.5s
    path[fill]
        fill: $white
    path[stroke]
        fill: none
        stroke: $white

    &:hover
        path[fill]
            fill: $white
        path[stroke]
            fill: none
            stroke: $white
        background-color: $red

    &:active
        path[fill]
            fill: $white
        path[stroke]
            fill: none
            stroke: $white
        background-color: $grey-dark

.disabled 
    background-color: $grey
    
    &:hover
        background-color: $grey

.btn-secondary
    max-width: 114px
    cursor: pointer
    border-radius: 10px
    color: $black
    background-color: transparent
    display: flex
    align-items: center
    gap: 10px
    padding: 10px 12px
    transition: 0.5s
    path[fill]
        fill: $black
    path[stroke]
        fill: none
        stroke: $black

    &:hover
        path[fill]
            fill: $red
        path[stroke]
            fill: none
            stroke: $red
        background-color: transparent
        color: $red

    &:active
        path[fill]
            fill: $white
        path[stroke]
            fill: none
            stroke: $white
        background-color: $red
        color: $white


.disabled 
    color: $grey
    
    &:hover
        color: $grey

.icon
    *
        height: 24px
        width: 24px
</style>