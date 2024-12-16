<script setup>
const { locale } = useI18n()
const router = useRouter()
const props = defineProps([
  'error'
])


function goBack() {
  if (window?.history.state.back === null) {
    router.push('/')
  } else {
    window?.history.back()
  }
}


</script>

<template>
  <div v-if="error.statusCode === 404" class="error">

  </div>
</template>

<style lang="sass">
@import "@/const/color"
@import "@/const/mixin"


</style>