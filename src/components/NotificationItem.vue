<script>
export default {
  name: 'NotificationItem',
  props: {
    notification: {
      type: Object,
      required: true
    }
  }
}
</script>

<template>
<div class="item">
  <span class="item__title">
    {{ notification.title }}
  </span>
  <span class="item__detail">
    {{ notification.detail }}
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
}
</style>
