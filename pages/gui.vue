<script setup>
const cardsData = [
  {
    url: "/",
    price: "₽ 1,4 млрд",
    img: "https://images.unsplash.com/photo-1732494644033-fedc311f0442?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Индустриальный парк «Югра»",
    date: "г. Сургут, 2017-2022 гг.",
  },
  {
    url: "/",
    price: "₽ 1,4 млрд",
    img: "https://srv.carbonads.net/static/30242/4b723271609d12c16fec10ddea2ce78e9bba0517",
    title: "Бизнес-центр «Вектор»",
    date: "г. Москва, 2019-2021 гг.",
  },
  {
    url: "/",
    price: "₽ 1,4 млрд",
    img: "https://images.unsplash.com/photo-1732494644033-fedc311f0442?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Индустриальный парк «Югра»",
    date: "г. Сургут, 2017-2022 гг.",
  },
  {
    url: "/",
    price: "₽ 1,4 млрд",
    img: "https://srv.carbonads.net/static/30242/4b723271609d12c16fec10ddea2ce78e9bba0517",
    title: "Бизнес-центр «Вектор»",
    date: "г. Москва, 2019-2021 гг.",
  },
  {
    url: "/",
    price: "₽ 1,4 млрд",
    img: "https://images.unsplash.com/photo-1732494644033-fedc311f0442?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Индустриальный парк «Югра»",
    date: "г. Сургут, 2017-2022 гг.",
  },
  {
    url: "/",
    price: "₽ 1,4 млрд",
    img: "https://srv.carbonads.net/static/30242/4b723271609d12c16fec10ddea2ce78e9bba0517",
    title: "Бизнес-центр «Вектор»",
    date: "г. Москва, 2019-2021 гг.",
  },
  {
    url: "/",
    price: "₽ 1,4 млрд",
    img: "https://images.unsplash.com/photo-1732494644033-fedc311f0442?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Индустриальный парк «Югра»",
    date: "г. Сургут, 2017-2022 гг.",
  },
  {
    url: "/",
    price: "₽ 1,4 млрд",
    img: "https://srv.carbonads.net/static/30242/4b723271609d12c16fec10ddea2ce78e9bba0517",
    title: "Бизнес-центр «Вектор»",
    date: "г. Москва, 2019-2021 гг.",
  },
  {
    url: "/",
    price: "₽ 1,4 млрд",
    img: "https://images.unsplash.com/photo-1732494644033-fedc311f0442?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Индустриальный парк «Югра»",
    date: "г. Сургут, 2017-2022 гг.",
  },
  {
    url: "/",
    price: "₽ 1,4 млрд",
    img: "https://srv.carbonads.net/static/30242/4b723271609d12c16fec10ddea2ce78e9bba0517",
    title: "Бизнес-центр «Вектор»",
    date: "г. Москва, 2019-2021 гг.",
  },
  {
    url: "/",
    price: "₽ 1,4 млрд",
    img: "https://images.unsplash.com/photo-1732494644033-fedc311f0442?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Индустриальный парк «Югра»",
    date: "г. Сургут, 2017-2022 гг.",
  },
  {
    url: "/",
    price: "₽ 1,4 млрд",
    img: "https://srv.carbonads.net/static/30242/4b723271609d12c16fec10ddea2ce78e9bba0517",
    title: "Бизнес-центр «Вектор»",
    date: "г. Москва, 2019-2021 гг.",
  },
  {
    url: "/",
    price: "₽ 1,4 млрд",
    img: "https://images.unsplash.com/photo-1732494644033-fedc311f0442?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Индустриальный парк «Югра»",
    date: "г. Сургут, 2017-2022 гг.",
  },
  {
    url: "/",
    price: "₽ 1,4 млрд",
    img: "https://srv.carbonads.net/static/30242/4b723271609d12c16fec10ddea2ce78e9bba0517",
    title: "Бизнес-центр «Вектор»",
    date: "г. Москва, 2019-2021 гг.",
  },
  {
    url: "/",
    price: "₽ 1,4 млрд",
    img: "https://images.unsplash.com/photo-1732494644033-fedc311f0442?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Индустриальный парк «Югра»",
    date: "г. Сургут, 2017-2022 гг.",
  },
  {
    url: "/",
    price: "₽ 1,4 млрд",
    img: "https://srv.carbonads.net/static/30242/4b723271609d12c16fec10ddea2ce78e9bba0517",
    title: "Бизнес-центр «Вектор»",
    date: "г. Москва, 2019-2021 гг.",
  },
  {
    url: "/",
    price: "₽ 1,4 млрд",
    img: "https://images.unsplash.com/photo-1732494644033-fedc311f0442?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Индустриальный парк «Югра»",
    date: "г. Сургут, 2017-2022 гг.",
  },
  {
    url: "/",
    price: "₽ 1,4 млрд",
    img: "https://srv.carbonads.net/static/30242/4b723271609d12c16fec10ddea2ce78e9bba0517",
    title: "Бизнес-центр «Вектор»",
    date: "г. Москва, 2019-2021 гг.",
  },
  {
    url: "/",
    price: "₽ 1,4 млрд",
    img: "https://images.unsplash.com/photo-1732494644033-fedc311f0442?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Индустриальный парк «Югра»",
    date: "г. Сургут, 2017-2022 гг.",
  },
  {
    url: "/",
    price: "₽ 1,4 млрд",
    img: "https://srv.carbonads.net/static/30242/4b723271609d12c16fec10ddea2ce78e9bba0517",
    title: "Бизнес-центр «Вектор»",
    date: "г. Москва, 2019-2021 гг.",
  },
  {
    url: "/",
    price: "₽ 1,4 млрд",
    img: "https://images.unsplash.com/photo-1732494644033-fedc311f0442?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Индустриальный парк «Югра»",
    date: "г. Сургут, 2017-2022 гг.",
  },
  {
    url: "/",
    price: "₽ 1,4 млрд",
    img: "https://srv.carbonads.net/static/30242/4b723271609d12c16fec10ddea2ce78e9bba0517",
    title: "Бизнес-центр «Вектор»",
    date: "г. Москва, 2019-2021 гг.",
  },
  {
    url: "/",
    price: "₽ 1,4 млрд",
    img: "https://images.unsplash.com/photo-1732494644033-fedc311f0442?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Индустриальный парк «Югра»",
    date: "г. Сургут, 2017-2022 гг.",
  },
  {
    url: "/",
    price: "₽ 1,4 млрд",
    img: "https://srv.carbonads.net/static/30242/4b723271609d12c16fec10ddea2ce78e9bba0517",
    title: "Бизнес-центр «Вектор»",
    date: "г. Москва, 2019-2021 гг.",
  },
];

const slides = [
  {
    title: 'Развитие института государственно-частного партнерства'
  },
  {
    title: 'Международная выставка органических продуктов Biofach China - 2024'
  },
  {
    title: 'Международная выставка органических продуктов Biofach China - 2024'
  },
]

</script>

<template> 
<section class="gui-section">
    <div class="gui-section_column">
        <ElementsBtn state="default" iconPosition="right">
            <template #text>
                Default       
            </template>
            <template #icon>
                <IconArrow/>
            </template>
        </ElementsBtn>
        <ElementsBtn state="default" iconPosition="right" ServicesCardary>
            <template #text>
                Default       
            </template>
            <template #icon>
                <IconArrow/>
            </template>
        </ElementsBtn>
        <ElementsBtn state="default">
            <template #text>
                Default       
            </template>
        </ElementsBtn>
        <ElementsBtn state="default" ServicesCardary>
            <template #text>
                Default       
            </template>
        </ElementsBtn>
    </div>
    <CardsHistory 
        price="₽ 1,4 млрд"
        img="https://images.unsplash.com/photo-1732494644033-fedc311f0442?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Индустриальный парк «Югра»"
        date="г. Сургут, 2017-2022 гг."
        >
    </CardsHistory>
    <MainHistorySlider :cards="cardsData"/>

    <MainCardsServicesCard 
      url="http://localhost:3000/gui"
      type="red" 
      title="одно окно"  
      text="Обучающие материалы, семинары и многое другое"
    />
  <MainCardsServicesCard
      url="http://localhost:3000/gui"
      type="grey"
      title="Справочник инвестора"
  />
  <MainCardsServicesCard
      url="http://localhost:3000/gui"
      type="yellow"
      title="одно окно"
      text="Обучающие материалы, семинары и многое другое"
  />
  <MainCardsServicesCard
      url="http://localhost:3000/gui"
      type="light-grey"
      title="одно окно"
      text="Обучающие материалы, семинары и многое другое"
  />
  <MainCardsServicesCard
      url="http://localhost:3000/gui"
      type="orange"
      title="одно окно"
      text="Обучающие материалы, семинары и многое другое"
  />

    <section class="main-link__section">
      <MainLink text="Центр Сельхозкооперации"/>
      <MainLink text="Центр ГЧП"/>
      <MainLink text="Инвестшкола"/>
      <MainLink text="Арктическая зона"/>
      <MainLink text="Центр туризма"/>
      <MainLink text="Центр Сельхозкооперации"/>
    </section>

    <MainCardsNewsCard 
      url="/"
      img="https://images.unsplash.com/photo-1732494644033-fedc311f0442?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      text=" asdasdasdasdasdasdasdaasdasdasdasdasdasdasdaasdasdasdasdasdasdasdaasdasdasdasdasdasdasda"
      date="2 sentebrya"
      type="grey"
    />
    <MainCardsNewsCard 
      url="/"
      img="https://images.unsplash.com/photo-1732494644033-fedc311f0442?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      text=" asdasdasdasdasdasdasdaasdasdasdasdasdasdasdaasdasdasdasdasdasdasdaasdasdasdasdasdasdasda"
      date="2 sentebrya"
      type="white"
    />

    <MainCardsPartnersCard url="/" img="https://images.unsplash.com/photo-1732494644033-fedc311f0442?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />

    <MainCardsEventsCard 
      url="http://localhost:3000/gui"
      img="https://images.unsplash.com/photo-1732494644033-fedc311f0442?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
      title="Международная промышленная выставка ИННОПРОМ 2024"
      :hashtag="['#Деятельность', '#выставка']"
      :date="['02 - 04', '09. 2024']"
    />

    <MainCardsEventsCard 
      url="http://localhost:3000/gui"
      title="Международная промышленная выставка ИННОПРОМ 2024"
      :hashtag="['#Деятельность', '#выставка']"
      :date="['02 - 04', '09. 2024']"
    />

    <MainWelcomeSlider :slides="slides"/>
</section>
</template>

<style lang="sass">
@import "@color"
@import "@mixin"

.gui-section
    overflow: hidden
    background: #fff
    box-sizing: border-box
    padding: 20px
    display: flex
    flex-direction: column
    gap: 10px 
    justify-content: center 
    align-items: center
    min-height: 90vh

.gui-section_column 
    display: flex
    gap: 10px
    align-items: center

.main-link__section
  display: flex
  justify-content: center
  align-items: flex-start
  align-content: flex-start
  gap: 40px 100px
  flex-wrap: wrap

@include mobile
  .main-link__section
    gap: 20px 
    flex-direction: column

</style>
