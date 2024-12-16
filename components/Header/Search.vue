<script setup>

const { locale } = useI18n()
const localeRoute = useLocaleRoute()
const route = useRoute()
const router= useRouter()

const search = (event) => {
  const inputSearch = event.target.querySelector('input')
  if(inputSearch.value){
    headerStore.isOpen = false
    let route = localeRoute({ path: '/search', query: { search: inputSearch.value}})
    router.push(route.fullPath)
  }
}
const clear = () => {
  const inputSearch = document.querySelector('.search__input')
  inputSearch.value = ''
}

const handleClickOutside = (event) => {
  if (!event.target.closest('.header__icon-search') && !event.target.closest('.search')) {
    searchStore.isOpen = false
  }
}

onMounted(() => {
  document.body.addEventListener('click', handleClickOutside)
})

onBeforeUnmount(() => {
  document.body.removeEventListener('click', handleClickOutside)
})

</script>

<template>
  <form @submit.prevent="search" class="search">
<!--    <IconCloseSmall @click="clear" filled class="search__clear"/>-->
    <input name="search" :value="route.query?.search" class="search__input" :placeholder="locale === 'ru' ? 'Поиск' : 'Search'" type="search">
  </form>

</template>

<style lang="sass">
@import "@color"
.search
  width: 100%
  display: flex
  position: relative
.search__input
  box-sizing: border-box
  border-radius: 15px
  padding: 0 20px
  width: 100%
  height: 50px
.search__input::-webkit-search-cancel-button
  display: none
.search__input:focus
  outline: none

.search__input:not(:placeholder-shown) ~ .search__clear
  display: block
.search__icon
  width: 32px
  height: 32px
  margin-bottom: 0
.search__clear
  width: 20px
  height: 20px
  min-width: 20px
  position: absolute
  right: 100px
  top: 50%
  transform: translate(0, -50%)
  display: none
  cursor: pointer
  g
    stroke: $grey
.search__button
  cursor: pointer
  max-width: 80px
  width: 100%
  border: none
  background-color: $white
  border-top-right-radius: 100px
  border-bottom-right-radius: 100px

</style>