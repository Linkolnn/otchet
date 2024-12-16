<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const props = defineProps({
  slides: {
    type: Array,
    required: true,
  },
});

const 
    swiperRef = ref(null),
    currentSlide = ref(0),
    totalSlides = ref(0),
    showPrev = ref(false),
    showNext = ref(true);

const breakpoints = {
    '1919': { spaceBetween: 40 },
    '1364': { spaceBetween: 30 },
    '859': { spaceBetween: 30 },
    '365': { spaceBetween: 20 },
};

const onSwiper = (swiperInstance) => {
  swiperRef.value = swiperInstance;
  totalSlides.value = swiperInstance.slides.length;
  updateButtonsState();
};

const onSlideChange = () => {
  if (swiperRef.value) {
    updateButtonsState();
  }
};

const updateButtonsState = () => {
  if (swiperRef.value) {
    currentSlide.value = swiperRef.value.activeIndex + 1;
    showPrev.value = !swiperRef.value.isBeginning;
    showNext.value = !swiperRef.value.isEnd;
  }
};

const next = () => {
  swiperRef.value?.slideNext();
  updateButtonsState();
};

const prev = () => {
  swiperRef.value?.slidePrev();
  updateButtonsState();
};
</script>

<template>
  <div class="welcome-slider">
    <Swiper
        class="welcome-slider__content"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
        :modules="[Navigation]"
        slides-per-view="1"
        :breakpoints="breakpoints"
    >
      <SwiperSlide v-for="(slide, index) in slides" :key="index">
        <img class="welcome-slider__items-img" :src="slide.img" alt="">
        <h1 class="welcome-slider__items font-h1">
            {{ slide.title }}
        </h1>
      </SwiperSlide>
    </Swiper>
    <div class="welcome-slider__btn-counter-block">
        <div class="welcome-slider__btn-block">
            <IconArrowCard 
                class="welcome-slider__btn left"
                :class="{ 'disabled': !showPrev }"
                @click="prev"
                :disabled="!showPrev"
                rotate-icon="true" 
                type="slider"
                filled
            />
            <p class="welcome-slider__counter font-text_extra-large">
                {{ currentSlide }} 
                <span class="welcome-slider__counter-sd font-text_extra-large">
                   / {{ totalSlides }}
                </span>
            </p>
            <IconArrowCard  
                class="welcome-slider__btn right"
                :class="{ 'disabled': !showNext }"
                @click="next"
                :disabled="!showNext"
                type="slider"
                filled
            />
        </div>
    </div>
  </div>
</template>



<style lang="sass">
@import "@mixin"
@import "@color"

.welcome-slider
    border-radius: 0px 0px 30px 0px
    overflow: hidden
    height: 607px
    box-sizing: border-box
    display: flex
    flex-direction: row
    justify-content: end
    flex-direction: column
    position: relative
    width: 100%

.welcome-slider__btn-counter-block
    border-radius: 0px 20px 0px 0px 
    background: $white
    position: relative
    z-index: 1
    bottom: 0px
    left: 0px
    width: 790px
    padding: 55px 60px 20px 60px 
    display: flex
    align-items: center
    gap: 20px

.welcome-slider__btn-counter-block::before
    position: absolute
    top: -26px
    left: 0px
    width: 30px
    height: 30px
    z-index: 1
    content: ""
    background: no-repeat url("/assets/icons/MainRoundedCornerWelcomeSlider.svg")

.welcome-slider__btn-counter-block::after
    position: absolute
    bottom: -4px
    right: -30px
    width: 30px
    height: 30px
    z-index: 1 
    content: ""
    background: no-repeat url("/assets/icons/MainRoundedCornerWelcomeSlider.svg")

.welcome-slider__btn-block
    width: 100%
    display: flex
    align-items: center
    justify-content: space-between
    


.welcome-slider__content
    box-sizing: border-box
    border-radius: 0px 0px 30px 33px
    padding: 0px 0px 0px 60px 
    position: absolute
    background: $black
    height: 100%
    width: 100%

    .swiper-slide
        box-sizing: border-box
        width: fit-content
        display: flex
        gap: 40px

.welcome-slider__items
    width: 902px
    position: relative
    color: $white
    top: 160px

.welcome-slider__items-img
    border: 2px solid $purple
    position: relative
    border-radius: 30px
    top: 80px
    width: 500px
    height: 400px


.welcome-slider__counter-sd
    color: $purple

.welcome-slider__btn
    width: 60px
    height: 60px
    path[fill]
        fill: $purple
    path[stroke]
        stroke: $purple
.left
        transform: rotate(225deg)

.right
        transform: rotate(45deg)

.disabled
    border: none
    pointer-events: none
    path[fill]
        fill: $white
    path[stroke]
        stroke: $white
@include laptop
    .welcome-slider
        height: 606px

    .welcome-slider__items
        position: relative
        top: 150px
        
    .welcome-slider__btn-counter-block
        width: 350px
        padding: 20px  


@include tablet 
    .welcome-slider
        height: 394px

    .welcome-slider__items
        position: relative
        top: 60px
        width: 610px

    .welcome-slider__btn-counter-block
        border-radius: 0px 30px 0px 0px 
        width: 198px
        padding: 20px 60px 0px 60px 


@include mobile
    .welcome-slider__section
        height: 340px

    .welcome-slider__content
        padding: 0px 0px 0px 30px
        
    .welcome-slider__items
        position: relative
        top: 30px
        white-space: normal
        overflow-wrap: break-word 
        word-wrap: break-word     
        text-overflow: ellipsis
        display: -webkit-box
        -webkit-box-orient: vertical
        overflow: hidden  
        width: 269px

    .welcome-slider__btn-counter-block
        border-radius: 0px 40px 0px 0px 
        width: 154px
        padding: 20px 20px 0px 20px 
    
    .welcome-slider__btn
        min-width: 0px
        width: 39px
        height: 39px
</style>