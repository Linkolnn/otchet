<script setup>
import {Swiper, SwiperSlide} from 'swiper/vue';
import 'swiper/css';

const swiper = ref(null);

const onSwiper = (instance) => {
  swiper.value = instance;
};

const next = () => {
  swiper?.value.slideNext()
}

const prev = () => {
  swiper?.value.slidePrev()
}

</script>

<template>
  <div class="footer__swiper-slider">
    <ElementsButton  @click="prev" rotate-icon="true" type="slider">
      <IconArrowCaret filled class="arrow-caret"/>
    </ElementsButton>
    <Swiper class="footer__slider"
            @swiper="onSwiper"
            slides-per-view="auto"
            :breakpoints="{
                '1919': {spaceBetween: 20},
                '1364': {spaceBetween: 18},
                '859': {spaceBetween: 16},
                '365': {spaceBetween: 14},
            }">
      <SwiperSlide class="footer__slider-item" v-for="n in 10">
        <img src="/" class="footer__slider-item-logo">
      </SwiperSlide>
    </Swiper>
    <ElementsButton @click="next" type="slider">
      <IconArrowCaret filled class="arrow-caret"/>
    </ElementsButton>
  </div>
</template>

<style lang="sass">
@import "@color"
@import "@mixin"
.footer__swiper-slider
  width: 100%
  display: flex
  justify-content: center
  align-items: center
  gap: 20px
.footer__slider
  width: 100%

.footer__slider-item
  height: 96px
  padding: 10px
  box-sizing: border-box
  width: 224px
  background: $white
  border-radius: 10px
  border: 1px solid $grey-medium
  cursor: pointer
.footer__slider-item-logo
  object-fit: contain
  height: 100%
  width: 100%

@include laptop
  .footer__slider-item
    width: 210px
    height: 90px

@include tablet
  .footer__swiper-slider
    button
      display: none
  .footer__slider-item
    width: 160px
    height: 72px
    padding: 16px
@include mobile
  .footer__swiper-slider
    margin-top: -20px
  .footer__slider-item
    width: 138px
    height: 60px
    padding: 11px
</style>