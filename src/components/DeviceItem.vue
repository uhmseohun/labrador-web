<script>
export default {
  name: 'DeviceItem',
  props: {
    device: {
      type: Object,
      required: true
    }
  },
  methods: {
    removeDevice (id) {
      this.$api.delete(`/device/${id}`)
        .then(r => {
          this.$swal('성공!', r.data.message, 'success')
          this.$emit('delete')
        })
        .catch(e => this.$swal('에러!', e.response.data.message, 'error'))
    }
  }
}
</script>

<template>
<div class="item">
  <span class="item__title">
    {{ device.name }}
  </span>
  <span class="item__detail">
    {{ device.desc.join(', ') }}
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
  &__icon {
    height: 1rem;
    fill: black;
  }
}
</style>
