<script setup>
const props = defineProps([
  "currentPage", //текущая страница
  "itemsPerPage", // кол-во элементов на странице
  "totalItems", // всего элементов
]);

const emits = defineEmits(['change'])

const {locale} = useI18n()

const onPageChange = async (value) => {
  emits('change', value)
  window.scrollTo({top: 0, behavior: "smooth"})
}

const pagination = computed(() => {
  let totalPages = props.totalItems % props.itemsPerPage === 0
      ? Math.floor(props.totalItems / props.itemsPerPage)
      : Math.floor(props.totalItems / props.itemsPerPage) + 1;
  let isLastPage = props.currentPage === totalPages ? true : false;
  let isFirstPage = props.currentPage === 1 ? true : false;
  return {totalPages, isLastPage, isFirstPage}
})

</script>

<template>
  <div class="pagination">
    <ElementsButton v-if="!pagination.isFirstPage"
                    :icon-left="true"
                    :text="locale === 'ru' ? 'Назад' : 'Previous'"
                    type="secondary"
                    rotate-icon="true"
                    @click="onPageChange(currentPage - 1)">
      <IconArrow filled class="icon-arrow"/>
    </ElementsButton>
    <div class="pagination__list">
      <button
          v-if="currentPage - 2 > 0"
          class="pagination__item font-text_accent desk"
          @click="onPageChange(currentPage - 2)"
      >
        {{ props.currentPage - 2 }}
      </button>
      <button
          v-if="!pagination.isFirstPage"
          class="pagination__item font-text_accent"
          @click="onPageChange(currentPage - 1)"
      >
        {{ currentPage - 1 }}
      </button>
      <button
          class="pagination__item pagination__item_active font-text_accent"
          @click="onPageChange(currentPage)"
      >
        {{ currentPage }}
      </button>
      <button
          v-if="!pagination.isLastPage"
          class="pagination__item font-text_accent"
          @click="onPageChange(currentPage + 1)"
      >
        {{ currentPage + 1 }}
      </button>
      <button
          v-if="currentPage + 2 <= pagination.totalPages"
          class="pagination__item font-text_accent desk"
          @click="onPageChange(currentPage + 2)"
      >
        {{ currentPage + 2 }}
      </button>
    </div>
    <ElementsButton v-if="!pagination.isFirstPage"
                    :text="locale === 'ru' ? 'Вперед' : 'Next'"
                    type="secondary"
                    @click="onPageChange(currentPage - 1)">
      <IconArrow filled class="icon-arrow"/>
    </ElementsButton>
  </div>
</template>

<style lang="sass">
@import "@color"
@import "@mixin"

.pagination
  display: flex
  align-items: center
  width: 706px
  justify-content: space-between

.pagination__list
  display: flex
  gap: 20px

.pagination__item
  display: flex
  min-width: 40px
  height: 40px
  padding: 12px
  flex-direction: column
  justify-content: center
  align-items: center
  gap: 10px
  cursor: pointer
  box-sizing: border-box
  border-radius: 4px
  background: transparent
  @include transition

.pagination__item:active
  background-color: $red
  color: $white

.pagination__link
  color: inherit
  text-decoration: none

.pagination__item_active
  color: $white
  background-color: $orange-bright

@include hover
  .pagination__item:hover
    outline: 1px solid $red


@include laptop
  .pagination
    width: 673px

@include tablet
  .pagination
    width: 728px
@include mobile
  .pagination
    width: 325px
    .btn_secondary
      padding: 0 10px
      p
        display: none
    .desk
      display: none

</style>