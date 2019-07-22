<script>
import { format } from 'date-fns'

export default {
  name: 'TimelineItem',
  props: {
    event: {
      type: Object,
      required: true
    }
  },
  filters: {
    formatTime (date) {
      return format(date, 'DD일 hh시 mm분')
    }
  }
}
</script>

<template>
<div class="item">
  <span class="item__title">
    {{ event.title }}
  </span>
  <span class="item__detail">
    {{ event.detail }},
    {{ event.time | formatTime }}
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
