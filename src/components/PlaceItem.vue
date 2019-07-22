<script>
export default {
  name: 'PlaceItem',
  props: {
    place: {
      type: Object,
      required: true
    }
  }
}
</script>

<template>
<div class="item">
  <span class="item__title">
    {{ place.name }}
  </span>
  <span class="item__detail">
    {{ place.desc.join(', ') }}
  </span>
</div>
</template>

<style lang="scss" scoped>
.item {
  &__title {
    display: block;
    font-size: 1.3rem;
  }
  &__detail {
    color: rgb(100, 100, 100);
    line-height: 2rem;
  }
  &__time {
    color: rgb(100, 100, 100);
    line-height: 2rem;
    float: right;
  }
  &__money {
    color: rgb(242, 156, 69);
    float: right;
  }
}
</style>
