<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';

const props = defineProps({
  cards: {
    type: Array,
    required: true,
  },
}); 

const 
    swiper = ref(null),
    showPrev = ref(false),
    showNext = ref(true), 
    isMobile = ref(window.innerWidth <= 859);

const breakpoints = {
    '1919': { spaceBetween: 40 },
    '1364': { spaceBetween: 30 },
    '859': { spaceBetween: 30 },
    '365': { spaceBetween: 20 },
};

const onSwiper = (instance) => {
    swiper.value = instance;
    updateButtonsState();
};

const updateButtonsState = () => {
    if (swiper.value) {
        showPrev.value = !swiper.value.isBeginning;
        showNext.value = !swiper.value.isEnd;
    }
};

const next = () => {
    swiper?.value.slideNext();
    updateButtonsState();
};

const prev = () => {
    swiper?.value.slidePrev();
    updateButtonsState();
};

onMounted(() => {
    window.addEventListener('resize', () => {
        isMobile.value = window.innerWidth <= 1364;
    });
});

onUnmounted(() => {
    window.removeEventListener('resize', () => {
        isMobile.value = window.innerWidth <= 1364;
    });
});

// slider end
// BEM
// section
</script>

<template>
    <div class="history-slider__block">
        <div class="history-slider__btn-block">
            <ElementsButton 
                v-if="!isMobile || showPrev" 
                class="history-slider__btn-left" 
                @click="prev" 
                rotate-icon="true" 
                type="slider"
            >
                <IconArrowCaret filled class="arrow-caret" />
            </ElementsButton>
            <ElementsButton 
                v-if="!isMobile || showNext" 
                class="history-slider__btn-right" 
                @click="next" 
                type="slider"
            >
                <IconArrowCaret filled class="arrow-caret" />
            </ElementsButton>
        </div>
        <Swiper
            class="history-slider"
            @swiper="onSwiper"
            @slideChange="updateButtonsState"
            :modules="[Navigation]"
            slides-per-view="auto"
            :breakpoints="breakpoints"
        >
            <SwiperSlide class="history-slider__items" v-for="(card, index) in cards" :key="index">
                <CardsHistory
                    :url="card.url"
                    :price="card.price"
                    :img="card.img"
                    :title="card.title"
                    :date="card.date"
                />
            </SwiperSlide>
        </Swiper>
    </div>
</template>

<style lang="sass">
@import "@mixin"

.history-slider__block
    box-sizing: border-box
    display: flex
    position: relative
    width: 100%

.history-slider__btn-block
    box-sizing: border-box
    z-index: 2
    top: 182px
    position: absolute
    width: 100%
    //???// Высота устанавливается только из-за абсолютного позиционирования кнопок
    .history-slider__btn-left,
    .history-slider__btn-right
        position: absolute

    .history-slider__btn-left
        left: 20px // Левая кнопка по умолчанию

    .history-slider__btn-right
        right: 20px 
// flex
.history-slider 
    display: flex
    flex-direction: row
    width: 100%
    padding: 0px 100px

    .swiper-slide
        width: fit-content

@include laptop
    

@include tablet 
    .history-slider__items
        width: 369px

@include mobile
    .history-slider__items
        width: 281px
    
    .history-slider__btn-block
        top: 124px
        padding: 0px

    .history-slider__btn-left,
    .history-slider__btn-right
        width: 40px
        height: 40px

    .history-slider 
        padding: 0px

</style>