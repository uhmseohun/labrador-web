<script>
import DeviceItem from '@/components/DeviceItem.vue'

export default {
  name: 'Device',
  data () {
    return {
      devices: []
    }
  },
  components: { DeviceItem },
  created () {
    this.$api.get('/device')
      .then(r => { this.devices = r.data })
      .catch(e => this.$swal('에러!', e.response.data.message, 'error'))
  }
}
</script>

<template>
<div class="device">
  <h1 class="device__title">
    디바이스
  </h1>
  <router-link to="/add/device">
    <span class="device__add">
        추가하기
    </span>
  </router-link>
  <device-item
    :key="`device-${i}`"
    v-for="(device, i) in devices"
    class="device__item"
    :device="device"
  />
</div>
</template>

<style lang="scss" scoped>
.device {
  &__title {
    display: inline;
  }
  &__add {
    color: rgb(100, 100, 100);
  }
  &__item {
    margin-top: 10px;
    &:first-of-type {
      margin-top: 1rem;
    }
  }
}
</style>
