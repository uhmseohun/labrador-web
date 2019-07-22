<script>
import PlaceItem from '@/components/PlaceItem.vue'

export default {
  name: 'Place',
  components: { PlaceItem },
  data () {
    return {
      places: []
    }
  },
  created () {
    this.$api.get('/place')
      .then(r => { this.places = r.data })
      .catch(e => this.$swal('에러!', e.response.data.message, 'error'))
  }
}
</script>

<template>
<div class="place">
  <h1 class="place__title">장소</h1>
  <place-item
    :key="`place-${i}`"
    v-for="(place, i) in places"
    class="place__item"
    :place="place"
  />
</div>
</template>

<style lang="scss" scoped>
.place {
  &__item {
    &:not(:first-child) {
      margin-top: 10px;
    }
  }
}
</style>
