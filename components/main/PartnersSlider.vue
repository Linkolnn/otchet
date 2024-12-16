<script setup>
import {Swiper, SwiperSlide} from 'swiper/vue';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const swiper = ref(null);
const modules = [Autoplay];

const onSwiper = (instance) => {
  swiper.value = instance;
};

const props = defineProps({
  cards: {
    type: Array,
    required: true,
  },
}); 


</script>

<template>
  <div class="footer__swiper-slider">
    <Swiper class="footer__slider"
            @swiper="onSwiper"
            :autoplay="{ 
                delay: 2500,       
                disableOnInteraction: false,     
            }"
            :modules="modules"
            slides-per-view="auto"
            :breakpoints="{
                '1919': {spaceBetween: 20},
                '1364': {spaceBetween: 18},
                '859': {spaceBetween: 16},
                '365': {spaceBetween: 14},
            }">
      <SwiperSlide class="partners__slider-item" v-for="(card, index) in cards" :key="index">
        <MainCardsPartnersCard 
            :url="card.url"
            :img="card.img"
        />
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<style lang="sass">
@import "@color"
@import "@mixin"
.footer__swiper-slider
  width: 100%
  gap: 20px
.footer__slider
  width: 100%

.partners__slider-item
    width: 210px
    height: 90px
    cursor: pointer

.footer__slider-item-logo
  object-fit: contain
  height: 100%
  width: 100%

@include laptop


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