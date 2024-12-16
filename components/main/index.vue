<script setup>
const HistotyCardsData = [
  {
    url: "/",
    price: "1.5 AVG",
    img: "https://img.freepik.com/premium-vector/user-profile-icon-flat-style-member-avatar-vector-illustration-isolated-background-human-permission-sign-business-concept_157943-15752.jpg",
    title: "Danil 'donk' Kryshkovets",
    date: "Team Spirit",
  },
  {
    url: "/",
    price: "1.5 AVG",
    img: "https://img.freepik.com/premium-vector/user-profile-icon-flat-style-member-avatar-vector-illustration-isolated-background-human-permission-sign-business-concept_157943-15752.jpg",
    title: "Danil 'donk' Kryshkovets",
    date: "Team Spirit",
  },
  {
    url: "/",
    price: "1.5 AVG",
    img: "https://img.freepik.com/premium-vector/user-profile-icon-flat-style-member-avatar-vector-illustration-isolated-background-human-permission-sign-business-concept_157943-15752.jpg",
    title: "Danil 'donk' Kryshkovets",
    date: "Team Spirit",
  },
  {
    url: "/",
    price: "1.5 AVG",
    img: "https://img.freepik.com/premium-vector/user-profile-icon-flat-style-member-avatar-vector-illustration-isolated-background-human-permission-sign-business-concept_157943-15752.jpg",
    title: "Danil 'donk' Kryshkovets",
    date: "Team Spirit",
  },
  {
    url: "/",
    price: "1.5 AVG",
    img: "https://img.freepik.com/premium-vector/user-profile-icon-flat-style-member-avatar-vector-illustration-isolated-background-human-permission-sign-business-concept_157943-15752.jpg",
    title: "Danil 'donk' Kryshkovets",
    date: "Team Spirit",
  },
  {
    url: "/",
    price: "1.5 AVG",
    img: "https://img.freepik.com/premium-vector/user-profile-icon-flat-style-member-avatar-vector-illustration-isolated-background-human-permission-sign-business-concept_157943-15752.jpg",
    title: "Danil 'donk' Kryshkovets",
    date: "Team Spirit",
  },
  {
    url: "/",
    price: "1.5 AVG",
    img: "https://img.freepik.com/premium-vector/user-profile-icon-flat-style-member-avatar-vector-illustration-isolated-background-human-permission-sign-business-concept_157943-15752.jpg",
    title: "Danil 'donk' Kryshkovets",
    date: "Team Spirit",
  },
];

const NewsCardsData = [
  {
    url: "/",
    img: "https://cdn.discordapp.com/attachments/1317831213477527663/1317900121064603708/image.png?ex=67605da2&is=675f0c22&hm=d4b3274342cb8d291480f68c85a0ec8bf2b92a8087bf11bd7193d58e165697d5&",
    text: "Игрок Danil 'donk' Kryshkovets установил рекорд по количеству сделанных эйсов за всю историю 'Major'",
    date: "02.09.2024",
    type: "white"
  },
  {
    url: "/",
    img: "https://cdn.discordapp.com/attachments/1317831213477527663/1317900121064603708/image.png?ex=67605da2&is=675f0c22&hm=d4b3274342cb8d291480f68c85a0ec8bf2b92a8087bf11bd7193d58e165697d5&",
    text: "Игрок Danil 'donk' Kryshkovets установил рекорд по количеству сделанных эйсов за всю историю 'Major'",
    date: "02.09.2024",
    type: "white"
  },
  {
    url: "/",
    img: "https://cdn.discordapp.com/attachments/1317831213477527663/1317900121064603708/image.png?ex=67605da2&is=675f0c22&hm=d4b3274342cb8d291480f68c85a0ec8bf2b92a8087bf11bd7193d58e165697d5&",
    text: "Игрок Danil 'donk' Kryshkovets установил рекорд по количеству сделанных эйсов за всю историю 'Major'",
    date: "02.09.2024",
    type: "white"
  },
  {
    url: "/",
    img: "https://cdn.discordapp.com/attachments/1317831213477527663/1317900121064603708/image.png?ex=67605da2&is=675f0c22&hm=d4b3274342cb8d291480f68c85a0ec8bf2b92a8087bf11bd7193d58e165697d5&",
    text: "Игрок Danil 'donk' Kryshkovets установил рекорд по количеству сделанных эйсов за всю историю 'Major'",
    date: "02.09.2024",
    type: "white"
  },
  {
    url: "/",
    img: "https://cdn.discordapp.com/attachments/1317831213477527663/1317900121064603708/image.png?ex=67605da2&is=675f0c22&hm=d4b3274342cb8d291480f68c85a0ec8bf2b92a8087bf11bd7193d58e165697d5&",
    text: "Игрок Danil 'donk' Kryshkovets установил рекорд по количеству сделанных эйсов за всю историю 'Major'",
    date: "02.09.2024",
    type: "white"
  },
  {
    url: "/",
    img: "https://cdn.discordapp.com/attachments/1317831213477527663/1317900121064603708/image.png?ex=67605da2&is=675f0c22&hm=d4b3274342cb8d291480f68c85a0ec8bf2b92a8087bf11bd7193d58e165697d5&",
    text: "Игрок Danil 'donk' Kryshkovets установил рекорд по количеству сделанных эйсов за всю историю 'Major'",
    date: "02.09.2024",
    type: "white"
  },
  {
    url: "/",
    img: "https://cdn.discordapp.com/attachments/1317831213477527663/1317900121064603708/image.png?ex=67605da2&is=675f0c22&hm=d4b3274342cb8d291480f68c85a0ec8bf2b92a8087bf11bd7193d58e165697d5&",
    text: "Игрок Danil 'donk' Kryshkovets установил рекорд по количеству сделанных эйсов за всю историю 'Major'",
    date: "02.09.2024",
    type: "white"
  },
  {
    url: "/",
    img: "https://cdn.discordapp.com/attachments/1317831213477527663/1317900121064603708/image.png?ex=67605da2&is=675f0c22&hm=d4b3274342cb8d291480f68c85a0ec8bf2b92a8087bf11bd7193d58e165697d5&",
    text: "Игрок Danil 'donk' Kryshkovets установил рекорд по количеству сделанных эйсов за всю историю 'Major'",
    date: "02.09.2024",
    type: "white"
  },
];

const EventCardsData = [
  {
    url: "/",
    img: "https://cdn.discordapp.com/attachments/1317831213477527663/1317831601350250560/DqNjb_U9p.png?ex=67601dd1&is=675ecc51&hm=5277d3f15027dcb9de0bb8cb920cac0f2471cf1a48ef7555cf25b4a061b3c7a4&",
    title: "team Spirit vs Cloud9",
    hashtag: ['#STR', '#team'],
    date: ["09.2024", "21:21"],
  },
  {
    url: "/",
    img: "https://cdn.discordapp.com/attachments/1317831213477527663/1317831601350250560/DqNjb_U9p.png?ex=67601dd1&is=675ecc51&hm=5277d3f15027dcb9de0bb8cb920cac0f2471cf1a48ef7555cf25b4a061b3c7a4&",
    title: "team Spirit vs Cloud9",
    hashtag: ['#STR', '#team'],
    date: ["09.2024", "21:21"],
  },
  {
    url: "/",
    img: "https://cdn.discordapp.com/attachments/1317831213477527663/1317831601350250560/DqNjb_U9p.png?ex=67601dd1&is=675ecc51&hm=5277d3f15027dcb9de0bb8cb920cac0f2471cf1a48ef7555cf25b4a061b3c7a4&",
    title: "team Spirit vs Cloud9",
    hashtag: ['#STR', '#team'],
    date: ["09.2024", "21:21"],
  },
  {
    url: "/",
    img: "https://cdn.discordapp.com/attachments/1317831213477527663/1317831601350250560/DqNjb_U9p.png?ex=67601dd1&is=675ecc51&hm=5277d3f15027dcb9de0bb8cb920cac0f2471cf1a48ef7555cf25b4a061b3c7a4&",
    title: "team Spirit vs Cloud9",
    hashtag: ['#STR', '#team'],
    date: ["09.2024", "21:21"],
  },
  {
    url: "/",
    img: "https://cdn.discordapp.com/attachments/1317831213477527663/1317831601350250560/DqNjb_U9p.png?ex=67601dd1&is=675ecc51&hm=5277d3f15027dcb9de0bb8cb920cac0f2471cf1a48ef7555cf25b4a061b3c7a4&",
    title: "team Spirit vs Cloud9",
    hashtag: ['#STR', '#team'],
    date: ["09.2024", "21:21"],
  },
];

const PartnersCardsData = [
  {
    url: "/",
    img: "https://cdn.discordapp.com/attachments/1317831213477527663/1317831601350250560/DqNjb_U9p.png?ex=67601dd1&is=675ecc51&hm=5277d3f15027dcb9de0bb8cb920cac0f2471cf1a48ef7555cf25b4a061b3c7a4&",
  },
  {
    url: "/",
    img: "https://cdn.discordapp.com/attachments/1317831213477527663/1317831601350250560/DqNjb_U9p.png?ex=67601dd1&is=675ecc51&hm=5277d3f15027dcb9de0bb8cb920cac0f2471cf1a48ef7555cf25b4a061b3c7a4&",
  },
  {
    url: "/",
    img: "https://cdn.discordapp.com/attachments/1317831213477527663/1317831601350250560/DqNjb_U9p.png?ex=67601dd1&is=675ecc51&hm=5277d3f15027dcb9de0bb8cb920cac0f2471cf1a48ef7555cf25b4a061b3c7a4&",
  },
  {
    url: "/",
    img: "https://cdn.discordapp.com/attachments/1317831213477527663/1317831601350250560/DqNjb_U9p.png?ex=67601dd1&is=675ecc51&hm=5277d3f15027dcb9de0bb8cb920cac0f2471cf1a48ef7555cf25b4a061b3c7a4&",
  },
  {
    url: "/",
    img: "https://cdn.discordapp.com/attachments/1317831213477527663/1317831601350250560/DqNjb_U9p.png?ex=67601dd1&is=675ecc51&hm=5277d3f15027dcb9de0bb8cb920cac0f2471cf1a48ef7555cf25b4a061b3c7a4&",
  },
  {
    url: "/",
    img: "https://cdn.discordapp.com/attachments/1317831213477527663/1317831601350250560/DqNjb_U9p.png?ex=67601dd1&is=675ecc51&hm=5277d3f15027dcb9de0bb8cb920cac0f2471cf1a48ef7555cf25b4a061b3c7a4&",
  },
  {
    url: "/",
    img: "https://cdn.discordapp.com/attachments/1317831213477527663/1317831601350250560/DqNjb_U9p.png?ex=67601dd1&is=675ecc51&hm=5277d3f15027dcb9de0bb8cb920cac0f2471cf1a48ef7555cf25b4a061b3c7a4&",
  },
  {
    url: "/",
    img: "https://cdn.discordapp.com/attachments/1317831213477527663/1317831601350250560/DqNjb_U9p.png?ex=67601dd1&is=675ecc51&hm=5277d3f15027dcb9de0bb8cb920cac0f2471cf1a48ef7555cf25b4a061b3c7a4&",
  },
  {
    url: "/",
    img: "https://cdn.discordapp.com/attachments/1317831213477527663/1317831601350250560/DqNjb_U9p.png?ex=67601dd1&is=675ecc51&hm=5277d3f15027dcb9de0bb8cb920cac0f2471cf1a48ef7555cf25b4a061b3c7a4&",
  },
  {
    url: "/",
    img: "https://cdn.discordapp.com/attachments/1317831213477527663/1317831601350250560/DqNjb_U9p.png?ex=67601dd1&is=675ecc51&hm=5277d3f15027dcb9de0bb8cb920cac0f2471cf1a48ef7555cf25b4a061b3c7a4&",
  },
];


const slides = [
  {
    title: 'Игрок "Donk" установил рекорд по количеству сделанных эйсов за турнир'
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
    <section class="welcome-slider__section">
        <MainWelcomeSlider :slides="slides" />
    </section>
    <section class="event__section section">
      <h2 class="event__title title font-h2">Список матчей</h2>
      <div class="event__cards-block">
        <MainCardsEventsCard
          v-for="(card) in EventCardsData"
          :url="card.url"
          :img="card.img"
          :title="card.title"
          :hashtag="card.hashtag"
          :date="card.date"
        />
      </div>
    </section>
    <section class="history-slider__section section">
      <h2 class="history-slider__title title font-h2">Топ игроков турнира</h2>
      <MainHistorySlider :cards="HistotyCardsData"/>
    </section>
    <section>
        
    </section>
    <section class="news-slider__section section">
      <h2 class="news-slider__title title font-h2">Новости</h2>
      <MainNewsSlider :cards="NewsCardsData" />
    </section>
    <section class="partners-slider__section section">
      <h2 class="partners-slider__title title font-h2">Спонсоры</h2>
      <MainPartnersSlider :cards="PartnersCardsData" />
    </section>
</template>
<style lang="sass">
@import "@color"
  
.title
  margin-bottom: 30px

.event__cards-block
  display: grid
  grid-template-columns: repeat(1, 1fr)
  gap: 30px

.section
  background: #000
  border-radius: 30px
  padding: 40px 
  color: $white

</style>